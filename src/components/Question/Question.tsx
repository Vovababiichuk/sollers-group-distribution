import styles from './Question.module.scss';

import { motion } from 'framer-motion';
{/*@ts-expect-error This line intentionally triggers a TypeScript error due to specific library constraints */}
import { fadeIn } from '../../../variants';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';

export const Question: React.FC = () => {
  return (
    <div id="question" className="h-[800px] max-my-600:h-full max-my-600:max-h-[1300px] pt-40 relative">
      <div className={styles.container}>
        <motion.div
          variants={fadeIn('up', 0.1)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}>
          <div className="flex items-center justify-center">
            <h2 className={styles.titleQuestion}>Q/A</h2>
          </div>
        </motion.div>
        <div className="flex items-center justify-center gap-[100px] max-my-600:gap-[0] mt-[-20px]">
          <motion.div
          className='w-full max-w-[600px] mt-[-30px]'
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            >
              <span className="text-primary font-bold uppercase mb-4 block">
                  Premium Cyber Security Solutions
              </span>
              <h2 className="max-my-600:text-center text-4xl font-bold text-black mb-6">Answers to possible questions</h2>
            <div className='max-my-600:pb-20'>
              <Accordion backgroundColor={'#32b4ff'} color={'white'} borderRadius={'10px'}>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" fontSize={'18px'} textTransform={'uppercase'}>
                      How is Chakra UI Pro different from Chakra UI?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} color={'black'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" fontSize={'18px'} textTransform={'uppercase'}>
                      What do I get when I buy a Chakra UI Pro license?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} color={'black'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" fontSize={'18px'} textTransform={'uppercase'}>
                      Does Chakra UI Pro come with a Figma file or similar?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} color={'black'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" fontSize={'18px'} textTransform={'uppercase'}>
                      How does the Team license work?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} color={'black'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" fontSize={'20px'} textTransform={'uppercase'}>
                      How does the Team license work?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} color={'black'} fontSize={'16px'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>

              </Accordion>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>
            <div className="w-[500px] max-my-600:hidden">
              {/* <img src="/images/questions.svg" alt="logo" /> */}
              <img src="/images/3d-img/faq.svg" alt="logo" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
