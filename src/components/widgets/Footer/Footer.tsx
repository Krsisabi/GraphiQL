import { useTheme } from '../../../hooks';

import styles from './Footer.module.css';

const Footer = () => {
  const theme = useTheme();

  const stylesIcon = {
    filter: theme === 'dark' ? 'invert(100%)' : 'none',
  };

  return (
    <footer className={styles.footer}>
      <span> &copy; 2023 - GraphiQL</span>
      <a className={styles.rsLogo} href="https://rs.school/react/" target="_blank" rel="noreferrer" style={stylesIcon} />
    </footer>
  );
};

export default Footer;
