import { divisions } from '../../helpers/const.js';

export default function OurDivisions() {
  return (
    <>
      <h1
        className="text-3xl font-bold text-center"
        style={{ color: '#305374' }}
      >
        Our divisions
      </h1>
      <section className="flex flex-col lg:flex-row justify-center items-center gap-20 my-20">
        {/* <article className="flex flex-col w-[370px] h-[580px] relative">
          <img src={careers1} className="w-[370px] h-[580px]" />
          <div className="absolute flex flex-col w-[370px] h-[580px] justify-around items-center gap-48">
            <h2 className="text-white text-3xl font-bold w-[100px] text-center">
              Office careers
            </h2>
            <button className="text-white rounded border-2 font-semibold border-white py-2 px-6 hover:bg-white hover:text-black">
              Find more
            </button>
          </div>
        </article> */}
      </section>
    </>
  );
}
