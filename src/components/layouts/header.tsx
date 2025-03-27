import Logo from "../common/logo";
import NavLink from "../common/nav-link";
import { Button } from "../ui/material-tailwind";
const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#" },
  { label: "Owners", href: "#" },
  { label: "Tenants", href: "#" },
  { label: "Properties", href: "#" },
];
const Header = () => {
  return (
    <header className="mx-auto max-w-screen-xl mt-8 py-4 rounded-2xl bg-black/20 backdrop-blur-sm sticky top-0 z-10">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
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
            className="bg-primary"
            placeholder={undefined}
            onPointerEnterCapture={null}
            onPointerLeaveCapture={null}
          >
            <span>dkka</span>
          </Button>
          {/* <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">

                
              <a
                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                href="#"
              >
                Login
              </a>

              <div className="hidden sm:flex">
                <a
                  className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                  href="#"
                >
                  Register
                </a>
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
