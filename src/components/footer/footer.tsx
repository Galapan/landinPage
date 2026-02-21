import { type JSX } from "react";
import { ContactItem } from "./contact-item";
import FooterListItem from "./footer-list-item";
import FacebookIcon from "./facebook-icon";

interface ContactInformation {
  text: string;
  iconUrl: string;
  alt: string;
}

const contactInformation: ContactInformation[] = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    iconUrl: "/images/icon-location.svg",
    alt: "location",
  },
  {
    text: "+1-543-123-4567",
    iconUrl: "/images/icon-phone.svg",
    alt: "phone",
  },
  {
    text: "example@fylo.com",
    iconUrl: "/images/icon-email.svg",
    alt: "email",
  },
];

const pages: string[] = ["About us", "Jobs", "Press", "Blog"];
const conditions: string[] = ["Contact us", "Terms", "Privacy"];

interface Media {
  text: string;
  icon: JSX.Element;
}

const medias: Media[] = [
  {
    text: "Facebook",
    icon: <FacebookIcon />,
  },
];

export const Footer = () => {
  return (
    <footer className="pt-[260px] pb-[300px]">
      <img className="mb-10" src="/images/logo.svg" alt="logo" />

      <div className="flex flex-col gap-4">
        {contactInformation.map((contact: ContactInformation) => (
          <ContactItem key={contact.alt} {...contact} />
        ))}
      </div>

      <div className="flex flex-col gap-8 mt-16">
        <ul>
          {pages.map((page: string) => (
            <FooterListItem key={page} text={page} />
          ))}
        </ul>

        <ul>
          {conditions.map((condition: string) => (
            <FooterListItem key={condition} text={condition} />
          ))}
        </ul>

        {medias.map((media: Media) => (
          <div
            key={media.text}
            className="text-white hover:text-teal-200 border rounded-full size-[30px] p-0.5"
          >
            {media.icon}
          </div>
        ))}
      </div>
    </footer>
  );
};
