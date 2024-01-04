import Container from '../components/Container';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="fixed z-10 w-full bg-white border-b">
      <Container>
        <div className="flex justify-between w-full py-4 ">
          <Link href="/" passHref>
            <div className="text-xl font-bold cursor-pointer">"Analytics Roundtable"</div>
          </Link>
          <div className="flex space-x-6">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
        </div>
      </Container>
    </div>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}
const NavLink = ({ href, children }: NavLinkProps) => (
  <Link href={href} passHref>
    <a className="text-gray-600 hover:text-gray-800">{children}</a>
  </Link>
);
