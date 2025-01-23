import styles from './Register.module.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', password: '', confirmPassword: '' });
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState('signup');
  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{8,24}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePassword(formData.password)) {
      alert('Password must be 8-24 characters long and include uppercase, lowercase, numbers, and special characters.');
      return;
    }
    try {
      await axios.post('http://localhost:5000/auth/register', formData); // Ensure this URL matches your server URL and endpoint
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>

    <div className={styles.main}>

      <div className={styles.image_cont}><span className={styles.ct_logo}><img src='/cuvette_logo.png'/></span></div>
      <div className={styles.register}>
      <nav className={styles.navbar}>
        <div className={styles.logo}></div>
        <div className={styles.navButtons}>
        <button  className={activeButton === 'login' ? styles.active : ''} onClick={() =>{ setActiveButton('login'); navigate('/login')}}>Login</button>
        <button className={activeButton === 'signup' ? styles.active : ''} onClick={() =>{ setActiveButton('signup'); navigate('/')}}>Signup</button>
        </div>
      </nav>
        <h2 className={styles.heading}>Join us Today!</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          <input type="text" placeholder="Mobile No." value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} />
          <input type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
          <input type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} />
          <button className={styles.reg_btn} type="submit">Register</button>
        </form>
        <p className={styles.link_divert}>Already have an account? <a className={styles.link_divert} href="/login">Login</a></p>
      </div>
    </div>
    </>
  );
};

export default Register;
