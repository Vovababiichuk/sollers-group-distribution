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
				{links.map((link => {
					return (
						<li key={link.path}>
							<Link
								activeClass="active"
								to={link.path}
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
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
