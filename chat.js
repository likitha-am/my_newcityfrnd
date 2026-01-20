import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const chatBox = document.getElementById("chatBox");
const input = document.getElementById("userInput");

const chatsRef = collection(db, "chats");

// 🔥 SEND MESSAGE
window.sendMessage = async function () {
  const text = input.value.trim();
  if (!text) return;

  await addDoc(chatsRef, {
    user: "Student",
    citymate: "Ananya",
    message: text,
    timestamp: serverTimestamp()
  });

  input.value = "";
};

// 🔥 READ MESSAGES (REAL-TIME)
const q = query(chatsRef, orderBy("timestamp"));

onSnapshot(q, (snapshot) => {
  chatBox.innerHTML = "";
  snapshot.forEach((doc) => {
    const data = doc.data();
    chatBox.innerHTML += `
      <p><strong>${data.user}:</strong> ${data.message}</p>
    `;
  });
  chatBox.scrollTop = chatBox.scrollHeight;
});
