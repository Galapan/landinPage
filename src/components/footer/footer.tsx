import { ContactItem } from "./contact-item";

interface ContactInformation {
    text: string;
    iconUrl: string;
    alt: string;
}

const contactInformation: ContactInformation[] = [
 {
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    iconUrl:"/images/icon-location.svg",
    alt:"location icon"
 },
 {
    text:"+1-543-123-4567",
    iconUrl:"/images/icon-phone.svg",
    alt:"phone"
 } 
]

export const Footer = () => {
    return (
        <footer className="pt-[260px] pb-[300px]">
            <img src="/images/logo.svg" alt="logo" />
            <div className="flex items-center gap-6">
                <img src="" alt="location icon" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>

            <ContactItem text="+1-543-123-4567" iconUrl="/images/icon-phone.svg" alt="phone" />
        </footer>
    )
}