import bannerImg from '../../assets/about_banner.webp';

import ExecutiveTeam from '../../components/ExecutiveTeam/ExecutiveTeam.jsx';
import OurValues from '../../components/OurValues/OurValues.jsx';
import CounterData from '../../components/CounterData/CounterData.jsx';
import Offices from '../../components/Offices/Offices.jsx';
import Header from '../../components/Header/Header.jsx';
import DescriptionAWWG from '../../components/DescriptionAWWG/DescriptionAWWG.jsx';
import HistoryComponent from '../../components/HistoryComponent/HistoryComponent.jsx';

export default function AboutPage() {
  return (
    <>
      <Header img={bannerImg} text="About us" />
      <DescriptionAWWG />
      <CounterData />
      {/* <HistoryComponent /> */}
      <OurValues />
      <Offices />
      <ExecutiveTeam />
    </>
  );
}
