import classes from "./navigation.module.css";
import HamburgerMenu, { Links } from "./hamburgerMenu";

const Navigation = () => {
  return (
    <>
      <nav className={classes.navigation}>
        <div className={classes.nav_div}>
          <Links />
        </div>
        <div className={classes.mobile_menu}>
          <HamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navigation;
