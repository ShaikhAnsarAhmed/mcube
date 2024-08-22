import LandinBannaer from "@/components/global/landingBanner";
import MobileAttendanceApp from "@/components/Products/MobileAttendanceApp";
import React from "react";

export const metadata = {
  metadataBase: new URL("https://mcube.consulting/"),
  title: "Mobile Attendance App",
  description:
    "MCube is specialize in Oracle ERP implementations and have an affiliate company that masters Web Development, Software Development and Digital Marketing",

  openGraph: {
    title: "MCube is a leading Digital Services and Consulting Company.",
    description:
      "MCube is specialize in Oracle ERP implementations and have an affiliate company that masters Web Development, Software Development and Digital Marketing",
    url: "https://mcube.consulting",
    siteName: "MCUBE CONSULTING",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpeg",
        // secureUrl:
        //   "https://raw.githubusercontent.com/gitdagray/my-blogposts/main/images/og-card.png",
        width: 1200,
        height: 630,
        alt: "Preview image for Mcube Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "MCUBE CONSULTING",
    title: "MCube is a leading Digital Services and Consulting Company.",
    description:
      "MCube is specialize in Oracle ERP implementations and have an affiliate company that masters Web Development, Software Development and Digital Marketing",
    creator: "MCUBE CONSULTING",
    images: {
      url: "/twitter-image.jpeg",
      alt: "Preview image for Mcube Consulting",
    },
  },
};

function MobileAttendance() {
  return (
    <div>
      <LandinBannaer title="Mobile Attendance App" />
      <div className="py-10">
        <MobileAttendanceApp />
      </div>
    </div>
  );
}

export default MobileAttendance;
