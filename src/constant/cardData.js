import {
  FaBookReader,
  FaChartLine,
  FaChromecast,
  FaExpeditedssl,
  FaFileInvoice,
  FaLayerGroup,
  FaMendeley,
  FaRegCalendarAlt,
  FaSignal,
  FaSitemap,
  FaTeamspeak,
  FaUpload,
  FaUsb,
  FaUserSecret,
  FaUsers,
  FaWpforms,
} from "react-icons/fa";
import {
  AiOutlineCloudServer,
  AiOutlineGlobal,
  AiOutlineFundView,
  AiOutlineSchedule,
  AiOutlineDeploymentUnit,
  AiOutlineFieldTime,
  AiOutlineCluster,
  AiOutlineSafety,
  AiOutlineApi,
  AiOutlineSisternode,
} from "react-icons/ai";
import {
  SiConvertio,
  SiGoogleadsense,
} from "react-icons/si";
import { RiAdminFill, RiDashboardFill, RiFeedbackLine } from "react-icons/ri";
import { HiDocumentReport } from "react-icons/hi";
import { GiArchiveResearch, GiConfirmed, GiHumanTarget } from "react-icons/gi";
import { MdConfirmationNumber, MdDesignServices, MdSchool } from "react-icons/md";
import { LiaChalkboardTeacherSolid, LiaMoneyCheckSolid } from "react-icons/lia";
import { FaChildren } from "react-icons/fa6";
import { PiExam } from "react-icons/pi";
import { IoLibrarySharp } from "react-icons/io5";

const EBSData = [
  {
    title: "Business Process Review",
    icon: <FaBookReader className=" group-hover:text-white text-3xl" />,
    desc: "Our consultants conduct a thorough analysis of your current business processes to identify gaps and opportunities for improvement. We work with your team to design a future-state  business process that aligns with your business objectives.",
  },
  {
    title: "System Design & Configuration",
    icon: <FaLayerGroup className=" group-hover:text-white text-3xl" />,
    desc: "We design and the Oracle eBusiness Suite ERP system to meet your specific business requirements. Our consultants work closely with your team to ensure that the system is fully integrated with your existing business processes.",
  },
  {
    title: "Data Migration",
    icon: <FaUpload className=" group-hover:text-white text-3xl" />,
    desc: "  We provide data migration services to ensure that your existing data is accurately transferred to the new system. Our consultants follow industry best practices to ensure data integrity and security.",
  },
  {
    title: " Testing",
    icon: <FaUsb className=" group-hover:text-white text-3xl" />,
    desc: "  Our consultants conduct rigorous testing to ensure that the system is functioning as expected. We conduct various types of testing, including unit testing, integration testing, and user acceptance testing.",
  },
  {
    title: "Training",
    icon: <FaChromecast className=" group-hover:text-white text-3xl" />,
    desc: " We provide comprehensive training to your team to ensure that they are proficient in using the new system. Our training is customized to meet your specific needs and includes both classroom and hands-on training.",
  },
  {
    title: "Ongoing Support",
    icon: <FaTeamspeak className=" group-hover:text-white text-3xl" />,
    desc: " We provide ongoing support to ensure that your system is running smoothly. Our support services include issue resolution, system maintenance, and system enhancement.",
  },
];

