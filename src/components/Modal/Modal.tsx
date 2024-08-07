// import { CheckSquare, ShieldCheck } from 'lucide-react';
// import { Button } from '../Button/Button';
// import style from './About.module.scss';
// import { useState } from 'react';
// import Modal from 'react-modal';
// import styles from './About.module.scss';
// import { motion } from 'framer-motion';
// {/*@ts-expect-error This line intentionally triggers a TypeScript error due to specific library constraints */}
// import { fadeIn } from '../../../variants';

// const customStyles = {
//   content: {
//     top: '53%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     zIndex: 1000,
//     // backgroundColor: '#1a1a1a',
//     // color: 'white',
//   },
//   overlay: {
//     backgroundColor: 'rgba(0, 0, 0, 0.9)',
//   },
// };

// export const About: React.FC = () => {
//   // let subtitle: HTMLElement | null;
//   // const [modalIsOpen, setIsOpen] = useState(false);

//   // function openModal() {
//   //   setIsOpen(true);
//   //   document.body.style.overflow = 'hidden';
//   // }

//   // function afterOpenModal() {
//   //   // references are now sync'd and can be accessed.
//   //   if (subtitle) {
//   //     subtitle.style.color = '#32b4ff';
//   //   }
//   // }

//   // function closeModal() {
//   //   setIsOpen(false);
//   //   document.body.style.overflow = 'auto';
//   // }

//   return (
//     <div id="about" className="text-black bg-[#fFF] h-[800px] pt-44 relative">
//       <div className={style.container}>
//         <motion.div
//           variants={fadeIn('up', 0.2)}
//           initial="hidden"
//           whileInView={'show'}
//           viewport={{ once: false, amount: 0.3 }}>
//           <div className="flex items-center justify-center">
//             <h2 className={styles.titleAbout}>About Us</h2>
//           </div>
//         </motion.div>
//         <div className="flex gap-10">
//           <div className="flex flex-col gap-5 w-full max-w-xl">
//             <motion.div
//               variants={fadeIn('up', 0.1)}
//               initial="hidden"
//               whileInView={'show'}
//               viewport={{ once: false, amount: 0.3 }}>
//               <span className="text-primary font-bold uppercase mb-4 block">
//                 Premium Cyber Security Solutions
//               </span>
//               <h2 className="text-4xl font-bold">Ultimate Protection for Your Online World</h2>
//             </motion.div>
//             <motion.div
//               variants={fadeIn('up', 0.2)}
//               initial="hidden"
//               whileInView={'show'}
//               viewport={{ once: false, amount: 0.3 }}>
//               <div className="flex gap-2 items-center">
//                 <span>
//                   <CheckSquare />
//                 </span>
//                 <p className="font-medium">
//                   We offer state-of-the-art cyber security solutions to protect your online. Our
//                   products are designed to meet the evolving needs of the digital.
//                 </p>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span>
//                   <CheckSquare />
//                 </span>
//                 <p className='font-medium'>
//                   Benefit from our state-of-the-art technology. Our advanced technologies are
//                   designed to safeguard your digital assets.
//                 </p>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span>
//                   <CheckSquare />
//                 </span>
//                 <p className='font-medium'>
//                   Your data is safe with us. Computers are secure with us. Your online world is
//                   protected with us.
//                 </p>
//               </div>
//             </motion.div>
//             <motion.div
//               variants={fadeIn('up', 0.3)}
//               initial="hidden"
//               whileInView={'show'}
//               viewport={{ once: false, amount: 0.3 }}>
//               <div onClick={openModal} className="pt-4">
//                 <Button name="Learn More" blackBtn={true} />
//               </div>
//             </motion.div>
//             <Modal
//               isOpen={modalIsOpen}
//               onAfterOpen={afterOpenModal}
//               onRequestClose={closeModal}
//               style={customStyles}
//               contentLabel="Example Modal">
//               {/* <h2 className='uppercase' ref={(_subtitle) => (subtitle = _subtitle)}>
//                 Subtitle
//                 <ShieldCheck color="#32b4ff" size={40} />
//               </h2> */}
//               <div className="w-[900px] flex items-center gap-10 z-[1000]">
//                 <div>
//                   <div className="bg-primary uppercase text-center text-white mb-4 flex items-center gap-2 justify-start">
//                     <span>
//                       <ShieldCheck className="m-auto p-1" color="white" size={40} />
//                     </span>
//                     <span>Dependability</span>
//                   </div>
//                   <p className="mb-4">
//                     Discover cutting-edge solutions with our state-of-the-art cyber security
//                     products. Our advanced technologies are designed to safeguard your digital
//                     assets and ensure a secure online experience. From robust antivirus solutions to
//                     intelligent threat detection systems, our products are tailored to meet the
//                     evolving challenges of the digital landscape.
//                   </p>
//                   <div className="bg-primary uppercase text-white mb-4 flex items-center gap-2 justify-start">
//                     <span>
//                       <ShieldCheck className="m-auto p-1" color="white" size={40} />
//                     </span>
//                     <span>Benefits</span>
//                   </div>
//                   <p className="mb-4">
//                     With a focus on innovation and continuous improvement, we strive to stay ahead
//                     of emerging cyber threats. Our products are user-friendly, yet powerful,
//                     providing comprehensive protection without compromising performance. Whether
//                     you're an individual user or managing a complex network, our range of products
//                     offers scalable solutions to suit your specific needs.
//                   </p>
//                   <div className="bg-primary uppercase text-center text-white mb-4 flex items-center gap-2 justify-start">
//                     <span>
//                       <ShieldCheck className="m-auto p-1" color="white" size={40} />
//                     </span>
//                     <span>Customer Support</span>
//                   </div>
//                   <p>
//                     Empower yourself with the latest in cyber security technology. Join our
//                     community of satisfied users who trust our products to defend against cyber
//                     threats and keep their online world secure. Choose confidence, choose
//                     reliability — choose our cyber security products for a safer digital future.
//                   </p>
//                 </div>
//                 <div>
//                   <img src="/images/undraw_certificate.svg" alt="logo" width={'1500px'} />
//                 </div>
//               </div>
//               <button
//                 className="bg-[#3f3d56] py-1 px-6 rounded-full text-white hover:scale-110 duration-300 ease-in-out mt-4"
//                 onClick={closeModal}>
//                 Close
//               </button>
//             </Modal>
//           </div>
//           <motion.div
//             variants={fadeIn('up', 0.3)}
//             initial="hidden"
//             whileInView={'show'}
//             viewport={{ once: false, amount: 0.3 }}>
//             <div className="w-[580px]">
//               <img src="/images/office.svg" alt="logo" width={'1000px'} />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };
