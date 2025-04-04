import { Button } from "../ui/material-tailwind";
import { MobileNav, NavLink, Logo } from "../common";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#" },
  { label: "Owners", href: "#" },
  { label: "Tenants", href: "#" },
  { label: "Properties", href: "#" },
];
const Header = () => {
  return (
    <header className="mx-auto container  px-4 py-2 sm:px-6 lg:px-8   lg:py-4 rounded-2xl bg-black/20 backdrop-blur-sm absolute left-0 right-0 top-8 z-10">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Logo />
          </div>

          <div className="hidden lg:block">
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
            className="bg-primary hidden lg:block hover:bg-primary/80 normal-case text-sm py-2  text-white font-medium rounded-lg shadow-md transition duration-300 ease-in-out"
            placeholder={undefined}
            onPointerEnterCapture={null}
            onPointerLeaveCapture={null}
          >
            <span>Start Treatment</span>
          </Button>
          <div className="block lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
