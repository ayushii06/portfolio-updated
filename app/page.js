import photo from './public/photo.png'
import Card from './components/card';
import Image from 'next/image';
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



export default function Home() {
  return (
    <>
      <div className="flex gap-2 items-center px-28 py-4  justify-center text-white">
        <div className="">
          <p className="text-6xl font-bold">Hi ,</p>
          <p className="text-6xl font-bold my-4">I’m <span className="text-gradient1" >Ayushi Pal ,</span> </p>
        
        <div className="text-center text-gradient2 font-semibold w-8/12 text-3xl my-8 border-2 border-solid	px-6 py-3">MERN STACK DEVELOPER</div>
        <p className="w-9/12 text-xl text-slate-300">Technology Enthusiast with a strong interest in building scalable and efficient web applications</p>
        <button className="my-6 text-center w-5/12 gradient-btn px-2 py-3 text-xl font-bold">Download Resume</button>
        </div>
        <div className="">
          <Image className="" src={photo} />
        </div>
      </div>

      
      <p className="text-center py-14 font-medium  px-24 text-white text-2xl">“ Those who are motivated only by the desire for the fruit of action are miserable, for they are constantly anxious about the results of what they do.”</p>

      <div className="w-7/12 mx-auto">
      <div className=" flex gap-10 items-center  text-white text-2xl">
        <p className="">2022-26</p>
        <div className="h-2/12 w-2/12" style={{'box-shadow':'0px 0px 20px #ff7500','background':'#EC8200' ,'width': '21px' ,'height': '21px' ,
'border-radius': '50%'}}></div>
        <p className="">Rajiv Gandhi Institute Of Petroleum Technology , India</p>
      </div>
      <div style={{"left":"5rem"}} className="relative left-44 text-slate-100 mx-12 border-l-2 my-6 px-12 w-9/12">
        <p className=""> B.Tech Computer Science and Design Engineering</p>
        <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>

      <div className="flex gap-10 items-center text-white text-2xl">
        <p className="">2021-22</p>
        <div className="h-2/12 w-2/12" style={{'box-shadow':'0px 0px 20px #ff7500','background':'#EC8200' ,'width': '21px' ,'height': '21px' ,
'border-radius': '50%'}}></div>
        <p className="">Joint Entrance Examination ADVANCED 2022</p>
      </div>
      <div style={{"left":"5rem"}} className="relative left-44 text-slate-100 mx-12 border-l-2 my-6 px-12 w-9/12">
        <p className="">College Entrance Examination , India</p>
        <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>
      

      <div className=" flex gap-10 items-center text-white text-2xl">
        <p className="">2021-22</p>
        <div className="h-2/12 w-2/12" style={{'box-shadow':'0px 0px 20px #ff7500','background':'#EC8200' ,'width': '21px' ,'height': '21px' ,
'border-radius': '50%'}}></div>
        <p className="">St. Mary’s School </p>
      </div>
      <div style={{"left":"5rem"}} className="relative left-44 text-slate-100 mx-12 border-l-2 my-6 px-12 w-9/12">
        <p className=""> B.Tech Computer Science and Design Engineering</p>
        <p className="py-4">Senior Secondary and High School Examination. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>
      

      
      </div>

      <p className="text-center py-14 font-medium  px-24 text-white text-2xl">I WRITE CODE | I LOVE DEBUGGING | I DEVELOP WEBSITES | I AM SELF FOCUSED AND HARD-WORKING | </p>
      
      <div className="px-28 py-12">
        <p className="text-gradient3 text-3xl font-bold">SKILL SET</p>
        <div className="flex flex-row gap-6 flex-wrap my-12 items-center">
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
      <p className="text-center py-6 font-medium  px-24 text-white text-2xl">
      DATA STRUCTURES AND ALGORITHMS || C / C++ Programming Language || MERN Stack Development || Leadership and Team Management</p>
      
      <div className="px-28 py-12">
      <p className="text-gradient3 text-3xl font-bold">What Services I Bring?</p>
      <div className="flex gap-12 pt-12">
        <Card/>
        <Card/>
      </div>
      </div>
      <p className="text-center mb-20  border-2 py-4 font-semibold mx-28  px-16 text-white text-2xl">
      Responsive and Compatible Design | Customizing Existing Sites | Secured Web Site & Database | Rest API Integration | E-commerce Functionality | Payment Gateways Integration
      </p>
      <p className="text-gradient3 text-3xl font-bold px-28">Why Me ?</p>
      <div className="flex gap-6 items-center my-10 px-28">
        <Image src={arrow} />
        <p className="font-bold text-2xl text-white">Developed over 9+ projects using Mern Stack framework. </p>
      </div>
      <div className="flex gap-6 items-center my-10 px-28">
        <Image src={arrow} />
        <p className="font-bold text-2xl text-white">I have over 2+ year of experience in building websites.</p>
      </div>
      <div className="flex gap-6 items-center my-10 px-28">
        <Image src={arrow} />
        <p className="font-bold text-2xl text-white">I deliver solutions that are efficient, scalable, and tailored to the needs of each project.</p>
      </div>
      <div className="flex gap-6 items-center my-10 px-28">
        <Image src={arrow} />
        <p className="font-bold text-2xl text-white">I can build, maintain, and enhance any web platform.</p>
      </div>
      <div className="mx-auto text-center  w-8/12">
     <button className="my-6 rounded text-center  bg-white	px-12 py-2 text-xl font-bold">View Projects</button>
     </div>
     
    </>
  );
}