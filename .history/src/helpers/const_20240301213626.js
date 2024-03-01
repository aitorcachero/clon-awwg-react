import aboutUsSection from '../assets/about-us-home-1.webp';
import brandsSection from '../assets/brands-home.webp';
import sustainabilitySection from '../assets/sustainability_portrait.webp';
import careersSection from '../assets/talents-home-1.webp';
import newsSection from '../assets/news-home-4.webp';

import pepeJeansPartner from '../assets/pepe_jeans-1.webp';
import hackettPartner from '../assets/hackett.webp';
import façonnablePartner from '../assets/façonnable.webp';
import pvhPartner from '../assets/iberia.webp';

import sustainability1 from '../assets/sustainability1.webp';
import sustainability2 from '../assets/people1-2.webp';
import sustainability3 from '../assets/partners4-1.webp';
import sustainability4 from '../assets/places2.webp';

import news1 from '../assets/news1.webp';
import news2 from '../assets/news2.webp';
import news3 from '../assets/news3.webp';
import news4 from '../assets/news4.webp';
import news5 from '../assets/news5.webp';
import news6 from '../assets/news6.webp';
import news7 from '../assets/news7.webp';
import news8 from '../assets/news8.webp';
import news9 from '../assets/news9.webp';
import news10 from '../assets/news10.webp';

import bgOwnership from '../assets/bgouwnership.jpg';
import bgPassion from '../assets/bgpassion.jpg';
import bgAdaptability from '../assets/bgadaptability.jpg';
import bgCollaboration from '../assets/bgcollaboration.jpg';
import bgInvention from '../assets/bginvention.jpg';
import bgInclusivity from '../assets/bginclusivity.jpg';

import marcellaWartenbergh from '../assets/Marcella_Wartenbergh.webp';
import lauraPlaza from '../assets/Laura_Fernandez_Plaza.webp';
import juanjoSotomayor from '../assets/Juanjo_Sotomayor.webp';
import markBlenkinsop from '../assets/Mark_Blenkinsop.webp';
import ivanVender from '../assets/Ivan_Vender.webp';
import paolaMaestro from '../assets/Paola_Maestro.webp';
import carlosCortaraz from '../assets/Carlos_Cortazar.webp';
import armandGriesdoorn from '../assets/Armand_Griesdoorn.webp';
import danSlater from '../assets/Dan_Slater.webp';
import gianniColarossi from '../assets/Gianni_Colarossi.webp';
import johanVercammen from '../assets/Johan_Vercammen.webp';

const sections = [
  { name: 'About us', img: aboutUsSection, url: '/about-us' },
  { name: 'Brands', img: brandsSection, url: '/brands' },
  {
    name: 'Sustainability',
    img: sustainabilitySection,
    url: '/sustainability',
  },
  { name: 'Careers', img: careersSection, url: '/careers' },
  { name: 'News', img: newsSection, url: '/news' },
];

const partners = [
  {
    name: 'Pepe Jeans',
    img: pepeJeansPartner,
    url: 'https://www.pepejeans.com/?utm_source=awwg_site',
  },
  {
    name: 'Hackett London',
    img: hackettPartner,
    url: 'https://www.hackett.com/es/home?utm_source=awwg_site',
  },
  {
    name: 'Façonnable',
    img: façonnablePartner,
    url: 'https://www.faconnable.com/?utm_source=awwg_site',
  },
  {
    name: 'PVH Iberia Agency',
    img: pvhPartner,
    url: 'https://www.pvh.com/?utm_source=awwg_site',
  },
];

const footer = [
  {
    name: 'Contact us',
    url: '',
  },
  {
    name: 'Legal info',
    url: '',
  },
  {
    name: 'Cookie policy',
    url: '',
  },
  {
    name: 'Privacy policy',
    url: '',
  },
  {
    name: 'Non-financial report',
    url: '',
  },
];

const sustainability = [
  {
    name: 'Products',
    img: sustainability1,
    text: 'We aim to produce high-quality, sustainable fashion by maximising our use of responsible materials as BCI and recycled fibres, while minimising the use of water and hazardous chemicals. We have incorporated innovative technologies into our production process including, N22 and Eco one® and Wiser Wash Denim, as well supporting animal welfare through the use of responsible wool and leather products.',
  },
  {
    name: 'People',
    img: sustainability2,
    text: 'In order to create a positive work culture that allows our employees to thrive, we are dedicated to fostering diversity and inclusion through specific training and initiatives.',
  },
  {
    name: 'Partners',
    img: sustainability3,
    text: 'We ensure that our relationships with partners are built on mutual trust and respect, by working on ethical and transparent sourcing as part of our supply chain commitment within the textile industry.',
  },
  {
    name: 'Places',
    img: sustainability4,
    text: 'We aim to minimize our environmental impact by extending the use of renewable energy in all of our owned & operated offices, warehouses and stores, as well as introducing sustainable packaging.',
  },
];

