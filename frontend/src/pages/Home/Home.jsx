import React, { useState } from 'react';
import styles from './Home.css';
import logo from './logo.png';

function sendMessage() {
  //const [initialTextVisible, setInitialTextVisible] = useState(true);
  var messageInput = document.getElementById("messageInput");
  var message = messageInput.value;


  if (message.trim() === "") {
      return; // Ignore empty messages
  }

 
  var chatContainer = document.getElementById("chatContainer");
  var chat = document.getElementById("chat");

  var newMessage = document.createElement("div");
  newMessage.className = "message userMessage";
  // newMessage.textContent = "You: " + message;
  newMessage.textContent = message;

  chat.appendChild(newMessage);
  messageInput.value = "";
  messageInput.focus();

  // Display information about "Tomo No Kai" when the user asks about it
  if (message.toLowerCase().includes("tomo no kai")) {
      var response = document.createElement("div");
      response.className = "message assistantMessage";
      response.id = "club";

      // Add information about the club
      response.innerHTML = `

          <p>Tomo No Kai is a fantastic club! Here's a brief overview of everything I found. </p>
          <ul>
              <b><li class="title">Name: Tomo No Kai</li></b>
              <li>Tomo No Kai, roughly translating into 'circle of friends', was established on the campus of University of California, Irvine in 1977. We are a cultural and social club that explore the Japanese and Japanese-American cultures. We embody inclusivity and provide an environment where one can find their second home and build everlasting bonds. We strive to teach everyone who is enamored with the Japanese culture with our weekly vocabulary lessons, and our practices and performances of traditional entertainment acts which attempt to portray the Japanese community. Every week we have meetings where we update our general members with events, ongoing programs, and afterwards, we explore the city with our after events by taking the general members out to various locations and food hot spots. Furthermore, we pride ourselves in our involvement with the wider Japanese community through volunteer work and events with the Southern California Nikkei community. Please feel free to reach out to any present cabinet members with any questions or concerns! Don't forget to follow us on our Facebook, Instagram, and Snapchat to see the most current events!</li>
          <li></li>
          <li><a href="https://tomonokaiuci.com/about" target="_blank">
              Website: https://tomonokaiuci.com/about
          </a>
      </li>
          <li><a href="https://discord.com/invite/GBUBMPu" target="_blank"><img src="./img/discord.png" class = "logo" alt="Discord Logo" width="20" height="20"> Discord</a> </li>
          <li><a href="https://www.instagram.com/tomonokai.uci/" target="_blank"><img src="./img/instagram.jpg" class = "logo" alt="Instagram Logo" width="20" height="20"> Instagram</a> </li>
          
              <!-- Add more information as needed -->
          </ul>
          
      `;

      chat.appendChild(response);
  } else {
      // Default response for other messages
      var defaultResponse = document.createElement("div");
      defaultResponse.className = "message assistantMessage";
      defaultResponse.textContent = "That's interesting! Tell me more.";

      chat.appendChild(defaultResponse);
  }


  // Scroll to the bottom after a small delay
  chat.scrollTo({
      top: chat.scrollHeight, // Adjust the gap as needed
      behavior: 'smooth'
  });
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


export default function Home() {
    return (<>
        <h1> Home </h1>

    <div className={styles.Home}>
      <div className={styles.topLeftContainer}>
      <img src={logo} alt=""/>

        <button onClick={refreshPage}>New Chat</button>
      </div>
      <div className={styles.centerText} id="initialText">
        <p className={styles.subtleText}>TINDER CLUB</p>
      </div>
      <div className={styles.chatContainer} id="chatContainer">
        <div className={styles.chat} id="chat">
          <div className={styles.recommendations} id="recommendations">
            <p>Recommendations</p>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            id="messageInput"
            placeholder="Type your message..."
            onInput={handleInput}
            onKeyDown={handleKeyPress}
          />
          <button onClick={sendMessage}>&#9658;</button>
        </div>
      </div>
    </div>
      
    </>
    )
};


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
