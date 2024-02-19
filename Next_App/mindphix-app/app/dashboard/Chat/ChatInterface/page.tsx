"use client";
import React, { useEffect } from 'react';
import ChatLayout from '../../ChatLayout';

// Declare df-messenger as a custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'df-messenger': any;
    }
  }
}

export default function ChatInterface() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <ChatLayout>
      <df-messenger
        intent="WELCOME"
        chat-title="MindPhix-bot"
        agent-id="65846227-e7da-486f-8775-d186aa5a1a52"
        language-code="en"
      ></df-messenger>
    </ChatLayout>
  );
}