const news = [
  {
    title:
      'AWWG achieves the Great Place to Work certification in nine countries',
    date: '15th November 2023',
    text: 'The global fashion group AWWG has been recognised as a Great Place to Work (GPTW) by obtaining the prestigious certification that highlights companies that meet certain standards or minimum criteria to be recognised as a great place to work. In this…',
    img: news1,
    url: 'https://awwg.com/2023/11/awwg-achieves-the-great-place-to-work-certification-in-nine-countries/',
  },
  {
    title:
      'Pepe Jeans London: 50 years of style and fashion denim unveiled at London Fashion Week',
    date: '19th September 2023',
    text: '“The celebration encompassed a retrospective showcasing the iconic advertising of the British brand, captivating art installations by denim artist Ian Berry, and a refined seated dinner.” Pepe Jeans London, one of the brands of the global fashion group AWWG, has been…',
    img: news2,
    url: 'https://awwg.com/2023/09/pepe-jeans-london-50-years-of-style-and-fashion-denim-unveiled-at-london-fashion-week/',
  },
  {
    title:
      'AWWG launches the Hackett London AW23 campaign, featuring Jenson Button and Matthew Goode in the highlands of Scotland',
    date: '14th September 2023',
    text: 'Hackett London,one of the brands of the global fashion group AWWG, embarks on an extraordinary journey through time and nature with the Autumn-Winter 2023 brand campaign, a harmonious fusion that blends traditional tailoring with a contemporary British twist. Prepare to be…',
    img: news3,
    url: 'https://awwg.com/2023/09/awwg-launches-the-hackett-london-aw23-campaign-featuring-jenson-button-and-matthew-goode-in-the-highlands-of-scotland/',
  },
  {
    title:
      'AWWG announces the launch of Pepe Jeans London’s AW23 brand campaigns: “W11 LOVE FROM LONDON” featuring british model Lila Moss and “LONDON AFTER HOURS”embodied by internationally acclaimed singer-songwriter Rita Ora',
    date: '5th September 2023',
    text: 'Pepe Jeans London, one of the brands of the global fashion group AWWG, celebrates its 50th anniversary under the seasonal story “I LOVE LONDON”, the original London born denim lifestyle brand presents captivating collaborations with two London style icons that pay…',
    img: news4,
    url: 'https://awwg.com/2023/09/awwg-announces-the-launch-of-pepe-jeans-londons-aw23-brand-campaigns-w11-love-from-london-featuring-british-model-lila-moss-and-london-after-hoursembodied/',
  },
  {
    title: 'AWWG joins the Spanish Retail Textile Association, ARTE',
    date: '25th July 2023',
    text: 'AWWG announces its incorporation into ARTE, the Spanish Retail Textile Association, which represents the main textile brands in Spain and defends the common interests of the textile trade sector before public and private institutions in Spain. (more…)',
    img: news5,
    url: 'https://awwg.com/2023/07/awwg-joins-the-spanish-retail-textile-association-arte/',
  },
  {
    title:
      'AWWG announces the launch of Pepe Jeans London’s SS23 menswear and womenswear campaigns shot in Marrakech',
    date: '23rd March 2023',
    text: 'The SS23 campaign is shot in one of Morocco’s most emblematic cities, Marrakech. The collection is inspired by a colour palette comprised of natural shades that blend into the landscape and includes fabrics made to withstand the heat.  Pepe Jeans London,…',
    img: news6,
    url: 'https://awwg.com/2023/03/awwg-announces-the-launch-of-pepe-jeans-londons-ss23-menswear-and-womenswear-campaigns-shot-in-marrakech/',
  },
  {
    title:
      'AWWG announces the launch of Hackett London’s SS23 campaign featuring Jenson Button on Safari',
    date: '21st March 2023',
    text: '“AWWG brand Hackett London unveils its Spring-Summer 2023 campaign, which features Formula 1 world champion, Jenson Button.” Hackett London, one of the brands of the global fashion group AWWG, proudly announces the launch of its Spring-Summer 2023 campaign, a continued collaboration with…',
    img: news7,
    url: 'https://awwg.com/2023/03/awwg-announces-the-launch-of-hackett-londons-ss23-campaign-featuring-jenson-button-on-safari/',
  },
  {
    title:
      'AWWG signs a collaboration agreement with ISEM Fashion Business School',
    date: '16th January 2023',
    text: 'The global fashion group AWWG cements its commitment to train future generations by signing a collaboration agreement with ISEM Fashion Business School, the first business school specialising exclusively in fashion companies in Spain. Marcella Wartenbergh, Chief Executive Officer (CEO) of AWWG,…',
    img: news8,
    url: 'https://awwg.com/2023/01/awwg-signs-a-collaboration-agreement-with-isem-fashion-business-school/',
  },
  {
    title:
      'AWWG launches the Hackett London’s new perfume line featuring Jenson Button',
    date: '29th September 2022',
    text: '“AWWG brand Hackett London and Tailored Perfumes proudly announces the launch of its first international perfume line featuring Jenson Button.” (more…)',
    img: news9,
    url: 'https://awwg.com/2022/09/awwg-launches-the-hackett-londons-new-perfume-line-featuring-jenson-button/',
  },
  {
    title:
      'AWWG announces the launch of Hackett London’s AW22 campaign featuring Jenson Button and reveals its new logo',
    date: '28th September 2022',
    text: '“AWWG brand Hackett London unveils its Autumn-Winter 2022 campaign which features Formula 1 world champion, Jenson Button and reveals its new logo.” (more…)',
    img: news10,
    url: 'https://awwg.com/2022/09/awwg-announces-the-launch-of-hackett-londons-aw22-campaign-featuring-jenson-button-and-reveals-its-new-logo/',
  },
];

