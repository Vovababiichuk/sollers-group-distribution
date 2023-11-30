// Import necessary libraries and components
import React, { useRef } from 'react';
import { Input, Box, Stack, Textarea } from '@chakra-ui/react';
import { motion } from 'framer-motion';
// @ts-expect-error This line intentionally triggers a TypeScript error due to specific library constraints
import { fadeIn } from '../../../variants'; // Assuming this is a valid import
import emailjs from '@emailjs/browser';

import styles from './Contacts.module.scss';
// import { ButtonMain } from '../ButtonMain/ButtonMain';

import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  position: string;
  phone: string | number;
  email: string;
  message: string;
}

const ERRORS_MESSAGE = {
  name: 'Name is required field!',
  position: 'Position is required field!',
  phone: 'Phone is required field!',
  email: 'Email is required field!',
  message: 'Message is required field!',
};

const REG_EX = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
};

export const Contacts: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    mode: 'onChange',
  });

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = async () => {
    try {
      if (form.current) {
        const result = await emailjs.sendForm(
          'service_libgagm',
          'template_erdrx1n',
          form.current,
          'SLEgXy96TDHoBfFP9'
        );
    
        console.log(result.text);
        console.log('Email відправлено успішно!');
        reset();
      }
    } catch (error) {
      console.error('Email не відправлено!');
    }
  };
  

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

              {/* Form */}
              <form ref={form} onSubmit={handleSubmit(sendEmail)} >
                <div className="flex flex-col gap-2">
                  {/* Name */}
                  <div>
                    <Stack spacing={3}>
                      <Input
                        {...register('name', {
                          required: ERRORS_MESSAGE.name,
                        })}
                        type="text"
                        name="name"
                        variant="outline"
                        placeholder="Name"
                        focusBorderColor="#32b4ff"
                      />
                    </Stack>
                  </div>
                  {/* errors */}
                  <div>
                    {errors.name && (
                      <span className="text-red-600 ml-2">{errors.name.message}</span>
                    )}
                  </div>
                  {/* Position */}
                  <div>
                    <Stack spacing={3}>
                      <Input
                        {...register('position', {
                          required: ERRORS_MESSAGE.position,
                        })}
                        type="text"
                        name="position"
                        variant="outline"
                        placeholder="Position"
                        focusBorderColor="#32b4ff"
                      />
                    </Stack>
                  </div>
                  {/* errors */}
                  <div>
                    {errors.position && (
                      <span className="text-red-600 ml-2">{errors.position.message}</span>
                    )}
                  </div>
                  {/* Phone */}
                  <div>
                    <Stack spacing={3}>
                      <Input
                        {...register('phone', {
                          required: ERRORS_MESSAGE.phone,
                        })}
                        type="text"
                        name="phone"
                        variant="outline"
                        placeholder="Phone"
                        focusBorderColor="#32b4ff"
                      />
                    </Stack>
                  </div>
                  {/* errors */}
                  <div>
                    {errors.phone && (
                      <span className="text-red-600 ml-2">{errors.phone.message}</span>
                    )}
                  </div>
                  {/* Email */}
                  <div>
                    <Stack spacing={3}>
                      <Input
                        {...register('email', {
                          required: ERRORS_MESSAGE.email,
                          pattern: {
                            value: REG_EX.email,
                            message: 'Please enter a valid email address!',
                          },
                        })}
                        type="text"
                        name="email"
                        variant="outline"
                        placeholder="Email"
                        focusBorderColor="#32b4ff"
                      />
                    </Stack>
                  </div>
                  {/* errors */}
                  <div>
                    {errors.email && (
                      <span className="text-red-600 ml-2">{errors.email.message}</span>
                    )}
                  </div>
                  {/* Message */}
                  <div>
                    <Stack spacing={3}>
                      
                      <Textarea
                        {...register('message', {
                          required: ERRORS_MESSAGE.message,
                        })}
                        name="message"
                        variant="outline"
                        placeholder="Comments"
                        focusBorderColor="#32b4ff"
                      />
                    </Stack>
                  </div>
                  {/* errors */}
                  <div>
                    {errors.message && (
                      <span className="text-red-600 ml-2">{errors.message.message}</span>
                    )}
                  </div>
                  {/* Button */}
                  <div className="m-auto">
                    <Box
                      type="submit"
                      as="button"
                      margin={'10px 0'}
                      height="32px"
                      lineHeight="1.2"
                      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                      border="1px"
                      px="18px"
                      borderRadius="6px"
                      fontSize="14px"
                      fontWeight="semibold"
                      bg="#ea4e85"
                      borderColor="#ea4e85"
                      color="#fff"
                      _hover={{ bg: '#ff8eb5' }}
                      _active={{
                        bg: '#ff8eb5',
                        transform: 'scale(0.98)',
                        borderColor: '#ff8eb5',
                      }}
                      _focus={{
                        boxShadow:
                          '0 0 1px 2px rgba(255, 88, 130, 0.75), 0 1px 1px rgba(0, 0, 0, .15)',
                      }}>
                      Send
                    </Box>
                  </div>
                  <div></div>
                </div>
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
