---
sidebar_position: 1
sidebar_label: Integration Overview
---

# Integration Overview

Welcome to the integration hub for **neuropacs**. Here you’ll find an an overview of all supported DICOM ingestion and report delivery options.

---

## 🔍 At-a-Glance

| **Method**                       | **Use Case**                                                                        |
| -------------------------------- | ----------------------------------------------------------------------------------- |
| **Middleware Agent Application** | Locally installed application for streamlined & highly configurable HIS integration |
| **Direct Connect w/ VPN**        | Direct PACS feeds & deliery via FHIR/HL7/DICOM/RESTful protcols over secure tunnel  |
| **REST API**                     | Cloud-native REST operations w/ OAuth2 authentication                               |
| **Web Portal**                   | Modern web interface for manual case management                                     |
| **SFTP**                         | Use any SFTP client for large batch orders and grouped studies                      |
| **Email Notifications**          | Scheduled email notifications for report delivery                                   |

Tip: Mix & match available ingestion & delivery methods to suit your workflow

---

## 📥 DICOM Ingestion Methods

- ### Middleware Agent Application

  - **When to use:** Connect locally to HIS system, allowing us to handle secure data transfer and routing for you.
  - **Highlights:**
    - Highly configurable
    - Built-in quality control
    - Compatible with most PAC/RIS/EHR/EDC systems
    - Send imaging locally via standard DICOM C-STORE
    - Simple IT setup, minimal in-house maintainance required

- ### VPN Direct Connect

  - **When to use:** Direct, secure PACS feed
  - **Highlights:**
    - Send directly via standard DICOM STOWE-RS or C-STORE
    - Establish a VPN tunnel
    - Configure routing rules, AE Titles, ports, and authentication

- ### REST API

  - **When to use:** Custom environemnts for more granular control
  - **Highlights:**
    - Oauth2 token-based authentication
    - Single-file or multipart upload
    - Firewall friendly
    - Simple REST protocol
    - Example code snippets available

- ### Web Portal

  - **When to use:** Manual or one-off study submissions from local filesystem
  - **Highlights:**
    - Modern web interface
    - User management & roles
    - Single page view of all individual & group orders
    - Monitor order status

- ### SFTP
  - **When to use:** High-volume batch orders or grouped studies
  - **Highlights:**
    - Use any SFTP client
    - Simply move imaging to designated SFTP bucket, processing begins immediately
    - Group imaging under a single study for aggregated reporting
    - Strict access and action controls

---

## 📤 Report Delivery Methods

- ### Middleware Agent Application

  - **When to use:** Connect locally to HIS system, route reports directly to any HIS
  - **Highlights:**
    - Highly configurable
    - Compatible with most PAC/RIS/EHR/EDC systems
    - Simple IT setup, minimal in-house maintainance required

- ### VPN Direct Connect

  - **When to use:** Push results directly back into downstream HIS
  - **Highlights:**
    - No middlware, direct push to any HIS system
    - Compatible with FHIR, HL7, DICOM, and REST protocols

- ### REST API

  - **When to use:** Custom environemnts for more granular control
  - **Highlights:**
    - Oauth2 token-based authentication
    - Firewall friendly
    - Check order status and download reports easily
    - Example code snippets available

- ### Web Portal

  - **When to use:** Interactive manual case review
  - **Highlights:**
    - Real-time status dashboard
    - Modern web interface
    - View and download reports on-demand
    - User management & roles

- ### SFTP

  - **When to use:** High-volume batch orders or grouped studies
  - **Highlights:**
    - Use any SFTP client
    - Reports are automatically sent to SFTP when available
    - Simply drag reports from your bucket to local filesystem
    - Strict access and action controls

- ### Email Notifications

  - **When to use:** Lightweight alerts and report links
  - **Highlights:**
    - Customizable templates
    - Configurable report delivery schedule
    - Receive individual or batch reports
    - Attachment options (CSV, PNG, PDF, TXT, JSON, XML)

---

_Last updated: June 20, 2025_
