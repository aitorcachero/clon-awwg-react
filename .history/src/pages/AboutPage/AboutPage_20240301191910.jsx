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
            Every step taken is a step taken together. We’re a team and family.
            We value perseverance. We’re all driven by the same passion, the
            desire to overcome and break down barriers. Because as a team we’re
            able to truly make a difference and outdo ourselves each and every
            day.
          </p>
          <br />
          <p className="h-full text-center">
            Joining AWWG means a lot more than being part of a group, it means
            trust, inspiration, growth and motivation. Because our teams view
            challenges as an opportunity to evolve, they’re ready to embrace the
            future. Our community is the living personification of our values
            and the engine moving our brands.
          </p>
        </div>
      </section>
    </>
  );
}
