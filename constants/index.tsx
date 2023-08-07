import img1 from "@/public/icon-brand-recognition.svg";
import img2 from "@/public/icon-detailed-records.svg";
import img3 from "@/public/icon-fully-customizable.svg";

export const footerLinks = [
  {
    title: "Features",
    links: [
      { title: "Link Shortening", url: "/" },
      { title: "Branded Links", url: "/" },
      { title: "Analytics", url: "/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Blog", url: "/" },
      { title: "Developers", url: "/" },
      { title: "Support", url: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About", url: "/" },
      { title: "Our Team", url: "/" },
      { title: "Careers", url: "/" },
      { title: "Contact", url: "/" },
    ],
  },
];

export const StatisticsCardsContent = [
  {
    title: "Brand Recognition",
    className: "start",
    content:
      "Boost your brand recognitio with each click generic links font mean a thing branded links help instil confidence in your content.",
    icon: img1,
  },
  {
    title: "Detailed Records",
    className: "center",
    content:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    icon: img2,
  },
  {
    title: "Fully Customizable",
    className: "end",
    content:
      "Improve brand awarness and content discoverability through customizable links, supercharging audience engagement.",
    icon: img3,
  },
];
