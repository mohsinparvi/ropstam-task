import { AlignJustify } from "../../assets/icons";
import React from "react";
import NavLink from "../common/nav-link";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#" },
  { label: "Owners", href: "#" },
  { label: "Tenants", href: "#" },
  { label: "Properties", href: "#" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="lg:hidden">
      <div className="flex items-center justify-between p-4 text-white">
        <AlignJustify
          onClick={() => setIsOpen(!isOpen)}
          className="h-6 w-6 cursor-pointer"
        />
      </div>
      {isOpen && (
        <nav className="absolute top-full left-0 w-full z-10 bg-black/80 backdrop-blur-lg  text-white p-4 shadow-lg">
          <ul className="flex flex-col gap-4 text-lg">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <NavLink
                  href={item.href}
                  className="block text-white py-2 px-4 hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
