import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

function App() {
  async function initFirebase() {
    const firebaseConfig = {
      apiKey: "AIzaSyBXz_Yqt6c8dVBjp6at5EG1A_pm00r4OWI",
  authDomain: "akru-inc.firebaseapp.com",
  projectId: "akru-inc",
  storageBucket: "akru-inc.appspot.com",
  messagingSenderId: "670600293600",
  appId: "1:670600293600:web:c674bbfc8dca85e4c0f485",
  measurementId: "G-WMJLSSSWKX"
    };

    const app = initializeApp(firebaseConfig);
    const messaging = getMessaging(app);
    
    const KEYPAIR =
      "BDc1TsQFbUlcBrHznmnUmA7bwzNa36R0C5dG-ahKV83GSGCS1LRPMTlldbrIjvTMZ70ThHwJFkfEGKvDv4wu3GM";

     let token = await getToken(messaging, { vapidKey: KEYPAIR })
     console.log("token: " + token)
  }
  useEffect(()=>{

    initFirebase();
  },[])
  return (
    <div>
   Hello firebase cloud messaging
    </div>
  );
}

export default App;
