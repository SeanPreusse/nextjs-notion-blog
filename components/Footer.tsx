import { footerNavigation } from "@/site";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t-2">
      <div className="max-w-5xl m-auto px-4 py-4 md:flex md:items-center md:justify-between space-y-3">
        <p className="text-center text-md">
          &copy; Analytics Roundtable
        </p>
        <div className="flex justify-center space-x-6">
          {footerNavigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-4 w-4" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
