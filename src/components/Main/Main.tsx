import { About } from '../About/About'
import { Hero } from '../Hero/Hero'
import { Product } from '../Product/Product'

export const Main = () => {
	return (
		<>
			<section>
				<Hero />
			</section>
			<section>
				<About />
			</section>
			<section>
				<Product />
			</section>
		</>
	)
}
