import './MainAnimation.css';
import video from '../../assets/AWWG .webm';
import ReactPlayer from 'react-player';
import gif from '../../assets/AWWG.gif';

export default function MainAnimation() {
  return (
    // <Video controls poster="BSCA_Logo.png">
    //   <source src="/videos/testing.webm" type="video/webm" />
    // </Video>
    <div className="w-full mt-24 flex justify-center items-center">
      <img src={gif} />
    </div>
  );
}
