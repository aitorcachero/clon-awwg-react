export default function Offices() {
  return (
    <section className="flex flex-col justify-center items-center p-20 gap-10">
      <h2 className="text-3xl font-semibold">Where we are</h2>
      <main className="flex flex-col lg:flex-row gap-40">
        <div className="flex flex-row justify-center items-center gap-6">
          <div
            className="w-[310px] h-[310px] flex flex-col justify-center items-center gap-5"
            style={{ background: '#D7E0E5' }}
          >
            <h2 className="text-3xl font-semibold" style={{ color: '#2E5172' }}>
              Offices
            </h2>
            <div
              className="w-1/4  border-blue-900"
              style={{ borderBottom: '1px solid black' }}
            ></div>
          </div>
          <article>
            <p>
              Madrid (HQ)
              <br />
              Barcelona
              <br />
              Elche
              <br />
              London
              <br />
              Amsterdam
              <br />
              Mexico City
              <br />
              Mumbai
            </p>
          </article>
        </div>
        <div className="flex flex-row justify-center items-center gap-6">
          <div
            className="w-[310px] h-[310px] flex flex-col justify-center items-center gap-5"
            style={{ background: '#D7E0E5' }}
          >
            <h2 className="text-3xl font-semibold" style={{ color: '#2E5172' }}>
              Showrooms
            </h2>
            <div className="w-1/4 border-b-2 border-blue-900"></div>
          </div>
          <article>
            <p>
              Madrid (HQ)
              <br />
              Munich
              <br />
              Hamburg
              <br />
              Düsseldorf
              <br />
              Paris
              <br />
              Milan
              <br />
              Lisbon
              <br />
              Zurich
              <br />
              Salzburg
              <br />
              Budapest
              <br />
              Warsaw
            </p>
          </article>
        </div>
      </main>
    </section>
  );
}
