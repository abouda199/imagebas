import React, { useEffect, useState } from "react";
import "./userInfo.css";
import avatar from "./avatar.png";
import more from "./more.png";
import video from "./video.png";
import edit from "./edit.png";
import { auth, db } from "../../../firebase";
import { doc, getDoc } from "firebase/firestore";
export const Userinfo = () => {
  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);

      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
  return (
    <div>
      {userDetails ? (
        <div className="Userinfo">
          <div className="User">
            <img src={avatar} alt="" />
            <h2>{userDetails.fullName}</h2>
            <p>5★</p>
          </div>
          <div className="Icons">
            
            <img src={edit} alt="" onClick={handleLogout} />
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default Userinfo;
