import styles from './TopNav.module.css'
import logo from "/decidium.avif"
import search from "/search.svg"
import bells from "/notification.svg"
import { Link } from 'react-router-dom';


export const TopNav = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/search" className={styles.search_container}>
          <img src={search} alt="Search" className={styles.icon} />
      </Link>
      <Link to="/courses" className={styles.logo_container}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </Link>
      <Link to="/notificaton" className={styles.notifications_container}>
        <img src={bells} alt="Notifications" className={styles.icon} />
      </Link>
    </nav>
  );
};
