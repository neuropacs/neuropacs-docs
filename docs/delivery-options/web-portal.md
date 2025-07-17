---
sidebar_position: 3
---

# Web Portal

## Overview

Our secure web portal provides a user-friendly interface for uploading, managing, and retrieving analysis reports. This guide walks you through the main workflows, illustrated with screenshots to help you get started quickly.

## Key Benefits

- **Intuitive Interface**: Clean, responsive design for desktop and tablet.
- **Secure Access**: Enforced via AWS Cognito with MFA options.
- **Fast Uploads**: Drag‑and‑drop bulk upload of DICOM studies.
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
   ![Dashboard Overview](/img/landing_page_with_status.png)

## Managing Your Orders

- **Individual Orders - Actions**

  - **Get Status** If order is in "DX_STARTED" state, check progress of order execution
  - **Download** (PNG, TXT, XML, JSON, Feature Vector)
    - Note: After selecting a format, the report will be downloaded to your local file system

- **Batch Orders - Actions**

  - **Download** (ZIP, Aggregated CSV)
    - Note: Downloading a batch order will only download associated orders that are completed ("DELIVERED"/"FAILED")
    - Note: After selecting a format, the report will be downloaded to your local file system
  - **Associated Orders** Select "+" next to the desired batch order to view all associated individual orders

  ![Batch Order View Expanded](/img/batch_order_expanded.png)

## Navigation & Settings

- **User Menu** (top right)

  - **Refresh** Refresh order tables to view latest available data
  - **Logout** Logout of session and return to login page

  ![Settings Panel](/img/user_menu.png)

## Troubleshooting

- **Authentication Issues**
  - Authentication sessions expire after 1 hour.
  - Contact support if you’re locked out.

## Tips & Best Practices

- Downloaded orders are named according to the order ID and selected format (ex. "9a7a0e03-1ec4-4487-9419-ebba1f44cc30_report.png", "9a7a0e03-1ec4-4487-9419-ebba1f44cc30_failure.png")
- Failed orders allow download of a failure report in TXT and PNG formats.

---

_Last updated: July 16, 2025_
