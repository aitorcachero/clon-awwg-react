import bannerImg from '../../assets/about_banner.webp';
import logoGratPlace from '../../assets/logo_greatPlace.webp';

export default function AboutPage() {
  return (
    <>
      <header className="w-full lg:h-[425px] overflow-hidden mt-24 flex justify-center items-center relative">
        <img
          src={bannerImg}
          className="object-cover h-64 lg:h-full lg:w-full"
        />
        <p
          className="absolute text-6xl font-extrabold text-white text-center"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          About us
        </p>
      </header>
      <section className="flex flex-col lg:flex-row lg:h-[300px] p-[40px] gap-20 items-center justify-center mt-20 animate-slide-in-right h-full ">
        <img src={logoGratPlace} className="h-full" />
        <div className="flex flex-col w-full lg:w-[600px]">
          <p className="h-full text-center ">
            AWWG is the global fashion group which integrates the brands Pepe
            Jeans London, Hackett and Façonnable, and is the licensed
            distributor for Tommy Hilfiger and Calvin Klein in Spain and
            Portugal. We’re a group that loves challenges, pushing the limits
            and defying the status quo.
          </p>
        </div>
      </section>
      <section
        className="lg:w-full lg:h-[300px] flex lg:flex-row justify-center items-center gap-20"
        style={{ backgroundColor: '#2E5172' }}
      >
        <div className="flex flex-col justify-center items-center text-white gap-4">
          <h2 className="text-6xl font-bold">+4500</h2>
          <h5>Employees worldwide</h5>
        </div>
        <div className="flex flex-col justify-center items-center text-white gap-4">
          <h2 className="text-6xl font-bold">+4500</h2>
          <h5>Employees worldwide</h5>
        </div>
        <div className="flex flex-col justify-center items-center text-white gap-4">
          <h2 className="text-6xl font-bold">+4500</h2>
          <h5>Employees worldwide</h5>
        </div>
        <div className="flex flex-col justify-center items-center text-white gap-4">
          <h2 className="text-6xl font-bold">+4500</h2>
          <h5>Employees worldwide</h5>
        </div>
      </section>
      <section className="lg:w-full lg:h-[125px]"></section>
    </>
  );
}
