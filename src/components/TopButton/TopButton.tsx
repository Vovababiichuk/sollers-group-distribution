import { ArrowUp } from "lucide-react";
import { Link } from "react-scroll";

const ScrollToTopButton = () => {
  return (
    <div className="fixed bottom-4 right-4 bg-[#32b4ff] p-4 rounded-full cursor-pointer">
      <Link to="top" smooth={true} duration={500}>
				<ArrowUp className="h-6 w-6 text-white" />
      </Link>
    </div>
  );
};

export default ScrollToTopButton;
