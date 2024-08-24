import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/global/navBar";
import Footer from "@/components/global/footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.mcube.consulting"),
  title: "MCube is a leading Digital Services and Consulting Company.",
  description:
    "MCube is specialize in Oracle ERP implementations and have an affiliate company that masters Web Development, Software Development and Digital Marketing",

  openGraph: {
    title: "MCube is a leading Digital Services and Consulting Company.",
    description:
      "MCube is specialize in Oracle ERP implementations and have an affiliate company that masters Web Development, Software Development and Digital Marketing",
    url: "https://www.mcube.consulting",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer position="top-center" />
        <NavBar /> {children}
        <Footer />
      </body>
    </html>
  );
}
