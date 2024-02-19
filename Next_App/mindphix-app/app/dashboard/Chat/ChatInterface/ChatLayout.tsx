import { ReactNode } from "react"
import ChatSidebar from "@/components/ui/ChatSidebar";

interface Props{
    children:ReactNode | ReactNode[]
}

export default function ChatLayout({children}: Props) {
    return (
        <div className="layout">
            <ChatSidebar />
            {children}
        </div>
    );
    
}