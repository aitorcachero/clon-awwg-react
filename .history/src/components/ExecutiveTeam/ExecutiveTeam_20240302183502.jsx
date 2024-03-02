import { executiveTeam } from '../../helpers/const.js';

export default function ExecutiveTeam() {
  return (
    <section className="flex flex-col justify-center items-center w-full h-full gap-10 p-0 lg:p-20">
      <h2 className=" text-3xl font-semibold text-blue-900">Executive team</h2>
      <main className="grid lg:grid-cols-2 gap-1 lg:w-[1200px]">
        {executiveTeam.map((executive, i) => {
          return (
            <article key={i} className="flex flex-col lg:flex-row ">
              <div className="h-1/2 lg:h-full lg:w-1/2">
                <img src={executive.img} className="w-full" />
              </div>
              <main
                className="flex flex-col justify-center items-center h-1/2 lg:h-full lg:w-1/2 text-white gap-4 text-center"
                style={{ backgroundColor: '#A0B6C2' }}
              >
                <h2 className="text-3xl font-semibold w-2/3">
                  {executive.name}
                </h2>
                <h4>{executive.position}</h4>
                <a href={executive.url}>
                  <button className="text-white border border-white px-4 py-2">
                    See more
                  </button>
                </a>
              </main>
            </article>
          );
        })}
      </main>
    </section>
  );
}
