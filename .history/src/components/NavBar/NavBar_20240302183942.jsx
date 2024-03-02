import { sections } from '../../helpers/const.js';
import logo from '../../assets/awwg.svg';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="w-screen fixed h-24 flex flex-row top-0 justify-around  items-center z-50 bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
      <NavLink to="/" className="w-20">
        <img src={logo} alt="logo empresa" className="lg:h-full h-20 p-3" />
      </NavLink>
      <ul className="flex flex-row gap-4 lg:gap-10 mr-6 lg:mr-0">
        {sections.map((item, i) => {
          return (
            <NavLink to={item.url} key={i}>
              <li>
                <p className="text-xs lg:text-lg text-blue-900 hover:underline">
                  {item.name}
                </p>
              </li>
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
}
