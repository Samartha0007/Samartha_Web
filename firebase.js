import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getDatabase, ref, onValue, runTransaction } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDh7L_p4bVaLDu8W4HxWMrNWLYjmWZuZ14",
    authDomain: "ggfhfd-36058.firebaseapp.com",
    databaseURL: "https://ggfhfd-36058-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ggfhfd-36058",
    storageBucket: "ggfhfd-36058.firebasestorage.app",
    messagingSenderId: "914143870224",
    appId: "1:914143870224:web:7a93d62dabd5397fedf995",
    measurementId: "G-L3ZJQ266WX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const likeRef = ref(db, "likes");

// Listen for real-time updates
onValue(likeRef, (snapshot) => {
    document.getElementById("likeCount").innerText = snapshot.val() || 0;
});

// Like function
window.likePost = function () {
    const button = document.getElementById("likeButton");
    button.disabled = true;

    runTransaction(likeRef, (currentLikes) => {
        return (currentLikes || 0) + 1;
    }).then(() => {
        button.disabled = false;
    }).catch((error) => {
        console.error("Error updating likes:", error);
        button.disabled = false;
    });
};