import React, { useState, useEffect } from "react";
import Message from "./Message";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import "./App.css";

export default function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "sonny", text: "hello" },
    { username: "qazi", text: "hi" },
  ]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("Please enter your name:"));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Messenger</h1>
      <h2>Welcome {username}</h2>
      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </Button>
        </FormControl>
      </form>

      {messages.map((message) => (
        <Message username={username} message={message} />
      ))}
    </div>
  );
}
