import { ScreenShare, ShieldCheck, UserCog } from 'lucide-react';
import styles from './WhyWe.module.scss';

import { BageCounter } from '../BageCounter/BageCounter';

import { motion } from 'framer-motion';

import { fadeIn } from '../../../variants';

import { MdOutlineSupportAgent } from 'react-icons/md';

// import bgSvg from '/images/decor-bg/wave-haikei-white3.svg';
import bgSvg from '/images/decor-bg/wave-haikei-black2-product.svg';

export const WhyWe: React.FC = () => {
  return (
    <div
      id="whywe"
      style={{
        backgroundImage: `url(${bgSvg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
      className="text-white bg-color_black-section2 h-[900px] max-my-600:h-[980px] pt-36 relative">
      <div className={styles.container}>
        <motion.div
          variants={fadeIn('up', 0.1)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}>
          <div className="flex items-center justify-center">
            <h2 className={styles.titleAbout}>Why Us?</h2>
          </div>
        </motion.div>
        <div className="flex items-center justify-center gap-16 max-my-600:gap-1">
          <div className="flex flex-col gap-8 w-full max-w-xl">
            <motion.div
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}>
              <span className="text-primary font-bold uppercase mb-4 block">
                Premium Cyber Security Solutions
              </span>
              <div className="flex gap-3 items-center ">
                <MdOutlineSupportAgent size={32} style={{ marginBottom: '12px', color: '#fff' }} />
                <span className="text-[24px] font-bold uppercase mb-4">Support 24/7</span>
              </div>
              <div className="flex gap-2 items-center">
                <ShieldCheck size={32} style={{ marginBottom: '14px' }} />
                <span className="text-[24px] font-bold uppercase mb-4">
                  Highest Cyber Security Expertise
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <ScreenShare size={32} style={{ marginBottom: '10px' }} />
                <span className="text-[24px] font-bold uppercase mb-4">Quality Assurance</span>
              </div>
              <div className="flex gap-3 items-center">
                <UserCog size={32} />
                <span className="text-[24px] font-bold uppercase">
                  Accessibility and Compliance
                </span>
              </div>
            </motion.div>

            {/* COUNTER */}
            <BageCounter />

          </div>
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>
            <div className="w-[470px] mt-[-30px] max-my-600:hidden">
              {/* <img src="/images/reduce.svg" alt="logo" width={'550px'} /> */}
              <img src="/images/3d-img/Endpoint-bro.svg" alt="logo" width={'550px'} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