const serviceData = [
  {
    linkSrc: "/EBS",
    title: "Oracle eBusiness Suite (EBS)",
    icon: <AiOutlineGlobal className=" group-hover:text-white text-3xl" />,
  },
  {
    linkSrc: "/OracleERPCloud",
    title: "Oracle ERP Cloud",
    icon: <AiOutlineCloudServer className=" group-hover:text-white text-3xl" />,
  },
  {
    linkSrc: "/project-management",
    title: "Project Management",
    icon: <AiOutlineFundView className=" group-hover:text-white text-3xl" />,
  },
  {
    linkSrc: "/data-migration",
    title: "Data Migration",
    icon: (
      <AiOutlineDeploymentUnit className=" group-hover:text-white text-3xl" />
    ),
  },
  {
    linkSrc: "/managed-services",
    title: "Managed Services",
    icon: <AiOutlineSchedule className=" group-hover:text-white text-3xl" />,
  },
  {
    linkSrc: "/upgrades",
    title: "Upgrades",
    icon: <AiOutlineSafety className=" group-hover:text-white text-3xl" />,
  },
  {
    linkSrc: "/reporting",
    title: "Reporting",
    icon: <AiOutlineFieldTime className=" group-hover:text-white text-3xl" />,
  },
  {
    linkSrc: "/cutover-management",
    title: "Cutover Management",
    icon: <AiOutlineCluster className=" group-hover:text-white text-3xl" />,
  },

  {
    linkSrc: "/training",
    title: "Training",
    icon: <AiOutlineApi className=" group-hover:text-white text-3xl" />,
  },
  {
    linkSrc: "/custom-extensions",
    title: "Custom Extensions & Integrations",
    icon: <AiOutlineSisternode className=" group-hover:text-white text-3xl" />,
  },
];

