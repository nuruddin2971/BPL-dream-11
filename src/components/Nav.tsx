import { BiSolidDollarCircle } from "react-icons/bi";
import Logo from "../assets/logo.png";

const Nav = ({ coin }: { coin: number }) => {
  return (
    <nav className="bg-red-100">
      <div className="flex justify-between max-w-11/12 mx-auto items-center">
        <img src={Logo} alt="" />
        <ul className="flex gap-4 items-center">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Fixture</a>
          </li>
          <li>
            <a href="">Teams</a>
          </li>
          <li>
            <a href="">Schedules</a>
          </li>
        </ul>
        <h2 className="font-bold text-3xl text-black flex items-center gap-1">
          <BiSolidDollarCircle /> {coin}
        </h2>
      </div>
    </nav>
  );
};

export default Nav;
