import photo from './public/photo.png'
import TimeLine from './components/timeline';
import Card from './components/card';
import Image from 'next/image';
import Link from 'next/link';
import C from './public/skills/c.svg'
import c from './public/skills/c-1.svg'
import web1 from './public/skills/html.svg'
import web2 from './public/skills/css.svg'
import web3 from './public/skills/javascript.svg'
import web4 from './public/skills/react.png'
import web5 from './public/skills/nodejs.svg'
import web6 from './public/skills/express.png'
import web7 from './public/skills/mongodb.svg'
import web8 from './public/skills/github.svg'
import web9 from './public/skills/threejs.svg'
import web10 from './public/skills/git-bash.svg'
import web11 from './public/skills/vscode.svg'
import web12 from './public/skills/bootstrap.svg'
import web13 from './public/skills/figma.svg'
import web14 from './public/skills/npm.svg'
import web15 from './public/skills/vitejs.svg'
import web16 from './public/skills/redux.svg'
import web17 from './public/skills/azure.svg'
import web18 from './public/skills/mysql.svg'
import web19 from './public/skills/docker.svg'
import arrow from './public/arrow.png'
import DownloadButton from './downloadButton'


export default function Home() {

  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-2 items-center px-8 md:px-28 py-4  justify-center text-white">
        <div className="md:text-left text-center">
          <p className="text-6xl font-bold">Hi ,</p>
          <p className="text-6xl font-bold my-4">I’m <span className="text-gradient1" >Ayushi Pal ,</span> </p>
        
        <div className="text-center max-sm:mx-8 md:mx-0 text-gradient2 font-semibold md:w-10/12  text-3xl my-8 border-2 border-solid px-4	md:px-6 py-3">MERN STACK DEVELOPER</div>
        <p className="w-9/12 py-4 md:py-0 mx-auto md:mx-0 text-xl text-slate-300">Technology Enthusiast with a strong interest in building scalable and efficient web applications</p>
        <DownloadButton/>
        </div>
        <div className="">
          <Image className="" src={photo} />
        </div>
      </div>

      
      <p className="text-xl text-center py-14 font-medium  px-8 md:px-24 text-white text-lg md:text-2xl">“ Those who are motivated only by the desire for the fruit of action are miserable, for they are constantly anxious about the results of what they do.”</p>

      <div className="w-7/12 mx-auto">
        <TimeLine/>
      
      </div>

      <p className="text-center py-14 font-medium px-8 md:px-24 text-white text-lg md:text-2xl">I WRITE CODE | I LOVE DEBUGGING | I DEVELOP WEBSITES | I AM SELF FOCUSED AND HARD-WORKING | </p>
      
      <div className="px-14 md:px-28 py-12">
        <p className="text-gradient3 text-center md:text-left text-4xl font-bold">SKILL SET</p>
        <div className="flex justify-center md:justify-start flex-row gap-6 flex-wrap my-12 items-center">
          <Image src={c} width={72} height={72} alt='skill'/>
          <Image src={C} width={72} height={72} alt='skill'/>
          <Image src={web1} width={72} height={72} alt='skill'/>
          <Image src={web2} width={72} height={72} alt='skill'/>
          <Image src={web3} width={72} height={72} alt='skill'/>
          <Image src={web4} width={72} height={72} alt='skill'/>
          <Image src={web5} width={72} height={72} alt='skill'/>
          <Image src={web6} width={150} height={150} alt='skill'/>
          <Image src={web7} width={72} height={72} alt='skill'/>
          <Image src={web8} width={72} height={72} alt='skill'/>
          <Image src={web9} width={72} height={72} alt='skill'/>
          <Image src={web10} width={72} height={72} alt='skill'/>
          <Image src={web11} width={72} height={72} alt='skill'/>
          <Image src={web12} width={72} height={72} alt='skill'/>
          <Image src={web13} width={152} height={72} alt='skill'/>
          <Image src={web14} width={102} height={72} alt='skill'/>
          <Image src={web15} width={72} height={72} alt='skill'/>
          <Image src={web16} width={72} height={72} alt='skill'/>
          <Image src={web17} width={72} height={72} alt='skill'/>
          <Image src={web18} width={72} height={72} alt='skill'/>
          <Image src={web19} width={72} height={72} alt='skill'/>
        </div>
      </div>
      <p className="text-center py-6 font-medium px-8 md:px-24 text-white text-lg md:text-2xl">
      DATA STRUCTURES AND ALGORITHMS || C / C++ Programming Language || MERN Stack Development || Leadership and Team Management</p>
      
      <div className="px-14 md:px-28 py-12">
      <p className="text-gradient3 text-center md:text-left text-4xl font-bold">What Services I Bring?</p>
      <div className="flex flex-nowrap max-lg:flex-wrap max-lg:justify-center gap-12 pt-12">
        <Card/>
        <Card/>
      </div>
      </div>
      <p className="text-center mb-20  border-2 py-4 font-semibold mx-8 md:mx-28 px-4 md:px-16 text-white text-lg md:text-2xl">
      Responsive and Compatible Design | Customizing Existing Sites | Secured Web Site & Database | Rest API Integration | E-commerce Functionality | Payment Gateways Integration
      </p>
      <p className="text-gradient3 text-3xl font-bold px-14 md:px-28">Why Me ?</p>
      <div className="flex gap-6 items-center my-10 px-14 md:px-28">
        <Image src={arrow} />
        <p className="font-bold text-lg md:text-2xl text-white">Developed over 9+ projects using Mern Stack framework. </p>
      </div>
      <div className="flex gap-6 items-center my-10 px-14 md:px-28">
        <Image src={arrow} />
        <p className="font-bold text-lg md:text-2xl text-white">I have over 2+ year of experience in building websites.</p>
      </div>
      <div className="flex gap-6 items-center my-10 px-14 md:px-28">
        <Image src={arrow} />
        <p className="font-bold text-lg md:text-2xl text-white">I deliver solutions that are efficient, scalable, and tailored to the needs of each project.</p>
      </div>
      <div className="flex gap-6 items-center my-10 px-14 md:px-28">
        <Image src={arrow} />
        <p className="font-bold text-lg md:text-2xl text-white">I can build, maintain, and enhance any web platform.</p>
      </div>
      <div className="mx-auto text-center  w-8/12">
     <Link href='/projects' className="my-6 rounded text-center  bg-white	px-12 py-2 text-xl font-bold">View Projects</Link>
     </div>
     
    </>
  );
}