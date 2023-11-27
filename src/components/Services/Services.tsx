import styles from './Services.module.scss';
import { SliderSwiper } from "../SliderSwiper/SliderSwiper"

export const Services = () => {
	return (
		<div id="services" className="h-[800px] flex flex-col items-center justify-center">
			<h2 className={styles.titleServices}>
				Our Services
			</h2>
			<SliderSwiper />
		</div>
	)
}
