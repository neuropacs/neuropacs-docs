---
sidebar_position: 3
---

# Agent Application

## Overview

The neuropacs Agent is an on-premises software solution designed to operate within your data center, seamlessly integrating with your existing infrastructure while securely interfacing with the neuropacs Cloud. It establishes an encrypted connection to transmit medical imaging for analysis, manage orders, retrieve reports, and automatically route them to designated destinations.

## Key Benefits

- **Direct DICOM Integration**: Seamless connection to PACS systems and other DICOM-supported archives as a standard DICOM destination.
- **Integrated Web Portal**: Centralized platform to configure workflows, monitor system activity, and manage studies.
- **Automated Workflow**: Automatic routing, quality control, and report delivery without manual intervention.
- **Secure Processing**: Encrypted connections and configurable de-identification rules ensure data protection.
- **Comprehensive Monitoring**: Real-time logs and transparent tracking of all system operations.
- **Healthcare Compliant**: Full compliance with healthcare regulations and standards.

## Getting Started

1. **PACS Integration**  
   Configure the Agent as a DICOM destination in your PACS system.  
   ![PACS Configuration](/img/agent_pacs_setup.png)

2. **Access the Web Portal**  
   Navigate to the Agent's integrated web interface.  
   ![Agent Portal Login](/img/agent_portal_login.png)

3. **Dashboard Overview**  
   Monitor system status and recent activity from the main dashboard.  
   ![Agent Dashboard](/img/agent_dashboard.png)

## PACS Integration

The Agent operates as a standard DICOM destination within your imaging environment. Once configured, your PACS can send images directly to the Agent using routing rules.

### Setting Up Routing Rules

- Configure automatic routing for specific study types (e.g., all diffusion-weighted brain MRIs)
- Set up scanner-specific routing rules
- Define modality-based forwarding criteria

![PACS Routing Configuration](/img/agent_pacs_routing.png)

## Managing Studies

### Studies Page

The Studies page displays all imaging studies received by the Agent from connected sources.

![Studies Page Overview](/img/agent_studies_page.png)

**Study Status Indicators:**
- **Unstable**: Images are arriving but the dataset is incomplete
- **Stable**: All required images received and verified, ready for analysis
- **Processing**: Study uploaded to cloud for analysis
- **Complete**: Analysis finished and report delivered

### Quality Control Reports

After a study reaches stable status, the Agent automatically generates a Quality Control Report to verify the study meets processing requirements.

**Accessing QC Reports:**
1. Navigate to the Studies page
2. Select the **QC** button in the Actions column
3. Review the automated quality assessment

![Quality Control Report](/img/agent_qc_report.png)

**QC Report Features:**
- Summary of all tested parameters
- Pass/fail status for each requirement
- Detailed results for manual review
- Automatic processing continuation for passed studies

## Managing Results

### Results Page

The Results page lists all completed analyses and failure reports returned from cloud processing.

![Results Page Overview](/img/agent_results_page.png)

### Report Types

**Analysis Reports:**
- Generated after successful cloud processing
- Automatically routed to preconfigured destinations
- Available for manual review using built-in PDF viewer

![Analysis Report Example](/img/agent_analysis_report.png)

**Failure Reports:**
- Generated when processing issues occur
- Include detailed error information
- Available for download and manual routing

![Failure Report Example](/img/agent_failure_report.png)

### Report Management Actions

- **View**: Open reports directly in the Agent portal using the built-in PDF viewer
- **Download**: Export reports to the file system in all available formats
- **Manual Routing**: Send reports to alternative destinations if automatic routing fails
- **Re-route**: Forward reports to additional destinations as needed

## System Monitoring

### Logs Page

The Logs page provides comprehensive tracking of all Agent activities and system events.

![Logs Page Overview](/img/agent_logs_page.png)

**Logged Activities:**
- Study transfers and receipt
- Cloud communications and processing status
- Report routing and delivery
- System events and error messages
- Configuration changes

**Log Features:**
- **Real-time Streaming**: Monitor activity as it happens
- **Download Capability**: Export logs for auditing and compliance
- **Detailed Tracking**: Complete transparency into system operations
- **Timestamp Records**: Precise timing of all events

## Configuration & Settings

### Settings Page

The Settings page serves as the central control hub for configuring all aspects of the Agent to fit your environment.

![Settings Page Overview](/img/agent_settings_page.png)

### Configuration Sections

**DICOM Parameters:**
- Port, host, and AE Title configuration
- Communication settings for PACS integration
- Supported transfer syntaxes

**Cloud Connection:**
- Secure communication settings with neuropacs Cloud
- Authentication and encryption parameters
- Connection timeout and retry settings

**De-identification Rules:**
- Patient data protection before network transmission
- Configurable anonymization policies
- HIPAA compliance settings

**Delivery Settings:**
- Report routing destinations
- Notification preferences
- Delivery format options

**Scheduler Settings:**
- Task execution timing
- Batch processing schedules
- Maintenance window configuration

### Configuration Management

- **Backup Configurations**: Save current settings to cloud storage
- **Restore Configurations**: Recover settings from cloud backups using the restore button
- **Import/Export**: Transfer configurations between Agent instances

## Troubleshooting

### Common Issues

**Connection Problems:**
- Verify DICOM parameters match PACS configuration
- Check network connectivity and firewall settings
- Review cloud connection status in Settings

**Study Processing Issues:**
- Review Quality Control reports for failed studies
- Check logs for detailed error messages
- Verify study format and completeness

**Report Delivery Problems:**
- Confirm destination settings in Configuration
- Check routing logs for delivery attempts
- Verify target system availability

### Getting Support

- Access comprehensive logs for troubleshooting
- Export configuration and log files for support analysis
- Contact support with specific error messages and timestamps

## Tips & Best Practices

### Optimal Performance
- Configure routing rules to send only relevant studies
- Monitor system resources and storage capacity
- Regularly review and update de-identification rules
- Schedule maintenance tasks during low-activity periods

### Security Best Practices
- Enable all available de-identification options
- Regularly update Agent software and security patches
- Monitor access logs and user activity
- Implement network security measures for cloud connectivity

### Workflow Optimization
- Set up automated routing for common study types
- Configure notification preferences for critical events
- Use quality control reports to improve upstream processes
- Leverage batch processing for high-volume environments

---

_Last updated: August 16, 2025_
