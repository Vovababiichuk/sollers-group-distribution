import styles from './Footer.module.scss';
import { motion } from 'framer-motion';
// @ts-expect-error This line intentionally triggers a TypeScript error due to specific library constraints
import { fadeIn } from '../../../variants'; // Assuming this is a valid import
import { Link } from 'react-scroll';
import logo from '/images/logo/logo-blue.svg';
import { Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <div className={`h-[300px] bg-[#0b0b19] ${styles.footer}`}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left column */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>
            <div className={styles.column}>
              {/* <h3 className=" text-gray-500 text-center text-[24px] mb-6">Our Partners</h3> */}
              <div className="flex items-center justify-center gap-16 text-gray-500">
                <div className="hover:scale-105 duration-300 transition ease-in-out">
                  <a href="https://gttb.com/" target="_blank">
                    <img className="block w-[160px]" src="/images/partners/1.png" alt="" />
                  </a>
                </div>
                <span>2</span>
                <span>3</span>
              </div>
            </div>
          </motion.div>

          {/* Center column with logo */}
          <motion.div
            variants={fadeIn('', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>
            <div className={styles.centerColumn}>
              <img className={styles.logo} src={logo} alt="logo" />
              <span className="text-gray-500 absolute top-[190px]">
                sollers group &copy; {new Date().getFullYear()} All rights reserved
              </span>
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>
            <div className={styles.column}>
              {/* <h3 className="text-gray-500 text-center text-[24px] mb-6">Our sicials</h3> */}
              <div className="flex items-center justify-center uppercase gap-8 text-white flex-wrap w-full max-w-[300px]">
                <Link
                  to={'about'}
                  className="cursor-pointer border-b-2 border-transparent hover:border-primary hover:text-primary transition ease-in-out duration-300"
                  activeClass="active"
                  smooth
                  spy>
                  About
                </Link>
                <Link
                  to={'product'}
                  className="cursor-pointer border-b-2 border-transparent hover:border-primary hover:text-primary transition ease-in-out duration-300"
                  activeClass="active"
                  smooth
                  spy>
                  Products
                </Link>
                <Link
                  to={'services'}
                  className="cursor-pointer border-b-2 border-transparent hover:border-primary hover:text-primary transition ease-in-out duration-300"
                  activeClass="active"
                  smooth
                  spy>
                  Services
                </Link>
                <Link
                  to={'whywe'}
                  className="cursor-pointer border-b-2 border-transparent hover:border-primary hover:text-primary transition ease-in-out duration-300"
                  activeClass="active"
                  smooth
                  spy>
                  Why Us
                </Link>
                <Link
                  to={'question'}
                  className="cursor-pointer border-b-2 border-transparent hover:border-primary hover:text-primary transition ease-in-out duration-300"
                  activeClass="active"
                  smooth
                  spy
                  offset={-50}>
                  Q/A
                </Link>
                {/* <Link
                to={'contact'}
								className='cursor-pointer border-b-2 border-transparent hover:border-primary hover:text-primary transition ease-in-out duration-300'
								activeClass='active'
								smooth
								spy
                offset={-50}
                >Contact</Link> */}
                <span className="hover:text-primary hover:cursor-pointer hover:border-b-2 hover:border-primary">
                  Contact
                </span>
                <div className="flex items-center gap-6">
                  <div className="hover:scale-125 duration-300 transition ease-in-out  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 p-1 rounded-md">
                    <a href="https://www.linkedin.com/" target="_blank">
                      <Linkedin size={16} />
                    </a>
                  </div>
                  <div className="hover:scale-125 duration-300 transition ease-in-out bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-1 rounded-md">
                    <a href="https://www.instagram.com/" target="_blank">
                      <Instagram size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
