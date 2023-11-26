import { ShieldCheck } from 'lucide-react';
import { Button } from '../Button/Button';
import style from './About.module.scss';
import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const About: React.FC = () => {
  let subtitle: HTMLElement | null;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    if (subtitle) {
      subtitle.style.color = '#0683c9';
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div id="about" className="text-black py-48">
      <div className={style.container}>
        <div className="flex items-center gap-10">
          <div className="flex flex-col gap-5 w-full max-w-xl">
            <span className="text-primary font-bold uppercase">
              Premium Cyber Security Solutions
            </span>
            <h2 className="text-5xl font-bold">Ultimate Protection for Your Online World</h2>
            <p className="text-black">
              Discover cutting-edge solutions with our state-of-the-art cyber security products. Our
              advanced technologies are designed to safeguard your digital assets and ensure a
              secure online experience. From robust antivirus solutions to intelligent threat
              detection systems, our products are tailored to meet the evolving challenges of the
              digital landscape.
            </p>
            <div className="pt-4">
              <Button name="Learn More" blackBtn={true} />
            </div>
            <button onClick={openModal}>Open Modal</button>
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
              <div className="w-[900px] flex items-center gap-10">
                <div>
									<div className='bg-primary uppercase text-center text-white mb-4'>Title</div>
                  <p className="mb-4">
                    Discover cutting-edge solutions with our state-of-the-art cyber security
                    products. Our advanced technologies are designed to safeguard your digital
                    assets and ensure a secure online experience. From robust antivirus solutions to
                    intelligent threat detection systems, our products are tailored to meet the
                    evolving challenges of the digital landscape.
                  </p>
									<div className='bg-primary uppercase text-center text-white mb-4'>Title</div>
                  <p className="mb-4">
                    With a focus on innovation and continuous improvement, we strive to stay ahead
                    of emerging cyber threats. Our products are user-friendly, yet powerful,
                    providing comprehensive protection without compromising performance. Whether
                    you're an individual user or managing a complex network, our range of products
                    offers scalable solutions to suit your specific needs.
                  </p>
									<div className='bg-primary uppercase text-center text-white mb-4'>Title</div>
                  <p>
                    Empower yourself with the latest in cyber security technology. Join our
                    community of satisfied users who trust our products to defend against cyber
                    threats and keep their online world secure. Choose confidence, choose
                    reliability — choose our cyber security products for a safer digital future.
                  </p>
                </div>
                <div>
                  <img src="/images/undraw_security_on.svg" alt="logo" width={'1200px'} />
                </div>
              </div>
              <form>
                <input />
              </form>
              <button>Сontact</button>
              <button onClick={closeModal}>close</button>
            </Modal>
          </div>
          <div>
            <img src="/images/secure_login.svg" alt="logo" width={'1000px'} />
          </div>
        </div>
      </div>
    </div>
  );
};
