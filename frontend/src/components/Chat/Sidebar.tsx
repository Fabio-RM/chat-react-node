import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGear, faMagnifyingGlass, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import '../../assets/styles/chat-sidebar.css'


function Sidebar() {
    const { logout } = useContext(AuthContext);


    return (
        <nav className="chat-sidebar">
            <div className="chat-contacts">
                <div className="chat-contacts-container">
                    <input type="text" className="chat-contact-search" placeholder="Search contacts"></input>
                    <button className="chat-contact-search-icon">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>

                    <ul className="chat-contacts-list">
                        <li className="contact-container">
                            <img className="contact-avatar" src="https://placehold.co/50x50.png"></img>
                            <p className="contact-name">Contact #01</p>
                        </li>
                        <li className="contact-container">
                            <img className="contact-avatar" src="https://placehold.co/50x50.png"></img>
                            <p className="contact-name">Contact #02</p>
                        </li>
                        <li className="contact-container">
                            <img className="contact-avatar" src="https://placehold.co/50x50.png"></img>
                            <p className="contact-name">Contact #03</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="chat-options">
                <ul className="chat-options-list">
                    <li className="option-container">
                        <span className="option-icon"><FontAwesomeIcon icon={faGear} /></span>
                        <span className="option-name">Configuration</span>
                    </li>
                    <li className="option-container" onClick={() => logout()}>
                        <span className="option-icon logout-icon"><FontAwesomeIcon icon={faRightFromBracket} /></span>
                        <span className="option-name">Logout</span>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Sidebar
