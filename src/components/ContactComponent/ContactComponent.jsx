export default function ContactComponent() {
  return (
    <footer className="flex flex-col justify-center items-center my-20 w-full">
      <h2 className="font-semibold text-3xl">Contact</h2>
      <div className="lg:w-[1200px] flex flex-col w-full p-6 lg:p-0">
        <p className="font-bold">AWWG</p>
        <p>María Maldonado Ureña, External Communication Coordinator</p>
        <a
          href="mailto:maria.maldonado@awwg.com"
          className="hover:underline"
          style={{ color: '#355172' }}
        >
          maria.maldonado@awwg.com
        </a>
        <br />
        <p className="font-bold">AWWG Press office</p>
        <p>Weber Shandwick</p>
        <a
          href="mailto:AWWGpress@webershandwick.com"
          className="hover:underline"
          style={{ color: '#355172' }}
        >
          AWWGpress@webershandwick.com
        </a>
      </div>
    </footer>
  );
}
