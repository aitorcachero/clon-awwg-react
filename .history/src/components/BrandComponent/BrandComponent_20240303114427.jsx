export default function BrandComponent({ brand }) {
  return (
    <div className="relative">
      <img src={brand.img} className="w-auto h-auto p-4 lg:p-0 " />
      <a
        href={brand.url}
        target="_blank"
        className="absolute  left-1/2"
        style={{
          bottom: '20px',
          left: '50%',
          transform: 'translate(-50%, -20%)',
        }}
      >
        <button className="px-6 py-2 border-2 rounded border-white text-white font-bold hover:bg-white hover:text-black hover:underline">
          GO TO SITE
        </button>
      </a>
    </div>
  );
}
