import { About } from '../About/About'
import { Hero } from '../Hero/Hero'
import { Product } from '../Product/Product'
import { Services } from '../Services/Services'
import { WhyWe } from '../WhyWe/WhyWe'
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
			<section>
				<Services />
			</section>
			<section>
				<WhyWe />
			</section>
		</>
	)
}
