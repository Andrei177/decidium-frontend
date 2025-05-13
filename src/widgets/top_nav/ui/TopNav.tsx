import styles from './TopNav.module.css';
import logo from "/decidium.avif";
import search from "/search.svg";
import bells from "/notification.svg";
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

export const TopNav = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef(null);
  const timeoutRef = useRef(null);

  const openSearch = () => {
    setShowSearch(true);
    setTimeout(() => inputRef.current?.focus(), 0);
    resetAutoClose();
  };

  const closeSearch = () => {
    setShowSearch(false);
    setSearchValue('');
    clearTimeout(timeoutRef.current);
  };

  const toggleSearch = () => {
    if (showSearch) {
      // Если поле открыто — переадресация при наличии текста
      const query = searchValue.trim();
      if (query) {
        window.location.href = `/search?query=${encodeURIComponent(query)}`;
      }
    } else {
      openSearch();
    }
  };

  const resetAutoClose = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      closeSearch();
    }, 5000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const query = searchValue.trim();
      if (query) {
        window.location.href = `/search?query=${encodeURIComponent(query)}`;
      }
    }
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    resetAutoClose();
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <nav className={styles.nav}>
      <div className={styles.searchWrapper}>
        <input
          ref={inputRef}
          type="text"
          value={searchValue}
          placeholder="Поиск..."
          className={`${styles.searchInput} ${!showSearch ? styles.hiddenInput : ''}`}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        />
        <img
          src={search}
          alt="Поиск"
          className={styles.icon}
          onClick={toggleSearch}
        />
      </div>

      <Link to="/courses" className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </Link>

      <Link to="/notification" className={styles.icon}>
        <img src={bells} alt="Уведомления" className={styles.icon} />
      </Link>
    </nav>
  );
};
