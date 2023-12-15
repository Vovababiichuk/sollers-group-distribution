import styles from './ServicesTwo.module.scss';
import { motion } from 'framer-motion';

/*@ts-expect-error This line intentionally triggers a TypeScript error due to specific library constraints */
import { fadeIn } from '../../../variants';

import bgSvg from '/images/decor-bg/wave-haikei-black2.svg';

export const ServicesTwo = () => {
  return (
    <div
      id="services"
      style={{
        backgroundImage: `url(${bgSvg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
      className="h-[1300px] max-my-600:h-[3320px] pt-[160px] max-my-600:pt-[120px]">
      <motion.div
        variants={fadeIn('up', 0.1)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}>
        <div className="flex items-center justify-center">
          <h2 className={styles.titleServices}>Our Services</h2>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}>
        <div className="h-[1000px]">
          <div className="bg-primary h-[368px] max-my-600:h-[580px] rounded-[20px] px-10 mx-4 max-my-600:px-0 flex items-center max-my-600:mt-[-20px]">
            <div className={styles.container}>
              <div className="">
                <div className="flex items-center pt-[480px] max-my-600:mt-[-560px] mb-10 max-my-600:mb-4 max-my-600:flex-col">
                  <h2 className={styles.title}>Our best services for your solution</h2>
                  <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
                    laboriosam maxime tenetur blanditiis commodi enim! Molestias provident officia
                    possimus explicabo optio porro illo labore eveniet, asperiores tenetur fuga
                    nobis. Velit.
                  </p>
                </div>
                <div className="relative">
                  <motion.div
                    variants={fadeIn('up', 0.1)}
                    initial="hidden"
                    whileInView={window.innerWidth > 1024 ? 'show' : 'show'
                    }
                    viewport={{ once: false, amount: 0.1 }}>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-my-600:absolute max-my-600:top-[10px] max-my-600:opacity-100">
                      <li className="bg-white shadow-lg shadow-primary/50  p-[30px] rounded-[10px] min-h-[288px] flex flex-col items-center text-center">
                        <div className="mb-[15px]">
                          <img
                            src="/images//cards-img/26.svg"
                            style={{ width: '100px' }}
                            alt="icon"
                          />
                        </div>
                        <h3 className="text-[22px] text-black font-bold mb-[10px]">
                          General Fractitioners
                        </h3>
                        <p className="text-[17px] text-black font-light leading-normal max-w-[300px] ">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor
                          sit amet consectetur adipisicing elit.
                        </p>
                      </li>
                      <li className="bg-white shadow-lg shadow-primary/50  p-[30px] rounded-[10px] min-h-[288px] flex flex-col items-center text-center">
                        <div className="mb-[15px]">
                          <img
                            src="/images//cards-img/26.svg"
                            style={{ width: '100px' }}
                            alt="icon"
                          />
                        </div>
                        <h3 className="text-[22px] text-black font-bold mb-[10px]">
                          General Fractitioners
                        </h3>
                        <p className="text-[17px] text-black font-light leading-normal max-w-[300px] ">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor
                          sit amet consectetur adipisicing elit.
                        </p>
                      </li>
                      <li className="bg-white shadow-lg shadow-primary/50  p-[30px] rounded-[10px] min-h-[288px] flex flex-col items-center text-center">
                        <div className="mb-[15px]">
                          <img
                            src="/images//cards-img/26.svg"
                            style={{ width: '100px' }}
                            alt="icon"
                          />
                        </div>
                        <h3 className="text-[22px] text-black font-bold mb-[10px]">
                          General Fractitioners
                        </h3>
                        <p className="text-[17px] text-black font-light leading-normal max-w-[300px] ">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor
                          sit amet consectetur adipisicing elit.
                        </p>
                      </li>
                      <li className="bg-white shadow-lg shadow-primary/50  p-[30px] rounded-[10px] min-h-[288px] flex flex-col items-center text-center">
                        <div className="mb-[15px]">
                          <img
                            src="/images//cards-img/26.svg"
                            style={{ width: '100px' }}
                            alt="icon"
                          />
                        </div>
                        <h3 className="text-[22px] text-black font-bold mb-[10px]">
                          General Fractitioners
                        </h3>
                        <p className="text-[17px] text-black font-light leading-normal max-w-[300px] ">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor
                          sit amet consectetur adipisicing elit.
                        </p>
                      </li>
                      <li className="bg-white shadow-lg shadow-primary/50  p-[30px] rounded-[10px] min-h-[288px] flex flex-col items-center text-center">
                        <div className="mb-[15px]">
                          <img
                            src="/images//cards-img/26.svg"
                            style={{ width: '100px' }}
                            alt="icon"
                          />
                        </div>
                        <h3 className="text-[22px] text-black font-bold mb-[10px]">
                          General Fractitioners
                        </h3>
                        <p className="text-[17px] text-black font-light leading-normal max-w-[300px] ">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor
                          sit amet consectetur adipisicing elit.
                        </p>
                      </li>
                      <li className="bg-white shadow-lg shadow-primary/50  p-[30px] rounded-[10px] min-h-[288px] flex flex-col items-center text-center">
                        <div className="mb-[15px]">
                          <img
                            src="/images//cards-img/26.svg"
                            style={{ width: '100px' }}
                            alt="icon"
                          />
                        </div>
                        <h3 className="text-[22px] text-black font-bold mb-[10px]">
                          General Fractitioners
                        </h3>
                        <p className="text-[17px] text-black font-light leading-normal max-w-[300px] ">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor
                          sit amet consectetur adipisicing elit.
                        </p>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
