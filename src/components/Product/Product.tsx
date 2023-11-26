import { ShieldCheck } from 'lucide-react';
import { Button } from '../Button/Button';
import style from './Product.module.scss';
import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '53%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
		zIndex: 1000,
    // backgroundColor: '#1a1a1a',
    // color: 'white',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
};

export const Product: React.FC = () => {
  let subtitle: HTMLElement | null;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
		document.body.style.overflow = 'hidden';
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    if (subtitle) {
      subtitle.style.color = '#0683c9';
    }
  }

  function closeModal() {
    setIsOpen(false);
		document.body.style.overflow = 'auto';
  }

  return (
    <div id="product" className="text-white h-[800px] pt-48 bg-color_black-section">
      <div className={style.container}>
        <div className="flex items-center gap-20">
        <div>
            <img src="/images/secure_login.svg" alt="logo" width={'1000px'} />
          </div>
          <div className="flex flex-col gap-5 w-full max-w-xl">
            <span className="text-primary font-bold uppercase">
              Premium Cyber Security Solutions
            </span>
            <h2 className="text-5xl font-bold">Ultimate Protection for Your Online World</h2>
            <p className="text-white">
							We offer state-of-the-art cyber security solutions to protect your online.
							Our products are designed to meet the evolving needs of the digital.
							Benefit from our state-of-the-art technology.
							Our advanced technologies are designed to safeguard your digital assets.
							Your data is safe with us.
							Computers are secure with us.
							Your online world is protected with us.
            </p>
            <div onClick={openModal} className="pt-4">
              <Button name="Learn More" blackBtn={false} />
            </div>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal">
              {/* <h2 className='uppercase' ref={(_subtitle) => (subtitle = _subtitle)}>
                Subtitle
                <ShieldCheck color="#0683c9" size={40} />
              </h2> */}
              <div className="w-[900px] flex items-center gap-10 z-[1000]">
                <div>
                  <div className="bg-primary uppercase text-center text-white mb-4 flex items-center gap-2 justify-center">
                    <span>
                      <ShieldCheck className="m-auto p-1" color="white" size={40} />
                    </span>
                    <span>Dependability</span>
                  </div>
                  <p className="mb-4">
                    Discover cutting-edge solutions with our state-of-the-art cyber security
                    products. Our advanced technologies are designed to safeguard your digital
                    assets and ensure a secure online experience. From robust antivirus solutions to
                    intelligent threat detection systems, our products are tailored to meet the
                    evolving challenges of the digital landscape.
                  </p>
                  <div className="bg-primary uppercase text-center text-white mb-4 flex items-center gap-2 justify-center">
                    <span>
                      <ShieldCheck className="m-auto p-1" color="white" size={40} />
                    </span>
                    <span>Benefits</span>
                  </div>
                  <p className="mb-4">
                    With a focus on innovation and continuous improvement, we strive to stay ahead
                    of emerging cyber threats. Our products are user-friendly, yet powerful,
                    providing comprehensive protection without compromising performance. Whether
                    you're an individual user or managing a complex network, our range of products
                    offers scalable solutions to suit your specific needs.
                  </p>
                  <div className="bg-primary uppercase text-center text-white mb-4 flex items-center gap-2 justify-center">
                    <span>
                      <ShieldCheck className="m-auto p-1" color="white" size={40} />
                    </span>
                    <span>Customer Support</span>
                  </div>
                  <p>
                    Empower yourself with the latest in cyber security technology. Join our
                    community of satisfied users who trust our products to defend against cyber
                    threats and keep their online world secure. Choose confidence, choose
                    reliability — choose our cyber security products for a safer digital future.
                  </p>
                </div>
                <div>
                  <img src="/images/undraw_certificate.svg" alt="logo" width={'1200px'} />
                </div>
              </div>
              <button className='bg-[#3f3d56] py-1 px-6 rounded-full text-white hover:scale-110 duration-300 ease-in-out mt-4' onClick={closeModal}>Close</button>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};
