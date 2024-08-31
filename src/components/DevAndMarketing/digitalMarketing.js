import React from "react";
import SubHeadingLeft from "../global/SubHeadingLeft";
import Heading from "../global/Heading";
import { VscSymbolKeyword } from "react-icons/vsc";
import { SiBrandfolder, SiContentstack, SiCrowdsource } from "react-icons/si";
import { TbFileLike, TbSeo, TbTargetArrow } from "react-icons/tb";
import CommonImageCard from "../global/imageCard";
import { GiInvisibleFace, GiPublicSpeaker } from "react-icons/gi";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaLink,
  FaLinkedinIn,
  FaPhotoVideo,
  FaTwitter,
} from "react-icons/fa";
import { TfiLayoutMediaLeft } from "react-icons/tfi";
import { RiAdvertisementLine, RiUserLocationLine } from "react-icons/ri";
import { FaMoneyBills } from "react-icons/fa6";
import { LuSignalHigh } from "react-icons/lu";
import { BiBookContent } from "react-icons/bi";
import { MdOutlineContentPasteSearch, MdOutlineEmail } from "react-icons/md";
import { PiCellSignalHighLight } from "react-icons/pi";
import { CiMoneyCheck1 } from "react-icons/ci";

const onPageSEOData = [
  {
    icon: <VscSymbolKeyword />,
    title: "Keyword Research",
    desc: "Identifying the right keywords to target in your content.",
  },
  {
    icon: <SiContentstack />,
    title: "Content Optimization",
    desc: "Ensuring that your content is well-structured and keyword-rich.",
  },
  {
    icon: <TbSeo />,
    title: "Technical SEO",
    desc: " Improving the website's speed, mobile-friendliness, and overall user experience.",
  },
];
const offPageSEOData = [
  {
    icon: <FaLink />,
    title: "Link Building",
    desc: "Acquiring high-quality backlinks to boost your website's authority.",
  },
  {
    icon: <TfiLayoutMediaLeft />,
    title: "Social Media Integration",
    desc: "Enhancing your SEO efforts by integrating social media signals.",
  },
  {
    icon: <RiUserLocationLine />,
    title: "Online Reputation Management",
    desc: " Ensuring that your brand has a positive online presence.",
  },
];
const benefitsSEOData = [
  {
    icon: <GiInvisibleFace />,
    title: "Increased Visibility",
    desc: "Higher rankings on search engines lead to more visibility.",
  },
  {
    icon: <FaMoneyBills />,
    title: "Cost-Effective Marketing",
    desc: "SEO is one of the most cost-effective marketing strategies.",
  },
  {
    icon: <LuSignalHigh />,
    title: "Higher Credibility",
    desc: " Websites that rank well are often perceived as more credible by users.",
  },
];
const youtubeGrowthData = [
  {
    icon: <FaPhotoVideo />,
    title: "Video SEO",
    desc: "Optimizing your videos to rank higher in YouTube search results.",
  },
  {
    icon: <MdOutlineContentPasteSearch />,
    title: "Content Strategy",
    desc: "Developing a content plan that aligns with your brand and resonates with your audience.",
  },
  {
    icon: <TbFileLike />,
    title: "Engagement Tactics",
    desc: " Using comments, likes, and  shares to boost engagement and visibility.",
  },
];
const leadApproachData = [
  {
    icon: <BiBookContent />,
    title: "Content Marketing",
    desc: "Creating valuable content that attracts potential leads.",
  },
  {
    icon: <MdOutlineEmail />,
    title: "Email Marketing",
    desc: "Using targeted email campaigns to nurture and convert leads.",
  },
  {
    icon: <RiAdvertisementLine />,
    title: "Paid Advertising",
    desc: " Running ads on platforms like Google and Facebook to attract interested prospects.",
  },
];
const leadBenefitsData = [
  {
    icon: <PiCellSignalHighLight />,
    title: "Increased Sales Opportunities",
    desc: "More leads mean more opportunities for sales.",
  },
  {
    icon: <TbTargetArrow />,
    title: "Targeted Marketing",
    desc: "Focuses on individuals who are more likely to convert.",
  },
  {
    icon: <CiMoneyCheck1 />,
    title: "Cost Efficiency",
    desc: "Reduces the cost per acquisition by focusing on high-quality leads.",
  },
];
const benefitsOfSocialData = [
  {
    icon: <SiBrandfolder />,
    title: "Increase Brand Awareness",
    desc: "Social media platforms are a great way to introduce your brand to a broad audience.",
  },
  {
    icon: <GiPublicSpeaker />,
    title: " Engage with Your Audience",
    desc: "Interacting with your customers on social media builds trust and loyalty.",
  },
  {
    icon: <SiCrowdsource />,
    title: "Drive Traffic to Your Website",
    desc: "Well-executed social media campaigns can direct significant traffic to your website.",
  },
  {
    icon: <BsFillFileBarGraphFill />,
    title: "Generate Leads and Sales",
    desc: "By targeting specific  audiences, social media ads can convert followers into customers.",
  },
];
const plateformCoveredData = [
  {
    icon: <FaFacebookF />,
    title: "Facebook Marketing",
    desc: "Target your audience with tailored ads and engaging content.",
  },
  {
    icon: <FaInstagram />,
    title: "Instagram Marketing",
    desc: "Use visual storytelling to connect with your followers.",
  },
  {
    icon: <FaLinkedinIn />,
    title: "LinkedIn Marketing",
    desc: "Reach professionals and businesses with LinkedIn's B2B marketing solutions.",
  },
  {
    icon: <FaTwitter />,
    title: "Twitter Marketing",
    desc: "Engage in real-time conversations and trends with Twitter marketing.",
  },
];

