import { ButtonMain } from '../ButtonMain/ButtonMain';
import style from './Product.module.scss';
import styles from './Product.module.scss';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useState } from 'react';

import { motion } from 'framer-motion';

/*@ts-expect-error This line intentionally triggers a TypeScript error due to specific library constraints */
import { fadeIn } from '../../../variants';

// import bgSvg from '/images/decor-bg/wave-haikei-white3.svg';
import bgSvg from '/images/decor-bg/wave-haikei-black2-product.svg';

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
import { ShieldCheck } from 'lucide-react';

export const Product: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const openModal = (index: number) => {
    setActiveTab(index);
    onOpen();
  };

  const closeModal = () => {
    setActiveTab(null);
    onClose();
  };

  return (
    <div
      id="product"
      style={{
        backgroundImage: `url(${bgSvg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
      className="text-white h-[900px] max-my-600:h-[820px] pt-40 max-my-600:pt-[94px] bg-color_black-section2">
      <div className={style.container}>
        <motion.div
          variants={fadeIn('up', 0.1)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}>
          <div className="flex items-center justify-center">
            <h2 className={styles.titleProduct}>Our Products</h2>
          </div>
        </motion.div>

        <div className="flex items-center gap-[100px] max-my-600:gap-[0] mt-[-30px] max-my-600:justify-center">
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>
            <div className="w-[500px] mt-[-20px] max-my-600:hidden">
              {/* <img src="/images/secure_login.svg" alt="logo" /> */}
              {/* <img src="/images/3d-img/secure-data-bro.svg" alt="logo" /> */}
              {/* <img src="/images/3d-img/cyber-attack.svg" alt="logo" /> */}
              <img src="/images/3d-img/amico.svg" alt="logo" />
              {/* <img src="/images/3d-img/cuate.svg" alt="logo" /> */}
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>
            <Tabs isFitted variant="enclosed">
              <TabList mb="1em">
                <Tab _selected={{ color: '#32b4ff', borderColor: 'white' }} className="uppercase" onClick={() => setActiveTab(null)}>
                  First Product
                </Tab>
                <Tab _selected={{ color: '#32b4ff', borderColor: 'white' }} className="uppercase" onClick={() => setActiveTab(null)}>
                  Second Product
                </Tab>
                <Tab _selected={{ color: '#32b4ff', borderColor: 'white' }} className="uppercase" onClick={() => setActiveTab(null)}>
                  Third Product
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <div className="flex flex-col gap-5 w-full max-w-xl">
                    {/* <span className="text-primary font-bold uppercase">
                      Premium Cyber Security Solutions
                    </span> */}
                    <h2 className="text-4xl font-bold">
                      We care about protecting your confidential data
                    </h2>
                    <p className="text-white h-[123px] text-[17px] overflow-hidden">
                      We offer state-of-the-art cyber security solutions to protect your online. Our
                      products are designed to meet the evolving needs of the digital. Benefit from
                      our state-of-the-art technology. Our advanced technologies are designed to
                      safeguard your digital assets. Your data is safe with us. Computers are secure
                      with us. Your online world is protected with us.
                    </p>
                    <div className="pt-4">
                      <ButtonMain onClick={() => openModal(0)} name="Learn More" blackBtn={false} />
                    </div>

                    <Modal isOpen={isOpen && activeTab === 0} onClose={closeModal} size={'2xl'}>
                      <ModalOverlay bg="blackAlpha.900" />
                      <ModalContent marginTop={'150px'}>
                        <ModalHeader>
                          <div className="uppercase text-primary flex items-center justify-center">
                            <div>
                              <ShieldCheck className="m-auto p-1" color="#32b4ff" size={40} />
                            </div>
                            <div>About First Product</div>
                          </div>
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <p className="mb-4 font-medium">
                            With a focus on innovation and continuous improvement, we strive to stay
                            ahead of emerging cyber threats. Our products are user-friendly, yet
                            powerful, providing comprehensive protection without compromising
                            performance. Whether you're an individual user or managing a complex
                            network, our range of products offers scalable solutions to suit your
                            specific needs.
                          </p>
                          <p className="mb-4 font-medium">
                            With a focus on innovation and continuous improvement, we strive to stay
                            ahead of emerging cyber threats. Our products are user-friendly, yet
                            powerful, providing comprehensive protection without compromising
                            performance. Whether you're an individual user or managing a complex
                            network, our range of products offers scalable solutions to suit your
                            specific needs.
                          </p>
                        </ModalBody>

                        <ModalFooter>
                          <ChakraButton
                            backgroundColor={'#32b4ff'}
                            color={'white'}
                            onClick={onClose}>
                            Close
                          </ChakraButton>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="flex flex-col gap-5 w-full max-w-xl">
                    {/* <span className="text-primary font-bold uppercase">
                      Premium Cyber Security Solutions
                    </span> */}
                    <h2 className="text-4xl font-bold">Our second product is the best one</h2>
                    <p className="text-white h-[123px] text-[17px] overflow-hidden">
                      Benefit from our state-of-the-art technology. Our advanced technologies are
                      designed to safeguard your digital assets. Your data is safe with us.
                      Computers are secure with us. Your online world is protected with us.
                    </p>
                    <div className="pt-4">
                      <ButtonMain onClick={() => openModal(1)} name="Learn More" blackBtn={false} />
                    </div>

                    <Modal isOpen={isOpen && activeTab === 1} onClose={closeModal} size={'2xl'}>
                      <ModalOverlay bg="blackAlpha.900" />
                      <ModalContent marginTop={'150px'}>
                        <ModalHeader>
                          <div className="uppercase text-primary flex items-center justify-center">
                            <div>
                              <ShieldCheck className="m-auto p-1" color="#32b4ff" size={40} />
                            </div>
                            <div>About Second Product</div>
                          </div>
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <p className="mb-4 font-medium">
                            With a focus on innovation and continuous improvement, we strive to stay
                            ahead of emerging cyber threats. Our products are user-friendly, yet
                            powerful, providing comprehensive protection without compromising
                            performance. Whether you're an individual user or managing a complex
                            network, our range of products offers scalable solutions to suit your
                            specific needs.
                          </p>
                          <p className="mb-4 font-medium">
                            With a focus on innovation and continuous improvement, we strive to stay
                            ahead of emerging cyber threats. Our products are user-friendly, yet
                            powerful, providing comprehensive protection without compromising
                            performance. Whether you're an individual user or managing a complex
                            network, our range of products offers scalable solutions to suit your
                            specific needs.
                          </p>
                        </ModalBody>

                        <ModalFooter>
                          <ChakraButton
                            backgroundColor={'#32b4ff'}
                            color={'white'}
                            onClick={onClose}>
                            Close
                          </ChakraButton>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="flex flex-col gap-5 w-full max-w-xl">
                    {/* <span className="text-primary font-bold uppercase">
                      Premium Cyber Security Solutions
                    </span> */}
                    <h2 className="text-4xl font-bold">Our third product is the best one</h2>
                    <p className="text-white h-[123px] text-[17px] overflow-hidden">
                      Our products are designed to meet the evolving needs of the digital. Benefit
                      from our state-of-the-art technology. Our advanced technologies are designed
                      to safeguard your digital assets. Your data is safe with us. Computers are
                      secure with us. Your online world is protected with us.
                    </p>
                    <div className="pt-4">
                      <ButtonMain onClick={() => openModal(2)} name="Learn More" blackBtn={false} />
                    </div>

                    <Modal isOpen={isOpen && activeTab === 2} onClose={closeModal} size={'2xl'}>
                      <ModalOverlay bg="blackAlpha.900" />
                      <ModalContent marginTop={'150px'}>
                        <ModalHeader>
                          <div className="uppercase text-primary flex items-center justify-center">
                            <div>
                              <ShieldCheck className="m-auto p-1" color="#32b4ff" size={40} />
                            </div>
                            <div>About Third Product</div>
                          </div>
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <p className="mb-4 font-medium">
                            With a focus on innovation and continuous improvement, we strive to stay
                            ahead of emerging cyber threats. Our products are user-friendly, yet
                            powerful, providing comprehensive protection without compromising
                            performance. Whether you're an individual user or managing a complex
                            network, our range of products offers scalable solutions to suit your
                            specific needs.
                          </p>
                          <p className="mb-4 font-medium">
                            With a focus on innovation and continuous improvement, we strive to stay
                            ahead of emerging cyber threats. Our products are user-friendly, yet
                            powerful, providing comprehensive protection without compromising
                            performance. Whether you're an individual user or managing a complex
                            network, our range of products offers scalable solutions to suit your
                            specific needs.
                          </p>
                        </ModalBody>

                        <ModalFooter>
                          <ChakraButton
                            backgroundColor={'#32b4ff'}
                            color={'white'}
                            onClick={onClose}>
                            Close
                          </ChakraButton>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </div>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
