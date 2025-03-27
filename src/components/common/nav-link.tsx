import React from "react";
import { Link, useLocation } from "react-router-dom";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className,
  ...rest
}) => {
  const location = useLocation();
  const isActive = href === location.pathname;

  const activeClassName = isActive ? "text-blue-600" : "text-white";
  const combinedClassName = className
    ? `${activeClassName} ${className}`
    : activeClassName;

  return (
    <Link to={href} className={combinedClassName} {...rest}>
      {children}
    </Link>
  );
};

export default NavLink;
