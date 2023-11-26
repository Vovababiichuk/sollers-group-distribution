import styles from './Hero.module.scss';
import videoMp4 from '/videos/video.mp4';
import logo from '/images/logo/logo-blue.svg';
import { Button } from '../Button/Button';


export const Hero = () => {

  return (
    <div id='top' className="bg-color_black-section text-white h-full w-full pt-16 z-10">
      {/* <div className={styles.container}> */}
        <div className={styles.relativeContainer}>
          <video
            className={`${styles.video} ${styles['hue-rotate-100']}`}
            src={videoMp4}
            autoPlay
            loop
            muted></video>
          <div className={styles.centeredContent}>
						<img className={styles.logoHero} src={logo} alt="logo" />
            <h1 className={styles.title}>Your <span className='text-primary'>Security</span> is Our Priority!</h1>
            <p className={styles.text}>Effective Cyber Security Solutions to Protect Your Online World</p>
						<Button name='Our Products' />
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};
