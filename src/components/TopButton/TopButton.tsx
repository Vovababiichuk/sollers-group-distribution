import { ArrowUp } from "lucide-react";
import { Link } from "react-scroll";

const ScrollToTopButton = () => {
  return (
    <div className="fixed bottom-8 right-4 max-my-600:hidden">
      <Link className="bg-[#32b4ff] p-4 rounded-full cursor-pointer block" to="home" smooth={true} duration={500}>
				<ArrowUp className="h-6 w-6 text-white" />
      </Link>
    </div>
  );
};

export default ScrollToTopButton;
