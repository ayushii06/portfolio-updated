"use client";
import React, { useState } from "react";
import mlsaLogo from "../../public/certificates/3.jpeg";
import mlsaCertificate from "../../public/certificates/1.jpg";
import rgipt from "../../public/rgipt.png";
import { CardStack } from "../ui/cardStack";
import IntroText from "../ui/IntroText";

const CARD = [
  {
    id: 0,
    name: "Microsoft Learn Student Ambassador",
    logo: mlsaLogo,
    certificate: mlsaCertificate,
    content: (
      <p className="">
        "Actively engage with a global community of 15,000+ students, leveraging
        strong interpersonal and communication skills to promote technology
        learning and digital skills among 500+ students.Communicate effectively
        in English to mentor students and facilitate knowledge-sharing across
        diverse backgrounds.",
      </p>
    ),
  },
  {
    id: 1,
    name: "Teaching Assistant",
    logo: rgipt,
    certificate: null,
    content: (
      <p className="">
        "Appointed as a Teaching Assistant (Mathematics and Physics), delivering
        interactive lectures to large student groups,simplifying complex
        concepts, and fostering a deeper understanding through engaging
        discussions."
      </p>
    ),
  },
  {
    id: 2,
    name: "InterHouse College Sports Fest",
    logo: rgipt,
    certificate: null,
    content: (
      <p className="">
        "Secured a Gold medal in Table Tennis and a Silver medal in Badminton at
        an Inter-College Fest."
      </p>
    ),
  },
];

function ExtraCurricular() {
  const [positions, setPositions] = useState(["front", "middle", "back"]);

  const handleShuffle = () => {
    const newPositions = [...positions];
    newPositions.unshift(newPositions.pop());
    setPositions(newPositions);
  };
  return (
    <>
      <IntroText
        text={
          "I’m more than just code and algorithms. I enjoy meaningful conversations, listening to diverse perspectives, and contributing thoughtfully. Here are some roles where I strengthened my communication, presentation, and problem-solving abilities."
        }
      />

      <div className="grid place-content-center overflow-hidden  px-8 py-24 text-slate-50  min-h-screen h-full w-full">
        <div className="relative mx-auto -ml-[100px] h-[450px] w-[350px] md:-ml-[175px]">
          {CARD.map((testimonial, index) => (
            <CardStack
              key={testimonial.id}
              {...testimonial}
              handleShuffle={handleShuffle}
              position={positions[index]}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ExtraCurricular;
