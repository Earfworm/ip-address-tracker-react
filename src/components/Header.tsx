import Form from "./Form";
import "./Header.css";
import IpAddressInfo from "./IpAddressInfo";

const Header = () => {
  return (
    <header className="Header">
      <h1>IP Address Tracker</h1>

      <Form />
    </header>
  );
};

export default Header;
