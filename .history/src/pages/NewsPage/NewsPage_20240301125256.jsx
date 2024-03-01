import React from 'react';

export default function NewsPage() {
  return (
    <>
      <header class="w-full relative mt-24 h-[420px] overflow-hidden object-center flex flex-col items-center justify-center mb-20">
    <img src="../../../public/news_banner.webp">
    <p class="absolute text-6xl font-extrabold text-white text-center" style={{top: '50%', left:'50%', transform: 'translate(-50%, -50%)'}}>News</p>

  </header>
  <div class="flex flex-col gap-6 mb-10">
    <h2 class="text-center text-3xl font-semibold">Stay up to date on the latest from AWWG</h2>
    <p class="text-center">Find everything you need to know about AWWG’s initiatives, collaborations, and announcements as well as the newest information on our brands.</p>
  </div>+
  <section class="flex flex-col justify-center items-center gap-6">
    {news.map(section => {
      return (
        <article class="w-[1200px] h-[315px] bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex flex-row">
          <main class="w-2/3 flex flex-col justify-center items-center px-10 gap-4">
            <a href={section.url}>
              <div class="font-semibold text-xl text-center text-pretty hover:underline">{section.title}</div>
            </a>
            <div class="flex justify-end w-full">
              <span>📅 {section.date}</span>
            </div>
            <div>{section.text}</div>
            <div class="flex justify-end w-full">
              <a href={section.url}>
                <button class="px-6 py-2 border-2 rounded border-black text-black font-bold hover:bg-black hover:text-white hover:underline">READ MORE</button>
              </a>
            </div>
          </main>
          <div class="w-1/3 flex justify-center items-center py-10">
            <img src={section.img} class="h-full w-full"/>
          </div>

        </article>
      )
    })}
  </section>
  <footer class="flex flex-col justify-center items-center my-20">
    <h2 class="font-semibold text-3xl">Contact</h2>
    <div class="w-[1200px] flex flex-col">
      <p class="font-bold">AWWG</p>
      <p>María Maldonado Ureña, External Communication Coordinator</p>
      <a href="mailto:maria.maldonado@awwg.com" class= hover:underline" style={{color: '#355172'}}>maria.maldonado@awwg.com</a>
      <br>
      <p class="font-bold">AWWG Press office</p>
      <p>Weber Shandwick</p>
      <a href="mailto:AWWGpress@webershandwick.com" class= hover:underline" style={{color: '#355172'}}>AWWGpress@webershandwick.com</a>
    </div>
  </footer>
    </>
  )
}
