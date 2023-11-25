import styles from './Hero.module.scss';
import videoMp4 from '/videos/video.mp4';
import logo from '/images/logo/logo-blue.svg';


export const Hero = () => {
  return (
    <div className="bg-color_black-section text-white h-full w-full">
      <div className={styles.container}>
        <div className={styles.relativeContainer}>
          <video
            className={`${styles.video} ${styles['hue-rotate-100']}`}
            src={videoMp4}
            autoPlay
            loop
            muted></video>
          <div className={styles.centeredContent}>
						<img className={styles.logoHero} src={logo} alt="logo" />
            <h1 className={styles.title}>Your Security is Our Priority!</h1>
            <p className={styles.text}>Effective Cyber Security Solutions to Protect Your Online World</p>
          </div>
        </div>
      </div>
    </div>
  );
};
