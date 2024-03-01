const sections = [
  { name: 'About us', img: '../../public/about-us-home-1.webp', url: '' },
  { name: 'Brands', img: '../../public/about-us-home-1.webp', url: '/brands' },
  {
    name: 'Sustainability',
    img: '../../public/sustainability_portrait.webp',
    url: '/sustainability',
  },
  { name: 'Careers', img: '../../public/talents-home-1.webp', url: '/careers' },
  { name: 'News', img: '../../public/news-home-4.webp', url: '/news' },
];

const partners = [
  {
    name: 'Pepe Jeans',
    img: '../../public/pepe_jeans-1.webp',
    url: 'https://www.pepejeans.com/?utm_source=awwg_site',
  },
  {
    name: 'Hackett London',
    img: '../../public/hackett.webp',
    url: 'https://www.hackett.com/es/home?utm_source=awwg_site',
  },
  {
    name: 'Façonnable',
    img: '../../public/façonnable.webp',
    url: 'https://www.faconnable.com/?utm_source=awwg_site',
  },
  {
    name: 'PVH Iberia Agency',
    img: '../../public/iberia.webp',
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
    img: '../../public/sustainability1.webp',
    text: 'We aim to produce high-quality, sustainable fashion by maximising our use of responsible materials as BCI and recycled fibres, while minimising the use of water and hazardous chemicals. We have incorporated innovative technologies into our production process including, N22 and Eco one® and Wiser Wash Denim, as well supporting animal welfare through the use of responsible wool and leather products.',
  },
  {
    name: 'People',
    img: '../../public/people1-2.webp',
    text: 'In order to create a positive work culture that allows our employees to thrive, we are dedicated to fostering diversity and inclusion through specific training and initiatives.',
  },
  {
    name: 'Partners',
    img: '../../public/partners4-1.webp',
    text: 'We ensure that our relationships with partners are built on mutual trust and respect, by working on ethical and transparent sourcing as part of our supply chain commitment within the textile industry.',
  },
  {
    name: 'Places',
    img: '../../public/places2.webp',
    text: 'We aim to minimize our environmental impact by extending the use of renewable energy in all of our owned & operated offices, warehouses and stores, as well as introducing sustainable packaging.',
  },
];

