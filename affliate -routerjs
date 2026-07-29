/**
 * Affiliate Routing Architecture
 * Manages tracking structures for partner links
 */
const AFFILIATE_CONFIG = {
    deriv: {
        baseUrl: "https://track.deriv.com/_your_tracking_id_here/1/",
        defaultLanding: "https://deriv.com/synthetic-indices/"
    },
    anzo: {
        baseUrl: "https://anzocapital.com/register",
        partnerCode: "your_partner_id_here"
    }
};

/**
 * Handles bot tracking setups for Synthetic Indices (Vol 10 / Vol 75)
 * @param {string} botType - Label identifying the target script
 */
function deploySyntheticBot(botType) {
    console.log(`[SYSTEM] Initializing deployment matrix for: ${botType}`);
    
    // Construct trackable partner endpoint
    const targetUrl = `${AFFILIATE_CONFIG.deriv.baseUrl}?subid=${encodeURIComponent(botType)}`;
    
    // Smooth transition delay to allow page tracking pixels to fire
    setTimeout(() => {
        window.open(targetUrl, '_blank');
    }, 250);
}

/**
 * Handles account matching structures for Forex, Gold, and Crypto integrations
 */
function routeToForexPortal() {
    console.log('[SYSTEM] Initializing Anzo Capital partner routing pipeline...');
    
    // Append your introducing broker tag safely as a query string parameter
    const portalUrl = `${AFFILIATE_CONFIG.anzo.baseUrl}?ib=${encodeURIComponent(AFFILIATE_CONFIG.anzo.partnerCode)}`;
    
    window.open(portalUrl, '_blank');
}

// Attach event listeners programmatically to bypass inline markup vulnerabilities
document.addEventListener('DOMContentLoaded', () => {
    const botButtons = document.querySelectorAll('#bots .action-btn');
    if(botButtons.length >= 2) {
        botButtons[0].addEventListener('click', () => deploySyntheticBot('Volatility_10_Bot'));
        botButtons[1].addEventListener('click', () => deploySyntheticBot('Volatility_75_Bot'));
    }
    
    const portalLink = document.querySelector('.portal-link');
    if(portalLink) {
        portalLink.removeAttribute('onclick'); // Remove mockup click event
        portalLink.addEventListener('click', (e) => {
            e.preventDefault();
            routeToForexPortal();
        });
    }
});
