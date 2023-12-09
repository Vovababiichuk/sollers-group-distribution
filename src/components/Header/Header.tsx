import { Instagram, Linkedin, PhoneCall } from 'lucide-react';
import { Nav } from '../Nav/Nav';
import styles from './Header.module.scss';
import logo from '/images/logo/logo.png';

export const Header = () => {
  return (
    <div className="w-full bg-[#0b0b19] text-white h-16 z-50">
      <div className={styles.container}>
        <div className="flex items-center justify-between">
          <a href="/">
            <img className={styles.logo} src={logo} alt="logo" />
          </a>
          <Nav />
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <div className="hover:scale-125 duration-300 transition ease-in-out  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 p-1 rounded-md">
                <a href="https://www.linkedin.com/" target="_blank">
                  <Linkedin size={14} />
                </a>
              </div>
              <div className="hover:scale-125 duration-300 transition ease-in-out bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-1 rounded-md">
                <a href="https://www.instagram.com/" target="_blank">
                  <Instagram size={14} />
                </a>
              </div>
            </div>
            <div className={styles.phone}>
              <span>
                <PhoneCall size={18} />
              </span>
              <span>+38 (068) 025-31-47</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
