import styles from './Services.module.scss';
import { SliderSlick } from '../SliderSlick/SliderSlick';
import { motion } from 'framer-motion';
{/*@ts-expect-error This line intentionally triggers a TypeScript error due to specific library constraints */}
import { fadeIn } from '../../../variants';

export const Services = () => {
  return (
    <div id="services" className="h-[800px] flex flex-col items-center justify-center">
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
