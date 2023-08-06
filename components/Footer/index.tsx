import React from "react";
import { footerLinks } from "@/constants";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import Link from "next/link";
import "./style.scss";
import Facebook from "@/public/icon-facebook.svg";
import Twitter from "@/public/icon-twitter.svg";
import Pinterest from "@/public/icon-pinterest.svg";
import Instagram from "@/public/icon-instagram.svg";

function Footer() {
  return (
    <footer className="footer container">
      <div className="footer_company-logo">
        <Image src={Logo} alt="Company Logo" />
      </div>
      {/* <div className="footer_links-side"> */}
      <div className="footer_links">
        {footerLinks.map((item) => {
          return (
            <div className="footer-links__sections">
              <h4>{item.title}</h4>
              <ul>
                {item.links.map((item) => (
                  <Link href={item.url}>
                    <li>{item.title}</li>
                  </Link>
                ))}
              </ul>
            </div>
          );
        })}
        <Image src={Facebook} alt="Facebook logo" />
        <Image src={Twitter} alt="Twitter logo" />
        <Image src={Pinterest} alt="Pinterest logo" />
        <Image src={Instagram} alt="Instagram logo" />
      </div>
      {/* <div className="footer__socials-images">
        </div> */}
      {/* </div> */}
    </footer>
  );
}

export default Footer;
