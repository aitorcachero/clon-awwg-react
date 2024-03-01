import { news } from '../../helpers/const.js';
import newsBanner from '../../assets/news_banner.webp';

export default function NewsPage() {
  return (
    <>
      <header className="w-full lg:h-[425px] overflow-hidden mt-24 flex justify-center items-center relative">
        <img
          src={newsBanner}
          className="object-cover h-64 lg:h-full lg:w-full"
        />
        <p
          className="absolute text-6xl font-extrabold text-white text-center"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          News
        </p>
      </header>
      <div className="flex flex-col gap-6 my-10">
        <h2 className="text-center text-3xl font-semibold">
          Stay up to date on the latest from AWWG
        </h2>
        <p className="text-center">
          Find everything you need to know about AWWG’s initiatives,
          collaborations, and announcements as well as the newest information on
          our brands.
        </p>
      </div>

      <section className="flex flex-col justify-center items-center gap-6">
        {news.map((section, i) => {
          return (
            <article
              className="w-full h-[640px] lg:w-[1200px] lg:h-[315px] bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex flex-col-reverse lg:flex-row relative"
              key={i}
            >
              <main className="h-full lg:w-2/3 flex flex-col justify-center items-center px-10 gap-4">
                <a href={section.url}>
                  <div className="font-semibold text-xl text-center text-pretty hover:underline">
                    {section.title}
                  </div>
                </a>
                <div className="flex justify-end w-full">
                  <span>📅 {section.date}</span>
                </div>
                <div>{section.text}</div>
                <div className="flex justify-end w-full">
                  <a href={section.url}>
                    <button className="px-6 py-2 border-2 rounded border-black text-black font-bold hover:bg-black hover:text-white hover:underline">
                      READ MORE
                    </button>
                  </a>
                </div>
              </main>
              <div className="lg:w-1/3 flex justify-center items-center py-10 w-full">
                <img
                  src={section.img}
                  className="absolute lg:relative top-0  w-full"
                />
              </div>
            </article>
          );
        })}
      </section>
      <footer className="flex flex-col justify-center items-center my-20">
        <h2 className="font-semibold text-3xl">Contact</h2>
        <div className="w-[1200px] flex flex-col">
          <p className="font-bold">AWWG</p>
          <p>María Maldonado Ureña, External Communication Coordinator</p>
          <a
            href="mailto:maria.maldonado@awwg.com"
            className="hover:underline"
            style={{ color: '#355172' }}
          >
            maria.maldonado@awwg.com
          </a>
          <br />
          <p className="font-bold">AWWG Press office</p>
          <p>Weber Shandwick</p>
          <a
            href="mailto:AWWGpress@webershandwick.com"
            className="hover:underline"
            style={{ color: '#355172' }}
          >
            AWWGpress@webershandwick.com
          </a>
        </div>
      </footer>
    </>
  );
}
