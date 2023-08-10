import {   auth , db  } from "./firebase.mjs";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import {  ref, uploadBytes  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";

// ...

// ...
var signupbtn = document.getElementById("signup");
signupbtn.addEventListener("click", async () => {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(user);

    const docRef = await addDoc(collection(db, "SignupUser"), {
      name: name,
      email: email,
    });

    console.log("Document written with ID: ", docRef.id);

 

    console.log('Uploaded a blob or file!');
    window.location.href ="./index.html"
  } catch (error) {
    // console.error("Error:", error);
  }
});
