import React from "react";
import CardCount from "./CardCount";
import Search from "./Search";
import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";
import User from "./User";

const Navbar = () => {
  return (
    <div>
      <Logo />
      <HamburgerMenu />
      <CardCount />
      <Search />
      <User />
    </div>
  );
};

export default Navbar;
