import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./others/styleLS.css";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          fullName: fname,
        });
      }
      console.log("User Registred Successfully!");
      toast.success("User Registred Successfully!!", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.success(error.message, {
        position: "bottom-center",
      });
    }
  };
  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleRegister}>
        <h2>Sign Up</h2>
        <label htmlFor="fname">
          Full Name:
          <input
            type="text"
            placeholder="Enter your Name"
            onChange={(e) => setFname(e.target.value)}
            required
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            placeholder="New password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label htmlFor="photo">
          Upload Photo:
          <input type="file" id="photo" accept="image/*" />
        </label>
        <button>Sign Up</button>
        <br />
        <p>
          Already Registered? <Link to="/Login">Log In</Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
