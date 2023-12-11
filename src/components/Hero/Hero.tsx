import styles from './Hero.module.scss';
import videoMp4 from '/videos/video.mp4';
import logo from '/images/logo/logo-blue.svg';
import { ButtonMain } from '../ButtonMain/ButtonMain';
import { motion } from 'framer-motion';
{/*@ts-expect-error This line intentionally triggers a TypeScript error due to specific library constraints */}
import { fadeIn } from '../../../variants';
import { Link } from 'react-scroll';

export const Hero = () => {
  return (
    <div id="home" className="bg-color_black-section2 text-white h-full w-full pt-16 max-my-600:pt-2 z-10">
      {/* <div className={styles.container}> */}
      <div className={styles.relativeContainer}>
        <video
          className={`${styles.video} ${styles['hue-rotate-100']} `}
          src={videoMp4}
          autoPlay
          loop
          muted></video>
        <div className={`${styles.centeredContent} max-my-600:whitespace-normal`}>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>
            <img className={`${styles.logoHero} max-my-600:hidden`} src={logo} alt="logo" />
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>
            <h1 className={`${styles.title} max-my-600:text-[80px] max-my-600:leading-[1.05]`}>
              Your <span className="text-primary">Security</span> is Our Priority!
            </h1>
            <p className={`${styles.text} max-my-600:leading-[1.4]`}>
              Effective Cyber Security Solutions to Protect Your Online World
            </p>
            <Link
              to={'contact'}
              className="cursor-pointer border-b-2 border-transparent hover:border-primary hover:text-primary transition ease-in-out duration-300"
              activeClass="active"
              smooth
              spy
              offset={-50}>
              <ButtonMain name="Contact Us" blackBtn={false} />
            </Link>
          </motion.div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};
