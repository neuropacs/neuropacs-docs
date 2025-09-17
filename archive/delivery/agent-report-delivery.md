---
sidebar_position: 4
---

# Agent Report Delivery

## Overview

The neuropacs Agent provides comprehensive report delivery capabilities, automatically routing analysis results and failure reports to designated destinations within your healthcare infrastructure. It supports multiple delivery formats and provides manual override capabilities for flexible report management.

## Key Benefits

- **Automated Report Routing**: Delivers completed reports to preconfigured destinations without manual intervention
- **Multiple Delivery Formats**: Support for various output formats including PDF, DICOM, HL7, and custom integrations
- **Flexible Destination Management**: Route reports to PACS, EHR systems, RIS, or custom applications
- **Built-in Report Viewer**: Review reports directly within the Agent portal using integrated PDF viewer
- **Manual Override Capabilities**: Send reports to alternative destinations or retry failed deliveries
- **Comprehensive Tracking**: Full audit trail of all report delivery attempts and outcomes

## Getting Started

1. **Access the Results Portal**  
   Navigate to the Results page in the Agent's web interface.  
   ![Results Portal Access](/img/agent_results_portal.png)

2. **Configure Delivery Destinations**  
   Set up routing rules and destination endpoints in Settings.  
   ![Delivery Configuration](/img/agent_delivery_config.png)

3. **Monitor Report Status**  
   Track delivery progress and manage reports from the Results dashboard.  
   ![Results Dashboard](/img/agent_results_dashboard.png)

## Managing Results

### Results Page Overview

The Results page serves as the central hub for managing all completed analyses and failure reports returned from cloud processing.

![Results Page Overview](/img/agent_results_page.png)

### Report Status Indicators

**Delivery Status Types:**
- **Pending**: Report received, awaiting delivery processing
- **Delivered**: Successfully routed to configured destination(s)
- **Failed**: Delivery attempt unsuccessful, manual intervention may be required
- **Retry**: Automatic retry in progress after initial failure
- **Manual**: Manually delivered or routed to alternative destination

### Report Information Display

Each report entry shows:
- **Study ID**: Reference to original imaging study
- **Report Type**: Analysis result or failure notification
- **Generation Time**: When the report was created
- **Delivery Status**: Current routing status
- **Destination(s)**: Target systems for report delivery
- **Actions**: Available management operations

## Report Types

### Analysis Reports

Generated after successful cloud processing of imaging studies.

![Analysis Report Example](/img/agent_analysis_report.png)

**Analysis Report Features:**
- **Clinical Findings**: Detailed analysis results and measurements
- **Visual Overlays**: Annotated images highlighting key findings
- **Quantitative Data**: Numerical measurements and statistical analysis
- **Confidence Scores**: Reliability indicators for AI-generated findings
- **Comparison Data**: Historical comparisons when available

**Available Formats:**
- **PDF**: Complete formatted report for clinical review
- **DICOM SR**: Structured report format for PACS integration
- **HL7**: Healthcare messaging standard for EHR integration
- **JSON/XML**: Machine-readable formats for custom integrations
- **CSV**: Tabular data for research and analytics

### Failure Reports

Generated when issues occur during cloud processing, providing detailed error information and remediation guidance.

![Failure Report Example](/img/agent_failure_report.png)

**Failure Report Contents:**
- **Error Classification**: Category and severity of the processing issue
- **Detailed Description**: Technical explanation of what went wrong
- **Study Information**: Details about the affected imaging study
- **Remediation Steps**: Suggested actions to resolve the issue
- **Contact Information**: Support resources for additional assistance

**Common Failure Reasons:**
- Image quality insufficient for analysis
- Required sequences missing or incomplete
- Technical processing errors or timeouts
- Network connectivity issues during processing
- Study format or protocol compatibility problems

## Report Delivery System

### Automated Delivery Workflow

**Standard Delivery Process:**
1. **Report Reception**: Agent receives completed analysis from cloud
2. **Destination Lookup**: System identifies configured delivery targets
3. **Format Conversion**: Report converted to required format(s)
4. **Delivery Attempt**: Automatic routing to destination system(s)
5. **Status Update**: Delivery confirmation and status tracking
6. **Retry Logic**: Automatic retry attempts for failed deliveries

### Delivery Destinations

**Supported Destination Types:**

**PACS Integration:**
- DICOM SR (Structured Report) delivery
- Secondary capture image objects
- Report attachment to original studies
- Custom DICOM destination routing

**EHR/EMR Systems:**
- HL7 message integration
- Direct API connections
- Secure file transfer protocols
- Custom webhook endpoints

**RIS Integration:**
- Report attachment to orders
- Status updates and notifications
- Billing and workflow triggers
- Custom RIS API integrations

**File System Delivery:**
- Network share locations
- FTP/SFTP repositories
- Cloud storage integration
- Local directory routing

### Delivery Configuration

**Setting Up Destinations:**
1. Navigate to Settings > Delivery Configuration
2. Define destination endpoints and connection parameters
3. Configure delivery formats and transformation rules
4. Set up authentication and security credentials
5. Test connectivity and validate configurations

![Delivery Configuration Setup](/img/agent_delivery_setup.png)

**Configuration Parameters:**
- **Destination Name**: Descriptive identifier for the endpoint
- **Connection Type**: Protocol and method (DICOM, HL7, API, File)
- **Endpoint Details**: URLs, IP addresses, ports, and paths
- **Authentication**: Credentials, certificates, and security tokens
- **Format Settings**: Output format and transformation options
- **Retry Policy**: Failure handling and retry parameters

