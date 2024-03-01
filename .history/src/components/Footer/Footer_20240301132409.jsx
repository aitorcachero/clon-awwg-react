import { NavLink } from 'react-router-dom';
import { partners, sections, footer } from '../../helpers/const';

export default function Footer() {
  return (
    <footer
      className="h-96 flex flex-col justify-center items-center gap-10"
      style={{ backgroundColor: '#2E5171' }}
    >
      <section className="flex flex-col lg:flex-row gap-10 items-center">
        {partners.map((partner, i) => {
          return (
            <a href={partner.url} key={i}>
              <img src={partner.img} className="h-20" />
            </a>
          );
        })}
      </section>
      <section className="flex flex-col lg:flex-row gap-10">
        {sections.map((section, i) => {
          return (
            <NavLink to={section.url} key={i}>
              <h2 className="text-white font-medium text-xl">{section.name}</h2>
            </NavLink>
          );
        })}
      </section>
      <section className="flex flex-row gap-10">
        {footer.map((section, i) => {
          return (
            <a href="" key={i}>
              <h2 className="text-white  text-lg">{section.name}</h2>
            </a>
          );
        })}
      </section>
    </footer>
  );
}
