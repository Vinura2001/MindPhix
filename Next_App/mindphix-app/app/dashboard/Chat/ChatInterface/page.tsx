export default function ChatInterface(){
  return (
      <>
<div className="SideBar">
  <div className="NewChatBar">
    <div className="logo" />
    <img className="logo-image" src="/Figures/HalfLogo.png" />
  </div>
  <p className="new-chat-text">New Chat</p>
  <img className="new-chat-logo" src="/Figures/image 1.png" />
  <p className="previous-session-text">Previous Sessions</p>
  <div className="session">
    <p className="session-text">Session 3</p>
  </div>
  <div className="session">
    <p className="session-text">Session 2</p>
  </div>
  <div className="session">
    <p className="session-text">Session 1</p>
  </div>
  <div className="end">
    <a href="file:///Users/vinuraimesh/Desktop/MindPhix/ChatHome/Chat%20Home.html">
      <button className="exit-button">
        <img className="exit-icon" src="/Figures/image 2.png" />
        <p className="exit-text">Exit</p>
      </button>
    </a>
    <div className="user-profile">
      <div className="user-profile-circle">
        <img className="user-profile-icon" src="/Figures/image 3.png" />
      </div>
      <p className="user-name-text">Steven Watson</p>
    </div>
  </div>
</div>
<div className="text-box-container">
  <input type="text" id="message-box" name="message-box" />
  <div className="send-button-circle">
    <img className="send-icon" src="/Figures/send-message_3682321 1.png" />
  </div>
</div>
</>

);
}