const news = [
  {
    title:
      'AWWG achieves the Great Place to Work certification in nine countries',
    date: '15th November 2023',
    text: 'The global fashion group AWWG has been recognised as a Great Place to Work (GPTW) by obtaining the prestigious certification that highlights companies that meet certain standards or minimum criteria to be recognised as a great place to work. In this…',
    img: '../../public/news1.webp',
    url: 'https://awwg.com/2023/11/awwg-achieves-the-great-place-to-work-certification-in-nine-countries/',
  },
  {
    title:
      'Pepe Jeans London: 50 years of style and fashion denim unveiled at London Fashion Week',
    date: '19th September 2023',
    text: '“The celebration encompassed a retrospective showcasing the iconic advertising of the British brand, captivating art installations by denim artist Ian Berry, and a refined seated dinner.” Pepe Jeans London, one of the brands of the global fashion group AWWG, has been…',
    img: '../../public/news2.webp',
    url: 'https://awwg.com/2023/09/pepe-jeans-london-50-years-of-style-and-fashion-denim-unveiled-at-london-fashion-week/',
  },
  {
    title:
      'AWWG launches the Hackett London AW23 campaign, featuring Jenson Button and Matthew Goode in the highlands of Scotland',
    date: '14th September 2023',
    text: 'Hackett London,one of the brands of the global fashion group AWWG, embarks on an extraordinary journey through time and nature with the Autumn-Winter 2023 brand campaign, a harmonious fusion that blends traditional tailoring with a contemporary British twist. Prepare to be…',
    img: '../../public/news3.webp',
    url: 'https://awwg.com/2023/09/awwg-launches-the-hackett-london-aw23-campaign-featuring-jenson-button-and-matthew-goode-in-the-highlands-of-scotland/',
  },
  {
    title:
      'AWWG announces the launch of Pepe Jeans London’s AW23 brand campaigns: “W11 LOVE FROM LONDON” featuring british model Lila Moss and “LONDON AFTER HOURS”embodied by internationally acclaimed singer-songwriter Rita Ora',
    date: '5th September 2023',
    text: 'Pepe Jeans London, one of the brands of the global fashion group AWWG, celebrates its 50th anniversary under the seasonal story “I LOVE LONDON”, the original London born denim lifestyle brand presents captivating collaborations with two London style icons that pay…',
    img: '../../public/news4.webp',
    url: 'https://awwg.com/2023/09/awwg-announces-the-launch-of-pepe-jeans-londons-aw23-brand-campaigns-w11-love-from-london-featuring-british-model-lila-moss-and-london-after-hoursembodied/',
  },
  {
    title: 'AWWG joins the Spanish Retail Textile Association, ARTE',
    date: '25th July 2023',
    text: 'AWWG announces its incorporation into ARTE, the Spanish Retail Textile Association, which represents the main textile brands in Spain and defends the common interests of the textile trade sector before public and private institutions in Spain. (more…)',
    img: '../../public/news5.webp',
    url: 'https://awwg.com/2023/07/awwg-joins-the-spanish-retail-textile-association-arte/',
  },
  {
    title:
      'AWWG announces the launch of Pepe Jeans London’s SS23 menswear and womenswear campaigns shot in Marrakech',
    date: '23rd March 2023',
    text: 'The SS23 campaign is shot in one of Morocco’s most emblematic cities, Marrakech. The collection is inspired by a colour palette comprised of natural shades that blend into the landscape and includes fabrics made to withstand the heat.  Pepe Jeans London,…',
    img: '../../public/news6.webp',
    url: 'https://awwg.com/2023/03/awwg-announces-the-launch-of-pepe-jeans-londons-ss23-menswear-and-womenswear-campaigns-shot-in-marrakech/',
  },
  {
    title:
      'AWWG announces the launch of Hackett London’s SS23 campaign featuring Jenson Button on Safari',
    date: '21st March 2023',
    text: '“AWWG brand Hackett London unveils its Spring-Summer 2023 campaign, which features Formula 1 world champion, Jenson Button.” Hackett London, one of the brands of the global fashion group AWWG, proudly announces the launch of its Spring-Summer 2023 campaign, a continued collaboration with…',
    img: '../../public/news7.webp',
    url: 'https://awwg.com/2023/03/awwg-announces-the-launch-of-hackett-londons-ss23-campaign-featuring-jenson-button-on-safari/',
  },
  {
    title:
      'AWWG signs a collaboration agreement with ISEM Fashion Business School',
    date: '16th January 2023',
    text: 'The global fashion group AWWG cements its commitment to train future generations by signing a collaboration agreement with ISEM Fashion Business School, the first business school specialising exclusively in fashion companies in Spain. Marcella Wartenbergh, Chief Executive Officer (CEO) of AWWG,…',
    img: '../../public/news8.webp',
    url: 'https://awwg.com/2023/01/awwg-signs-a-collaboration-agreement-with-isem-fashion-business-school/',
  },
  {
    title:
      'AWWG launches the Hackett London’s new perfume line featuring Jenson Button',
    date: '29th September 2022',
    text: '“AWWG brand Hackett London and Tailored Perfumes proudly announces the launch of its first international perfume line featuring Jenson Button.” (more…)',
    img: '../../public/news9.webp',
    url: 'https://awwg.com/2022/09/awwg-launches-the-hackett-londons-new-perfume-line-featuring-jenson-button/',
  },
  {
    title:
      'AWWG announces the launch of Hackett London’s AW22 campaign featuring Jenson Button and reveals its new logo',
    date: '28th September 2022',
    text: '“AWWG brand Hackett London unveils its Autumn-Winter 2022 campaign which features Formula 1 world champion, Jenson Button and reveals its new logo.” (more…)',
    img: '../../public/news10.webp',
    url: 'https://awwg.com/2022/09/awwg-announces-the-launch-of-hackett-londons-aw22-campaign-featuring-jenson-button-and-reveals-its-new-logo/',
  },
];

export { sections, partners, footer, sustainability, news };
