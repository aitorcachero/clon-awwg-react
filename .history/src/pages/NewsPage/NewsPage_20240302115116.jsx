import { news } from '../../helpers/const.js';
import newsBanner from '../../assets/news_banner.webp';
import Header from '../../components/Header/Header.jsx';
import NewsComponent from '../../components/NewsComponent/NewsComponent.jsx';
import ContactComponent from '../../components/ContactComponent/ContactComponent.jsx';

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
      <ContactComponent />
    </>
  );
}