const values = [
  {
    title: 'OwnerShip',
    text: 'We are leaders.',
    bgColor: '#2E5172',
    img: bgOwnership,
  },
  {
    title: 'Passion',
    text: 'We achieve our dreams.',
    bgColor: '#385E80',
    img: bgPassion,
  },
  {
    title: 'Adaptability',
    text: 'We embrace change.',
    bgColor: '#2E5172',
    img: bgAdaptability,
  },
  {
    title: 'Collaboration',
    text: 'We evolve together.',
    bgColor: '#2E5172',
    img: bgCollaboration,
  },
  {
    title: 'Invention',
    text: 'We defy the limits.',
    bgColor: '#385E80',
    img: bgInvention,
  },
  {
    title: 'Inclusivity',
    text: 'We embrace everyone.',
    bgColor: '#2E5172',
    img: bgInclusivity,
  },
];

const executiveTeam = [
  {
    name: 'Marcella Wartenbergh',
    position: 'Chief Executive Officer',
    url: 'https://awwg.com/about-us/marcella-wartenbergh/',
    img: marcellaWartenbergh,
  },
  {
    name: 'Laura Fernández Plaza',
    position: 'Chief Financial & Business Officer',
    url: 'https://awwg.com/about-us/laura-fernandez-plaza',
    img: lauraPlaza,
  },
  {
    name: 'Juanjo Sotomayor',
    position: 'Chief Commercial Officer',
    url: 'https://awwg.com/about-us/juanjo-sotomayor/',
    img: juanjoSotomayor,
  },
  {
    name: 'Mark Blenkinsop',
    position: 'Chief Marketing Officer',
    url: 'https://awwg.com/about-us/mark-blenkinsop/',
    img: markBlenkinsop,
  },
  {
    name: 'Iván Vender',
    position: 'Chief Operations Officer',
    url: 'https://awwg.com/about-us/ivan-vender',
    img: ivanVender,
  },
  {
    name: 'Paola Maestro',
    position: 'Chief Product Officer Pepe Jeans',
    url: 'https://awwg.com/about-us/paola-maestro/',
    img: paolaMaestro,
  },
  {
    name: 'Carlos del Río Cortázar',
    position: 'Chief Human Resources Officer',
    url: 'https://awwg.com/about-us/carlos-del-rio-cortazar/',
    img: carlosCortaraz,
  },
  {
    name: 'Armand Griesdoorn',
    position: 'Vice President of Merchandising & Planning',
    url: 'https://awwg.com/about-us/dan-slater/',
    img: armandGriesdoorn,
  },
  {
    name: 'Dan Slater',
    position: 'Vice President of Retail, Hackett',
    url: 'https://awwg.com/about-us/dan-slater/',
    img: armandGriesdoorn,
  },
  {
    name: 'Giani Colarossi',
    position: 'Vice President of Product, Hackett',
    url: 'https://awwg.com/about-us/gianni-colarossi/',
    img: gianniColarossi,
  },
  {
    name: 'Johan Vercammen',
    position: 'Vice President of Retail, Pepe Jeans',
    url: 'https://awwg.com/about-us/johan-vercammen/',
    img: johanVercammen,
  },
];

export {
  sections,
  partners,
  footer,
  sustainability,
  news,
  values,
  executiveTeam,
};
