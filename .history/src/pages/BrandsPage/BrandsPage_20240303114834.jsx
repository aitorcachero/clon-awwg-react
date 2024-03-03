import brandsBanner from '../../assets/brands.webp';
import BrandComponent from '../../components/BrandComponent/BrandComponent.jsx';
import Header from '../../components/Header/Header';
import { brands } from '../../helpers/const.js';

export default function BrandsPage() {
  return (
    <>
      <Header img={brandsBanner} text="Brands" />
      {brands.map((brand, i) => {
        return <BrandComponent brand={brand} key={i} />;
      })}
      <div className="h-20"></div>
    </>
  );
}
