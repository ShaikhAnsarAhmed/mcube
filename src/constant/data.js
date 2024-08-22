export const productsData = [
  {
    title: "  Mobile Attendance App",
    LinkHref: "/MobileAttendance",
  },
  {
    title: "CMS Software",
    LinkHref: "/CMSSoftware",
  },
  {
    title: "ERP for Schools",
    LinkHref: "/ERPforSchools",
  },
];

export const NavData = [
  {
    title: "Home",
    LinkHref: "/",
  },
  {
    title: "About",
    LinkHref: "/About-us",
  },
  {
    title: "Services",
    redirect: "#",
    subNav: [
      {
        title: "ERP",
        redirect: "#",
        subToSubNav: [
          {
            title: "Oracle eBusiness Suite (EBS) ",
            LinkHref: "/EBS",
          },
          {
            title: "Oracle ERP Cloud",
            LinkHref: "/OracleERPCloud",
          },
          {
            title: "Project Management",
            LinkHref: "/project-management",
          },
          {
            title: "Data Migration",
            LinkHref: "/data-migration",
          },
          {
            title: "Managed Services",
            LinkHref: "/managed-services",
          },
          {
            title: "Upgrades",
            LinkHref: "/upgrades",
          },
          {
            title: "Reporting",
            LinkHref: "/reporting",
          },
          {
            title: "Cutover Management",
            LinkHref: "/cutover-management",
          },
          {
            title: "Custom Extensions & Integrations",
            LinkHref: "/custom-extensions",
          },
          {
            title: "Training",
            LinkHref: "/treaning",
          },
        ],
      },
      {
        title: "Developement and Marketing",
        redirect: "#",
        subToSubNav: [
          {
            title: "Website Design & Development",
            LinkHref: "/website-design",
          },
          {
            title: "Software Development",
            LinkHref: "/software-development",
          },
          {
            title: "Mobile App Development",
            LinkHref: "/mobile-app-developement",
          },
          {
            title: "Digital Marketing",
            LinkHref: "/digital-marketing",
          },
        ],
      },
    ],
  },
  {
    title: "Products",
    redirect: "#",
    subNav: [
      {
        LinkHref: "/mobile-attendance-app",
        title: " Mobile Attendance App",
      },
      { LinkHref: "/cms-for-schools", title: "CMS Software" },
      { LinkHref: "/m-crm", title: "M-CRM ERP " },
    ],
  },

  {
    title: "Contact Us",
    LinkHref: "/contact-us",
  },
  {},
];
