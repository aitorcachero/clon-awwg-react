import heroImg from '../../assets/awwg.svg';
import bg from '../../assets/bg_main.jpg';
export default function Hero() {
  return (
    <section className="w-full flex justify-center items-center bg-white p-10 mt-24 relative">
      <img src={bg} className="w-full" />
      <img src={heroImg} className="w-64" />
    </section>
  );
}
