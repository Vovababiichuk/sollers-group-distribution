import styles from './SliderSwiper.module.scss';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CardProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

const cardData: CardProps[] = [
  {
    id: 1,
    title: 'Card 1',
    description: 'Description 1',
    image: '/images/office.svg',
  },
  {
    id: 2,
    title: 'Card 2',
    description: 'Description 2',
    image: '/images/office.svg',
  },
  {
    id: 3,
    title: 'Card 3',
    description: 'Description 3',
    image: '/images/office.svg',
  },
  {
    id: 4,
    title: 'Card 4',
    description: 'Description 4',
    image: '/images/office.svg',
  },
  {
    id: 5,
    title: 'Card 5',
    description: 'Description 5',
    image: '/images/office.svg',
  },
];

export const SliderSwiper = () => {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

  return (
      <div className={styles.container}>
        <Slider {...settings}>
          {cardData.map((card) => {
            return (
              <div key={card.id}>
                <div>
                  <img src={card.image} alt="images" width={200} />
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
  );
};
