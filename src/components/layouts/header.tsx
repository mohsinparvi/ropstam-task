import Logo from "../common/logo";
import NavLink from "../common/nav-link";
import { Button } from "../ui/material-tailwind";
import { AlignJustify } from "../../assets/icons";
const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#" },
  { label: "Owners", href: "#" },
  { label: "Tenants", href: "#" },
  { label: "Properties", href: "#" },
];
const Header = () => {
  return (
    <header className="mx-auto container  py-4 rounded-2xl bg-black/20 backdrop-blur-sm absolute left-0 right-0 top-8 z-10">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Logo />
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <NavLink href={item.href}>{item.label}</NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <Button
            className="bg-primary hidden lg:block hover:bg-primary/80 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out"
            placeholder={undefined}
            onPointerEnterCapture={null}
            onPointerLeaveCapture={null}
          >
            <span>Start Treatment</span>
          </Button>
          <AlignJustify className="h-6 w-6 text-white cursor-pointer md:hidden" />
        </div>
      </div>
    </header>
  );
};

export default Header;
