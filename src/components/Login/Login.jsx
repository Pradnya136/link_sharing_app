import { useState } from 'react';
import styles from './Login.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState('signup');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/auth/login', { email, password });
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
    <div className={styles.main}>
    <div className={styles.img_cont}><span className={styles.ct_logo}><img src='/cuvette_logo.png'/></span></div>
    <div className={styles.login}>
           <nav className={styles.navbar}>
              <div className={styles.logo}>logo</div>
              <div className={styles.navButtons}>
              <button  className={activeButton === 'login' ? styles.active : ''} onClick={() =>{ setActiveButton('login'); navigate('/login')}}>Login</button>
              <button className={activeButton === 'signup' ? styles.active : ''} onClick={() =>{ setActiveButton('signup'); navigate('/')}}>Signup</button>
              </div>
            </nav>
      <h2 className={styles.heading}>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className={styles.sign_btn} type="submit">Sign In</button>
      </form>
      <p>Don&#39;t have an account? <a href="/">Sign Up</a></p>
    </div>
    </div>
    </>
  );
};

export default Login;
