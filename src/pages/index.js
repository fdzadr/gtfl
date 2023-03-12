import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { signIn } from "next-auth/react";
import React from 'react';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';

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
      callbackUrl:"http://localhost:3000/daftar/portal"
    })

    if(status.ok) router.push(status.url) 
  }




  return (
    <>
      <Head>
        <title>GetFull</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
        
                <div className="buttons">
                    <Link href="#"><button onClick={(e) => handler(e)} className={styles.login_btn}>Masuk</button></Link>
                </div>

                <div className={styles.break}>
                  <p>Atau</p>
                </div>

                <div class="buttons">
                        <Link href="#">
                        <button className={styles.third_btn}>
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
                        </Link>
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
