const passkey = "4732";
let isAuthenticated = false;

function authenticate() {
    const username = document.getElementById("username").value;
    const enteredPasskey = document.getElementById("passkey").value;

    if (enteredPasskey === passkey) {
        isAuthenticated = true;
        showChat();
    } else {
        alert("Incorrect passkey. Please try again.");
    }
}

function showChat() {
    document.querySelector(".login-container").classList.add("hidden");
    document.querySelector(".chat-container").classList.remove("hidden");
}

function newChat() {
    if (!isAuthenticated) {
        alert("You need to authenticate first.");
        return;
    }

    // Logic for creating a new chat
    // Implement as needed
    alert("New chat created!");
}

function deleteChat() {
    if (!isAuthenticated) {
        alert("You need to authenticate first.");
        return;
    }

    // Logic for deleting a chat
    // Implement as needed
    alert("Chat deleted!");
}

function showAbout() {
    // Logic for displaying information about the chat app
    // Implement as needed
    alert("Chat App v1.0\nCreated by [Siddharth Jagwan]");
}

function changeBackground() {
    // Logic for changing the background
    // Implement as needed
    alert("Background changed!");
}

function sendMessage() {
    if (!isAuthenticated) {
        alert("You need to authenticate first.");
        return;
    }

    const messageInput = document.getElementById("message");
    const message = messageInput.value.trim();

    if (message !== "") {
        const chatBox = document.getElementById("chat-box");
        const messageElement = document.createElement("div");
        messageElement.className = "message";
        messageElement.textContent = `You: ${message}`;
        chatBox.appendChild(messageElement);

        // Clear the message input field after sending the message
        messageInput.value = "";
    }
}
