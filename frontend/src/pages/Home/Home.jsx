import React, { useState } from 'react';
import styles from './Home.css';
import logo from './logo.png';
import axios from 'axios';

export default function Home() {
  const [message, setMessage] = useState('');
async function sendMessage() {
  //const [initialTextVisible, setInitialTextVisible] = useState(true);
  var messageInput = document.getElementById('messageInput');
  var message = messageInput.value;
  
  if (message.trim() === '') {
      return; // Ignore empty messages
  }

  const API_KEY = 'WH_9NNJliiak0re29MC__QQE-pY95uYtYd2W88-9pMQ7473';
  const ASSISTANT_ID = '6550193a478ea2e2c5e67e54';
  
 
  
    try {
      // Prepare the request payload
      const payload = {
        post: message,
        assistant_id: ASSISTANT_ID,
        post_metadata: {
          additionalProp1: 'string',
          additionalProp2: 'string',
          additionalProp3: 'string',
        },
        chat_session: 'string',
        user_identifier: 'string',
      };
  
      // Make a POST request to the API endpoint
      const response = await axios.post('http://localhost:3001/chat', payload, {
        headers: {
          'accept': 'application/json',
          'Authorization': "WH_9NNJliiak0re29MC__QQE-pY95uYtYd2W88-9pMQ7473",
          'Content-Type': 'application/json',
          
        },
      });
  
      var chat = document.getElementById('chat');
      var newMessage = document.createElement('div');
      newMessage.className = 'message userMessage';
      newMessage.textContent = message;
      chat.appendChild(newMessage);

      const responseText = response.data.response.response;
      const responseTime = response.data.response.created_at_response;
      const knowledgeSourcesIndex = responseText.indexOf('<b>Answer from Knowledge Sources:</b>');
      const webIndex = responseText.indexOf('<b>Answer from Web:</b>');

      const timeStamp = new Date(responseTime);
      const timestamp = timeStamp.toLocaleString('en-US', { timeZone: 'America/New_York'});
      const formattedTime = new Date(timestamp);

      const hours = formattedTime.getHours() + 1; // this might be the worst code ive ever written.
      const minutes = formattedTime.getMinutes();

      const formattedTimeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

      const knowledgeSourcesResponse = responseText.substring(
      knowledgeSourcesIndex + '<b>Answer from Knowledge Sources:</b>'.length,
      webIndex
      )
      
  
      // Display the response from the server
      var serverResponse = document.createElement('div');
      serverResponse.className = 'message assistantMessage';
      console.log(response.data.response);
      serverResponse.innerHTML = `${formattedTimeString}<br><br>${knowledgeSourcesResponse}`;
      chat.appendChild(serverResponse);
  
      messageInput.value = '';
      messageInput.focus();
  
      // Scroll to the bottom after a small delay
      chat.scrollTo({
        top: chat.scrollHeight,
        behavior: 'smooth',
      });
    } catch (error) {
      console.error(error);
    }
  }


function handleInput() {
  // Show or hide the initial text based on whether the input has text
  var initialText = document.getElementById("initialText");

  return;
}

function handleKeyPress(event) {
  // Check if the pressed key is Enter (key code 13)
  if (event.key === "Enter") {
      sendMessage(); // Call the sendMessage function when Enter is pressed
      //initialText.classList.remove("visible");
      //initialText.classList.add("hidden");

      // Assuming recommendations is another element you want to hide
      document.getElementById("recommendations").classList.add("hidden");

      document.getElementById("chatContainer").style.height = "90%";

      document.getElementById("messageInput").focus();
  }
}

function refreshPage() {
  window.location.reload();
}



/*
{
  "post": "how are you",
  "assistant_id": "6550193a478ea2e2c5e67e54",
  "post_metadata": {
    "additionalProp1": "string",
    "additionalProp2": "string",
    "additionalProp3": "string"
  },
  "chat_session": "string",
  "user_identifier": "string"
}

what youll need:
api key

a way to change post
a way to grab response

what to use:
axios and express? not too sure what these two do


*/



  return (
    <>
      <div className={styles.home}>
        <div className={styles.topLeftContainer}>
          <img src={logo} alt="" />

          <button onClick={refreshPage}>New Chat</button>
        </div>

        <div className={styles.chatContainer} id="chatContainer">
          <div className={styles.chat} id="chat">
            {/* Render chat messages here */}
          </div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              id="messageInput"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>&#9658;</button>
          </div>
        </div>
      </div>
    </>
  );
}
