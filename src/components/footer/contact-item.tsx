interface Props {
    text: string;
    iconUrl: string;
    alt: string;
}

export const ContactItem = ({ text, iconUrl, alt }: Props) => {
    return (
        <div className="flex items-center gap-6">
            <img src={iconUrl} alt={alt} />
            <p>{text}</p>
        </div>
    )
}
