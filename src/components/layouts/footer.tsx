import { Link } from "react-router-dom";
import { Logo } from "../common";
import { PhoneCall, Twitter, Facebook, Youtube } from "../../assets/icons";
const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#" },
  { label: "Owners", href: "#" },
  { label: "Tenants", href: "#" },
  { label: "Properties", href: "#" },
];
const OTHER_LINKS = [
  { label: "Online Medications", href: "#" },
  { label: "Download App", href: "#" },
  { label: "Start Treatment", href: "#" },
  { label: "Online Urgent Care", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Press", href: "#" },
];
const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto container space-y-8 px-4 py-16 sm:px-6 lg:space-y-8 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="col-span-1">
            <Logo className="text-primary" />

            <p className="mt-4 max-w-xs text-sm sm:text-base font-extralight text-text">
              Experience the convenience of Recovery Delivered, your trusted
              source for online medication delivery. We bring the pharmacy to
              your doorstep, ensuring fast, discreet, and reliable service.
              Whether you're managing a chronic condition or need a one-time
              prescription filled, we make the process simple and hassle-free
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            <div>
              <p className="font-medium text-primary text-2xl">Quick Links</p>

              <ul className="mt-6 space-y-4 text-sm">
                {QUICK_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="text-text transition hover:opacity-75"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-medium text-primary text-2xl">Other Links</p>

              <ul className="mt-6 space-y-4 text-sm">
                {OTHER_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="text-text text-sm sm:text-base font-extralight transition hover:opacity-75"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <p className="font-medium text-primary text-2xl">Contact</p>
              <div className="flex items-center mt-6 gap-3">
                <PhoneCall />
                <Link
                  to={"tel:+1(866)7579868"}
                  className="text-sm sm:text-base font-extralight text-text"
                >
                  1-866-757-9868
                </Link>
              </div>
              <p className="font-medium text-primary text-2xl">Social Media</p>
              <div className="flex items-center mt-6 gap-3">
                <Twitter className="text-text" />
                <Facebook className="text-text" />
                <Youtube className="text-text" />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <hr className="border-text  border-1" />
          <p className=" text-text text-sm sm:text-base font-extralight">
            &copy; 2024 – recovery Delivered | All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
