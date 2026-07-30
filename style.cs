/* Base Layout & Color Configurations */
body {
    background-color: #ffffff;
    color: #000000;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 20px 0;
    line-height: 1.6;
}

.app-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    border: 2px solid #000000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Typography Overrides */
.main-title, .brand-logo {
    color: #008000; /* Green */
    font-family: 'Chicago', 'Arial Black', sans-serif;
}

.sub-title, .nav-links a, .portal-link {
    color: #0000ff; /* Blue */
    font-family: 'Times New Roman', Times, serif;
}

/* Header Navbar Styling */
.main-header {
    border-bottom: 2px solid #000000;
    padding-bottom: 15px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.brand-logo {
    font-size: 24px;
    font-weight: bold;
}

.nav-links a {
    text-decoration: none;
    margin-left: 15px;
    font-weight: bold;
    font-size: 16px;
}

.nav-links a:hover {
    text-decoration: underline;
}

.hero-section {
    text-align: center;
    margin-bottom: 30px;
}

.main-title {
    font-size: 32px;
    letter-spacing: 1px;
}

/* Content Layout Components */
.content-card {
    border: 1px solid #cccccc;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 4px;
    background-color: #ffffff;
}

.two-column-grid {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
}

.two-column-grid .content-card {
    flex: 1;
    margin-bottom: 0;
}

/* Subcomponents */
.terminal-box {
    background-color: #f5f5f5;
    border: 1px dashed #000000;
    padding: 15px;
    font-family: monospace;
    font-size: 13px;
    margin-top: 10px;
}

.blink {
    font-weight: bold;
    color: #008000;
}

.calculator-box {
    background-color: #f9f9f9;
    padding: 12px;
    border: 1px solid #dddddd;
    margin: 15px 0;
    font-size: 13px;
}

.form-group {
    margin: 8px 0;
}

.form-group label {
    display: inline-block;
    width: 130px;
}

.form-group input, .form-group select {
    padding: 3px;
    border: 1px solid #000000;
}

.calc-output {
    color: #008000;
    font-weight: bold;
    margin-top: 10px;
}

.gateway-footer {
    font-size: 12px;
}

.button-group {
    margin: 15px 0;
}

.action-btn {
    background-color: #ffffff;
    color: #000000;
    border: 2px solid #000000;
    padding: 8px 12px;
    font-weight: bold;
    width: 100%;
    margin-bottom: 8px;
    cursor: pointer;
    transition: 0.2s;
}

.action-btn:hover {
    background-color: #000000;
    color: #ffffff;
}

.affiliate-tag {
    font-size: 11px;
    text-align: center;
    color: #555555;
}

.text-center {
    text-align: center;
}

.portal-link {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 20px;
    border: 2px solid #0000ff;
    font-weight: bold;
    text-decoration: none;
    border-radius: 4px;
    transition: 0.2s;
}

.portal-link:hover {
    background-color: #0000ff;
    color: #ffffff;
}

/* Data Tables */
.resource-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 15px;
    font-size: 14px;
}

.resource-table th {
    border-bottom: 2px solid #000000;
    padding: 8px;
    text-align: left;
}

.resource-table td {
    border-bottom: 1px solid #dddddd;
    padding: 8px;
}

.text-right {
    text-align: right;
}

.status-locked {
    color: #ff0000;
    font-weight: bold;
}

/* Security DRM Modules */
.security-vault {
    margin-top: 20px;
    border-top: 1px solid #cccccc;
    padding-top: 15px;
    font-size: 12px;
}

.vault-heading {
    font-weight: bold;
    margin-bottom: 5px;
}

.payment-badge {
    background-color: #ffffff;
    border: 2px solid #000000;
    padding: 10px;
    display: block;
    text-align: center;
    font-weight: bold;
    margin-top: 15px;
    font-size: 14px;
}

.app-footer {
    margin-top: 30px;
    border-top: 2px solid #000000;
    padding-top: 15px;
    text-align: center;
    font-size: 12px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .two-column-grid {
        flex-direction: column;
    }
}
