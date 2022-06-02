import { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const { data } = await axios.get("/api/chat");

    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((eachChat) => (
        <div key={eachChat._id}>{eachChat.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
