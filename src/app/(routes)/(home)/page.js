import Image from "next/image";
import HomePage from "@/components/Home/Hero";
import Shortabout from "@/components/Home/shortabout";

export const metadata = {
  title: "MCube is a leading Digital Services and Consulting Company.",
  description:
    "MCube is specialize in Oracle ERP implementations and have an affiliate company that masters Web Development, Software Development and Digital Marketing",
};

export default function Home() {
  return (
    <>
      <HomePage />
      <Shortabout />
    </>
  );
}
