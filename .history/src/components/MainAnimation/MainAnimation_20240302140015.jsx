import './MainAnimation.css';
import video from '../../assets/AWWG .webm';
import ReactPlayer from 'react-player';
import animation from '../../assets/AWWP_animation.webp';

export default function MainAnimation() {
  return (
    // <Video controls poster="BSCA_Logo.png">
    //   <source src="/videos/testing.webm" type="video/webm" />
    // </Video>
    <div className="w-full mt-24 flex justify-center items-center">
      <img src={animation} className="w-full " />
    </div>
  );
}
