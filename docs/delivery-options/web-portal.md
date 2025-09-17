---
sidebar_position: 3
---

# Web Portal

## Overview

Our secure web portal provides a user-friendly interface for uploading, managing, and retrieving analysis reports. This guide walks you through the main workflows, illustrated with screenshots to help you get started quickly.

## Key Benefits

- **Intuitive Interface**: Clean, responsive design for desktop and tablet.
- **Secure Access**: Enforced via OAuth2 with MFA options.
- **Fast Uploads**: Drag‑and‑drop upload of DICOM studies.
- **Real‑Time Status**: Live progress indicators and notifications.
- **Comprehensive Reporting**: View and download analysis results in multiple formats.

## Getting Started

1. **Access the Portal**  
   Navigate to your assigned URL.
   ![Landing Page](/img/web_portal_sign_in.png)

2. **Log In**  
   Enter your credentials.  
   ![Login Page](/img/web_portal_cognito_sign_in.png)

3. **MFA**  
   Enter your MFA code from your chosen authenticator app.  
   ![Login Page](/img/web_portal_cognito_mfa.png)

4. **Dashboard Overview**  
   After logging in, you’ll land on the Dashboard, showing analytics related to your neuropacs usage.  
   ![Dashboard Overview](/img/web_portal_home_page.png)

5. **Orders Page**  
   Navigate to the orders page for a more comprehensive view of your existing orders. Also create new orders.  
   ![Dashboard Overview](/img/web_portal_orders_page.png)

## Managing Your Orders

Monitor orders in real time.

- View the status of an order and other important metadata.
- When an order is in "DELIVERED" or "FAILED" state, you will have access to the viewer menu accessible via the blue eye icon.
- Analyze the resulting report(s) via the embedded PDF viewer.
- Download the report in all available formats (PNG, TXT, XML, JSON, Feature Vector)
  ![Order Report Management Diagnostic Report](/img/web_portal_diagnostic_report.png)

<!-- - **Batch Orders - Actions**

  - **Download** (ZIP, Aggregated CSV)
    - Note: Downloading a batch order will only download associated orders that are completed ("DELIVERED"/"FAILED")
    - Note: After selecting a format, the report will be downloaded to your local file system
  - **Associated Orders** Select "+" next to the desired batch order to view all associated individual orders

  ![Batch Order View Expanded](/img/portal_batch_order.png) -->

## Troubleshooting

- **Authentication Issues**
  - Authentication sessions expire after 1 hour.
  - Contact support if you’re locked out.

## Tips & Best Practices

- Downloaded orders are named according to the order ID and selected format (e.g., "9a7a0e03-1ec4-4487-9419-ebba1f44cc30_report.png", "9a7a0e03-1ec4-4487-9419-ebba1f44cc30_failure.png")
- Failed orders allow download of a failure report in TXT and PNG formats.
- When prompted, create a secure password using a combination of letters, numbers, and special characters

---

_Last updated: July 16, 2025_
