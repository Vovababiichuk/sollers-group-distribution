import { Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/react';

// import { useForm, SubmitHandler } from 'react-hook-form';

import styles from './Contacts.module.scss';

import { motion } from 'framer-motion';
{/*@ts-expect-error This line intentionally triggers a TypeScript error due to specific library constraints */}
import { fadeIn } from '../../../variants';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { PhoneIcon } from 'lucide-react';
import { ButtonMain } from '../ButtonMain/ButtonMain';

export const Contacts: React.FC= () => {

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current && form.current instanceof HTMLFormElement) {
      emailjs
        .sendForm('service_libgagm', 'template_erdrx1n', form.current, 'SLEgXy96TDHoBfFP9')
        .then(
          (result) => {
            console.log(result.text);
            console.log('Email sent successfully!');
          },
          (error) => {
            console.log(error.text);
          },
        );
    } else {
      console.error('Посилання на форму є нульовим або не є HTMLFormElement.');
    }
  };

  return (
    <div id="contact" className="text-white bg-color_black-section2 h-[800px] pt-44 relative">
      <div className={styles.container}>
        <motion.div
          variants={fadeIn('up', 0.1)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}>
          <div className="flex items-center justify-center">
            <h2 className={styles.titleContacts}>Contacts</h2>
          </div>
        </motion.div>
        <div className="flex items-center justify-center gap-10 mt-[-10px]">
          <div className="flex flex-col gap-5 w-full max-w-xl">
            <motion.div
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}>
              <span className="text-primary font-bold uppercase mb-4 block">
                Premium Cyber Security Solutions
              </span>

              {/* !!!!!!!!!! */}

              {/* <form ref={form} onSubmit={sendEmail}>
                <div>
                  <label>Name</label>
                  <input className='text-black' type="text" name="user_name" />
                </div>
                <div>
                  <label>Position</label>
                  <input className='text-black' type="text" name="user_position" />
                </div>
                <div>
                  <label>Phone</label>
                  <input className='text-black' type="text" name="user_phone" />
                </div>
                <div>
                  <label>Email</label>
                  <input className='text-black' type="email" name="user_email" />
                </div>
                <div>
                  <label>Message</label>
                  <textarea className='text-black' name="message" />
                </div>
                <input type="submit" value="Send" />
              </form> */}

              {/* !!!!!! */}

              <form ref={form} onSubmit={sendEmail}>
                <Stack spacing={3}>
                  <Input type="text" name="user_name" variant="outline" placeholder="Your Name" />
                  <Input
                    type="text"
                    name="user_position"
                    variant="outline"
                    placeholder="Your Position"
                  />
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <PhoneIcon color="white" />
                    </InputLeftElement>
                    <Input type="tel" name="user_phone" placeholder="Phone number" />
                  </InputGroup>
                  <Input type="email" name="user_email" variant="outline" placeholder="Your Mail" />
                  <Textarea name="message" placeholder="Write your comment here" />
                  <ButtonMain name="Send" blackBtn={false} />
                </Stack>
              </form>

            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>
            <div className="w-[500px]">
              <img src="/images/cards-img/51.svg" alt="logo" width={'550px'} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
