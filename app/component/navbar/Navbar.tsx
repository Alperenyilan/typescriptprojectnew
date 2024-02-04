import CardCount from "./CardCount";
import Search from "./Search";
import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";
import User from "./User";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between gap-3 md:gap-10 px-3 md:px:10 h-16 bg-orange-600 text-slate-100">
      <Logo />
      <Search />
      <CardCount />
      <User />
      <HamburgerMenu />
    </div>
  );
};

export default Navbar;
