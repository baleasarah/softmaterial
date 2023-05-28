import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCN-Coi-rBZJpTYDLv8NDBV5bONVYlWEe8",
	authDomain: "soft-material.firebaseapp.com",
	projectId: "soft-material",
	storageBucket: "soft-material.appspot.com",
	messagingSenderId: "942001656662",
	appId: "1:942001656662:web:896a75f85dad1dc15bfcf7"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);

export const db = getFirestore();
