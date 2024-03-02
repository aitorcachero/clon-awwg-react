import { NavLink } from 'react-router-dom';
import { partners, sections, footer } from '../../helpers/const';

export default function Footer() {
  return (
    <footer
      className="lg:h-96 flex flex-col justify-center items-center gap-10 py-10 lg:p-4"
      style={{ backgroundColor: '#2E5171' }}
    >
      <section className="flex flex-row gap-4 lg:gap-10 items-center">
        {partners.map((partner, i) => {
          return (
            <a href={partner.url} key={i}>
              <img src={partner.img} className="h-10 lg:h-20" />
            </a>
          );
        })}
      </section>
      <section className="flex flex-row gap-4 lg:gap-10 items-center">
        {sections.map((section, i) => {
          return (
            <NavLink to={section.url} key={i}>
              <h2 className="text-white font-medium text-sm lg:text-xl">
                {section.name}
              </h2>
            </NavLink>
          );
        })}
      </section>
      <section className="flex flex-row gap-1 p-4 lg:gap-10 items-center justify-center">
        {footer.map((section, i) => {
          return (
            <a href={section.url} key={i}>
              <h2 className="text-white text-xs  lg:text-lg">{section.name}</h2>
            </a>
          );
        })}
      </section>
    </footer>
  );
}
