import styles from './ServicesTwo.module.scss'
import { motion } from 'framer-motion'

import { fadeIn } from '../../../variants'

import bgSvg from '/images/decor-bg/wave-haikei-black2.svg'

export const ServicesTwo = () => {
	return (
		<div
			id='services'
			style={{
				backgroundImage: `url(${bgSvg})`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
			}}
			className='h-[1700px] max-my-600:h-[3320px] pt-[160px] max-my-600:pt-[120px]'
		>
			<motion.div
				variants={fadeIn('up', 0.3)}
				initial='hidden'
				whileInView={'show'}
				viewport={{ once: false, amount: 0.2 }}
			>
				<div className='flex items-center justify-center'>
					<h2 className={styles.titleServices}>Our Solutions</h2>
				</div>
			</motion.div>

			<div className='bg-primary max-my-600:mt-[-560px] mb-10 max-my-600:mb-4 max-my-600:flex-col max-w-[1300px] m-auto rounded-[16px] py-10 pb-64'>
				<motion.div
					variants={fadeIn('up', 0.3)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.2 }}
				>
					<h2 className={styles.title}>
						We provide solutions to solve your problems, working with market
						leading Vendors
					</h2>
				</motion.div>
			</div>
			<div className={styles.container}>
				<ul className='flex flex-col gap-6 mt-[-250px]'>
					<motion.div
						variants={fadeIn('up', 0.2)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.1 }}
					>
						<li className='bg-white shadow-lg shadow-primary/50 p-[36px] rounded-[10px] min-h-[320px] flex justify-between items-center'>
							<div>
								<h3 className='text-[28px] text-[#27468d] font-bold mb-[26px] uppercase'>
									Data loss prevention
								</h3>
								<p className='text-[18px] text-black font-light leading-normal max-w-[560px] mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#27468d] to-[#2085c5] font-medium'>
									Damage from leakage of various data and various information
									can be in any field of activity. Journalists of print media
									and television channels spend a lot of effort to be the first
									to learn exclusive news and convey it to their readers and
									viewers. They constantly run the risk that competitors may
									steal the sensational news and pass it off as their own,
									thereby distracting the audience. Any company engaged in the
									development of new products and services has information of
									limited access, which should not fall into the hands of
									competitors and requires reliable protection.
								</p>
							</div>
							<div className='mb-[15px]'>
								<img
									src='/images/test1.png'
									style={{ width: '500px' }}
									alt='icon'
								/>
								<div className='bg-primary w-[500px] h-[30px]'></div>
							</div>
						</li>
					</motion.div>
					<motion.div
						variants={fadeIn('up', 0.2)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.1 }}
					>
						<li className='bg-white shadow-lg shadow-primary/50 p-[36px] rounded-[10px] min-h-[320px] flex justify-between items-center'>
							<div>
								<h3 className='text-[28px] text-[#27468d] font-bold mb-[26px] uppercase'>
									Deception
								</h3>
								<p className='text-[18px] text-black font-light leading-normal max-w-[560px] mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#27468d] to-[#2085c5] font-medium'>
									Effective systems for detecting intrusions and targeted
									attacks in networks through the use of traps and lures.
									Responding to threats in a timely manner will help protect
									your classified information from external attack. Deception
									technology uses special hanipots that set false targets,
									so-called traps that confuse intruders, misleading them. Its
									use allows you to detect and respond to external threats in a
									timely manner and provides reliable protection for your data.
								</p>
							</div>
							<div className='mb-[15px]'>
								<img
									src='/images/deception.png'
									style={{ width: '500px' }}
									alt='icon'
								/>
								<div className='bg-primary w-[500px] h-[30px] mt-10'></div>
							</div>
						</li>
					</motion.div>
				</ul>
			</div>
		</div>
	)
}
