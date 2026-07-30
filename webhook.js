/**
 * Backend Payment Processing Infrastructure
 * Securely verifies incoming callback payloads before releasing locked assets
 */
const crypto = require('crypto');

// Target business rules engine constants
const EXPECTED_METADATA = {
    phoneWallet: "0748299501",
    currency: "KES"
};

/**
 * Main Webhook Receiver Express Router endpoint
 */
function handlePaymentWebhook(req, res) {
    const signature = req.headers['x-gateway-signature'];
    const payload = req.body;

    // 1. Security check: Validate data integrity from the provider
    if (!verifyWebhookSignature(JSON.stringify(payload), signature)) {
        console.error('[SECURITY ALERT] Unauthorized webhook payload signature validation failed.');
        return res.status(401).json({ error: 'Unauthorized signature' });
    }

    // 2. Destructure relevant processing fields from payment notification transaction record
    const { 
        transactionId, 
        amountPaid, 
        recipientIdentifier, 
        customerPhone, 
        status, 
        targetResource 
    } = payload;

    // 3. Workflow Validation Matrix
    if (status !== 'SUCCESS') {
        console.log(`[TRANSACTION FAILED] Reference: ${transactionId} dropped with state: ${status}`);
        return res.status(200).json({ status: 'Acknowledged non-success payment' });
    }

    if (recipientIdentifier !== EXPECTED_METADATA.phoneWallet) {
        console.warn(`[ROUTING ERROR] Payment diverted to alternate endpoint: ${recipientIdentifier}. Expected: ${EXPECTED_METADATA.phoneWallet}`);
        return res.status(400).json({ error: 'Invalid destination processing parameters' });
    }

    // 4. Fulfillment Engine Execution
    console.log(`[SUCCESS] Transaction ${transactionId} validated. Amount: KES ${amountPaid} from ${customerPhone}`);
    
    const secureAccessPayload = generateSecureAssetToken(targetResource, customerPhone);
    
    // Respond immediately to release front-end status lock
    return res.status(200).json({
        message: 'Transaction successfully processed and confirmed.',
        unlockToken: secureAccessPayload.token,
        expiry: secureAccessPayload.expiresAt
    });
}

/**
 * Validates cryptographic signature hashes to confirm source origin authenticity
 */
function verifyWebhookSignature(rawPayload, incomingSignature) {
    const secretKey = process.env.PAYMENT_WEBHOOK_SECRET;
    if (!secretKey) return false;
    
    const computedHash = crypto
        .createHmac('sha256', secretKey)
        .update(rawPayload)
        .digest('hex');
        
    return computedHash === incomingSignature;
}

/**
 * Generates custom timed authorization keys for the locked PDF/Class infrastructure
 */
function generateSecureAssetToken(resourceId, userReference) {
    const timestamp = Date.now();
    const uniqueSessionSecret = process.env.DRM_TOKEN_SECRET || "fallback_encryption_seed";
    
    const token = crypto
        .createHash('sha256')
        .update(`${resourceId}-${userReference}-${timestamp}-${uniqueSessionSecret}`)
        .digest('hex');
        
    return {
        token: token,
        expiresAt: timestamp + (24 * 60 * 60 * 1000) // Access link expires cleanly in 24 hours
    };
}

module.exports = { handlePaymentWebhook };
