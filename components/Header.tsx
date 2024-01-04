import Link from "next/link";
import Image from "next/image";
import { links } from "@/site";

const Header = () => {
  return (
    <>
      <div className="sticky top-0 z-50 backdrop-blur-lg bg-opacity-30 bg-white py-4">
        <div className="max-w-5xl flex flex-row justify-between items-center m-auto px-4">
          {/* Logo */}
          <div className="flex flex-row items-center">
          <div>
            <Link className="hidden sm:block" href="/">
              <Image
                src="/logo.avif"
                width={28}
                height={28}
                alt="AnalyticsRoundtable"
              />
            </Link>

            <Link className="sm:hidden" href="/">
              <Image
                src="/Logo.avif"
                width={28}
                height={28}
                alt="AnalyticsRoundtable"
              />
            </Link>
          </div>
          <Link className="hidden sm:block ml-1 font-medium text-gray-800 " href="/">
          Analytics Roundtable
          </Link>
          </div>

          {/* Navlinks */}
          <div className="flex-shrink-0">
            <ul className="flex flex-row space-x-4">
              {links.map((link) => (
                <li
                  key={link.id}
                  className="block hover:text-sky-400 text-sm"
                >
                  <Link href={link.to}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
