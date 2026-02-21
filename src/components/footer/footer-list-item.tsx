interface Props {
  text: string;
}

const FooterListItem = ({ text }: Props) => {
  return (
    <li>
      <a className="hover:text-teal-200" href="#">
        {text}
      </a>
    </li>
  );
};

export default FooterListItem;
