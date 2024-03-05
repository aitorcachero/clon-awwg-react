import { divisions } from '../../helpers/const';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

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
        {divisions.map((division, i) => {
          return (
            <article
              className="flex flex-col w-[370px] h-[580px] relative"
              key={i}
            >
              <img src={division.img} className="w-[370px] h-[580px]" />
              <div className="absolute flex flex-col w-[370px] h-[580px] justify-around items-center gap-48">
                <h2 className="text-white text-3xl font-bold w-[100px] text-center">
                  {division.title}
                </h2>
                <a href={division.url}>
                  <ButtonComponent text="Find more" />
                </a>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}
