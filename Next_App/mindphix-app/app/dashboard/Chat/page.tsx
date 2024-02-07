import Link from "next/link";
import BaseLayout from "../BaseLayout";

export default function Chat() {
  return(
    <BaseLayout>
      <>
  <div className="header">
    <img className="header-img" src="/Figures/wallpaper.jpg" alt="wallpaper" />
    <p className="text-1">MindPhix</p>
    <h1 className="header-text">Make Your Mental Health A Priority</h1>
    <p className="text-2"> Mental health support thats right for you.</p>
  </div>
  <div className="content">
    <h1 className="content-heading">MindPhix Provides</h1>
    <div className="container-1">
      <img className="heart-icon" src="/Figures/circle.png" alt="heart-icon" />
      <p className="benifit-text-1">Depression Detection</p>
    </div>
    <div className="container-2">
      <img className="heart-icon" src="/Figures/circle.png" alt="heart-icon" />
      <p className="benifit-text-2">Personalized Support</p>
    </div>
    <div className="container-3">
      <img className="heart-icon" src="/Figures/circle.png" alt="heart-icon" />
      <p className="benifit-text-3">Mindful Resources</p>
    </div>
  </div>
  <div className="content-2">
    <h1 className="content-heading-2"> Meet MindPhix </h1>
    <p className="text-3">
      Your Compassionate Companion in Depression Detection and Intervention.
      <br />
      <br />
      Let's embark on your well-being journey together!
    </p>
      <Link href="/dashboard/Chat/ChatInterface">
      <button className="talk-btn">Start Conversation</button>
      </Link>
  </div>
</>

    </BaseLayout>
  );
}