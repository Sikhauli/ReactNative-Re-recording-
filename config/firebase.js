import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";


const firebaseConfig = {

  apiKey: "AIzaSyCEwOM_09Wiyb_NPm6InBGA96pycmWBvtI",
  authDomain: "re-record-c6da8.firebaseapp.com",
  projectId: "re-record-c6da8",
  storageBucket: "re-record-c6da8.appspot.com",
  messagingSenderId: "1003829237795",
  appId: "1:1003829237795:web:7cfd1f45ade0d25fdc3996",
  measurementId: "G-MBVNPYYRTZ"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);