const aboutCardData = [
  {
    title: "Integrity",
    desc: "We are committed to upholding the highest ethical standards in all our interactions with our clients and partners.",
    icon: <FaExpeditedssl className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Excellence",
    desc: " We strive for excellence in everything we do, and are always looking for ways to improve and innovate.",
    icon: <FaChartLine className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Collaboration",
    desc: "We work closely with our clients and partners to achieve shared goals and deliver the best possible outcomes.",
    icon: <FaUsers className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Agility",
    desc: "We are responsive and adaptable, and can quickly adjust our approach to meet changing business needs.",
    icon: <FaMendeley className=" group-hover:text-white text-3xl" />,
  },
];
const oracalERPCloudeCardData = [
  {
    title: " Experienced and certified consultants",
    desc: " Our team of experienced consultants has a deep understanding of business transformation and the tools and technologies required to make it a success.",
    icon: <FaUserSecret className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Tailored approach",
    desc: " We take a tailored approach to each and every project, ensuring that your business transformation is unique to your organization and its specific needs.",
    icon: <FaLayerGroup className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Results-driven approach",
    desc: " Our focus is on delivering real, tangible results for our clients, and we measure our success by the positive impact we have on their bottom line.",
    icon: <FaSignal className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Comprehensive services",
    desc: "Our business transformation services cover a wide range of areas, from process optimization and technology implementation to change management and continuous improvement.",
    icon: <FaSitemap className=" group-hover:text-white text-3xl" />,
  },
];
const projectManagementData = [
  {
    title: " Project Planning",
    desc: "",
    icon: <FaLayerGroup className=" group-hover:text-white text-3xl" />,
    listData: [
      "Detailed project planning is done, which includes creating a work breakdown structure (WBS) and defining project tasks and activities",
      "The project schedule is developed, including the critical path, dependencies, and milestones",
      "Resource planning is done, and resource allocation is identified",
      "Risk management plan is created, including risk identification, risk analysis, and risk response plan ",
      "Communication plan is created, which outlines the communication channels, frequency, and stakeholders",
    ],
  },
  {
    title: "Project Execution",
    desc: " ",
    icon: <FaSignal className=" group-hover:text-white text-3xl" />,
    listData: [
      "The project work is executed according to the project plan",
      "The project team members are kept informed of progress and status regularly",
      "Scope changes are managed effectively using change control processes",
      "Quality control is done at each stage of the project to ensure that deliverables meet the required quality standards",
      "Risks are monitored and managed throughout the project",
    ],
  },
  {
    title: "Project Monitoring And Control",
    desc: "",
    icon: <FaSitemap className=" group-hover:text-white text-3xl" />,
    listData: [
      "Progress is tracked against the project plan, and deviations are identified and addressed promptly",
      "Project performance is measured against predefined metrics",
      "Issues and risks are monitored and controlled",
      "Change requests are reviewed, assessed, and managed",
      "Communication with stakeholders is maintained to ensure their engagement and buy-in",
    ],
  },
  {
    title: "Project Closure",
    desc: "",
    icon: <FaSitemap className=" group-hover:text-white text-3xl" />,
    listData: [
      "The project is closed formally with a final review meeting",
      "The project deliverables are accepted by the client",
      "A post-implementation review is conducted to identify lessons learned and best practices",
      "Project documentation is archived, and knowledge transfer is done to ensure that the project's outcome is sustainable",
    ],
  },
  {
    title: " Project Initiation",
    desc: "",
    icon: <FaUserSecret className=" group-hover:text-white text-3xl" />,
    listData: [
      "The project is initiated with a formal kickoff meeting",
      "The project goals, objectives, scope, and deliverables are defined",
      "The project team is identified and roles and responsibilities are assigned",
      "The project plan, timeline, and budget are developed",
    ],
  },
];
const DataMigrationData = [
  {
    title: "Planning Phase",
    desc: "",
    icon: <FaLayerGroup className=" group-hover:text-white text-3xl" />,
    listData: [
      "Identify the source system(s) and data to be migrated",
      "Define the migration scope, timeline, and budget",
      "Determine the target Oracle ERP system and versions",
      "Identify the data migration requirements, including data quality and format standards",
      "Determine the data migration strategy, including data mapping, conversion rules, and data validation",
    ],
  },
  {
    title: "Extraction Phase",
    desc: " ",
    icon: <FaSignal className=" group-hover:text-white text-3xl" />,
    listData: [
      "Extract the data from the source system(s) in accordance with the migration requirements",
      "Cleanse and validate the data to ensure it meets the data quality standards",
      "Convert the data to the required format, using any necessary transformation or mapping tools",
      "Perform a data reconciliation to ensure that the data extracted is complete and accurate",
    ],
  },
  {
    title: "Loading Phase",
    desc: "",
    icon: <FaSitemap className=" group-hover:text-white text-3xl" />,
    listData: [
      "Configure the target Oracle ERP system to accept the data",
      "Load the migrated data into the Oracle ERP system",
      "Verify that the data is correctly loaded and conforms to the data quality standards",
      "Conduct a data reconciliation to ensure that the data loaded matches the source system(s) data",
    ],
  },
  {
    title: "Validation Phase",
    desc: "",
    icon: <FaSitemap className=" group-hover:text-white text-3xl" />,
    listData: [
      "Test the migrated data in the Oracle ERP system to ensure that it is working as expected",
      "Conduct end-to-end testing to ensure that the migrated data is correctly integrated into the Oracle ERP system",
      "Verify that all reports and interfaces are working correctly with the migrated data",
      "Conduct user acceptance testing to ensure that the migrated data meets the business requirements",
    ],
  },
  {
    title: "Post-Migration Phase",
    desc: "",
    icon: <FaUserSecret className=" group-hover:text-white text-3xl" />,
    listData: [
      "Finalize the data migration project and obtain formal acceptance from the stakeholders",
      "Develop a data maintenance plan to ensure that the migrated data is updated and maintained correctly in the Oracle ERP system",
      "Archive the legacy data and decommission the source system(s) as required",
      "Conduct a post-implementation review to identify any issues and areas for improvement",
    ],
  },
];
const ManagedServicesData = [
  {
    title: "Service Delivery Principles",
    desc: "",
    icon: <FaLayerGroup className=" group-hover:text-white text-3xl" />,
    listData: [
      "Define and agree on the scope of services to be delivered, including the service level agreements (SLAs), metrics, and reporting requirements",
      "Establish a single point of contact for service requests and incidents",
      "Ensure that service requests and incidents are logged, tracked, and resolved within the agreed SLAs",
      "Continuously review and improve the service delivery processes to optimize service quality and delivery efficiency",
    ],
  },
  {
    title: "Service Desk Principles",
    desc: " ",
    icon: <FaSignal className=" group-hover:text-white text-3xl" />,
    listData: [
      "Establish a 24/7 service desk staffed by certified and experienced technicians",
      "Implement robust incident management, problem management, and change management processes to ensure that service requests and incidents are resolved promptly and effectively",
      "Ensure that the service desk has access to the latest tools and technologies to support incident resolution and root cause analysis",
    ],
  },
  {
    linkSrc: "Monitoring And Management Principles",
    title: "Loading Phase",
    desc: "",
    icon: <FaSitemap className=" group-hover:text-white text-3xl" />,
    listData: [
      "Implement proactive monitoring and management of the IT infrastructure, applications, and services to identify and resolve issues before they impact the business",
      "Use advanced tools and technologies to monitor and manage the IT environment, including network and server monitoring, security monitoring, and application performance monitoring",
      "Continuously review and optimize the monitoring and management processes to enhance the reliability and performance of the IT environment",
    ],
  },
  {
    title: "Security Principles",
    desc: "",
    icon: <FaSitemap className=" group-hover:text-white text-3xl" />,
    listData: [
      "Implement robust security measures to protect the IT environment from external and internal threats",
      "Ensure that the security policies and procedures are regularly reviewed and updated to meet the latest industry standards and compliance requirements",
      "Conduct regular security assessments and penetration testing to identify vulnerabilities and remediate them proactively",
    ],
  },
  {
    title: "Reporting And Analytics Principles",
    desc: "",
    icon: <FaUserSecret className=" group-hover:text-white text-3xl" />,
    listData: [
      "Provide regular reports to the customer on the performance of the IT environment, including incident resolution times, availability, and performance metrics",
      "Use analytics tools to analyze the performance data and identify trends and insights that can be used to optimize the IT environment further",
    ],
  },
];
const ManagedServicesStepsData = [
  {
    title: "Initiation And Planning",
    desc: "Define the scope of services, establish the service delivery model, and develop the SLAs and reporting requirements",
    icon: <FaLayerGroup className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Transition",
    desc: "Migrate the IT environment from the customer's IT team to the Managed Service Provider's team ",
    icon: <FaSignal className=" group-hover:text-white text-3xl" />,
  },
  {
    linkSrc: "Monitoring And Management Principles",
    title: "Operation",
    desc: "Provide the agreed services, monitor and manage the IT environment, and resolve service requests and incidents proactively",
    icon: <FaSitemap className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Continuous Improvement",
    desc: "Continuously review and improve the service delivery processes to optimize service quality and delivery efficiency, and implement best practices and emerging technologies to enhance the IT environment's reliability and performance.",
    icon: <FaSitemap className=" group-hover:text-white text-3xl" />,
  },
];
const UpgradesData = [
  {
    title: "Assessment And Planning",
    desc: "",
    icon: <FaLayerGroup className=" group-hover:text-white text-3xl" />,
    listData: [
      "Identify the business processes and functionality that need to be migrated from EBS to Oracle Cloud ERP",
      "Evaluate the readiness of the existing IT infrastructure, including hardware, software, and databases",
      "Determine the scope of the project, including timelines, budgets, and resources required",
      "Develop a migration plan that outlines the key activities, dependencies, and risks associated with the upgrade process",
    ],
  },
  {
    title: "Data Migration",
    desc: "",
    icon: <FaSignal className=" group-hover:text-white text-3xl" />,
    listData: [
      "Extract data from the existing EBS environment and map it to the corresponding Oracle Cloud ERP data structures",
      "Validate and cleanse the data to ensure accuracy and completeness",
      "Load the data into the Oracle Cloud ERP environment using the appropriate migration tools and techniques",
    ],
  },
  {
    linkSrc: "Monitoring And Management Principles",
    title: "Customization And Configuration",
    desc: "",
    icon: <FaSitemap className=" group-hover:text-white text-3xl" />,
    listData: [
      "Identify any customizations that need to be migrated from EBS to Oracle Cloud ERP",
      "Determine the best approach for configuring Oracle Cloud ERP to meet the business requirements",
      "Develop and test any required customizations or extensions to the standard Oracle Cloud ERP functionality",
    ],
  },
  {
    title: "Testing And Validation",
    desc: "",
    icon: <FaSitemap className=" group-hover:text-white text-3xl" />,
    listData: [
      "Conduct comprehensive testing to ensure that the migrated data, customizations, and configurations are working as expected",
      "Validate that the business processes and functionality are functioning correctly and meeting the desired outcomes",
    ],
  },
  {
    title: "",
    desc: "Deployment And Go-Live",
    icon: <FaSitemap className=" group-hover:text-white text-3xl" />,
    listData: [
      "Plan and execute the cutover from EBS to Oracle Cloud ERP, ensuring minimal disruption to the business",
      "Train end-users on the new system and provide ongoing support to address any issues or concerns that arise during the post-go-live period",
    ],
  },
];

