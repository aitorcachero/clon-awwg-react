import { sections } from '../../helpers/const.js';

export default function Sections() {
  return (
    <section className="w-full min-h-auto-[480px] flex flex-col flex-1 lg:flex-row justify-center items-center gap-4 py-10 bg-white">
      {sections.map((section, i) => {
        return (
          <article className="w-[480px] h-[640px] relative overflow-hidden hover:cursor-pointer">
            <img
              src={section.img}
              className="w-full h-full hover:scale-110 transition-all"
            />
            <p
              className="absolute text-3xl font-extrabold text-white text-center"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              {section.name}
            </p>
          </article>
        );
      })}
    </section>
  );
}
