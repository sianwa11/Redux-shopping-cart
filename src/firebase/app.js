import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBuy2vjj10ul1cJUUW-QxShiHMT4mq_EYw",
  authDomain: "shopping-cart-b0a9b.firebaseapp.com",
  databaseURL: "https://shopping-cart-b0a9b-default-rtdb.firebaseio.com",
  projectId: "shopping-cart-b0a9b",
  storageBucket: "shopping-cart-b0a9b.appspot.com",
  messagingSenderId: "821397917492",
  appId: "1:821397917492:web:339d37ff63766e3c485f61",
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
export const database = getDatabase(app);
