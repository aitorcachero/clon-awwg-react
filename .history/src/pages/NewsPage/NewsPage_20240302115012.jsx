import { news } from '../../helpers/const.js';
import newsBanner from '../../assets/news_banner.webp';
import Header from '../../components/Header/Header.jsx';
import NewsComponent from '../../components/NewsComponent/NewsComponent.jsx';

export default function NewsPage() {
  return (
    <>
      <Header img={newsBanner} title="News" />
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
          return <NewsComponent article={section} key={i} />;
        })}
      </section>
      <footer className="flex flex-col justify-center items-center my-20 w-full">
        <h2 className="font-semibold text-3xl">Contact</h2>
        <div className="lg:w-[1200px] flex flex-col w-full p-6 lg:p-0">
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
