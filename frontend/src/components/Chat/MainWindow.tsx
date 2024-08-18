import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import '../../assets/styles/chat-main-window.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function MainWindow() {
    return (
        <div className="chat-main-window">
            <div className="chat-header">
                <img className="contact-avatar" src="https://placehold.co/50x50.png"></img>
                <h2>Contact #2</h2>
            </div>

            <div className="messages-container">
                <div className="message message-sent">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae ea, nisi rerum doloribus deserunt delectus enim, sapiente consequuntur ad nam labore! Eaque reiciendis possimus est praesentium aperiam qui unde!</p>
                    <span className="message-datetime">12:00</span>
                </div>
                <div className="message message-received">
                    <p>Ut autem, voluptatibus, voluptate, voluptatum, voluptas</p>
                    <span className="message-datetime">12:00</span>
                </div>
                <div className="message message-sent">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae ea, nisi rerum doloribus deserunt delectus enim, sapiente consequuntur ad nam labore! Eaque reiciendis possimus est praesentium aperiam qui unde!</p>
                    <span className="message-datetime">12:00</span>
                </div>
                <div className="message message-received">
                    <p>Ut autem, voluptatibus, voluptate, voluptatum, voluptas</p>
                    <span className="message-datetime">12:00</span>
                </div>
                <div className="message message-sent">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae ea, nisi rerum doloribus deserunt delectus enim, sapiente consequuntur ad nam labore! Eaque reiciendis possimus est praesentium aperiam qui unde!</p>
                    <span className="message-datetime">12:00</span>
                </div>
                <div className="message message-received">
                    <p>Ut autem, voluptatibus, voluptate, voluptatum, voluptas</p>
                    <span className="message-datetime">12:00</span>
                </div>
            </div>

            <div className="chat-input">
                <input type="text" className="message-input" placeholder="Type a message..."></input>
                <button className="send-button"><FontAwesomeIcon icon={faPaperPlane} /></button>
            </div>
        </div>
    )
}

export default MainWindow
