import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import { useState } from 'react';

export const BageCounter = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div>
      {/* @ts-expect-error This line intentionally triggers a TypeScript error due to specific library constraints */}
      <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
        <div className="flex items-center max-my-600:flex-col">
          <div className="w-ful max-w-max p-3 rounded text-center">
            <h3 className="font-bold text-[38px] block mb-6 text-primary">
              {counterOn && <CountUp start={0} end={200} duration={2} delay={0} />}+
            </h3>
            <span className="bg-primary px-4 py-4 rounded-lg text-[17px] font-medium text-black uppercase">
              Happy Clients
            </span>
          </div>
          <div className="w-ful max-w-max p-3 text-[#32b4ff] rounded text-center">
            <h3 className="font-bold text-[38px] mb-6">
              {counterOn && <CountUp start={0} end={10} duration={2} delay={0} />}+
            </h3>
            <span className="bg-primary px-4 py-4 rounded-lg text-[17px] text-black font-medium uppercase">
              Years Experience
            </span>
          </div>
          <div className="w-ful max-w-max p-3 text-[#32b4ff] rounded text-center">
            <h3 className="font-bold text-[38px] mb-6">
              {counterOn && <CountUp start={0} end={100} duration={2} delay={0} />}%
            </h3>
            <span className="text-[17px] text-black bg-primary px-4 py-4 rounded-lg font-medium uppercase">
              Dependability
            </span>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};
