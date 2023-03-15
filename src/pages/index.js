import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { signIn } from "next-auth/react";
import React from 'react';
import { useRouter } from 'next/router';
import firebase from '../pages/api/auth/firebase'
import { getAuth, RecaptchaVerifier } from "firebase/auth";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const router = useRouter();
  
  const [phonenumber, setPhone] = useState("");
  const [password, setPassword] = useState("");
  
  const handler = async (e) => {
    e.preventDefault();
    
    let pn = phonenumber;
    let p = password;
    
    console.log(phonenumber,password)   
    
    const status = await signIn('credentials',{
      redirect:false,
      phonenumber:pn,
      password:p,
      callbackUrl:"http://localhost:3000/homepage"
    })
    
    if(status.ok) router.push(status.url) 
  }
  
  async function handleGoogleSignin(){
    signIn('google',{callbackUrl: "http://localhost:3000/homepage"})
  }
  
  /*
  const auth = getAuth();
  window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
    'size': 'invisible',
    'callback': (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
    onSignInSubmit();
    }
    
  }, auth);

  const onSignInSubmit = async (e) => {
    e.preventDefault()
    configureCaptcha()
    const phoneNumber = "+62" + phonenumber
    console.log(phoneNumber)
    const appVerifier = RecaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log("OTP has been sent")
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          console.log("SMS not sent")
        });
  }*/
  
  
  return (
    <>
      <Head>
        <title>GetFull</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/aset/login n signin aset/Getfull.svg" />
      </Head>

      <div class="box position-relative" className="box">
        <div className="position-absolute top-50 start-50 translate-middle">
            <div className={styles.logo}>
              <Image 
              src='/aset/login n signin aset/Getfull.svg' 
              width={150} 
              height={50} 
              />
            </div>

            <div className={styles.login_main}>
                <div className="login_field">
                    <input 
                    type="text" 
                    name="phonenumber"
                    className={styles.login_input} 
                    placeholder="Phone Number"
                    onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
        
                <div className="login_field">
                    <input 
                    type="password" 
                    className={styles.login_input} 
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
        
                <div id="sign-in-button"></div>
                <div className="buttons">
                    <Link href="/homepage"><button onClick={(e) => handler(e)} className={styles.login_btn}>Masuk</button></Link>
                </div>

                <div className={styles.break}>
                  <p>Atau</p>
                </div>

                <div class="buttons">
                        
                        <button className={styles.third_btn} onClick={handleGoogleSignin}>
                            <span className={styles.icon}>
                            <Image 
                            src="/aset/login n signin aset/google.svg" 
                            alt="logo google"
                            width={20}
                            height={20}
                            />
                            </span>
                            &nbsp;
                            Masuk dengan Google
                        </button>
                        
                </div>

                <div className={styles.regisask}>
                    Belum punya akun? <Link href="/daftar" className="goregister">Daftar</Link>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
