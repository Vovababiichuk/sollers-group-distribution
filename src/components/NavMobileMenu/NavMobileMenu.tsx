import './NavMobileMenu.module.scss'
// import { Link } from 'react-scroll'
import logo from '../../../public/images/logo/logo-blue2.svg'

const links = [
	{
		path: 'home',
		name: 'Home',
		offset: -50,
	},
	{
		path: 'about',
		name: 'About',
		offset: -50,
	},
	{
		path: 'product',
		name: 'Products',
		offset: -50,
	},
	{
		path: 'services',
		name: 'Solutions',
		offset: -50,
	},
	{
		path: 'whywe',
		name: 'Why Us',
		offset: -50,
	},
	{
		path: 'question',
		name: 'Q/A',
		offset: -50,
	},
	{
		path: 'contact',
		name: 'Contact',
		offset: -50,
	},
]

export const NavMobileMenu = ({ onClose }: { onClose?: () => void }) => {
	const handleClick = () => {
		// Закриваємо меню та викликаємо колбек onClose
		onClose && onClose()
	}

	return (
		<nav className='flex flex-col gap-10 justify-center items-center'>
			<ul className='flex max-my-600:flex-col gap-6 max-my-600:gap-4 max-my-600:text-[28px] uppercase items-center'>
				{links.map(link => {
					return (
						<li key={link.path}>
							{/* <Link */}
							{/* to={link.path} */}
							<span>
								<a
									href={`#${link.path}`}
									className='cursor-pointer border-b-2 border-transparent hover:border-white hover:text-white transition ease-in-out duration-300 text-primary'
									// activeClass='active'
									// smooth
									// spy
									// offset={link.offset}
									onClick={handleClick}
								>
									{link.name}
								</a>
							</span>
							{/* </Link> */}
						</li>
					)
				})}
			</ul>
			<a href='/'>
				<img className='w-40' src={logo} alt='logo' />
			</a>
		</nav>
	)
}
