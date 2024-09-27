document.getElementById('join-btn').addEventListener('click', joinChat);
document.getElementById('send-btn').addEventListener('click', sendMessage);

let roomMessages = {
    general: [],
    tech: [],
    gaming: []
};
let currentRoom = 'general';
let username = '';

function joinChat() {
    username = document.getElementById('username').value;
    currentRoom = document.getElementById('room').value;
    
    if (username === '') {
        alert('Please enter a username.');
        return;
    }

    // Hide the user form and show the chat room
    document.getElementById('user-form').style.display = 'none';
    document.getElementById('chat-room').style.display = 'block';

    // Load previous messages for the selected room
    displayMessages();
}

function sendMessage() {
    const message = document.getElementById('message').value;

    if (message.trim() === '') {
        alert('Please enter a message.');
        return;
    }

    // Add the new message to the room's message list
    roomMessages[currentRoom].push({ user: username, text: message });
    document.getElementById('message').value = '';

    // Display the new messages
    displayMessages();
}

function displayMessages() {
    const messagesContainer = document.getElementById('messages');
    messagesContainer.innerHTML = '';

    roomMessages[currentRoom].forEach(msg => {
        const messageElement = document.createElement('p');
        messageElement.textContent = `${msg.user}: ${msg.text}`;
        messagesContainer.appendChild(messageElement);
    });

    // Scroll to the bottom of the message container
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}