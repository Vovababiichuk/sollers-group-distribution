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
    title: 'Title 1',
    description: 'We provide the best security services. We offer state-of-the-art security solutions to protect your online.',
    image: '/images/cards-img/12.svg',
  },
  {
    id: 2,
    title: 'Title 2',
    description: 'Description 2',
    image: '/images/cards-img/3.svg',
  },
  {
    id: 3,
    title: 'Title 3',
    description: 'Description 3',
    image: '/images/cards-img/25.svg',
  },
  {
    id: 4,
    title: 'Title 4',
    description: 'Description 4',
    image: '/images/cards-img/5.svg',
  },
  {
    id: 5,
    title: 'Title 5',
    description: 'Description 5',
    image: '/images/cards-img/1.svg',
  },
  {
    id: 6,
    title: 'Title 6',
    description: 'Description 6',
    image: '/images/cards-img/21.svg',
  },
  {
    id: 7,
    title: 'Title 7',
    description: 'Description 7',
    image: '/images/cards-img/26.svg',
  },
  {
    id: 8,
    title: 'Title 8',
    description: 'Description 8',
    image: '/images/cards-img/24.svg',
  },
];

export const SliderSwiper = () => {
	const settings = {
		dots: true,
		infinite: false,
		speed: 700,
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
              <div key={card.id} className='border-[6px] border-white rounded-[14px] h-[400px] bg-primary text-white px-4'>
                <div className='flex flex-col gap-4 justify-center items-center py-8 overflow-hidden '>
                  <div className='h-[180px] rounded-[6px] mt-[-10px] bg-white p-6'><img src={card.image} alt="images" width={200} /></div>
                  <h2 className='font-bold text-[#3f3d56]'>{card.title}</h2>
                  <p>{card.description}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
  );
};
