import CountUp from 'react-countup';

export default function CounterData() {
  return (
    <section
      className="lg:w-full lg:h-[300px] p-20 flex flex-col lg:flex-row lg:p-0 justify-center items-center gap-20"
      style={{ backgroundColor: '#2E5172' }}
    >
      <div className="flex flex-col justify-center items-center text-white gap-4">
        <h2 className="text-6xl font-bold">
          +<CountUp end={4500} duration={2.75} />
        </h2>
        <h5>Employees worldwide</h5>
      </div>
      <div className="flex flex-col justify-center items-center text-white gap-4">
        <h2 className="text-6xl font-bold">
          <CountUp end={66} duration={2.75} />
        </h2>
        <h5>Nationalities</h5>
      </div>
      <div className="flex flex-col justify-center items-center text-white gap-4">
        <h2 className="text-6xl font-bold">
          +<CountUp end={500} duration={2.75} />
        </h2>
        <h5>Brand stores</h5>
      </div>
      <div className="flex flex-col justify-center items-center text-white gap-4">
        <h2 className="text-6xl font-bold">
          +<CountUp end={5000} duration={2.75} />
        </h2>
        <h5>Points of sale</h5>
      </div>
    </section>
  );
}