function DigitalMarketing() {
  return (
    <div className="py-5 sm:py-10 custom-container ">
      <Heading title="Digital Marketing Services" />
      <div className="flex flex-col ">
        <p className="md:text-xl py-4">
          This application provides attendance on a daily basis. Users can punch
          attendance using various options like WIFI, GPS (Geofencing), GPS
          (OnSite), Web, QrCode, Biometric, and selfie. It has a tracking system
          for mobile which tracks based on the GPS location of the user and the
          data is displayed in the software. It also provides multiple types of
          reports, for example, day-wise reports, late-in reports, punch-in
          address reports, etc.
        </p>
      </div>
      {/* social media marketing */}
      <div className="my-5">
        <Heading title="Overview of Social Media Marketing" />
        <div className="mt-5">
          <SubHeadingLeft title="What is Social Media Marketing?" />
        </div>
        <p className="md:text-xl py-4">
          This application provides attendance on a daily basis. Users can punch
          attendance using various options like WIFI, GPS (Geofencing), GPS
          (OnSite), Web, QrCode, Biometric, and selfie. It has a tracking system
          for mobile which tracks based on the GPS location of the user and the
          data is displayed in the software. It also provides multiple types of
          reports, for example, day-wise reports, late-in reports, punch-in
          address reports, etc.
        </p>
        {/* benefits of social media marketing */}

        <div className="my-5">
          <div className="2xl:hidden">
            <SubHeadingLeft title="Benefits of Social Media Marketing" />

            <p className="my-5 text-xl ">
              Social media marketing is an essential tool for businesses today.
              It allows you to:
            </p>
          </div>
          {/* right image */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-5 2xl:gap-x-10 items-center justify-between 2xl:items-start">
            <div className="flex flex-col col-span-1">
              <div className="my-3">
                <div className="2xl:block hidden">
                  <SubHeadingLeft title="Benefits of Social Media Marketing" />

                  <p className="my-5 text-xl ">
                    Social media marketing is an essential tool for businesses
                    today. It allows you to:
                  </p>
                </div>
                <CommonImageCard cardData={benefitsOfSocialData} />
              </div>
            </div>
            <img
              src="/services/social.png"
              alt=""
              className="w-full 2xl:h-[600px] 2xl:w-[750px] col-span-1 order-first sm:order-last "
            />
          </div>
        </div>

        {/* left image */}
        <div className="my-5">
          <div className="2xl:hidden block">
            <SubHeadingLeft title="Platforms Covered by Mcube" />

            <p className="my-5 text-xl ">
              Mcube offers expert social media marketing services across all
              major platforms:
            </p>
          </div>
          <div className="mt-5  grid grid-cols-1 sm:grid-cols-2 gap-x-5 2xl:gap-x-10 items-center justify-between 2xl:items-start">
            <div className="flex flex-col col-span-1">
              <div className="2xl:block hidden">
                <SubHeadingLeft title="Platforms Covered by Mcube" />

                <p className="my-5 text-xl ">
                  Mcube offers expert social media marketing services across all
                  major platforms:
                </p>
              </div>
              <div>
                <CommonImageCard cardData={plateformCoveredData} />
              </div>
            </div>
            <img
              src="/services/socialOne.png"
              alt=""
              className="w-full 2xl:h-[600px] 2xl:w-[750px] col-span-1 order-last sm:order-first"
            />
          </div>
        </div>
      </div>
      <div className="sm:pt-5">
        <div className="py-5 sm:py-10">
          <Heading title="SEO (Search Engine Optimization)" />
          <br />
          <p className="md:text-xl ">
            Search Engine Optimization (SEO) is the practice of optimizing your
            website to rank higher in search engine results pages (SERPs),
            thereby increasing organic traffic. SEO is crucial for ensuring that
            your business is visible to potential customers who are searching
            for products or services related to your business.
          </p>

          {/* on page SEO   left image */}
          <div className="my-5">
            <div className="2xl:hidden block">
              <SubHeadingLeft title="On-Page SEO Services" />

              <p className="my-5 text-xl ">
                Mcube offers comprehensive on-page SEO services that include:
              </p>
            </div>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-5 2xl:gap-x-10  items-center">
              <img
                src="/services/seo.png"
                alt=""
                className="w-full 2xl:h-[600px] 2xl:w-[750px] order-last sm:order-first"
              />
              <div className="flex flex-col">
                <div className="2xl:block hidden">
                  <SubHeadingLeft title="On-Page SEO Services" />

                  <p className="my-5 text-xl ">
                    Mcube offers comprehensive on-page SEO services that
                    include:
                  </p>
                </div>

                <div>
                  <CommonImageCard cardData={onPageSEOData} />
                </div>
              </div>
            </div>
          </div>
          {/*Off-page SEO  right image*/}
          <div className="my-5">
            <div className="2xl:hidden">
              <SubHeadingLeft title="Off-Page SEO Services" />

              <p className="my-5 text-xl ">
                Off-page SEO involves activities outside of your website that
                impact your rankings. Mcube's off-page SEO services include:
              </p>
            </div>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-5 2xl:gap-x-10 items-center">
              <div className="flex flex-col">
                <div className="2xl:block hidden">
                  <SubHeadingLeft title="Off-Page SEO Services" />

                  <p className="my-5 text-xl ">
                    Off-page SEO involves activities outside of your website
                    that impact your rankings. Mcube's off-page SEO services
                    include:
                  </p>
                </div>

                <div>
                  <CommonImageCard cardData={offPageSEOData} />
                </div>
              </div>
              <img
                src="/services/seoOne.png"
                alt=""
                className="w-full 2xl:h-[600px] 2xl:w-[750px] order-first sm:order-last"
              />
            </div>
          </div>
          {/*benefits of SEO  left image change*/}
          <div className="my-5">
            <div className="2xl:hidden">
              <SubHeadingLeft title="Benefits of SEO" />

              <p className="my-5 text-xl ">
                SEO is a long-term investment that offers numerous benefits:
              </p>
            </div>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-5 2xl:gap-x-10 items-center">
              <div className="flex flex-col">
                <div className="2xl:block hidden">
                  <SubHeadingLeft title="Benefits of SEO" />

                  <p className="my-5 text-xl ">
                    SEO is a long-term investment that offers numerous benefits:
                  </p>
                </div>
                <div>
                  <CommonImageCard cardData={benefitsSEOData} />
                </div>
              </div>
              <img
                src="/services/benefitsSEO.png"
                alt=""
                className="w-full 2xl:h-[600px] 2xl:w-[750px] sm:order-first order-last"
              />
            </div>
          </div>
        </div>
        {/* website development */}
        {/* <div className="py-5">
          <Heading title="Website Development" />
          <br />
          <SubHeadingLeft title="Importance of a Well-Designed Website" />
          <p className="md:text-xl pt-5">
            Your website is often the first impression that potential customers
            have of your business. A well-designed, user-friendly website is
            crucial for establishing credibility and encouraging visitors to
            take action.
          </p>
          <br />
          <SubHeadingLeft title="Custom Website Development by Mcube" />
          <div className="md:text-xl py-4">
            <p>
              Mcube offers custom website development services tailored to your
              business needs. Their team of experienced developers ensures that
              your website is:
            </p>
            <ul className="space-y-2  py-2 list-disc list-inside dark:text-gray-400">
              <li>
                <strong>Responsive: </strong>Your site will look great on all
                devices, including desktops, tablets, and smartphones.
              </li>
              <li>
                <strong>SEO-Friendly: </strong>Built with best SEO practices in
                mind to ensure better rankings.
              </li>
              <li>
                <strong>Easy to Navigate: </strong>User experience is
                prioritized to keep visitors engaged.
              </li>
            </ul>
          </div>
          <SubHeadingLeft title="Mobile Application Development" />
          <div className="md:text-xl py-4">
            <p>
              In addition to website development, Mcube also offers mobile
              application development services. Whether you need an iOS or
              Android app, Mcube can create a mobile application that enhances
              your business's digital presence.
            </p>
          </div>
        </div>

        <div className="my-5">
          <Heading title="E-Commerce Website Creation" />
          <div className="mt-5">
            <SubHeadingLeft title="Why E-Commerce Websites Matter" />
          </div>
          <p className="md:text-xl pt-5">
            In the age of online shopping, having an e-commerce website is
            essential for any retail business. It allows you to reach a global
            audience and operate 24/7, offering customers the convenience to
            shop anytime, anywhere.
          </p>
          <br />
          <SubHeadingLeft title="Mcube's Approach to E-Commerce Development" />
          <div className="md:text-xl py-4">
            <p>Mcube's e-commerce website development services focus on:</p>
            <ul className="space-y-2  py-2 list-disc list-inside dark:text-gray-400">
              <li>
                <strong>User Experience: </strong>Creating an intuitive and
                seamless shopping experience.
              </li>
              <li>
                <strong>Security: </strong>: Implementing secure payment
                gateways and protecting customer data.
              </li>
              <li>
                <strong>Scalability: </strong>Building websites that can grow
                with your business.
              </li>
            </ul>
          </div>
          <SubHeadingLeft title="Features of Mcube's E-Commerce Websites" />
          <div className="md:text-xl py-4">
            <p>Some key features of Mcube's e-commerce websites include:</p>
            <ul className="space-y-2  py-2 list-disc list-inside dark:text-gray-400">
              <li>
                <strong>Customizable Product Catalogs: </strong>Easily manage
                and update your product offerings.
              </li>
              <li>
                <strong>Shopping Cart Integration: </strong>Smooth and efficient
                checkout process.
              </li>
              <li>
                <strong>Analytics and Reporting: </strong>Track sales, customer
                behavior, and other vital metrics.
              </li>
            </ul>
          </div>
        </div> */}
        {/* leads generation */}
        <div className="py-5 sm:py-10">
          <Heading title="Leads Generation" />
          <div className="mt-5">
            <SubHeadingLeft title="What is Leads Generation?" />
          </div>
          <p className="md:text-xl mt-5">
            Leads generation is the process of attracting and converting
            strangers and prospects into someone who has indicated interest in
            your company's product or service. It's a critical aspect of any
            marketing strategy, ensuring a steady flow of potential customers.
          </p>
          <br />
          {/*lead  mcube approatch left image*/}

          <div className="my-5">
            <div className="2xl:hidden block">
              <SubHeadingLeft title="Techniques Used by Mcube for Leads Generation" />

              <p className="my-5 text-xl ">
                Mcube employs a variety of techniques to generate leads,
                including:
              </p>
            </div>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-5 2xl:gap-x-10  items-center">
              <div className="flex flex-col">
                <div className="2xl:block hidden">
                  <SubHeadingLeft title="Techniques Used by Mcube for Leads Generation" />

                  <p className="my-5 text-xl ">
                    Mcube employs a variety of techniques to generate leads,
                    including:
                  </p>
                </div>
                <div>
                  <CommonImageCard cardData={leadApproachData} />
                </div>
              </div>
              <img
                src="/services/lead.png"
                alt=""
                className="w-full 2xl:h-[600px] 2xl:w-[750px] order-last sm:order-first"
              />
            </div>
          </div>
          {/* benefits of leads   right image */}
          <div className="my-5">
            <div className="2xl:hidden">
              <SubHeadingLeft title="Benefits of Leads Generation" />

              <p className="my-5 text-xl ">
                Effective leads generation offers several benefits:
              </p>
            </div>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-5 2xl:gap-x-10  items-center">
              <div className="flex flex-col">
                <div className="2xl:block hidden">
                  <SubHeadingLeft title="Benefits of Leads Generation" />

                  <p className="my-5 text-xl ">
                    Effective leads generation offers several benefits:
                  </p>
                </div>
                <div>
                  <CommonImageCard cardData={leadBenefitsData} />
                </div>
              </div>
              <img
                src="/services/leadOne.png"
                alt=""
                className="w-full 2xl:h-[600px] 2xl:w-[750px] order-first sm:order-last"
              />
            </div>
          </div>
        </div>
        {/* youtube right image*/}
        <div className="py-5 sm:py-10">
          <Heading title="YouTube Growth Services" />
          <br />
          <SubHeadingLeft
            title="Why YouTube is Crucial for Businesses
"
          />
          <p className="md:text-xl py-4">
            YouTube is the second largest search engine in the world, making it
            a powerful platform for businesses to reach a massive audience.
            Whether you're a small business or a large corporation, having a
            presence on YouTube can significantly boost your brand's visibility.
          </p>

          <div className="my-5">
            <div className="2xl:hidden">
              <SubHeadingLeft title="Strategies for YouTube Growth" />

              <p className="my-5 text-xl ">
                Mcube&apos;s YouTube growth services include:
              </p>
            </div>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-5 2xl:gap-x-10  items-center">
              <div className="flex flex-col">
                <div className="2xl:block hidden">
                  <SubHeadingLeft title="Strategies for YouTube Growth" />

                  <p className="my-5 text-xl ">
                    Mcube&apos;s YouTube growth services include:
                  </p>
                </div>
                <div className="">
                  <CommonImageCard cardData={youtubeGrowthData} />
                </div>
              </div>
              <img
                src="/services/youtube.png"
                alt=""
                className="w-full 2xl:h-[600px] 2xl:w-[750px] order-first sm:order-last"
              />
            </div>
          </div>

          <SubHeadingLeft title="Success Stories of YouTube Growth" />
          <div className="md:text-xl py-4">
            <p>
              Mcube has helped numerous clients grow their YouTube channels,
              resulting in increased subscribers, more views, and higher
              engagement. These success stories highlight the effectiveness of a
              well-executed YouTube strategy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalMarketing;
