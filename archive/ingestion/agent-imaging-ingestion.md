---
sidebar_position: 3
---

# Agent Imaging Ingestion

## Overview

The neuropacs Agent provides seamless imaging ingestion capabilities, operating as a standard DICOM destination within your imaging environment. It integrates directly with PACS systems to automatically receive, validate, and prepare medical imaging studies for cloud-based analysis.

## Key Benefits

- **Direct DICOM Integration**: Seamless connection to PACS systems as a standard DICOM destination
- **Automated Study Reception**: Receives imaging studies automatically based on configured routing rules
- **Intelligent Quality Control**: Automated validation ensures only properly formatted studies proceed to analysis
- **Real-time Status Tracking**: Monitor study ingestion progress from unstable to processing-ready
- **Secure Data Handling**: Built-in de-identification and encryption protect patient data
- **Healthcare Compliant**: Full compliance with healthcare regulations and DICOM standards

## Getting Started

1. **PACS Integration**  
   Configure the Agent as a DICOM destination in your PACS system.  
   ![PACS Configuration](/img/agent_pacs_setup.png)

2. **Access the Web Portal**  
   Navigate to the Agent's integrated web interface.  
   ![Agent Portal Login](/img/agent_portal_login.png)

3. **Studies Dashboard**  
   Monitor incoming studies and their processing status.  
   ![Studies Dashboard](/img/agent_studies_dashboard.png)

## PACS Integration

The Agent operates as a standard DICOM destination within your imaging environment. Once configured, your PACS can send images directly to the Agent using routing rules, eliminating manual intervention.

### Setting Up as a DICOM Destination

**Configuration Requirements:**

- Unique AE Title for the Agent
- Network port assignment (typically 104 or custom)
- IP address or hostname accessibility
- DICOM protocol compatibility verification

![PACS Integration Setup](/img/agent_pacs_integration.png)

### Configuring Routing Rules

Routing rules determine which studies are automatically sent to the Agent for processing.

**Common Routing Scenarios:**

- **Modality-based**: Route all MRI or CT studies
- **Study Type**: Target specific protocols (e.g., diffusion-weighted brain MRIs)
- **Scanner-specific**: Route studies from particular imaging equipment
- **Time-based**: Send studies during specific hours
- **Anatomical Region**: Focus on brain, spine, or other body regions

**Example Routing Rule Configuration:**

```
Modality: MR
Body Part: BRAIN
Protocol: *DIFFUSION*
Destination: NEUROPACS_AGENT
```

![PACS Routing Configuration](/img/agent_pacs_routing.png)

## Study Management

### Studies Page Overview

The Studies page serves as the central hub for monitoring all imaging studies received by the Agent from connected PACS systems.

![Studies Page Overview](/img/agent_studies_page.png)

### Study Status Workflow

**Study Progression:**

1. **Receiving**: Initial DICOM transfer in progress
2. **Unstable**: Images arriving but dataset incomplete
3. **Stable**: All required images received and verified
4. **QC Passed**: Quality control validation successful
5. **Uploading**: Study currently being uploaded to cloud
6. **Pending**: Study is uploaded and awaiting cloud processing
7. **Processing**: Study is currently undergoing analysis
8. **Failed**: An error occured during processing.
9. **Delivered**: Report generated and available for review

**Status Indicators:**

- **Unstable** (Yellow): Images are arriving but the dataset is incomplete
- **Stable** (Blue): All required images received and verified, ready for quality control
- **QC Passed** (Green): Quality control validation successful, ready for cloud processing
- **Processing** (Orange): Study uploaded to neuropacs Cloud for analysis
- **Failed** (Red): Quality control or processing errors occurred

### Study Information Display

Each study entry shows:

- **Patient ID**: De-identified patient identifier
- **Study Date/Time**: When the imaging was performed
- **Modality**: Imaging type (MR, CT, etc.)
- **Series Count**: Number of image series received
- **Study Description**: Protocol or study type
- **Status**: Current processing stage
- **Actions**: Available operations (QC review, retry, etc.)

## Quality Control System

### Automated Quality Control

After a study reaches stable status, the Agent automatically generates a Quality Control Report to verify the study meets processing requirements before cloud upload.