## Report Management Actions

### Viewing Reports

**Built-in PDF Viewer:**
- Open reports directly within the Agent portal
- Navigate through multi-page documents
- Zoom and search functionality
- Print and export capabilities

**External Viewer Integration:**
- Launch reports in system default applications
- Integration with PACS viewing stations
- Custom viewer application support

### Manual Report Operations

**Download Reports:**
- Export to local file system in all available formats
- Bulk download capabilities for multiple reports
- Compressed archives for batch processing
- Custom naming conventions and folder structures

**Manual Routing:**
- Send reports to alternative destinations
- Override automatic delivery failures
- Route to multiple destinations simultaneously
- Schedule delivery for specific times

**Report Re-routing:**
- Forward reports to additional destinations
- Correct routing errors or misconfigurations
- Send reports to backup or secondary systems
- Handle urgent delivery requirements

![Manual Report Management](/img/agent_manual_report_management.png)

## Delivery Monitoring & Tracking

### Real-time Status Updates

**Live Delivery Tracking:**
- Real-time status updates for all delivery attempts
- Progress indicators for large report transfers
- Network connectivity and performance monitoring
- Destination system availability checking

### Delivery Analytics

**Performance Metrics:**
- Delivery success rates by destination
- Average delivery time by report type
- Network throughput and latency statistics
- Failure analysis and trending data

**Reporting Dashboard:**
- Visual summaries of delivery performance
- Configurable time ranges and filters
- Export capabilities for analysis and reporting
- Trend analysis and capacity planning data

## System Logging & Audit Trail

### Comprehensive Logging

**Logged Activities:**
- Report reception and processing events
- Delivery attempts and outcomes
- Manual routing and management actions
- Configuration changes and updates
- User access and administrative actions

**Log Features:**
- **Real-time Streaming**: Monitor delivery activity as it happens
- **Detailed Timestamps**: Precise timing of all delivery events
- **User Attribution**: Track who performed manual actions
- **Correlation IDs**: Link related events across the workflow
- **Export Capabilities**: Download logs for auditing and compliance

![Delivery Logs Dashboard](/img/agent_delivery_logs.png)

### Audit & Compliance

**Regulatory Compliance:**
- Complete audit trail for all report handling
- User access tracking and accountability
- Data integrity verification and validation
- Retention policy enforcement and archiving

## Configuration & Settings

### Delivery Settings Configuration

**Global Delivery Settings:**
- Default retry attempts and intervals
- Timeout values for delivery operations
- Queue management and prioritization rules
- Archive and retention policies

**Destination Management:**
- Add, modify, and remove delivery destinations
- Test connectivity and validate configurations
- Backup and restore destination settings
- Import/export configuration templates

**Format Configuration:**
- Customize report templates and layouts
- Configure data transformation rules
- Set up format-specific delivery parameters
- Manage output quality and compression settings

![Delivery Settings Configuration](/img/agent_delivery_settings.png)

### Security & Authentication

**Secure Delivery:**
- Encrypted connections for all delivery methods
- Certificate management and validation
- Authentication token handling and renewal
- Network security and firewall configuration

## Troubleshooting

### Common Delivery Issues

**Network Connectivity Problems:**
- Verify destination system availability and accessibility
- Check network configuration and firewall rules
- Validate authentication credentials and certificates
- Test connection parameters and timeout settings

**Format Compatibility Issues:**
- Verify destination system format requirements
- Check report template configuration and customization
- Validate data transformation and mapping rules
- Review format-specific delivery parameters

**Destination System Problems:**
- Monitor target system capacity and performance
- Check destination system logs for error details
- Verify API endpoints and integration specifications
- Coordinate with destination system administrators

### Diagnostic Tools

**Built-in Diagnostics:**
- Connection testing and validation tools
- Format preview and validation capabilities
- Log analysis and error identification tools
- Performance monitoring and bottleneck detection

**Support Resources:**
- Export delivery logs and configuration details
- Generate diagnostic reports for support analysis
- Access knowledge base and troubleshooting guides
- Contact support with specific error details and context

## Tips & Best Practices

### Optimal Delivery Performance

**Configuration Best Practices:**
- Configure appropriate retry policies for each destination type
- Monitor destination system capacity and performance
- Implement load balancing for high-volume environments
- Set up backup destinations for critical report delivery

**Format Optimization:**
- Choose appropriate formats based on destination capabilities
- Optimize report templates for file size and quality
- Configure compression settings for network efficiency
- Test format compatibility before production deployment

### Workflow Integration

**EHR Integration Recommendations:**
- Coordinate with IT teams for seamless EHR connectivity
- Test HL7 message formats with receiving systems
- Implement appropriate user notifications and alerts
- Monitor integration performance and user feedback

**PACS Integration Best Practices:**
- Validate DICOM SR compatibility with PACS versions
- Configure appropriate association and presentation contexts
- Test report attachment and viewing workflows
- Monitor PACS storage impact and performance

### Security & Compliance

**Data Protection:**
- Implement appropriate de-identification for delivered reports
- Monitor and audit all report access and delivery activities
- Maintain encryption for all network communications
- Follow organizational data retention and archival policies

**Access Control:**
- Implement role-based access for report management functions
- Monitor user activities and maintain accountability
- Regular review and update of user permissions
- Document all administrative and configuration changes

---

_Last updated: August 16, 2025_
