"use client";
import React, { useEffect } from 'react';
import ChatLayout from '../../ChatLayout';

const BotComponent = () => {
  useEffect(() => {
    // Check if the bot script is already loaded
    if (!document.getElementById('botcopy-script')) {
      const script = document.createElement('script');
      script.id = 'botcopy-script';
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://widget.botcopy.com/js/injection.js';

      document.body.appendChild(script);
    }

   
  }, []);

  return (
    <ChatLayout>
      <div id="botcopy-embedder-d7lcfheammjct" className="botcopy-embedder-d7lcfheammjct" data-botId="65d8ceb3fbfad10008b063fd">
        
      </div>
    </ChatLayout>
  );
};

export default BotComponent;
