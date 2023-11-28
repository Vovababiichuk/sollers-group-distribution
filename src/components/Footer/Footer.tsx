import styles from './Footer.module.scss';
import logo from '/images/logo/logo-footer.svg';
import { motion } from 'framer-motion';
// @ts-expect-error This line intentionally triggers a TypeScript error due to specific library constraints
import { fadeIn } from '../../../variants'; // Assuming this is a valid import

export const Footer = () => {
  return (
    <div className={`h-full h-[300px] bg-[#0b0b19] ${styles.footer}`}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left column */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>
            <div className={styles.column}>
              <h3 className=" text-gray-500 text-center text-[24px] mb-6">Our Partners</h3>
              <div className="flex items-center justify-center gap-32 text-gray-500">
                <span className="block">
                  <img className="block w-[300px]" src="/images/partners/1.png" alt="" />
                </span>
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
              <h3 className="text-gray-500 text-center text-[24px] mb-6">Our sicials</h3>
              <div className="flex items-center justify-center gap-32 text-gray-500">
                <span>1</span>
                <span>2</span>
                <span>3</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