const UpgradsDataTwo = [
  {
    title: "Functionality",
    desc: "Evaluate the extent to which the business processes and functionality in EBS need to be migrated to Oracle Cloud ERP, and identify any gaps that may require customizations or extensions.",
    icon: <FaLayerGroup className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Customizations",
    desc: "Determine the best approach for migrating any customizations or extensions from EBS to Oracle Cloud ERP, and assess the impact of any changes to the customizations.",
    icon: <FaSignal className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Data",
    desc: "Ensure that the data extracted from EBS is complete, accurate, and appropriately mapped to the corresponding Oracle Cloud ERP data structures.",
    icon: <FaSitemap className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Integration",
    desc: "Consider any third-party systems or applications that need to be integrated with Oracle Cloud ERP, and assess the impact of any changes to the integration points.",
    icon: <FaSitemap className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Testing",
    desc: "Conduct comprehensive testing to ensure that the migrated data, customizations, and configurations are working as expected and meeting the desired outcomes.",
    icon: <FaSitemap className=" group-hover:text-white text-3xl" />,
  },
];

const ReportingDataOne = [
  {
    title: "User-Friendly Interface",
    desc: "OTBI has a drag-and-drop interface that makes report creation easy, even for users who are not technically inclined.",
    icon: <FaLayerGroup className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Real-Time Data Access",
    desc: "OTBI allows users to access real-time data directly from their Oracle ERP system, so reports always reflect the latest information.",
    icon: <FaSignal className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Interactive Dashboards",
    desc: "OTBI allows users to create interactive dashboards that provide a consolidated view of multiple reports and KPIs.",
    icon: <FaSitemap className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Mobile Compatibility",
    desc: "OTBI is compatible with mobile devices, so users can access and view reports on-the-go.",
    icon: <FaSitemap className=" group-hover:text-white text-3xl" />,
  },
];
const ReportingDataTwo = [
  {
    title: "Advanced Formatting Options",
    desc: "BIP allows users to create highly customized reports with advanced formatting options such as watermarks, conditional formatting, and table of contents.",
    icon: <FaLayerGroup className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Integration With Multiple Data Sources",
    desc: "BIP can integrate data from multiple sources such as XML, databases, and spreadsheets, making it easy to create complex reports with data from different sources.",
    icon: <FaSignal className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Report Bursting",
    desc: "BIP allows users to create and distribute multiple versions of the same report to different stakeholders based on their roles or preferences.",
    icon: <FaSitemap className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Automated Delivery",
    desc: "BIP can automatically deliver reports to stakeholders via email, FTP, or other channels based on pre-defined schedules.",
    icon: <FaSitemap className=" group-hover:text-white text-3xl" />,
  },
];
const ReportingDataThree = [
  {
    title: "Needs Assessment",
    desc: "We start by assessing our client's reporting needs and requirements. This involves understanding their business processes, data sources, and reporting objectives.",
    icon: <FaLayerGroup className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Solution Design",
    desc: "Based on the client's reporting requirements, we design a customized solution that leverages the best Oracle reporting tools for their needs. This includes selecting the right reporting tools and creating a reporting architecture that ensures data accuracy, security, and scalability.",
    icon: <FaSignal className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Report Development",
    desc: "Once the solution design is finalized, our team of Oracle experts develops the reports using the selected reporting tools. We ensure that the reports are accurate, easy to use, and meet the client's specific reporting requirements.",
    icon: <FaSitemap className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Testing And Validation",
    desc: "Once the reports are tested and validated, we deploy them in the client's environment and provide training to their users. We ensure that the users understand how to use the reports effectively and get the most out of their reporting solution.",
    icon: <FaSitemap className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Ongoing Support",
    desc: "We rigorously test the reports to ensure that they are accurate, reliable, and meet the client's requirements. This includes testing the reports for data accuracy, performance, and functionality.",
    icon: <FaSitemap className=" group-hover:text-white text-3xl" />,
  },
];
const CutoverManagementData = [
  {
    title: "Cutover Plan Development",
    desc: "The first step in cutover management is to develop a comprehensive cutover plan that outlines all the tasks, timelines, and dependencies required for a successful cutover. The plan should include a detailed schedule of activities, risk assessments, and contingency plans.",
    icon: <FaLayerGroup className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Data Migration",
    desc: "The next step is to migrate data from the old system to the new system. This involves extracting data from the old system, validating and transforming the data, and then loading it into the new system.",
    icon: <FaSignal className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "User Acceptance Testing",
    desc: "Before the cutover, it's critical to perform user acceptance testing (UAT) to ensure that the new system meets the business requirements and is functioning as expected. This involves testing all the business processes and transactions in the new system to ensure that they are accurate and complete.",
    icon: <FaSitemap className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Cut-Off",
    desc: "The cut-off is the point at which the old system is no longer used, and the new system becomes operational. This involves a series of activities, including final data migration, verification, and validation, and switching over to the new system.",
    icon: <FaSitemap className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Post-Cutover Activities",
    desc: "After the cutover, it's essential to perform post-cutover activities to ensure that the new system is functioning correctly. This includes validating the data, testing the business processes, and addressing any issues that arise.",
    icon: <FaSitemap className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Hypercare Support",
    desc: "Hypercare support is a critical aspect of cutover management. It involves providing additional support to users during the initial period after the cutover to ensure that they can operate the new system effectively.",
    icon: <FaSitemap className=" group-hover:text-white text-3xl" />,
  },
];
const CustomExtensionsData = [
  {
    title: "Requirements Gathering",
    desc: "The first step is to gather requirements for the custom extension or integration. This involves understanding the business processes, data sources, and objectives for the custom development.",
    icon: <FaLayerGroup className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Solution Design",
    desc: "Based on the requirements, we design a customized solution that leverages the best Oracle tools and technologies for the specific use case. This includes selecting the right integration tools and creating a design that ensures data accuracy, security, and scalability.",
    icon: <FaSignal className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Development",
    desc: "Once the solution design is finalized, our team of Oracle experts develops the custom extension or integration using the selected tools. We ensure that the code is high quality, easy to maintain, and meets the specific requirements.",
    icon: <FaSitemap className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Testing And Validation",
    desc: "We rigorously test the custom extension or integration to ensure that it meets the business requirements, is reliable, and functions correctly. This includes testing the custom development for data accuracy, performance, and functionality.",
    icon: <FaSitemap className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Implementation And Deployment",
    desc: "Once the custom extension or integration is tested and validated, we deploy it in the client's environment. We ensure that it is properly integrated with the existing ERP system and other systems and meets the client's specific requirements.",
    icon: <FaSitemap className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Ongoing Support",
    desc: "We provide ongoing support to our clients to ensure that their custom extension or integration continues to meet their evolving needs. This includes troubleshooting issues, providing maintenance and upgrades, and ensuring that the custom development remains up-to-date with the latest Oracle technologies.",
    icon: <FaSitemap className=" group-hover:text-white text-3xl" />,
  },
];
const TrainingData = [
  {
    title: "Understanding The Client's Needs Requirements Gathering",
    desc: "It is essential to understand the client's specific needs and requirements before designing the training program. This includes understanding the client's business processes, system configuration, and overall training goals.",
    icon: <FaLayerGroup className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Course Content",
    desc: "Oracle offers a wide range of courses covering various aspects of the ERP system. You need to carefully select the courses that best meet the client's needs and ensure that the course content is relevant and up-to-date.",
    icon: <FaSignal className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Delivery Methods",
    desc: "Oracle training is available in various formats, including online courses, classroom training, virtual classrooms, and self-paced learning. You need to select the delivery method that is most appropriate for the client's needs, taking into account factors such as location, time constraints, and budget.",
    icon: <FaSitemap className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Trainers",
    desc: "Oracle training should be delivered by certified trainers who are experts in the ERP system. It is essential to select trainers who have extensive experience in implementing, configuring, and customizing the system, and who can provide valuable insights and best practices based on their real-world experience.",
    icon: <FaSitemap className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Training Environment",
    desc: "It is important to provide a suitable training environment that is conducive to learning. This includes selecting a suitable venue, providing the necessary training equipment, and ensuring that the training environment is comfortable and free from distractions.",
    icon: <FaSitemap className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Support",
    desc: "It is essential to provide support to participants during and after the training program. This includes providing access to training materials, answering questions, and providing ongoing support to help participants apply their new skills and knowledge in the workplace.",
    icon: <FaSitemap className=" group-hover:text-white text-3xl" />,
  },
];

