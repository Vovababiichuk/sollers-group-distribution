import './Nav.module.scss'
import { Link } from 'react-scroll'

const links = [
	{
		path: 'about',
		name: 'About'
	},
	{
		path: 'services',
		name: 'Services'
	},
	{
		path: 'projects',
		name: 'Projects'
	},
	{
		path: 'contact',
		name: 'Contact'
	},
	{
		path: 'info',
		name: 'More'
	}
]

export const Nav = () => {
	return (
		<nav>
			<ul className='flex gap-10'>
				{links.map((link, index) => {
					return (
						<li key={link.path}>
							<Link
								to={link.path}
								className='cursor-pointer border-b-2 border-transparent hover:border-primary hover:text-primary transition ease-in-out duration-300'
								activeClass='active'
								key={index}
								smooth
								spy
								offset={-50}
							>
								{link.name}
							</Link>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}
