import React, { useEffect, useState } from 'react';
import { Form, Image, Input, Button, Typography, Alert, Spin, Space } from 'antd';
import styles from './Home.module.css';
import './Home.css';
import logo from './logo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

async function sendMessage(message) {
  
  //const [initialTextVisible, setInitialTextVisible] = useState(true);
  if (message.trim() === '') {
    return; // Ignore empty messages
}

  const API_KEY = 'WH_9NNJliiak0re29MC__QQE-pY95uYtYd2W88-9pMQ7473';
  const ASSISTANT_ID = '6550193a478ea2e2c5e67e54';
  const endpoint = 'http://localhost:3001/chat';
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
  const response = await axios.post(endpoint, payload, {
        headers: {
          'accept': 'application/json',
          'Authorization': API_KEY,
          'Content-Type': 'application/json',
          
        },
      });
  return response;
 
    /*
    try {
  
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
    */
  }


function getMessage(){
  var messageInput = document.getElementById('messageInput');
  var message = messageInput.value;
  return message;
}

/*
function DisplayPage(){
  const [data, setData] = useState({});
  
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    
    console.log("useEffect is running...");

    const fetchData = async () => {
      
      try {
        console.log("fetchData is called...");
        setLoading(true);

        const message = getMessage();
        console.log("Message:", message);

        const response = await sendMessage(message);
        console.log("Response from sendMessage:", response);

        setData(response);
        setLoading(false);

        if (response) {
          console.log("Calling updateUI...");
          updateUI(response);
        }
      } catch (error) {
        console.error("Error in fetchData:", error);
      }
    };

    fetchData();
    

    console.log("useEffect is done.");

    // Cleanup function (optional)
    // return () => {
    //   console.log("Cleanup function");
    // };
  }, []); 
  

 return loading;
}
*/




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
// Add this in node_modules/react-dom/index.js

export default function Home() {
  const [likeVisible, setLikeVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  function updateUI(response){
    
    const message = getMessage();
    const messageInput = document.getElementById('messageInput');
    var chat = document.getElementById('chat');
      var newMessage = document.createElement('div');
      newMessage.className='message userMessage'
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

      

      console.log(knowledgeSourcesIndex);
      const knowledgeSourcesResponse = (knowledgeSourcesIndex !== -1) ? responseText.substring(
      knowledgeSourcesIndex + '<b>Answer from Knowledge Sources:</b>'.length,
      webIndex
      ) : responseText;
      
  
      // Display the response from the server
      var serverResponse = document.createElement('div');
      serverResponse.className = 'message assistantMessage';
      console.log(response.data.response);
      serverResponse.innerHTML = `${formattedTimeString}<br><br>${knowledgeSourcesResponse}`;
      

      chat.appendChild(serverResponse);

      if (likeVisible) {
        var likeButton = document.createElement('Button');
        likeButton.className = 'likeButton';
      
        // Use JSX syntax to create the heart icon element
        likeButton.innerHTML ="&#10084;";
      
        likeButton.addEventListener('click', () => {
          handleLike(likeButton);
          setLikeVisible(false); // Move setLikeVisible(false) inside handleLike if needed
        });
      
        likeButton.classList.add('hoverable');
        chat.appendChild(likeButton);
      }

      
      
  
      messageInput.value = '';
      messageInput.focus();
  
      // Scroll to the bottom after a small delay
      chat.scrollTo({
        top: chat.scrollHeight,
        behavior: 'smooth',
      });
  }

  const fetchData = async () => {
    try {
      setLoading(true);
      const message = getMessage();
      const response = await sendMessage(message);
      //console.log(response.response);
      if (response) {
        if (response.data.response.response.includes('club') || response.data.response.response.includes('clubs') || response.data.response.response.includes('Club') || response.data.response.response.includes('Clubs')) {
          setLikeVisible(true);  // Set like button visibility to true
        } else {
          setLikeVisible(false); // Set like button visibility to false
        }
        updateUI(response);
        
      }
      setLoading(false);
    } catch (error) {
      console.error("Error in fetchData:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  function exitPage() {
     navigate('/SignIn');
  }

  function handleInput() {
    // Show or hide the initial text based on whether the input has text
    var initialText = document.getElementById("initialText");
  
    return;
  }

  function handleLike(likeButton) {
    // Toggle the liked state
    likeButton.classList.toggle('liked');
  }
  
  function handleKeyPress(event) {
    // Check if the pressed key is Enter (key code 13)
    if (event.key === "Enter") {
       fetchData();
        // Call the sendMessage function when Enter is pressed
        //initialText.classList.remove("visible");
        //initialText.classList.add("hidden");
  
        // Assuming recommendations is another element you want to hide
        document.querySelector(".centerText").classList.add("hidden");
  
        document.getElementById("chat").style.height = "100%";
  
        document.getElementById("messageInput").focus();
         
    }
  }
  
  function refreshPage() {
    window.location.reload();
  }

  
  
  return (<>

  <div className={styles.home}>

    <div className={styles.topLeftContainer}>
    <Image src={logo} width={200} preview={false} alt=""/>

    
    </div>
    <div className='centerText'>
      <p className='subtleText'>TINDER CLUB</p>
    </div>
    <Button className='newChat' onClick={refreshPage}>New Chat</Button>
    <Button className={styles.exit} onClick={exitPage}>Exit</Button>
    <div className='chatContainer' id="chatContainer">
      <div className='chat' id="chat">

      </div>
      <div className={styles.inputContainer}>
        <Input
          type="text"
          id="messageInput"
          placeholder="Type your message..."
          onInput={handleInput}
          onKeyDown={handleKeyPress}
        />
        <Spin className={styles.spinIcon} spinning={loading}/>
        <Button className={styles.submit} onClick={fetchData}>&#9658;</Button>
      </div>
    </div>
  </div>
    
  </>
  )
};