const CMSsoftwareData = [
  {
    title: "Admission Management",
    desc: "Our CMS makes admission automation very easy at the level of course specifications and seat allocation, fee structure, and eligibility criteria. It offers integration with financial modules seamlessly and supports different admission types such as merit-based and entrance examinations.",
    icon: <FaWpforms className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Timetable Automation",
    desc: "It generates and manages automated schedules, considering various factors such as course requirements, the availability of faculty, and infrastructure constraints. It facilitates dynamic adjustments and generates detailed reporting related to timetable changes",
    icon: <FaRegCalendarAlt className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Learning Management System (LMS)",
    desc: "Our LMS empowers institutions with tools for digital content creation, delivery, tracking of performance, and assessment. It helps students get learning material anytime, thus facilitating flexible and convenient learning experiences from anywhere",
    icon: (
      <LiaChalkboardTeacherSolid className=" group-hover:text-white text-3xl" />
    ),
  },
  {
    title: " Student Attendance",
    desc: "Attendance management: The attendance module supports multi-modal attendance capture from simple manual entries at one end to completely automated, bio.metric-based systems at the other. It also maintains a complete record of attendance and generates detailed reports.",
    icon: <FaChildren className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Examination Management",
    desc: "The examination module automates the whole examination process of scheduling, invigilation, compilation of results, and re-evaluation. It supports a diversity of examination formats and ensures efficient, error-free examination workflows.",
    icon: <PiExam className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Placement Services",
    desc: "Our CMS manages campus placement processes through Job Posting, Student Registrations, Resume Formations, and Placement Events. It also offers services in the areas of Career Guidance and Pre-Screening",
    icon: <MdDesignServices className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Academic Management",
    desc: "The academic module automates all academic activities like course settings, syllabus patterns, concurrent evaluations, and progress monitoring. It aids various programs in education and makes the whole system paperless, which saves a lot of time and reduces costs.",
    icon: <MdSchool className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Research Management",
    desc: "It facilitates management of research projects, publications, conferences, patents, and faculty development programmes. It also automates workflows in research courses and funded research project management.",
    icon: <GiArchiveResearch className=" group-hover:text-white text-3xl" />,
  },

  {
    title: "Library and Infrastructure Management",
    desc: "These modules automate the management of library resources and physical infrastructure—essentially focused on efficient use and easy accessibility. They fully support the life cycle of library items and infrastructure assets from procurement to maintenance.",
    icon: <IoLibrarySharp className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Human Resources and Employee Management",
    desc: "The human resource module automates the process related to recruitment, onboarding, training, attendance, leave management, and payroll processing. It ensures efficient management of human resources to support employee satisfaction and productivity.",
    icon: <GiHumanTarget className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Feedback and Performance Evaluation",
    desc: "Our CMS contains modules for feedback collection and analysis, performance evaluation based on customizable templates and indicators—this will come in handy in the process of continuous improvement while keeping up with the high standards of education and administration",
    icon: <RiFeedbackLine className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Financial Management",
    desc: "The automation of all financial transactions is provided through our finance module so as to provide consolidated Balance Sheets, P&L Statement, Cash Flow Analysis, and Budgetary Management. It has the advantage of amalgamation with other modules for correct financial reporting. It supports comprehensive financial planning and offers real-time financial insights.",
    // Additionally, it ensures compliance with financial regulations and standards.
    icon: <LiaMoneyCheckSolid className=" group-hover:text-white text-3xl" />,
  },
];

