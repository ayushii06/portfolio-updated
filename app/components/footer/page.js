import star from '../../public/star.png'
import Image from 'next/image'


export default function page() {
  return (
    <>
    <div className="px-6 md:px-28 py-20 ">
     <p className="text-gradient3 text-3xl font-bold ">Follow Me</p>
     <div className="flex flex-wrap my-12 gap-12">
      <p className="text-3xl md:text-5xl font-bold text-transparent" style={{"-webkit-text-stroke": "1px yellow;"}}>GITHUB</p>
      <p className="text-3xl md:text-5xl font-bold text-transparent" style={{"-webkit-text-stroke": "1px #45C9F8;"}}>LINKEDIN</p>
      <p className="text-3xl md:text-5xl font-bold text-transparent" style={{"-webkit-text-stroke": "1px #F5710B;"}}>LEETCODE</p>
      <p className="text-3xl md:text-5xl font-bold text-transparent" style={{"-webkit-text-stroke": "1px #FFFFFF;"}}>MEDIUM</p>
      <p className="text-3xl md:text-5xl font-bold text-transparent" style={{"-webkit-text-stroke": "1px #00FF00;"}}>X</p>
      </div>
      
      <div className="flex  gap-6 items-center mt-20 ">
        <Image src={star} width={25} />
        <p className="font-medium text-lg md:text-2xl text-white">Over <b>100+ DSA </b>Questions on Leetcode</p>
      </div>

      <div className="flex  gap-6 items-center my-8 ">
        <Image src={star} width={25} />
        <p className="font-medium text-lg md:text-2xl text-white">Selected as a <b>Microsoft Learn Student Ambassador</b></p>
      </div>


      <div className="flex  gap-6 items-center my-8 ">
        <Image src={star} width={25} />
        <p className="font-medium text-lg md:text-2xl text-white">300+ Contributions on GITHUB</p>
      </div>


      <div className="flex  gap-6 items-center my-8 ">
        <Image src={star} width={25} />
        <p className="font-medium text-lg md:text-2xl text-white">Participated in many Hackathons and Coding Challenges</p>
      </div>

     </div>

     

     <hr className='py-6'/>

     <div className="flex text-center max-sm:flex-wrap max-sm:gap-12 justify-evenly max-sm:px-16 px-18">
        <p className="text-white font-lg">Give Feedback</p>
        <p className="text-white font-lg">View Projects</p>
        <p className="text-white font-lg">Hire Me</p>
        <p className="text-white font-lg">Contact Me</p>
        <p className="text-white font-lg">Register Now</p>
        <p className="text-white font-lg">Request Services</p>
     </div>

     <div className="text-slate-300 text-center pt-12 py-4 italic">© Copyright 2024 Ayushi Pal </div>
     </>
  )
}
