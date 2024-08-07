import styles from './Services.module.scss';
import { SliderSlick } from '../SliderSlick/SliderSlick';
import { motion } from 'framer-motion';

import { fadeIn } from '../../../variants';

import bgSvg from '/images/decor-bg/wave-haikei-black2.svg';

export const Services = () => {
  return (
    <div
      id="services"
      style={{
        backgroundImage: `url(${bgSvg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
      className="h-[900px] flex flex-col items-center justify-center">
      <motion.div
        variants={fadeIn('up', 0.1)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}>
        <h2 className={styles.titleServices}>Our Services</h2>
      </motion.div>
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}>
        <SliderSlick />
      </motion.div>
    </div>
  );
};
