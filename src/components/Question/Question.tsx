import styles from './Question.module.scss'

import { motion } from 'framer-motion'

import { fadeIn } from '../../../variants'

import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
} from '@chakra-ui/react'

// import bgSvg from '/images/decor-bg/wave-haikei-black2.svg'

export const Question: React.FC = () => {
	return (
		<div
			id='question'
			className={`${styles.bgImages} h-[900px] max-my-600:h-full pt-40 relative`}
		>
			<div className={styles.container}>
				<motion.div
					variants={fadeIn('up', 0.1)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.3 }}
				>
					<div className='flex items-center justify-center'>
						<h2 className={styles.titleQuestion}>Q/A</h2>
					</div>
				</motion.div>
				<div className='flex items-center justify-center gap-[100px] max-my-600:gap-[0] mt-[-20px]'>
					<motion.div
						className='w-full max-w-[600px] mt-[-30px]'
						variants={fadeIn('right', 0.3)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
					>
						<span className='text-primary font-bold uppercase mb-4 block'>
							Premium Cyber Security Solutions
						</span>
						<h2 className='max-my-600:text-center text-4xl font-bold text-black mb-6'>
							Answers to possible questions
						</h2>
						<div className='max-my-600:pb-20'>
							<Accordion
								backgroundColor={'#32b4ff'}
								color={'white'}
								borderRadius={'10px'}
							>
								<AccordionItem>
									<h2>
										<AccordionButton>
											<Box
												as='span'
												flex='1'
												textAlign='left'
												fontSize={'18px'}
											>
												What are the main features and capabilities of the DLP
												system from GTB Technologies?
											</Box>
											<AccordionIcon />
										</AccordionButton>
									</h2>
									<AccordionPanel pb={4} color={'black'}>
										The DLP system from GTB Technologies recognizes data during
										movement and storage, works with MS Office documents, PDFs,
										and images, and has libraries for 75 languages.
										Additionally, it offers the unique GTB Fingerprinting
										technology for protecting large databases.
									</AccordionPanel>
								</AccordionItem>
								<AccordionItem>
									<h2>
										<AccordionButton>
											<Box
												as='span'
												flex='1'
												textAlign='left'
												fontSize={'18px'}
											>
												How does GTB differentiate itself from competitors in
												terms of data protection in cloud services?
											</Box>
											<AccordionIcon />
										</AccordionButton>
									</h2>
									<AccordionPanel pb={4} color={'black'}>
										GTB provides full visibility of data moving in cloud
										services and includes a feature to block unauthorized access
										to the cloud.
									</AccordionPanel>
								</AccordionItem>
								<AccordionItem>
									<h2>
										<AccordionButton>
											<Box
												as='span'
												flex='1'
												textAlign='left'
												fontSize={'18px'}
											>
												What is GTB Endpoint Agent and how does it help ensure
												data security?
											</Box>
											<AccordionIcon />
										</AccordionButton>
									</h2>
									<AccordionPanel pb={4} color={'black'}>
										GTB Endpoint Agent classifies data in real-time and provides
										information on where users are moving information, as well
										as protecting intellectual property.
									</AccordionPanel>
								</AccordionItem>
								<AccordionItem>
									<h2>
										<AccordionButton>
											<Box
												as='span'
												flex='1'
												textAlign='left'
												fontSize={'18px'}
											>
												What is Labyrinth solution and how does it work for
												detecting cyber threats?
											</Box>
											<AccordionIcon />
										</AccordionButton>
									</h2>
									<AccordionPanel pb={4} color={'black'}>
										Labyrinth is a solution for detecting cyber threats that
										provides attackers with the illusion of real vulnerabilities
										in the IT infrastructure and monitors their actions to
										improve security.
									</AccordionPanel>
								</AccordionItem>
								<AccordionItem>
									<h2>
										<AccordionButton>
											<Box
												as='span'
												flex='1'
												textAlign='left'
												fontSize={'18px'}
											>
												What advantages does Labyrinth offer compared to other
												cyber threat detection tools?
											</Box>
											<AccordionIcon />
										</AccordionButton>
									</h2>
									<AccordionPanel pb={4} color={'black'} fontSize={'16px'}>
										Labyrinth is based on unique threat detection technologies
										and provides monitoring and analysis of attackers' actions
										to enhance security.
									</AccordionPanel>
								</AccordionItem>
							</Accordion>
						</div>
					</motion.div>
					<motion.div
						variants={fadeIn('left', 0.3)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
					>
						<div className='w-[500px] max-md:hidden'>
							{/* <img src="/images/questions.svg" alt="logo" /> */}
							<img src='/images/3d-img/faq.svg' alt='logo' />
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	)
}
