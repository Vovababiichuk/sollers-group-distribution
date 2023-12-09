import './Nav.module.scss'
import { Link } from 'react-scroll'

const links = [
	{
		path: 'home',
		name: 'Home',
		offset: -50
	},
	{
		path: 'about',
		name: 'About',
		offset: -50
	},
	{
		path: 'product',
		name: 'Products',
		offset: -50
	},
	{
		path: 'services',
		name: 'Services',
		offset: -50
	},
	{
		path: 'whywe',
		name: 'Why Us',
		offset: -50
	},
	{
		path: 'question',
		name: 'Q/A',
		offset: -50
	},
	{
		path: 'contact',
		name: 'Contact',
		offset: -50
	}
]

export const Nav = () => {
	return (
		<nav>
			<ul className='flex gap-6 uppercase'>
				{links.map((link => {
					return (
						<li key={link.path}>
							<Link
								to={link.path}
								className='cursor-pointer border-b-2 border-transparent hover:border-primary hover:text-primary transition ease-in-out duration-300'
								activeClass='active'
								smooth
								spy
								offset={link.offset}
							>
								{link.name}
							</Link>
						</li>
					)
				}))}
			</ul>
		</nav>
	)
}
