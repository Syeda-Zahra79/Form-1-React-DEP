import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <div className="image">
        <img src="/logo.png" />
      </div>
      <div className="lists">
        <li className="header_li">Internships</li>
        <li className="header_li">Offers</li>
        <li className="header_li">Courses</li>
        <li className="header_li">Connect</li>
      </div>
      <div className="header-buttons">
        <button className="create">Create Account</button>
        <button className="signin">Sign in</button>
      </div>
    </header>
  );
};

export default Header;
