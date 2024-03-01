import { ButtonMain } from '../ButtonMain/ButtonMain'
import style from './Product.module.scss'
import styles from './Product.module.scss'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { useState } from 'react'

import { motion } from 'framer-motion'

import { fadeIn } from '../../../variants'

// import bgSvg from '/images/decor-bg/wave-haikei-white3.svg';
import bgSvg from '/images/decor-bg/wave-haikei-black2-product.svg'

import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from '@chakra-ui/react'

import { Button as ChakraButton } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { ShieldCheck, Youtube } from 'lucide-react'

export const Product: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [activeTab, setActiveTab] = useState<number | null>(null)

	const openModal = (index: number) => {
		setActiveTab(index)
		onOpen()
	}

	const closeModal = () => {
		setActiveTab(null)
		onClose()
	}

	return (
		<div
			id='product'
			style={{
				backgroundImage: `url(${bgSvg})`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
			}}
			className='text-white h-[900px] max-my-600:h-[1000px] pt-40 max-my-600:pt-[94px] bg-color_black-section2'
		>
			<div className={style.container}>
				<motion.div
					variants={fadeIn('up', 0.1)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.3 }}
				>
					<div className='flex items-center justify-center'>
						<h2 className={styles.titleProduct}>Our Products</h2>
					</div>
				</motion.div>

				<div className='flex items-center gap-[100px] max-my-600:gap-[0] mt-[-30px] max-my-600:justify-center'>
					<motion.div
						variants={fadeIn('right', 0.2)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
					>
						<div className='w-[500px] mt-[-20px] max-my-600:hidden'>
							{/* <img src="/images/secure_login.svg" alt="logo" /> */}
							{/* <img src="/images/3d-img/secure-data-bro.svg" alt="logo" /> */}
							{/* <img src="/images/3d-img/cyber-attack.svg" alt="logo" /> */}
							<img src='/images/3d-img/amico.svg' alt='logo' />
							{/* <img src="/images/3d-img/cuate.svg" alt="logo" /> */}
						</div>
					</motion.div>
					<motion.div
						variants={fadeIn('left', 0.3)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
					>
						<Tabs isFitted variant='enclosed'>
							<TabList mb='1em'>
								<Tab
									_selected={{ color: '#32b4ff', borderColor: 'white' }}
									className='uppercase'
									onClick={() => setActiveTab(null)}
								>
									<img
										className='block w-[150px]'
										src='/images/partners/1.png'
										alt='logo'
									/>
								</Tab>
								<Tab
									_selected={{ color: '#32b4ff', borderColor: 'white' }}
									className='uppercase'
									onClick={() => setActiveTab(null)}
								>
									<img
										className='block w-[150px] bg-white px-4 rounded-[10px]'
										src='/images/partners/prod2.png'
										alt='logo'
									/>
								</Tab>
								{/* <Tab
									_selected={{ color: '#32b4ff', borderColor: 'white' }}
									className='uppercase'
									onClick={() => setActiveTab(null)}
								>
									Third Product
								</Tab> */}
							</TabList>
							<TabPanels>
								<TabPanel>
									<div className='flex flex-col gap-5 w-full max-w-xl'>
										{/* <span className="text-primary font-bold uppercase">
                      Premium Cyber Security Solutions
                    </span> */}
										<h2 className='text-[32px] font-bold leading-[1.4]'>
											GTB DLP — best rated by Gartner customer review DLP
											solution
										</h2>
										<p className='text-white h-[123px] max-my-600:h-[250px] text-[18px] overflow-hidden'>
											<a href="https://www.youtube.com/watch?v=qhTExUcjqfY" target="_blank" className='text-[#32b4ff] underline hover:text-red-400 transition ease-in-out duration-200 uppercase'>GTB Technologies</a> — is an American company that offers
											innovative solutions in the field of data loss prevention
											(Loss Prevention - DLP). Founded in 2004, GTB Technologies
											is one of the leaders in the cybersecurity industry with
											offices around the world.
										</p>
										<div className='pt-3'>
											<ButtonMain
												onClick={() => openModal(0)}
												name='Learn More'
												blackBtn={false}
											/>
										</div>

										<Modal
											isOpen={isOpen && activeTab === 0}
											onClose={closeModal}
											size={'4xl'}
										>
											<ModalOverlay bg='blackAlpha.900' />
											<ModalContent marginTop={'150px'}>
												<ModalHeader>
													<div className='uppercase text-primary flex items-center justify-center'>
														{/* <div>
															<ShieldCheck
																className='m-auto p-1'
																color='#32b4ff'
																size={40}
															/>
														</div> */}
														<div className='flex flex-col gap-2'>
															<div>
																<img
																	className='block w-[170px] bg-[#32b4ff] rounded-md py-1 px-6 text-center m-auto mb-1'
																	src='/images/partners/1.png'
																	alt='logo'
																/>
															</div>
															<div>
																<a
																	className='flex items-center text-[18px] text-center hover:text-red-400 underline transition duration-200 ease-in-out'
																	href='https://www.youtube.com/watch?v=qhTExUcjqfY'
																	target='_blank'
																>
																	<span>
																		<Youtube
																			size={32}
																			className='inline-block mr-2'
																		/>
																	</span>
																	<span>
																		GTB TECHNOLOGIES: A NEW APPROACH TO PREVENTING
																		DATA LOSS
																	</span>
																</a>
															</div>
														</div>
													</div>
												</ModalHeader>
												<ModalCloseButton />
												<ModalBody>
													<div className='p-3 rounded-lg bg-primary text-white font-medium text-[17px] shadow-lg shadow-black/20'>
														<p className='mb-4'>
															Features of DLP-system from GTB Technologies
														</p>
														<p className='mb-4'>
															Any company that has valuable data sooner or later
															decides to implement a DLP-system. Modern companies
															offer a large number of options. According to the
															method of finding the source of DLP-programs are
															divided into three categories:
														</p>
														<p className='mb-4'>
															data-in-use — in the process of using information;
															data-in-motion — during the transfer of information
															; data-at-rest — during the storage. The product GTB
															DLP Suite recognizes data when moving and storing.
															Recognition works for MS Office documents, PDF and
															regular images. Libraries are available in 75
															languages. The company also offers a unique GTB
															Fingerprinting technology that protects huge
															databases with a minimum of hash-prints.
														</p>
														<p className='mb-4'>
															Unlike other companies' products, GTB provides full
															visibility of data that is moved in cloud services.
															The products also have the function of blocking
															unauthorized access to the cloud.
														</p>
														<p className='mb-4'>
															One of the key decisions of the company — GTB
															Endpoint Agent. The product classifies data in real
															time and provides real-time information about where
															users move information. Another GTB program - DLP
															for Intellectual Property protection - aims to
															protect intellectual property. With it, you can
															track all changes in documents and recognize users
															who have access to them.
														</p>
														<p className='mb-4'>
															Sollers is the official distributor of GTB
															technologies, provides distribution and promotion of
															solutions in CEE countires as well as professional
															support for their design and implementation.
														</p>
													</div>
												</ModalBody>

												<ModalFooter>
													<ChakraButton
														backgroundColor={'#32b4ff'}
														color={'white'}
														onClick={onClose}
													>
														Close
													</ChakraButton>
												</ModalFooter>
											</ModalContent>
										</Modal>
									</div>
								</TabPanel>
								<TabPanel>
									<div className='flex flex-col gap-5 w-full max-w-xl'>
										{/* <span className="text-primary font-bold uppercase">
                      Premium Cyber Security Solutions
                    </span> */}
										<h2 className='text-[32px] font-bold leading-[1.4]'>
											Best product for detecting targeted attacks (APTs),
											botnets, "zero-day" attacks and insiders
										</h2>
										<p className='text-white h-[123px] max-my-600:h-[200px] text-[18px] overflow-hidden'>
											<a href="https://www.youtube.com/watch?v=NA9A3dIbKws" target="_blank" className='text-[#32b4ff] underline hover:text-red-400 transition duration-200 ease-in-out uppercase'>Labyrinth</a> — is a European team of cybersecurity engineers
											and pentesters that specializes in developing solutions
											for the early detection and prevention of cyber threats.
										</p>
										<div className='mt-[-16px]'>
											<ButtonMain
												onClick={() => openModal(1)}
												name='Learn More'
												blackBtn={false}
											/>
										</div>

										<Modal
											isOpen={isOpen && activeTab === 1}
											onClose={closeModal}
											size={'3xl'}
										>
											<ModalOverlay bg='blackAlpha.900' />
											<ModalContent marginTop={'150px'}>
												<ModalHeader>
													<div className='uppercase text-primary flex items-center justify-center'>
														{/* <div>
															<ShieldCheck
																className='m-auto p-1'
																color='#32b4ff'
																size={40}
															/>
														</div>
														<div>About Second Product</div> */}
														<div className='flex flex-col gap-2'>
															<div>
																<img
																	className='block w-[170px] rounded-md py-1 px-3 text-center m-auto'
																	src='/images/partners/prod2.png'
																	alt='logo'
																/>
															</div>
															<div>
																<a
																	className='flex items-center text-[18px] text-center hover:text-red-400 underline transition duration-200 ease-in-out'
																	href='https://www.youtube.com/watch?v=NA9A3dIbKws'
																	target='_blank'
																>
																	<Youtube
																		size={32}
																		className='inline-block mr-2'
																	/>
																	<span>
																		HOW TO EXPAND LABYRINTH DECEPTION PLATFORM
																	</span>
																</a>
															</div>
														</div>
													</div>
												</ModalHeader>
												<ModalCloseButton />
												<ModalBody>
													<div className='p-3 rounded-lg bg-primary text-white font-medium text-[17px] shadow-lg shadow-black/20'>
														<p className='mb-4'>
															Based on unique threat detection technologies, this
															Deception solution provides attackers with the
															illusion of real vulnerabilities in the IT
															infrastructure. Based on the so-called Points,
															intelligent simulation hosts, each component of the
															imaginary environment reproduces the services and
															content of real network segments. Labyrinth
															encourages attackers to attack by monitoring and
															studying their actions to improve security.
														</p>
														<p className='mb-4'>
															Sollers is the official distributor of Labyrinth,
															provides distribution and promotion of solutions in
															CEE countries, as well as professional support for
															their design and implementation.
														</p>
													</div>
												</ModalBody>

												<ModalFooter>
													<ChakraButton
														backgroundColor={'#32b4ff'}
														color={'white'}
														onClick={onClose}
													>
														Close
													</ChakraButton>
												</ModalFooter>
											</ModalContent>
										</Modal>
									</div>
								</TabPanel>
								<TabPanel>
									<div className='flex flex-col gap-5 w-full max-w-xl'>
										{/* <span className="text-primary font-bold uppercase">
                      Premium Cyber Security Solutions
                    </span> */}
										<h2 className='text-4xl font-bold'>
											Our third product is the best one
										</h2>
										<p className='text-white h-[123px] text-[17px] overflow-hidden'>
											Our products are designed to meet the evolving needs of
											the digital. Benefit from our state-of-the-art technology.
											Our advanced technologies are designed to safeguard your
											digital assets. Your data is safe with us. Computers are
											secure with us. Your online world is protected with us.
										</p>
										<div className='pt-4'>
											<ButtonMain
												onClick={() => openModal(2)}
												name='Learn More'
												blackBtn={false}
											/>
										</div>

										<Modal
											isOpen={isOpen && activeTab === 2}
											onClose={closeModal}
											size={'2xl'}
										>
											<ModalOverlay bg='blackAlpha.900' />
											<ModalContent marginTop={'150px'}>
												<ModalHeader>
													<div className='uppercase text-primary flex items-center justify-center'>
														<div>
															<ShieldCheck
																className='m-auto p-1'
																color='#32b4ff'
																size={40}
															/>
														</div>
														<div>About Third Product</div>
													</div>
												</ModalHeader>
												<ModalCloseButton />
												<ModalBody>
													<p className='mb-4 font-medium'>
														With a focus on innovation and continuous
														improvement, we strive to stay ahead of emerging
														cyber threats. Our products are user-friendly, yet
														powerful, providing comprehensive protection without
														compromising performance. Whether you're an
														individual user or managing a complex network, our
														range of products offers scalable solutions to suit
														your specific needs.
													</p>
													<p className='mb-4 font-medium'>
														With a focus on innovation and continuous
														improvement, we strive to stay ahead of emerging
														cyber threats. Our products are user-friendly, yet
														powerful, providing comprehensive protection without
														compromising performance. Whether you're an
														individual user or managing a complex network, our
														range of products offers scalable solutions to suit
														your specific needs.
													</p>
												</ModalBody>

												<ModalFooter>
													<ChakraButton
														backgroundColor={'#32b4ff'}
														color={'white'}
														onClick={onClose}
													>
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
	)
}
