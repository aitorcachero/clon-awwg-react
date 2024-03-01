import logoGratPlace from '../../assets/logo_greatPlace.webp';

export default function DescriptionAWWG() {
  return (
    <section className="flex flex-col lg:flex-row lg:h-[300px] p-[40px] gap-20 items-center justify-center mt-20 animate-slide-in-right h-full ">
      <img src={logoGratPlace} className="h-full" />
      <div className="flex flex-col w-full lg:w-[600px]">
        <p className="h-full text-center ">
          AWWG is the global fashion group which integrates the brands Pepe
          Jeans London, Hackett and Façonnable, and is the licensed distributor
          for Tommy Hilfiger and Calvin Klein in Spain and Portugal. We’re a
          group that loves challenges, pushing the limits and defying the status
          quo.
        </p>
      </div>
    </section>
  );
}
