import styles from './Hero.module.scss';
import videoMp4 from '/videos/video.mp4';
import logo from '/images/logo/logo-blue.svg';
import { Button } from '../Button/Button';
import { motion } from 'framer-motion';
{/*@ts-expect-error This line intentionally triggers a TypeScript error due to specific library constraints */}
import { fadeIn } from '../../../variants';

export const Hero = () => {
  return (
    <div id="top" className="bg-color_black-section2 text-white h-full w-full pt-16 z-10">
      {/* <div className={styles.container}> */}
      <div className={styles.relativeContainer}>
        <video
          className={`${styles.video} ${styles['hue-rotate-100']}`}
          src={videoMp4}
          autoPlay
          loop
          muted></video>
        <div className={styles.centeredContent}>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>
            <img className={styles.logoHero} src={logo} alt="logo" />
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>
            <h1 className={styles.title}>
              Your <span className="text-primary">Security</span> is Our Priority!
            </h1>
            <p className={styles.text}>
              Effective Cyber Security Solutions to Protect Your Online World
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>
            <Button name="Our Product" blackBtn={false} />
          </motion.div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};
