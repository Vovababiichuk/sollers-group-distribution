import { useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import styles from './Button.module.scss';

interface ButtonProps {
  name: string;
  blackBtn: boolean;
}

export const Button: React.FC<ButtonProps> = ({ name, blackBtn }) => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  return (
    <button
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className={blackBtn ? styles.blackBtn : styles.blueBtn}>
      <span>{name}</span>
      {hover ? <ArrowRight size={18} /> : <ChevronRight size={18} />}
    </button>
  );
};
