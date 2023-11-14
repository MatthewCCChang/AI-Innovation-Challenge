function sendMessage() {
    var messageInput = document.getElementById("messageInput");
    var message = messageInput.value;

    if (message.trim() === "") {
        return; // Ignore empty messages
    }

    var chatContainer = document.getElementById("chatContainer");
    var chat = document.getElementById("chat");

    var newMessage = document.createElement("div");
    newMessage.className = "message";
    newMessage.textContent = "You: " + message;

    chat.appendChild(newMessage);
    messageInput.value = "";
    messageInput.focus();

    // Simulate a response (replace this with actual AI response logic)
    setTimeout(function() {
        var response = document.createElement("div");
        response.className = "message";
        response.textContent = "AI: That's interesting! Tell me more.";

        chat.appendChild(response);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 500);
}

function handleInput() {
    // Show or hide the initial text based on whether the input has text
    //var initialText = document.getElementById("initialText");


    return;
}

function handleKeyPress(event) {
    // Check if the pressed key is Enter (key code 13)
    if (event.key === "Enter") {
        sendMessage(); // Call the sendMessage function when Enter is pressed
        initialText.classList.remove("visible");
        initialText.classList.add("hidden");

        document.getElementById("chatContainer").style.height = "90%";

        document.getElementById("messageInput").focus();
    }
}