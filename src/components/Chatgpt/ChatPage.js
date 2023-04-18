import React, { useEffect } from "react";

export default function ChatPage() {
  useEffect(() => {
    const chatWindow = window.open("https://chat.openai.com/", "chat", "width=800,height=600");

    const handleUnload = () => {
      chatWindow.close();
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  return <div>Loading chat...</div>;
}
