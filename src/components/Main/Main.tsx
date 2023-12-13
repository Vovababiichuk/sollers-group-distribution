import { About } from '../About/About'
import { Contacts } from '../Contacts/Contacts'
import { Hero } from '../Hero/Hero'
import { Product } from '../Product/Product'
import { Question } from '../Question/Question'
// import { Services } from '../Services/Services'
import { ServicesTwo } from '../ServicesTwo/ServicesTwo'
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
			{/* <section>
				<Services />
			</section> */}
			<section>
				<ServicesTwo />
			</section>
			<section>
				<WhyWe />
			</section>
			<section>
				<Question />
			</section>
			<section>
				<Contacts />
			</section>
		</>
	)
}
