import Logo from "../assets/logo.png";

const Nav = () => {
  return (
    <nav className="bg-red-100">
      <div className="flex justify-between max-w-11/12 mx-auto">
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
      </div>
    </nav>
  );
};

export default Nav;
