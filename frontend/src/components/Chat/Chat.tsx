import MainWindow from "./MainWindow"
import Sidebar from "./Sidebar"
import '../../assets/styles/chat.css'

function Chat() {
  return (
    <div className="chat-container">
      <Sidebar />
      <MainWindow />
    </div>
  )
}

export default Chat
