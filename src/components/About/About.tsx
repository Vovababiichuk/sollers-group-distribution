import { FolderLock, ShieldCheck, UserCog } from 'lucide-react';
import { ButtonMain } from '../ButtonMain/ButtonMain';
import style from './About.module.scss';
import styles from './About.module.scss';
import { motion } from 'framer-motion';

/*@ts-expect-error This line intentionally triggers a TypeScript error due to specific library constraints */
import { fadeIn } from '../../../variants';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

import { Button as ChakraButton } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

import bgSvg from '../../../public/images/decor-bg/wave-haikei7.svg';

export const About: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div
        id="about"
        style={{
          backgroundImage: `url(${bgSvg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="text-black h-[800px] max-my-600:h-[920px] pt-44 relative">
        <div className={style.container}>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>
            <div className="flex items-center justify-center">
              <h2 className={`${styles.titleAbout} max-my-600:mb-7`}>About Us</h2>
            </div>
          </motion.div>
          <div className="flex justify-between max-my-930:flex-col max-my-930:items-center">
            <div className="flex flex-col gap-5 w-full max-w-xl">
              <motion.div
                variants={fadeIn('up', 0.1)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}>
                <span className="text-primary font-bold uppercase mb-4 block">
                  Premium Cyber Security Solutions
                </span>
                <h2 className="text-4xl font-bold">Ultimate Protection for Your Online World</h2>
              </motion.div>
              <motion.div
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}>
                <div className="flex flex-col gap-3 text-[17px]">
                  <div className="flex gap-3 items-center relative">
                    <span>
                      <ShieldCheck size={28} />
                    </span>
                    <p className="font-medium">
                      We offer state-of-the-art cyber security solutions to protect your online. Our
                      products are designed to meet the evolving needs of the digital.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>
                      <FolderLock />
                    </span>
                    <p className="font-medium">
                      Benefit from our state-of-the-art technology. Our advanced technologies are
                      designed to safeguard your digital assets.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>
                      <UserCog />
                    </span>
                    <p className="font-medium">
                      Your data is safe with us. Computers are secure with us. Your online world is
                      protected with us.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn('up', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}>
                <div className="pt-4">
                  <ButtonMain onClick={onOpen} name="Learn More" blackBtn={true} />
                </div>
              </motion.div>

              <Modal isOpen={isOpen} onClose={onClose} size={'2xl'}>
                <ModalOverlay bg="blackAlpha.900" />
                <ModalContent marginTop={'150px'}>
                  <ModalHeader>
                    <div className="uppercase text-primary flex items-center justify-center">
                      <div>
                        <ShieldCheck className="m-auto p-1" color="#32b4ff" size={40} />
                      </div>
                      <div>About us more</div>
                    </div>
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <p className="mb-4 font-medium">
                      With a focus on innovation and continuous improvement, we strive to stay ahead
                      of emerging cyber threats. Our products are user-friendly, yet powerful,
                      providing comprehensive protection without compromising performance. Whether
                      you're an individual user or managing a complex network, our range of products
                      offers scalable solutions to suit your specific needs.
                    </p>
                    <p className="mb-4 font-medium">
                      With a focus on innovation and continuous improvement, we strive to stay ahead
                      of emerging cyber threats. Our products are user-friendly, yet powerful,
                      providing comprehensive protection without compromising performance. Whether
                      you're an individual user or managing a complex network, our range of products
                      offers scalable solutions to suit your specific needs.
                    </p>
                  </ModalBody>

                  <ModalFooter>
                    <ChakraButton backgroundColor={'#32b4ff'} color={'white'} onClick={onClose}>
                      Close
                    </ChakraButton>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}>
              <div className="w-[550px] mt-[-80px] max-my-930:hidden">
                {/* <img src="/images/office.svg" alt="logo" width={'1000px'} /> */}
                <img
                  className="block"
                  src="/images/3d-img/security-top.svg"
                  alt="logo"
                  width={'1000px'}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
