import styles from './Hero.module.scss';
import videoMp4 from '/videos/video.mp4';

export const Hero = () => {
  return (
    <div className="bg-color_black-section text-white h-full w-full">
      <div className={styles.container}>
				<video className={`${styles.video} ${styles['hue-rotate-100']}`} src={videoMp4} autoPlay loop muted></video>
      </div>
    </div>
  );
};
