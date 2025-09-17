---
sidebar_position: 5
---

# Automated Emails

## Overview

Automated email delivery service enables healthcare organizations to receive diagnostic reports directly in their inbox on a configurable schedule. This integration simplifies report distribution by sending results in preferred formats to designated recipients via secure email.

## Key Benefits

- **Convenience**: Receive reports without manual polling—delivered straight to your team’s inbox.
- **Customizable**: Configure schedules, report types, and recipient lists to fit your workflows.
- **Security**: Encrypted email transmission and access controls protect PHI.
- **Traceability**: Delivery receipts and audit logs provide full visibility into report distribution.

## How It Works

1. **Configuration**
   - Define email parameters in our integration portal:
     - **Schedule** (e.g., hourly, daily, weekly)
     - **Report Types** (e.g., aggregated CSV, diagnostic reports, feature vector)
     - **Recipients** (individual addresses or distribution groups)
2. **Report Generation**
   - At each scheduled interval, our service compiles report(s) matching selected report types.
   - Reports are formatted according to the chosen output (attachments or secure links).
3. **Secure Email Delivery**
   - Emails are sent via TLS‑encrypted with PHI compliance.
   - Delivery receipts and bounce handling ensure reliable transmission.

## Security and Compliance

- Email channels use end‑to‑end encryption (TLS) and do not expose content publicly.
- Role‑based controls restrict who can manage schedules and recipients.
- Detailed logs record email sends and delivery statuses for audit purposes.

---

_Last updated: June 25, 2025_
