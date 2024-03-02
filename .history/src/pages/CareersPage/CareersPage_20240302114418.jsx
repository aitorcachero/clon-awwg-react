import bannerImg from '../../assets/banner_careers.webp';
import CareersDescription from '../../components/CareersDescription/CareersDescription';

import Header from '../../components/Header/Header';
import OurDivisions from '../../components/OurDivisions/OurDivisions';

export default function CareersPage() {
  return (
    <>
      <Header img={bannerImg} text="Careers" />
      <CareersDescription />
      <OurDivisions />
    </>
  );
}
