import { useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import styles from "./Button.module.scss";

interface ButtonProps {
  name: string;
}

export const Button: React.FC<ButtonProps> = ({ name }) => {
	const [hover, setHover] = useState(false);

	const handleHover = () => {
		setHover(!hover)
	}

  return (
    <button
		onMouseEnter={handleHover}
		onMouseLeave={handleHover}
		className={styles.button}>
      <span>
				{name}
			</span>
				{hover ? <ArrowRight size={18} /> : <ChevronRight size={18} />}
    </button>
  );
};
