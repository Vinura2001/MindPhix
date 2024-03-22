"use client";
import React, { useEffect } from "react";
import BaseLayout from "../../BaseLayout";

const BotComponent = () => {
  useEffect(() => {
    const injectBotScript = () => {
      const existingScript = document.getElementById("botcopy-script");
      if (!existingScript) {
        const script = document.createElement("script");
        script.id = "botcopy-script";
        script.type = "text/javascript";
        script.async = true;
        script.src = "https://widget.botcopy.com/js/injection.js";
        document.body.appendChild(script);
      }
    };

    injectBotScript();
  }, []);

  return (
      <div
        id="botcopy-embedder-d7lcfheammjct"
        className="botcopy-embedder-d7lcfheammjct"
        data-botId="65f1b50fa179a000095ac437"
      />
  );
};

export default BotComponent;
