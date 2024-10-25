'use client';
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '../lib/data';
import { useInView } from 'react-intersection-observer';

export default function Experience() {
    
  return (
  
      
      <VerticalTimeline lineColor="white">
        {experiencesData.map((item, index) => {
         const { ref, inView } = useInView({ threshold: 0 });
          return (
            <div key={index} ref={ref} className="vertical-timeline-element">
              <VerticalTimelineElement
                contentStyle={{
                  background: '#76263e42',
                  boxShadow: '6px 6px 9px #00000096',
                  border : '6px 6px 9px #00000096',
                  lineColor: '#76263e42',
                  textAlign: 'center',
                  color: '#fff',
                  padding: '1.3rem 2rem',
                }}
                contentArrowStyle={{
                  borderRight:'0.4rem solid #9ca3af'
                }}
                visible={inView}
                date={item.date}
                icon={<img src={item.icon} className='bg-transparent' width={250} height={250} alt={item.title} />}
                iconStyle={{
                  background: 'none',
                  boxShadow: 'none',
                }}
              >
                <h3 className="font-bold pb-2 text-xl text-white capitalize">{item.title}</h3>
                <p className="!mt-0 font-bold text-white">{item.location}</p>
                <p className="!mt-1 pt-6 text-white">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </div>
          );
        })}
      </VerticalTimeline>
   
  );
}
