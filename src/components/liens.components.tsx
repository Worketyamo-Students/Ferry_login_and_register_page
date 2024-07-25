import { Link } from 'react-router-dom';

interface LinksProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  text: string;
}

const LinksComponent = ({ to, text, ...rest }: LinksProps) => {
  return (
    <Link
      to={to}
      className="text-primary lg:text-[1.8rem] text-[1.3rem] font-bold underline hover:text-second hover:transition-all hover:duration-700"
      {...rest}
    >
      {text}
    </Link>
  );
};

export default LinksComponent;