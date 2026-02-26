"use client";
import React from 'react'
import mlsaLogo from '../../public/certificates/3.jpeg'
import mlsaCertificate from '../../public/certificates/1.jpg'
import rgipt from '../../public/rgipt.png'
import { CardStack } from '../ui/cardStack';
import IntroText from '../ui/IntroText';


const CARD = [
      {
            id:0,
            name:"Microsoft Learn Student Ambassador",
            logo:mlsaLogo,
            certificate:mlsaCertificate,
            content:(
                  <p className="">
                  "Actively engage with a global community of 15,000+ students, leveraging strong interpersonal and communication skills to promote technology learning and digital skills among 500+ students.Communicate effectively in English to mentor students and facilitate knowledge-sharing across diverse backgrounds.",
                  </p>
            ),
      },
      {
            id:1,
            name:"Teaching Assistant",
            logo:rgipt,
            certificate:null,
            content:(
                  <p className="">
                  "Appointed as a Teaching Assistant (Mathematics and Physics), delivering interactive lectures to large student groups,simplifying complex concepts, and fostering a deeper understanding through engaging discussions."
                  </p>
            ),
      },
      {
            id:2,
            name:"InterHouse College Sports Fest",
            logo:rgipt,
            certificate:null,
            content:(
                  <p className="">
                  "Secured a Gold medal in Table Tennis and a Silver medal in Badminton at an Inter-College Fest."
                  </p>
            ),
      },
      
      
]

function ExtraCurricular() {
  return (
      <>
      <IntroText text={"I’m more than just code and algorithms. I enjoy meaningful conversations, listening to diverse perspectives, and contributing thoughtfully. Here are some roles where I strengthened my communication, presentation, and problem-solving abilities."}/>
       
    <div className='my-16 text-center mx-auto '>
      <CardStack items={CARD}/>
    </div>
    </>
  )
}

export default ExtraCurricular