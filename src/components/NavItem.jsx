import { Link } from "react-router-dom";

const NavItem = (props) => {
    return (
        <li className="nav-item">
            <Link to={`/${props.name.toLowerCase()}`}>
                <spam className={`nav-link ${props.class}`}>{props.name}</spam>
            </Link>
            {/* <a className="nav-link" href={props.name.toLowerCase()}>
                {props.name}
            </a> */}
        </li>
    );
};

export default NavItem;
