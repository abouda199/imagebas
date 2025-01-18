import React, { useEffect, useState } from "react";
import "./userInfo.css";
import more from "./more.png";
import video from "./video.png";
import edit from "./edit.png";
import { auth, db } from "../../../firebase";
import { doc, getDoc } from "firebase/firestore";
import defaultAvatar from "./avatar.png"; // Image par défaut si aucun avatar n'est sélectionné

const Userinfo = () => {
  const [userDetails, setUserDetails] = useState(null); // État pour stocker les détails utilisateur
  const [loading, setLoading] = useState(true); // Indicateur de chargement

  // Fonction pour récupérer les données utilisateur depuis Firestore
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "Users", user.uid); // Référence au document utilisateur
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserDetails(docSnap.data()); // Stocker les données utilisateur
          } else {
            console.error("Utilisateur non trouvé dans Firestore !");
          }
        } catch (error) {
          console.error("Erreur lors de la récupération des données utilisateur :", error);
        }
      } else {
        console.log("Utilisateur non connecté.");
      }
      setLoading(false); // Fin du chargement
    });
  };

  useEffect(() => {
    fetchUserData(); // Charger les données utilisateur au montage du composant
  }, []);

  // Fonction de déconnexion
  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login"; // Rediriger vers la page de connexion
      console.log("Utilisateur déconnecté avec succès !");
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error.message);
    }
  }

  if (loading) {
    return <p>Chargement...</p>; // Afficher un indicateur de chargement
  }

  if (!userDetails) {
    return <p>Aucune donnée utilisateur disponible.</p>; // Gérer les cas où les données sont introuvables
  }

  return (
    <div className="Userinfo">
      <div className="User">
        <img
          src={userDetails.profileImage || defaultAvatar} // Utiliser l'avatar enregistré ou une image par défaut
          alt="Avatar utilisateur"
          style={{ width: "150px", height: "150px", borderRadius: "50%" }}
        />
        <h2>{userDetails.fullName}</h2>
        <p>5★</p>
      </div>
      <div className="Icons">
        <img src={edit} alt="Modifier" onClick={handleLogout} />
      </div>
    </div>
  );
};

export default Userinfo;
