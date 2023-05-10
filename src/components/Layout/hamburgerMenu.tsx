import Link from "next/link";
import classes from "./navigation.module.css";
import { slide as Menu } from "react-burger-menu";
const HamburgerMenu = () => (
  <div className={classes.burger_menu}>
    <Menu
      customBurgerIcon={<HamburgerIcon />}
      width={"auto"}
      className={classes.burger_icon}
    >
      <Links />
    </Menu>
  </div>
);

const HamburgerIcon = () => (
  <div className="p-1/2">
    <svg
      className={classes.icon}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </div>
);

export const Links = () => (
  <>
    <Link href="/" className={classes.link}>
      Home
    </Link>
    <Link href="/models" className={classes.link}>
      Models
    </Link>
    <Link href="/flight-tracker" className={classes.link}>
      Flight Tracker
    </Link>
  </>
);

export default HamburgerMenu;
