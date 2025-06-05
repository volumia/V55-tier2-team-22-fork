import { useRef, useState } from "react";
import { AiResponser } from "@/util/aiChat/aiResponder";
import { MdCloseFullscreen } from "react-icons/md";
import BotAvatar from "./BotAvatar";

function ChatMessage({ text, type }) {
  if (type === "user") {
    return (
      <div className="min-w-8 w-fit max-w-5/6 px-2 py-2 my-3 ml-auto bg-gray-50 text-gray-950 rounded-sm rounded-tr-none wrap-break-word">
        {text}
      </div>
    );
  } else if (type === "ai") {
    return (
      <div className="flex flex-row my-3">
        <BotAvatar></BotAvatar>
        <div className="w-5/6 px-2 py-2 ml-2 mr-auto bg-gray-50 text-gray-950 rounded-sm rounded-tl-none wrap-break-word">
          {text}
        </div>
      </div>
    );
  }
}

function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const inputEl = useRef(null);
  const responder = useRef(new AiResponser());

  function addMessage(msg) {
    setMessages((curr) => [
      ...curr,
      {
        key: self.crypto.randomUUID(),
        ...msg
      }
    ]);
  }

  async function addAiResponse(prompt) {
    const response = await responder.current.getResponse(prompt);

    addMessage({ text: response, type: "ai" });
  }

  function onSubmit(e) {
    e.preventDefault();

    const userText = inputEl.current.value;

    const message = {
      text: userText,
      type: "user"
    };

    addMessage(message);
    addAiResponse(userText);

    inputEl.current.value = "";
  }

  return (
    <>
      <div className="w-80 bg-gray-950 border-1 border-gray-500 rounded-sm">
        {/* Header */}
        <div className="flex flex-row justify-end items-center w-full h-10 px-1 py-2 bg-gray-800">
          <button className="w-8 h-8 p-0 flex justify-center items-center bg-transparent hover:bg-gray-600 active:bg-gray-500">
            <MdCloseFullscreen></MdCloseFullscreen>
          </button>
        </div>

        {/* Message area */}
        <div className="h-80 px-2 overflow-y-scroll">
          {messages.map((m) => {
            return <ChatMessage key={m.key} text={m.text} type={m.type}></ChatMessage>;
          })}
        </div>

        {/* Texting area */}
        <form onSubmit={onSubmit} className="w-full h-12 p-2 mt-6 ml-auto mr-auto bg-gray-800 text-gray-50">
          <input
            type="text"
            placeholder="Ask a question"
            ref={inputEl}
            className="w-full h-full p-2 bg-gray-700 rounded-sm"
          ></input>
        </form>
      </div>
    </>
  );
}

export default ChatWindow;