const mCrm = [
  {
    title: "Dashboard",
    desc: `Dashboard where we will see From here, the number of leads, quotations & Orders are there and for confirmed orders across pre-order and period wise.

The dashboard also displays a funnel chart, providing visualisation.

A list of all the pending activities allocated to employees

A table containing list of pending activities assigned to employees.`,
    icon: <RiDashboardFill className=" group-hover:text-white text-3xl" />,
  },

  {
    title: "Leads",
    desc: `Leads: This is the section where we can create new leads or check out lists of suspects that have been gathered from various sources such as calls, site visits and referrals.

This is where we can update lead details as well.

Using the list marketing is done by targeting these customers.

Convert to Opportunity: If it is a potential customer.

But if the customer is not willing, we close lead`,
    icon: <SiGoogleadsense className=" group-hover:text-white text-3xl" />,
  },

  {
    title: " Order Confirmation",
    desc: `This section displays only the lists of customers.

Now the customer would send through a purchase order.

With the quote that we raised in previous steps, we can create a new order.

Therefore, we obsiously have to update only the bare minimum info.

We can also create the invoices in order detail.

When everything is okay we click the confirm order button.`,
    icon: <GiConfirmed className=" group-hover:text-white text-3xl" />,
  },

  {
    title: "Invoices",
    desc: `View Invoices— As we can see the same all invoices and as well their details.

Invoice can be downloaded or take the print of it.

Another thing we can see is payment status.

Issue PaymentsIt can also create new payments from here it maintains all the transaction records.

This is also the place where new payments can be issued; it keeps a history of every inch coming in and going out.

Issue new payments from here it stores all the payment records.`,
    icon: <FaFileInvoice className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Reports",
    desc: `In the sections of the report, there are three categories DSR,Sales Reports,Stock Reports,DSR stands for daily sales reports and admin can check how many sales are done by employees.
In the Sales report admin can download the pdf of monthly quotation sales done by an employee.
In Stock reports, admin can see how many stocks are there in each warehouse.`,
    icon: <HiDocumentReport className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Master",
    desc: `In the Master section admin can add/update leads, new/updated products, add BOM and production steps of a product, add Warehouse, add scaling units, product categories, add different materials, entries of all the employees etc.
`,
    icon: <RiAdminFill className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Confirmed Orders",
    desc: `We can view all confirmed orders list here in this given section. And you also noticed the details here

The confirm order section Order fulfillment executedat with delight of the customer.

Customers are invoiced for the Account teams

Here we can create an e-way bill.

View the Invoice details here

Inventory of items purchased by customer.

Delivery slip generated.

And all other costs such as were incurred in the deal.

Once the product is ready, you get a delivery slip.`,
    icon: <MdConfirmationNumber className=" group-hover:text-white text-3xl" />,
  },
  {
    title: "Opportunities",
    desc: `Here you will be able to view a list of potential customer leads/opportunities which have been converted into Opportunities. After a marketing plan executed for specific groups of potential buyers that had been prepared in advance — part expressed interest and was identified.

These are all leads in the OTHER version of a sales cycle… some evidence was given that they COULD have an interest.

Customer Details: Customer Visits, Services Provided and Estimates/Proposal share to Customers are Based on the Opportunity Detail Page. This is the stick method to follow under way.

Apart of deal agreement: disablement — This stage only focus on discussion regarding pricing and terms.

Once customer agrees to the terms and conditions it is taken into another path known as order confirmation.`,
    icon: <SiConvertio className=" group-hover:text-white text-3xl" />,
  },
];

export {
  mCrm,
  EBSData,
  serviceData,
  aboutCardData,
  oracalERPCloudeCardData,
  projectManagementData,
  DataMigrationData,
  ManagedServicesData,
  ManagedServicesStepsData,
  UpgradesData,
  UpgradsDataTwo,
  ReportingDataOne,
  ReportingDataTwo,
  ReportingDataThree,
  CutoverManagementData,
  CustomExtensionsData,
  TrainingData,
  CMSsoftwareData,
};
