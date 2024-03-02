import React from 'react';

export default function CareersDescription() {
  return (
    <section className="flex flex-col lg:flex-row lg:h-[300px] p-[40px] gap-20 items-center justify-center mt-20 animate-slide-in-right h-full ">
      <img src={logoGratPlace} className="h-full" />
      <div className="flex flex-col w-full lg:w-[600px]">
        <p className="h-full text-center ">
          Every step taken is a step taken together. We’re a team and family. We
          value perseverance. We’re all driven by the same passion, the desire
          to overcome and break down barriers. Because as a team we’re able to
          truly make a difference and outdo ourselves each and every day.
        </p>
        <br />
        <p className="h-full text-center">
          Joining AWWG means a lot more than being part of a group, it means
          trust, inspiration, growth and motivation. Because our teams view
          challenges as an opportunity to evolve, they’re ready to embrace the
          future. Our community is the living personification of our values and
          the engine moving our brands.
        </p>
      </div>
    </section>
  );
}
