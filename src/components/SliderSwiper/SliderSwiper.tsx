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
    title: 'DATA LOSS PREVENTION (DLP) Smart, Intelligent & Accurate',
    description:
      'Real-Time & Accurate, a Content-Aware Reverse Firewall inspects, classifies and analyzes ALL outbound &/ inbound data transmissions in real time. ALL Channels and ALL types of data, structured and /or unstructured, including OCR detection & Cloud (AWS, Azure, Google). Including Email DLP and ChatGPT!',
    image: '/images/cards-img/12.svg',
  },
  {
    id: 2,
    title: 'ENDPOINT PROTECTOR, DLP, UBA, ITM with OCR & FINGERPRINTS',
    description:
      'OPSWAT Certified. OFF-Premises, real-time Fingerprint Detection for Data in Use!! No other solution can. Email DLP, Data Classifier, Control Wireless, OCR, SSL w/o a proxy, POS, Social Media, Email, Applications such as BOX, Dropbox, ChatGPT and more! Including Email DLP and ChatGPT! Including Email DLP and ChatGPT!',
    image: '/images/cards-img/3.svg',
  },
  {
    id: 3,
    title: 'DATA DISCOVERY, CLASSIFICATION, WATERMARK, OCR. In Real-time, Automatically',
    description: 'OPSWAT Certified. Accurately Discover, Locate, Identify, Classify & Inventory - your critical data including Exchange, PST/OST, NAS, SharePoint, Fileshares, Local Storage, Cloud Storage (Google, BOX, Dropbox, OneDrive ..), including OCR detection. Including Email DLP and ChatGPT! Including Email DLP and ChatGPT!',
    image: '/images/cards-img/25.svg',
  },
  {
    id: 4,
    title: 'CONTENT AWARE DIGITAL RIGHTS MANAGEMENT',
    description: 'Comprehensive access control to sensitive data for internal and external users. The system automatically controls 4 Ws WHO can access the information, WHAT can recipients do with the information, WHEN can each user access the information & WHERE the information can be used. Including Email DLP and ChatGPT!',
    image: '/images/cards-img/5.svg',
  },
  // {
  //   id: 5,
  //   title: 'Title 5',
  //   description: 'Description 5',
  //   image: '/images/cards-img/1.svg',
  // },
  {
    id: 6,
    title: 'CLOUD SECURITY & APPLICATION CONTROL',
    description: 'Control data from / to a myriad of sources— laptops, database exchanges, all cloud services and infrastructures, such as ChatGPT, AWS, Amazon Cloud, Azure, Box, Dropbox, Evernote, Google Cloud, Google Docs, Google Drive, Office 365, OneDrive, Salesforce, Skype for Business and more to Shadow IT (BYOx). GTB\'s CASB with a Twist. Including Email DLP and ChatGPT!',
    image: '/images/cards-img/21.svg',
  },
  {
    id: 7,
    title: 'FILE & DATABASE AUDITOR',
    description: 'Control data from a myriad of sources— laptops, database exchanges, all cloud services and infrastructures, such as AWS, Amazon Cloud, Azure, Box, Dropbox, Evernote, Google Cloud, Google Docs, Google Drive, Office 365, OneDrive, Salesforce, Skype for Business and more to Shadow IT (BYOx). GTB\'s CASB with a Twist',
    image: '/images/cards-img/26.svg',
  },
  {
    id: 8,
    title: 'Complete data security, in the cloud',
    description: 'from an Intellectual Property, Compliance, and APT perspective, no one competes! Deployed in minutes Comprehensive Visability Deployed on-premises, SaaS or in the cloud ( AWS, Azure, Google) Deployed as a Cloud image/appliance Behavior & Threat telemetry helps determine risk Bring Zero trust to enterprise data Value delivered immediately using GTB\'s single agent cloud solution MSP and MSSP OEM Kits',
    image: '/images/cards-img/24.svg',
  },
];

// Custom Previous Arrow Component
const CustomPrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <div
    className="prev-arrow text-7xl text-primary max-w-max rounded-full px-3 py-3 absolute left-[-60px] top-[36%] cursor-pointer"
    onClick={onClick}>
    {/* You can customize the appearance of your previous arrow here */}
    {'<'}
  </div>
);

// Custom Next Arrow Component
const CustomNextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <div
    className="next-arrow  text-7xl text-primary max-w-max rounded-full px-3 absolute right-[-60px] top-[40%] cursor-pointer"
    onClick={onClick}>
    {/* You can customize the appearance of your next arrow here */}
    {'>'}
  </div>
);

export const SliderSwiper = () => {
  const settings = {
    dots: true,
    infinite: true,
    // speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    // arrows: true,
    initialSlide: 0,
    // adaptiveHeight: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
    // pauseOnHover: true,
    // pauseOnFocus: true,
    // pauseOnDotsHover: true,
    // centerMode: true,
    // centerPadding: '60px',
    // lazyLoad: 'ondemand',

    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    // Додайте margin тут
    // variableWidth: true, // Дозволяє карточкам мати різні ширини
    // centerMode: false, // Вимикає режим центрування
    // centerPadding: '50px', // Задає проміжок між карточками
  };

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {cardData.map((card) => {
          return (
            <div
              key={card.id}
              className="border-[8px] border-white rounded-[14px] h-[400px] bg-primary text-white px-4">
              <div className="flex flex-col gap-4 justify-center py-8 overflow-hidden h-[390px]">
                <div className="flex">
                  <div className=" flex items-center gap-4 justify-center w-[540px] h-[200px] rounded-[6px] mt-[-10px] bg-white p-5 overflow-y-hidden overflow-x-hidden">
                    <div>
                      <img src={card.image} alt="images" width={200} />
                    </div>
                    <div className="w-[300px]">
                      <h2 className="font-bold text-[#3f3d56] text-center text-2xl">
                        {card.title}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className={styles.description}>
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
