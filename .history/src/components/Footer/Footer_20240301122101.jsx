import React from 'react';

export default function Footer() {
  return (
    <footer
      className="h-96 flex flex-col justify-center items-center gap-10"
      style={{ backgroundColor: '#2E5171' }}
    >
      <section className="flex flex-row gap-10">
        {partners.map((partner) => {
          return (
            <a href={partner.url}>
              <img src={partner.img} className="h-20" />
            </a>
          );
        })}
      </section>
      <section className="flex flex-row gap-10">
        {sections.map((section) => {
          return (
            <a href={section.url}>
              <h2 className="text-white font-medium text-xl">{section.name}</h2>
            </a>
          );
        })}
      </section>
      <section className="flex flex-row gap-10">
        {footer.map((section) => {
          return (
            <a href="">
              <h2 className="text-white  text-lg">{section.name}</h2>
            </a>
          );
        })}
      </section>
    </footer>
  );
}
