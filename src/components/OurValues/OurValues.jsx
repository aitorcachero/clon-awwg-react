import { values } from '../../helpers/const.js';

export default function OurValues() {
  return (
    <section
      className="lg:w-full  flex flex-col justify-center items-center p-4 lg:p-20 gap-10"
      style={{ backgroundColor: '#D7E0E5' }}
    >
      <h2 className="text-2xl font-bold" style={{ color: '#2E5172' }}>
        Our Values
      </h2>
      <main className="w-full lg:w-[1200px]  grid lg:grid-cols-3 text-white gap-10 lg:gap-0">
        {values.map((value, i) => {
          return (
            <article key={i} className="flex flex-col h-[310px]">
              <main
                style={{ backgroundColor: value.bgColor }}
                className="h-1/2 w-full flex flex-col justify-center items-start gap-4 px-10"
              >
                <h2 className="text-3xl font-semibold">{value.title}</h2>
                <p>{value.text}</p>
              </main>
              <div className="h-1/2 w-full">
                <img src={value.img} className="w-full h-full" />
              </div>
            </article>
          );
        })}
      </main>
    </section>
  );
}
