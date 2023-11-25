import styles from './Header.module.scss';
import logo from '/images/logo/logo.png';

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className="flex items-center justify-between bg-black text-white">
        <img className={styles.logo} src={logo} alt="logo" />
        <ul className="flex gap-10">
          <li>About</li>
          <li>Services</li>
          <li>Contacts</li>
        </ul>
        <div>social</div>
      </div>
    </div>
  );
};
