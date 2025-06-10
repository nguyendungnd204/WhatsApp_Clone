import { checkUser } from "@/api/auth";
import { reducerCases } from "@/context/constants";
import { useStateProvider } from "@/context/StateContext";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import {FcGoogle} from 'react-icons/fc';

function login() {

  const router = useRouter();

  const [{}, dispatch] = useStateProvider();

  const handleLogin =  async () => {
    const provider = new GoogleAuthProvider();
    const {user:{displayName:name, email, photoURL: profileImage},} = await signInWithPopup(firebaseAuth, provider);
    
    try {
      if(email){
        const data = await checkUser({email});
        if(!data.status){
          dispatch({tyepe: reducerCases.SET_NEW_USER, newUser: true});
          dispatch({
            type: reducerCases.SET_USER_INFO,
            userInfo:{
              name,
              email,
              profileImage,
              status:""
            }
          })
          router.push("/onboarding");
        }
      }
    } catch (error) {
      console.log(error);
    }
    
  }
  return <div className="flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6">
    <div className="flex items-center justify-center gap-2 text-white">
        <Image src="/whatsapp.gif" alt="Whatsapp" height={300} width={300}/>
        <span className="text-7xl">Whatsapp</span>
    </div>
    <button onClick={handleLogin} className="flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg">
      <FcGoogle className="text-4xl"/>
      <span className="text-white text-2xl">Login with google</span>
    </button>
  </div>;
}

export default login;
