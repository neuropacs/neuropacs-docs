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

2. **Log In**  
   Enter your credentials and complete MFA if enabled.  
   ![Login Page](/img/portal_login_page.png)

3. **Dashboard Overview**  
   After logging in, you’ll land on the Dashboard, showing existing individual and batch orders.  
   ![Dashboard Overview](/img/portal_landing.png)

## Uploading Individual Orders

1. Click **New** on the right of "Individual Orders".
2. Select your dataset folder via the dialog.
   - **Tip:** Select "Upload Specs" to view DICOM upload specifications.
3. Monitor the upload progress bar.  
   ![Upload Progress](/img/uploading_animation.png)
4. Upon completion, your order will be initiated and appear in the **Individual Orders** table after ~1 minute.

## Navigation & Settings

- **User Menu** (top right)

  - **Refresh** Refresh order tables to view latest available data
  - **Logout** Logout of session and return to login page

  ![Settings Panel](/img/user_menu.png)

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
