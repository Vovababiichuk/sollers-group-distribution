import { X } from 'lucide-react';
import { useState } from 'react';
import { NavMobileMenu } from '../NavMobileMenu/NavMobileMenu';

export const MenuBtn = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      onClick={() => setToggle(!toggle)}
      className="group flex flex-col gap-y-2 cursor-pointer group items-end">
      {toggle ? (
        <>
          <X size={36} className="mt-[-6px] z-30" />
          <div className="fixed bg-[#0b0b19] w-full top-0 left-0 right-0 z-20 bottom-0 transition-all duration-300 pt-[100px]">
            <NavMobileMenu />
          </div>
        </>
      ) : (
        <>
          <div className="w-7 h-[2px] bg-white transition-all"></div>
          <div className="w-4 group-hover:w-7 h-[2px] bg-white transition-all"></div>
          <div className="w-7 h-[2px] bg-white transition-all"></div>
        </>
      )}
    </div>
  );
};
