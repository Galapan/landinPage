import {
  conditions,
  contactInformation,
  medias,
  pages,
} from "../../common/constants";
import type { ContactInformation, Media } from "../../types/type";
import { ContactItem } from "./contact-item";
import FooterListItem from "./footer-list-item";

export const Footer = () => {
  return (
    <footer className="pt-[260px] pb-[60px] px-6">
      <img className="mb-10" src="/images/logo.svg" alt="logo" />

      <ContactItem {...contactInformation[0]} />

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

        <div className="flex justify-center gap-4">
          {medias.map((media: Media) => (
            <div
              key={media.text}
              className="text-white hover:text-teal-200 border rounded-full size-[30px] p-0.5"
            >
              {media.icon}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
