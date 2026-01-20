import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔐 Get logged-in user
const user = JSON.parse(localStorage.getItem("mynewfrnd_loggedin"));
const cityMate = localStorage.getItem("selectedCityMate");

if (!user || !cityMate) {
  alert("Chat session invalid");
  window.location.href = "dashboard.html";
}

// 🆔 Unique chat ID
const chatId = `${user.email}_${cityMate}`;

// UI refs
const chatBox = document.getElementById("chatBox");
const input = document.getElementById("messageInput");
const title = document.getElementById("chatTitle");

title.innerText = `Chat with ${cityMate}`;

// Firestore reference
const chatsRef = collection(db, "chats");

// ✉️ SEND MESSAGE
window.sendMessage = async function () {
  const text = input.value.trim();
  if (!text) return;

  await addDoc(chatsRef, {
    chatId: chatId,
    sender: "tourist",
    senderEmail: user.email,
    citymate: cityMate,
    message: text,
    timestamp: serverTimestamp()
  });

  input.value = "";
};

// 🔁 READ MESSAGES (REAL-TIME)
const q = query(
  chatsRef,
  where("chatId", "==", chatId),
  orderBy("timestamp")
);

onSnapshot(q, (snapshot) => {
  chatBox.innerHTML = "";

  snapshot.forEach((doc) => {
    const msg = doc.data();

    chatBox.innerHTML += `
      <p>
        <strong>${msg.sender === "tourist" ? "You" : cityMate}:</strong>
        ${msg.message}
      </p>
    `;
  });

  chatBox.scrollTop = chatBox.scrollHeight;
});
