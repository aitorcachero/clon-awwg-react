import './MainAnimation.css';
import video from '../../assets/AWWG .webm';

export default function MainAnimation() {
  return (
    // <Video controls poster="BSCA_Logo.png">
    //   <source src="/videos/testing.webm" type="video/webm" />
    // </Video>
    <video src={video} autoPlay />
  );
}
