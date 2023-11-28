import { useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import styles from './ButtonMain.module.scss';

interface ButtonProps {
  name: string;
  blackBtn: boolean;
  onClick?: () => void;
  onSubmit?: () => void;
}

export const ButtonMain: React.FC<ButtonProps> = ({ name, blackBtn, onClick }) => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className={blackBtn ? styles.blackBtn : styles.blueBtn}>
      <span>{name}</span>
      {hover ? <ArrowRight size={18} /> : <ChevronRight size={18} />}
    </button>
  );
};
