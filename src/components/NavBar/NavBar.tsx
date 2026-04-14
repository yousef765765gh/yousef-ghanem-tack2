import { NavLink, useNavigate } from "react-router-dom";
import { useState} from "react";
import "./NavBar.css";

interface NavItem {
  href: string;
  content: string;
}

interface NavBarProps {
  logo: string;
  items: NavItem[];
  btn: string;
  media_btn: string;
}

const NavBar = ({ logo, items, btn, media_btn }: NavBarProps) => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);


    return (
        <nav className="navbar">
        <img src={logo} alt="logo" className="navbar-logo-img" />
        
        

        <div className="navbar-actions">
            <ul className={isMenuOpen ? "open" : ""}>
                {items.map((item, index) => (
                <li key={index} onClick={() => setIsMenuOpen(false)}>
                    <NavLink to={item.href} className={({ isActive }) => (isActive ? "active" : "")}>
                    {item.content}
                    </NavLink>
                </li>
                ))}
            </ul>
            <button onClick={() => navigate("/ContactUs")} className="btn-nav">
            {btn}
            </button>

            <button className="btn-nav-media" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src={media_btn} alt="menu" />
            </button>
        </div>
        </nav>
    );
};

export default NavBar;