// Login.tsx
'use client'

import { useState } from "react";
import Link from "next/link";
import styles from "./Login.module.css"; // Import CSS module

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })

      });
      const data = await response.json()
      alert(data.message);
    }
    catch (error) {
      console.error('Error:', error)
    }

  }
  return (
    <div className={styles["login-page"]}>
      <div className={styles["login-container"]}>
        <div className={styles.login}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQioG1tzPntbiUgNy8VitgxrJt18g5OqA1L3vJVQwbNCrK4IJTbkWz-ZIplPpcNOnF4oGg&usqp=CAU" className={styles.logo} alt='logo' />

          <h1>WELCOME BACK</h1>
          <h2>Connect back to your account</h2>

          <div className={styles["input-container"]}>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          </div>
            
          <div className={styles["forgot-container"]}>
          <Link href="/forgot-password"><h2>Forgot Password?</h2></Link>
          </div>  

          <div className={styles["button-container"]}>
            <button onClick={handleLogin}>Login</button>
          </div>
          <h3>Are you a new m<sup>ember</sup>? <Link href="/register" className={styles["register-link"]}>Register</Link></h3>

          <h2>Or login with</h2>
          <div className={styles["social-login"]}>
            <button className={styles["apple-login"]}><i className="fab fa-apple"></i></button>
            <button className={styles["google-login"]}><i className="fab fa-google"></i> </button>
            <button className={styles["facebook-login"]}><i className="fab fa-facebook"></i> </button>
          </div>
        </div>
        <div className={styles["login-image"]}>
          <img src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/08/man-mobile.jpg" alt="login" />
        </div>
      </div>
    </div>
  );
}

export default Login;