**QC Validation Checks:**

- Image format and integrity verification
- Required sequences presence validation
- Metadata completeness assessment
- Image quality metrics evaluation
- Protocol compliance verification

### Accessing QC Reports

**Reviewing Quality Control Results:**

1. Navigate to the Studies page
2. Locate the study with QC status
3. Select the **QC** button in the Actions column
4. Review the automated quality assessment

![Quality Control Report](/img/agent_qc_report.png)

### QC Report Features

**Report Components:**

- **Executive Summary**: Overall pass/fail status with score
- **Parameter Testing**: Individual test results for each validation criterion
- **Image Analysis**: Technical quality metrics and measurements
- **Metadata Review**: DICOM header validation results
- **Recommendations**: Suggested actions for failed studies

**QC Parameters Evaluated:**

- Image resolution and dimensions
- Slice thickness and spacing
- Contrast and signal-to-noise ratio
- Motion artifacts detection
- Sequence parameter validation
- Anatomical coverage assessment

### QC Results Management

**Passed Studies:**

- Automatically proceed to secure cloud upload
- Generate processing initiation notifications
- Update study status to "Processing"

**Failed Studies:**

- Generate detailed failure reports
- Provide specific remediation guidance
- Allow manual review and override options
- Enable reprocessing after corrections

## Data Security & De-identification

### De-identification Process

The Agent automatically applies configurable de-identification rules before any data leaves your network.

**De-identification Features:**

- **Automatic PHI Removal**: Strip patient identifiers from DICOM headers
- **Configurable Rules**: Customize which fields to anonymize or remove
- **Audit Trail**: Track all de-identification actions
- **Reversible Mapping**: Maintain internal correlation for result delivery

### Security Controls

**Data Protection Measures:**

- **Encrypted Storage**: All received studies encrypted at rest
- **Secure Transmission**: TLS encryption for all cloud communications
- **Access Controls**: Role-based permissions for system access
- **Audit Logging**: Comprehensive tracking of all data access and transfers

## System Monitoring

### Real-time Study Monitoring

**Live Status Updates:**

- Study reception progress indicators
- Real-time DICOM transfer status
- Quality control processing updates
- Cloud upload progress tracking

### Performance Metrics

**Key Metrics Tracked:**

- Studies received per hour/day
- Average processing time by study type
- Quality control pass/fail rates
- Network throughput and latency
- Storage utilization trends

## Troubleshooting

### Common Ingestion Issues

**DICOM Connection Problems:**

- Verify AE Title configuration matches PACS settings
- Check network connectivity and firewall rules
- Confirm port availability and accessibility
- Validate DICOM protocol compatibility

**Study Reception Issues:**

- Review PACS routing rule configuration
- Check Agent storage capacity and availability
- Verify study format and DICOM compliance
- Monitor network bandwidth and performance

**Quality Control Failures:**

- Review specific QC failure reasons in detailed reports
- Check image quality and protocol compliance
- Verify sequence parameters meet requirements
- Consider manual override for edge cases

### Getting Support

**Diagnostic Information:**

- Export study reception logs
- Provide QC report details
- Share DICOM configuration parameters
- Include network and system specifications

## Tips & Best Practices

### Optimal Ingestion Performance

**Configuration Recommendations:**

- Set up specific routing rules to avoid unnecessary study transfers
- Monitor storage capacity and implement automated cleanup
- Configure appropriate network timeouts for large studies
- Schedule maintenance during low-volume periods

**Quality Control Optimization:**

- Regularly review QC failure patterns to identify upstream issues
- Customize QC parameters based on your specific protocols
- Work with imaging technologists to improve scan quality
- Use QC reports to provide feedback to scanning teams

### Workflow Integration

**PACS Integration Best Practices:**

- Test routing rules with small volumes before full deployment
- Coordinate with PACS administrators for optimal configuration
- Implement gradual rollout by scanner or protocol type
- Monitor initial performance and adjust parameters as needed

**Study Management Efficiency:**

- Use filtering and search capabilities to locate specific studies
- Set up automated notifications for critical status changes
- Regularly review and clean up completed studies
- Maintain adequate storage margins for peak volumes

---

_Last updated: August 16, 2025_
