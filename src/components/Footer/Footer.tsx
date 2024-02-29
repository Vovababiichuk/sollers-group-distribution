import styles from './Footer.module.scss'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../variants'
import { Link } from 'react-scroll'
import logo from '/images/logo/logo-white2.svg'

import { Linkedin, Instagram } from 'lucide-react'
import { PiTelegramLogoBold } from 'react-icons/pi'

export const Footer = () => {
	return (
		<div
			className={`h-[480px] max-my-600:h-full max-my-600:h-[400px] bg-[#0b0b19] bg-[#2f2e41] bg-primary ${styles.footer}`}
		>
			<div className={styles.container}>
				<div
					className={`${styles.grid} mt-[-20px] max-my-600:flex max-my-600:flex-col max-my-600:mt-[-60px] max-my-600:py-20 max-my-600:gap-5`}
				>
					{/* Left column */}
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
					>
						<div className={styles.column}>
							<h3 className=' text-white text-center text-[24px] mb-6 font-bold'>
								Our Partners
							</h3>
							<ul className='flex flex-wrap justify-center gap-6 bg-[#71deff] bg-gradient-to-br from-blue-500 via-blue-300 to-blue-200 bg-red-300 p-6 rounded-[24px] hover:scale-105 duration-300 transition ease-in-out'>
								<li className='hover:scale-105 duration-300 transition ease-in-out mr-2'>
									<a href='https://gttb.com/' target='_blank'>
										<img
											className='block w-[160px]'
											src='/images/partners/1.png'
											alt=''
										/>
									</a>
								</li>
								<li className='mb-3 hover:scale-105 duration-300 transition ease-in-out'>
									<a
										href='https://www.cloudflare.com/lp/ppc/waf-x/?utm_source=google&utm_medium=cpc&utm_campaign=ao-fy-acq-emea_en_all-applications-as-ge-prospecting-sch_g_generic_beta&utm_content=Beta_Generic_Applications-Security_WAF&utm_term=firewall+for+website&campaignid=71700000112716322&adgroupid=58700008486001015&creativeid=662071359075&gclid=Cj0KCQiA7OqrBhD9ARIsAK3UXh3mTKQD8z1cH8AaIZ1EXViPNB_P0khc_xCMkLUYPUQxr6k2K7gFNScaAlZ6EALw_wcB&gclsrc=aw.ds'
										target='_blank'
									>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='204'
											height='30'
											fill='none'
											viewBox='0 0 204 30'
											style={{ width: '160px', height: '30px' }}
										>
											<g clip-path='url(#a)'>
												<path
													fill='#FBAD41'
													d='M52.688 13.028c-.22 0-.437.008-.654.015a.297.297 0 0 0-.102.024.365.365 0 0 0-.236.255l-.93 3.249c-.401 1.397-.252 2.687.422 3.634.618.876 1.646 1.39 2.894 1.45l5.045.306c.15.008.28.08.359.199a.492.492 0 0 1 .051.434.64.64 0 0 1-.547.426l-5.242.306c-2.848.132-5.912 2.456-6.987 5.29l-.378 1a.28.28 0 0 0 .248.382h18.054a.48.48 0 0 0 .464-.35 13.12 13.12 0 0 0 .48-3.54c0-7.22-5.789-13.072-12.933-13.072'
												></path>
												<path
													fill='#000'
													d='M85.519 18.886h2.99v8.249h5.218v2.647h-8.208V18.886ZM96.819 24.365v-.032c0-3.13 2.493-5.665 5.821-5.665 3.327 0 5.789 2.508 5.789 5.633v.032c0 3.129-2.493 5.665-5.821 5.665s-5.79-2.505-5.79-5.633Zm8.562 0v-.032c0-1.573-1.123-2.942-2.773-2.942-1.65 0-2.725 1.337-2.725 2.91v.032c0 1.572 1.122 2.942 2.757 2.942 1.634 0 2.741-1.338 2.741-2.91ZM112.086 25.003V18.89h3.033v6.055c0 1.572.783 2.317 1.985 2.317 1.201 0 1.985-.717 1.985-2.242v-6.134h3.032v6.039c0 3.519-1.985 5.056-5.049 5.056s-4.99-1.573-4.99-4.98M126.694 18.889h4.159c3.848 0 6.081 2.241 6.081 5.382v.032c0 3.14-2.265 5.477-6.144 5.477h-4.096V18.886v.004Zm4.202 8.216c1.788 0 2.97-.995 2.97-2.754v-.032c0-1.744-1.185-2.755-2.97-2.755h-1.217v5.541h1.217ZM141.277 18.886h8.621v2.648h-5.636v1.85h5.096v2.505h-5.096v3.893h-2.985V18.886ZM154.054 18.886h2.989v8.249h5.219v2.647h-8.208V18.886ZM170.067 18.809h2.878l4.589 10.971h-3.202l-.788-1.946h-4.159l-.768 1.946h-3.143l4.589-10.971h.004Zm2.619 6.676-1.202-3.097-1.217 3.097h2.419ZM181.383 18.889h5.096c1.647 0 2.789.438 3.509 1.182.635.621.954 1.465.954 2.536v.032c0 1.664-.879 2.77-2.218 3.344l2.572 3.797h-3.45l-2.17-3.3h-1.308v3.3h-2.989V18.886l.004.004Zm4.959 5.23c1.016 0 1.602-.497 1.602-1.29v-.031c0-.856-.614-1.29-1.618-1.29h-1.954v2.616h1.973l-.003-.004ZM195.253 18.886h8.669v2.568h-5.711v1.648h5.175v2.384h-5.175v1.728h5.79v2.568h-8.748V18.886ZM78.976 25.642c-.418.956-1.3 1.633-2.47 1.633-1.63 0-2.756-1.37-2.756-2.942V24.3c0-1.573 1.094-2.91 2.725-2.91 1.229 0 2.166.764 2.564 1.807h3.147c-.505-2.591-2.757-4.53-5.683-4.53-3.324 0-5.821 2.536-5.821 5.665v.032c0 3.129 2.461 5.633 5.79 5.633 2.843 0 5.068-1.864 5.655-4.36h-3.155l.004.004Z'
												></path>
												<path
													fill='#F6821F'
													d='m44.808 29.578.334-1.175c.402-1.397.253-2.687-.42-3.634-.62-.876-1.647-1.39-2.896-1.45l-23.665-.306a.467.467 0 0 1-.374-.199.492.492 0 0 1-.052-.434.64.64 0 0 1 .552-.426l23.886-.306c2.836-.131 5.9-2.456 6.975-5.29l1.362-3.6a.914.914 0 0 0 .04-.477C48.998 5.259 42.79 0 35.368 0c-6.842 0-12.647 4.462-14.73 10.665a6.92 6.92 0 0 0-4.911-1.374c-3.28.33-5.92 3.002-6.246 6.318a7.148 7.148 0 0 0 .18 2.472c-5.36.16-9.66 4.598-9.66 10.052 0 .493.035.979.106 1.453a.46.46 0 0 0 .457.402h43.704a.57.57 0 0 0 .54-.418'
												></path>
											</g>
											<g clip-path='url(#a)'>
												<path
													fill='#FBAD41'
													d='M52.688 13.028c-.22 0-.437.008-.654.015a.297.297 0 0 0-.102.024.365.365 0 0 0-.236.255l-.93 3.249c-.401 1.397-.252 2.687.422 3.634.618.876 1.646 1.39 2.894 1.45l5.045.306c.15.008.28.08.359.199a.492.492 0 0 1 .051.434.64.64 0 0 1-.547.426l-5.242.306c-2.848.132-5.912 2.456-6.987 5.29l-.378 1a.28.28 0 0 0 .248.382h18.054a.48.48 0 0 0 .464-.35 13.12 13.12 0 0 0 .48-3.54c0-7.22-5.789-13.072-12.933-13.072'
												></path>
												<path
													fill='#000'
													d='M85.519 18.886h2.99v8.249h5.218v2.647h-8.208V18.886ZM96.819 24.365v-.032c0-3.13 2.493-5.665 5.821-5.665 3.327 0 5.789 2.508 5.789 5.633v.032c0 3.129-2.493 5.665-5.821 5.665s-5.79-2.505-5.79-5.633Zm8.562 0v-.032c0-1.573-1.123-2.942-2.773-2.942-1.65 0-2.725 1.337-2.725 2.91v.032c0 1.572 1.122 2.942 2.757 2.942 1.634 0 2.741-1.338 2.741-2.91ZM112.086 25.003V18.89h3.033v6.055c0 1.572.783 2.317 1.985 2.317 1.201 0 1.985-.717 1.985-2.242v-6.134h3.032v6.039c0 3.519-1.985 5.056-5.049 5.056s-4.99-1.573-4.99-4.98M126.694 18.889h4.159c3.848 0 6.081 2.241 6.081 5.382v.032c0 3.14-2.265 5.477-6.144 5.477h-4.096V18.886v.004Zm4.202 8.216c1.788 0 2.97-.995 2.97-2.754v-.032c0-1.744-1.185-2.755-2.97-2.755h-1.217v5.541h1.217ZM141.277 18.886h8.621v2.648h-5.636v1.85h5.096v2.505h-5.096v3.893h-2.985V18.886ZM154.054 18.886h2.989v8.249h5.219v2.647h-8.208V18.886ZM170.067 18.809h2.878l4.589 10.971h-3.202l-.788-1.946h-4.159l-.768 1.946h-3.143l4.589-10.971h.004Zm2.619 6.676-1.202-3.097-1.217 3.097h2.419ZM181.383 18.889h5.096c1.647 0 2.789.438 3.509 1.182.635.621.954 1.465.954 2.536v.032c0 1.664-.879 2.77-2.218 3.344l2.572 3.797h-3.45l-2.17-3.3h-1.308v3.3h-2.989V18.886l.004.004Zm4.959 5.23c1.016 0 1.602-.497 1.602-1.29v-.031c0-.856-.614-1.29-1.618-1.29h-1.954v2.616h1.973l-.003-.004ZM195.253 18.886h8.669v2.568h-5.711v1.648h5.175v2.384h-5.175v1.728h5.79v2.568h-8.748V18.886ZM78.976 25.642c-.418.956-1.3 1.633-2.47 1.633-1.63 0-2.756-1.37-2.756-2.942V24.3c0-1.573 1.094-2.91 2.725-2.91 1.229 0 2.166.764 2.564 1.807h3.147c-.505-2.591-2.757-4.53-5.683-4.53-3.324 0-5.821 2.536-5.821 5.665v.032c0 3.129 2.461 5.633 5.79 5.633 2.843 0 5.068-1.864 5.655-4.36h-3.155l.004.004Z'
												></path>
												<path
													fill='#F6821F'
													d='m44.808 29.578.334-1.175c.402-1.397.253-2.687-.42-3.634-.62-.876-1.647-1.39-2.896-1.45l-23.665-.306a.467.467 0 0 1-.374-.199.492.492 0 0 1-.052-.434.64.64 0 0 1 .552-.426l23.886-.306c2.836-.131 5.9-2.456 6.975-5.29l1.362-3.6a.914.914 0 0 0 .04-.477C48.998 5.259 42.79 0 35.368 0c-6.842 0-12.647 4.462-14.73 10.665a6.92 6.92 0 0 0-4.911-1.374c-3.28.33-5.92 3.002-6.246 6.318a7.148 7.148 0 0 0 .18 2.472c-5.36.16-9.66 4.598-9.66 10.052 0 .493.035.979.106 1.453a.46.46 0 0 0 .457.402h43.704a.57.57 0 0 0 .54-.418'
												></path>
											</g>
											<defs>
												<clipPath id='a'>
													<path fill='#FFF' d='M0 0h204v30H0z'></path>
												</clipPath>
											</defs>
										</svg>
									</a>
								</li>
								<li className='hover:scale-105 duration-300 transition ease-in-out'>
									<a href='https://gttb.com/' target='_blank'>
										<img
											className='block w-[160px]'
											src='/images/partners/sofie.svg'
											alt=''
										/>
									</a>
								</li>
							</ul>
						</div>
					</motion.div>

					{/* Center column with logo */}
					<motion.div
						variants={fadeIn('up', 0.1)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.1 }}
					>
						<div className={`${styles.centerColumn}`}>
							<img
								className={`${styles.logo} max-my-600:hidden`}
								src={logo}
								alt='logo'
							/>
							{/* <span className="text-gray-500 absolute top-[270px] max-my-600:whitespace-nowrap">
                sollers group &copy; {new Date().getFullYear()} All rights reserved
              </span> */}
						</div>
					</motion.div>

					{/* Right column */}
					<motion.div
						variants={fadeIn('left', 0.3)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
					>
						<div className={styles.column}>
							{/* <h3 className="text-gray-500 text-center text-[24px] mb-6">Our sicials</h3> */}
							<div className='flex items-center justify-center uppercase gap-4 text-white flex-wrap w-full max-w-[300px] font-bold'>
								<Link
									to={'home'}
									className='cursor-pointer border-b-2 border-transparent hover:border-slate-600 hover:text-slate-600 transition ease-in-out duration-300'
									activeClass='active'
									smooth
									spy
								>
									Home
								</Link>
								<Link
									to={'about'}
									className='cursor-pointer border-b-2 border-transparent hover:border-slate-600 hover:text-slate-600 transition ease-in-out duration-300'
									activeClass='active'
									smooth
									spy
								>
									About
								</Link>
								<Link
									to={'product'}
									className='cursor-pointer border-b-2 border-transparent hover:border-slate-600 hover:text-slate-600 transition ease-in-out duration-300'
									activeClass='active'
									smooth
									spy
								>
									Products
								</Link>
								<Link
									to={'services'}
									className='cursor-pointer border-b-2 border-transparent hover:border-slate-600 hover:text-slate-600 transition ease-in-out duration-300'
									activeClass='active'
									smooth
									spy
								>
									Services
								</Link>
								<Link
									to={'whywe'}
									className='cursor-pointer border-b-2 border-transparent hover:border-slate-600 hover:text-slate-600 transition ease-in-out duration-300'
									activeClass='active'
									smooth
									spy
								>
									Why Us
								</Link>
								<Link
									to={'question'}
									className='cursor-pointer border-b-2 border-transparent hover:border-slate-600 hover:text-slate-600 transition ease-in-out duration-300'
									activeClass='active'
									smooth
									spy
									offset={-50}
								>
									Q/A
								</Link>
								{/* <Link
                to={'contact'}
								className='cursor-pointer border-b-2 border-transparent hover:border-primary hover:text-primary transition ease-in-out duration-300'
								activeClass='active'
								smooth
								spy
                offset={-50}
                >Contact</Link> */}
								<span className='hover:text-slate-600 hover:cursor-pointer hover:border-b-2 hover:border-slate-600'>
									Contact
								</span>
								<ul className='flex items-center gap-6'>
									<li className='hover:scale-125 duration-300 transition ease-in-out  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 p-1 rounded-md'>
										<a href='https://www.linkedin.com/' target='_blank'>
											<Linkedin size={16} />
										</a>
									</li>
									<li className='hover:scale-125 duration-300 transition ease-in-out bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-1 rounded-md'>
										<a href='https://www.instagram.com/' target='_blank'>
											<Instagram size={16} />
										</a>
									</li>
									<li className='hover:scale-125 duration-300 transition ease-in-out bg-gradient-to-r bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 p-1 rounded-full'>
										<a href='https://www.instagram.com/' target='_blank'>
											<PiTelegramLogoBold size={15} />
										</a>
									</li>
								</ul>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	)
}
