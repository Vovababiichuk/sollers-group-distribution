import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import { useState } from 'react';

export const BageCounter = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div>
       {/*@ts-expect-error This line intentionally triggers a TypeScript error due to specific library constraints */}
      <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
        <div className="flex items-center">
          <div className="w-ful max-w-max p-3 text-[#32b4ff] rounded text-center">
            <h3 className="font-bold text-[36px] block">
              {counterOn && <CountUp start={0} end={200} duration={2} delay={0} />}+
            </h3>
            <span className="bg-[#eeff32] px-2 py-1 rounded-lg text-[20px] text-black font-medium">Happy Clients</span>
          </div>
          <div className="w-ful max-w-max p-3 text-[#32b4ff] rounded text-center">
            <h3 className="font-bold text-[36px]">
              {counterOn && <CountUp start={0} end={30} duration={2} delay={0} />}%
            </h3>
            <span className="bg-[#eeff32] px-2 py-1 rounded-lg text-[20px] text-black font-medium">Economy Saving</span>
          </div>
          <div className="w-ful max-w-max p-3 text-[#32b4ff] rounded text-center">
            <h3 className="font-bold text-[36px]">
              {counterOn && <CountUp start={0} end={100} duration={2} delay={0} />}%
            </h3>
            <span className="text-[20px] text-black bg-[#eeff32] px-2 py-1 rounded-lg font-medium">
              Dependability
            </span>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};
