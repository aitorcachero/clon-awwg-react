import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { history } from '../../helpers/const.js';
import IconAwwg from '../Icons/IconAwwg.jsx';

export default function HistoryComponent() {
  return (
    <VerticalTimeline lineColor="#000">
      {history.map((element, i) => {
        return (
          <VerticalTimelineElement
            key={i}
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#EAF2F7', color: 'blue' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date={element.date}
            iconStyle={{
              background: 'white',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            icon={<img src={element.img} />}
          >
            <div className="w-full flex flex-col gap-2">
              <h3
                className={`vertical-timeline-element-title text-black  text-3xl text-start ${
                  i % 2 === 0 ? 'lg:text-end' : 'lg:text-start'
                }`}
              >
                {element.date}
              </h3>
              <div
                className="w-full h-40 flex items-center justify-center"
                style={{ backgroundColor: 'white' }}
              >
                <img
                  src={element.img}
                  style={{ backgroundColor: 'white' }}
                  className="w-1/2 h-full p-4"
                />
              </div>
              <h4
                className={`vertical-timeline-element-subtitle text-black text-start ${
                  i % 2 === 0 ? 'lg:text-end' : 'lg:text-start'
                }`}
              >
                {element.text}
              </h4>
              <p
                className={`text-black text-start ${
                  i % 2 === 0 ? 'lg:text-end' : 'lg:text-start'
                }`}
              >
                {element.founded}
              </p>
            </div>
          </VerticalTimelineElement>
        );
      })}

      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: 'black' }}
        icon={<IconAwwg />}
      />
    </VerticalTimeline>
  );
}
