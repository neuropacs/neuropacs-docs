---
sidebar_position: 1
sidebar_label: Integration Overview
---

# Integration Overview

Welcome to the integration hub for **neuropacs**. Here you’ll find an at-a-glance matrix of all supported ingestion and delivery options.

---

## 🔍 At-a-Glance

| **Stage**     | **Method**                          | **Use Case**                                |
| ------------- | ----------------------------------- | ------------------------------------------- |
| **Ingestion** | **Agent Application**               | Direct PACS connection w/ secure upload     |
|               | **Direct-Connect (VPN + STOWE-RS)** | High-volume PACS feeds over secure tunnel   |
|               | **DICOMweb STOW-RS (REST API)**     | Cloud-native uploads behind firewalls       |
|               | **Web Portal Upload**               | Manual or ad-hoc study uploads              |
|               | **SDK / S3 Bucket Ingestion**       | Automated pipelines via code or S3 events   |
| **Delivery**  | **Web Application**                 | GUI-based report review                     |
|               | **DICOMweb WADO-RS (REST API)**     | Programmatic retrieval of images & metadata |
|               | **DICOM Push (C-STORE)**            | Push reports back into your PACS            |
|               | **Email Notifications**             | Lightweight alerts and report links         |

---

## 📥 DICOM Ingestion Methods

- ### Direct-Connect DICOM (VPN + C-STORE)

  - **When to use:** High-volume, persistent PACS feeds
  - **Highlights:**
    1. Establish a VPN tunnel
    2. Configure AE Titles & ports
    3. Send via standard DICOM C-STORE
    4. Test with a sample study

- ### DICOMweb STOW-RS (REST API)

  - **When to use:** Cloud environments with firewall restrictions
  - **Highlights:**
    - JWT-based authentication
    - Single-file or multipart upload
    - Rate limiting and retry guidelines

- ### Web Portal Upload

  - **When to use:** Manual or one-off study submissions
  - **Highlights:**
    - Drag & drop UI
    - ZIP vs. folder import
    - Client-side validation

- ### SDK / S3 Bucket Ingestion
  - **When to use:** Automated ingestion in code or serverless workflows
  - **Highlights:**
    - Installable SDK (Python, Java, JavaScript)
    - S3 event triggers
    - IAM policy templates

---

## 📤 Report Delivery Methods

- ### Web Application

  - **When to use:** Interactive review by clinicians
  - **Highlights:**
    - Real-time status dashboard
    - Search, filter, and annotate reports
    - User management & roles

- ### DICOMweb WADO-RS (REST API)

  - **When to use:** Automated systems & integrations
  - **Highlights:**
    - Retrieve metadata vs. bulk pixel data
    - Pagination, filters, and query parameters
    - Sample cURL & code snippets

- ### DICOM Push (C-STORE)

  - **When to use:** Push results back into downstream PACS
  - **Highlights:**
    1. Configure your AE Title
    2. Schedule on-demand or batch pushes
    3. Validate receipt with test C-STORE

- ### Email Notifications
  - **When to use:** Lightweight alerts and report links
  - **Highlights:**
    - Customizable templates
    - Attachment options (PDF, DICOM)
    - Webhook callbacks

---

## 🔗 End-to-End Patterns

Mix & match ingestion + delivery to suit your workflow:

| **Pattern**             | **Ingestion**        | **Delivery**     |
| ----------------------- | -------------------- | ---------------- |
| **Pattern A: Classic**  | Direct-Connect DICOM | Web Application  |
| **Pattern B: API-Only** | DICOMweb STOW-RS     | DICOMweb WADO-RS |
| **Pattern C: Hybrid**   | Web Portal Upload    | DICOM Push       |
| **Custom Workflow**     | Any of the above     | Any of the above |

_For step-by-step examples, see [Integration Patterns & Guides](./integration-patterns)._
