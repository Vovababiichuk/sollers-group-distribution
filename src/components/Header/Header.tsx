import { Instagram, Linkedin, PhoneCall } from 'lucide-react';
import { Nav } from '../Nav/Nav';
import styles from './Header.module.scss';
import logo from '/images/logo/logo.png';
import { MenuBtn } from '../MenuBtn/MenuBtn';

export const Header = () => {
  return (
    <div className="w-full bg-[#0b0b19] text-white h-16 max-my-930:h-24 max-my-600:h-16 z-50">
      <div className={styles.container}>
        <div className="relative flex max-my-930:flex-col max-my-930:gap-4 max-my-600:gap-5 items-center justify-between">
          {/* logo */}
          <a href="/">
            <img className={`${styles.logo} max-my-930:hidden`} src={logo} alt="logo" />
          </a>
          <div className="hidden max-my-600:block text-primary font-bold uppercase text-[18px]">
            Sollers Group
          </div>
          {/* Nav */}
          <div className="max-my-600:hidden">
            <Nav />
          </div>
          {/* MenuBtn */}
          <div className="absolute right-0 top-5 z-10 hidden max-my-600:block">
            <MenuBtn />
          </div>
          {/* Social */}
          <div className="flex items-center gap-10 max-my-600:hidden">
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
