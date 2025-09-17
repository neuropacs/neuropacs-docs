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

2. **Orders Page**  
   Navigate to the orders page.
   ![Dashboard Overview](/img/web_portal_orders_page.png)

## Uploading Individual Orders

1. Click **New Order** in the Orders page.
2. Provide a unique study identifier, along with the patient's age (in years) and biological sex. Select the neuropacs product(s) to run on your study.
   ![Upload Portal Metadata](/img/web_portal_upload_form_1.png)
3. Choose your upload format (DICOM folder, ZIP file, NIfTI volume).

![Upload Portal Upload Format](/img/web_portal_upload_form_2.png)

- **Tip:** Select "View Input Specifications Documentation" to view see technical requirements for imaging.

4. Monitor the upload progress bar.
   ![Upload Progress](/img/web_portal_upload_form_3.png)

   - **Tip:** Do not close or leave the web portal during an upload sequence.

5. Upon completion, your order will be initiated and appear in the Orders table immediately.

## Troubleshooting

- **Upload Errors**

  - Verify your file format is valid DICOM.
  - Check network connectivity and retry.

- **Authentication Issues**
  - Authentication sessions expire after 1 hour.
  - Contact support if you’re locked out.

## Tips & Best Practices

- Use a wired connection for large uploads.
- Regularly review your orders to stay on top of processing.
- When prompted, create a secure password using a combination of letters, numbers, and special characters

---

_Last updated: July 16, 2025_
