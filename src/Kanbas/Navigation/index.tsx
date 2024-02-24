import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
  FaTachometerAlt,
  FaQuestionCircle,
  FaTv,
  FaArrowAltCircleRight,
  FaHistory,
  FaMailBulk,
  FaRegUserCircle,
  FaBook,
  FaUsers,
  FaRegCalendarAlt,
} from "react-icons/fa";
function KanbasNavigation() {
    const links = [
    { label: "", icon: <img src="../../images/nu.png" className="fs-2" /> },
    { label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
    { label: "Courses", icon: <FaBook className="fs-2" /> },
    { label: "Groups", icon: <FaUsers className="fs-2" /> },
    { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox", icon: <FaMailBulk className="fs-2" /> },
    { label: "History", icon: <FaHistory className="fs-2" /> },
    { label: "Commons", icon: <FaArrowAltCircleRight className="fs-2" /> },
    { label: "Studio", icon: <FaTv className="fs-2" /> },
    { label: "Help", icon: <FaQuestionCircle className="fs-2" /> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li
          key={index}
          className={pathname.includes(link.label) ? "wd-active" : ""}
        >
          <Link to={`/Kanbas/${link.label}`}>
            {" "}
            {link.icon} {link.label}{" "}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;
