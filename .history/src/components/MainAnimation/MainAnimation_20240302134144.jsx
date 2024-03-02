import './MainAnimation.css';
import video from '../../assets/AWWG .webm';
import ReactPlayer from 'react-player';

export default function MainAnimation() {
  return (
    // <Video controls poster="BSCA_Logo.png">
    //   <source src="/videos/testing.webm" type="video/webm" />
    // </Video>
    <div className="w-full mt-24">
      <ReactPlayer playing url="../../assets/AWWG .webm" />
    </div>
  );
}
