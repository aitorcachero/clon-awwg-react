export default function NewsComponent({ article }) {
  return (
    <article className="w-full h-[640px] lg:w-[1200px] lg:h-[315px] bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex flex-col-reverse lg:flex-row relative">
      <main className="h-full lg:w-2/3 flex flex-col justify-end p-10 lg:justify-center items-center px-10 gap-4">
        <a href={article.url}>
          <div className="font-semibold text-xl text-center text-pretty hover:underline">
            {article.title}
          </div>
        </a>
        <div className="flex justify-end w-full">
          <span>📅 {article.date}</span>
        </div>
        <div>{article.text}</div>
        <div className="flex justify-end w-full">
          <a href={article.url}>
            <button className="px-6 py-2 border-2 rounded border-black text-black font-bold hover:bg-black hover:text-white hover:underline">
              READ MORE
            </button>
          </a>
        </div>
      </main>
      <div className="h-1/3 lg:h-full lg:w-1/3 flex justify-center items-center lg:py-10 w-full">
        <img
          src={article.img}
          className="h-[200px] lg:relative lg:h-full top-0  w-full"
        />
      </div>
    </article>
  );
}
