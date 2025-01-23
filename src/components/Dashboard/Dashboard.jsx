import { useEffect, useState } from 'react';
import styles from './Dashboard.module.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [greeting, setGreeting] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(date.toLocaleDateString('en-US', options));
    
    const hours = date.getHours();
    if (hours < 12) setGreeting('Good Morning');
    else if (hours < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  }, []);

  const handleNavClick = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.sidebar}>
        <div className={styles.logo}>Logo</div>
        <ul>
          <li onClick={() => handleNavClick('/dashboard')}>Dashboard</li>
          <li onClick={() => handleNavClick('/links')}>Links</li>
          <li onClick={() => handleNavClick('/analytics')}>Analytics</li>
          <li onClick={() => handleNavClick('/settings')}>Settings</li>
        </ul>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.topNav}>
          <div className={styles.greeting}>{greeting}, Sujith</div>
          <div className={styles.date}>{currentDate}</div>
          <div className={styles.actions}>
            <button>Create new</button>
            <input type="text" placeholder="Search by remarks" />
            <div className={styles.userInitials}>SU</div>
          </div>
        </div>
        <div className={styles.content}>
          {/* Add conditional rendering for Dashboard, Links, Analytics components here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
