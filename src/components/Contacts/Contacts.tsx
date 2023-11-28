// Import necessary libraries and components
import React, { useRef } from 'react';
import { Input, InputGroup, InputLeftElement, Stack, Wrap, WrapItem } from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/react';
import { motion } from 'framer-motion';
// @ts-expect-error This line intentionally triggers a TypeScript error due to specific library constraints
import { fadeIn } from '../../../variants'; // Assuming this is a valid import
import emailjs from '@emailjs/browser';
import { PhoneIcon } from 'lucide-react';
import { useToast } from '@chakra-ui/react';

import styles from './Contacts.module.scss';
import { ButtonMain } from '../ButtonMain/ButtonMain';

// Define a type for toast status
type ToastStatus = 'success' | 'error' | 'warning' | 'info';

// Define the Contacts functional component
export const Contacts: React.FC = () => {
  const toast = useToast(); // Use Chakra UI toast hook
  const form = useRef<HTMLFormElement>(null); // Reference to the form element

  // Function to show toast based on status
  const showToast = (status: ToastStatus) => {
    toast({
      title: `${status} toast`,
      status: status,
      isClosable: true,
    });
  };

  // Function to handle form submission
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current && form.current instanceof HTMLFormElement) {
      const formData = new FormData(form.current);
      const user_name = formData.get('user_name') as string;
      const user_email = formData.get('user_email') as string;
      const message = formData.get('message') as string;

      if (!user_name || !user_email || !message) {
        showToast('error');
        console.error('Please fill in all required fields.');
        return;
      }

      // Use emailjs to send the form data
      emailjs
        .sendForm('service_libgagm', 'template_erdrx1n', form.current, 'SLEgXy96TDHoBfFP9')
        .then(
          (result) => {
            console.log(result.text);
            console.log('Email sent successfully!');
            showToast('success'); // Show success toast
          },
          (error) => {
            console.log(error.text);
            showToast('error'); // Show error toast
          },
        );
    } else {
      console.error('Form reference is null or not an HTMLFormElement.');
    }
  };

  // Render the component
  return (
    <div id="contact" className="text-white bg-color_black-section2 h-[800px] pt-40 relative">
      <div className={styles.container}>
        {/* Animation for the title */}
        <motion.div
          variants={fadeIn('up', 0.1)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}>
          <div className="flex items-center justify-center">
            <h2 className={styles.titleContacts}>Contacts</h2>
          </div>
        </motion.div>

        {/* Form section */}
        <div className="flex items-center justify-center gap-60 mt-[-30px]">
          <div className="flex flex-col gap-5 w-full max-w-xl">
            <motion.div
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}>
              <span className="text-primary font-bold uppercase mb-4 block">
                Premium Cyber Security Solutions
              </span>
              <h2 className="text-3xl mb-8 font-bold">Write to us to get the best!</h2>

              {/* Form for user input */}
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

                  <motion.div
                    variants={fadeIn('up', 0.1)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}>
                    {/* Buttons to trigger toasts */}
                    <Wrap paddingTop={'10px'} margin={'auto'} justify={'center'} color={'black'}>
                      <WrapItem>
                        <ButtonMain name="Send" blackBtn={true} />
                      </WrapItem>
                    </Wrap>
                  </motion.div>
                </Stack>
              </form>
            </motion.div>
          </div>

          {/* Animation for the image */}
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
