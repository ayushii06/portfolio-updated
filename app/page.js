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
import web6 from './public/skills/express.svg'
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
import web20 from './public/skills/tailwind.svg'
import web21 from './public/skills/nextjs.svg'
import web22 from './public/skills/socketio.svg'
import web23 from './public/skills/postman.svg'
import arrow from './public/arrow.png'
import DownloadButton from './downloadButton'
import CircularProgress from './components/chart'
import leetcode from './public/leetcode.svg'
import cer1 from './public/certificates/1.jpg'
import cer2 from './public/certificates/2.jpg'
import cer3 from './public/certificates/3.jpeg'
import cer4 from './public/certificates/4.jpeg'
import cer5 from './public/certificates/5.jpeg'


export default function Home() {

  const data = {
    total: 3352,
    easy: 834,
    medium: 1753,
    hard: 765,
    completed: 103,
    levels: {
      easy: 56,
      medium: 45,
      hard: 2
    }
  };




  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-2 items-center px-8 md:px-28 py-4  justify-center text-white">
        <div className="md:text-left text-center">
          <p className="text-6xl font-bold">Hi ,</p>
          <p className="text-6xl font-bold my-4">I’m <span className="text-gradient1" >Ayushi Pal ,</span> </p>

          <div className="text-center max-sm:mx-8 md:mx-0 text-gradient2 font-semibold md:w-10/12  text-3xl my-8 border-2 border-solid px-4	md:px-6 py-3">MERN STACK DEVELOPER</div>
          <p className="w-9/12 py-4 md:py-0 mx-auto md:mx-0 text-xl text-slate-300">Technology Enthusiast with a strong interest in building scalable and efficient web applications</p>
          <DownloadButton />
        </div>
        <div className="">
          <Image className="" src={photo} />
        </div>
      </div>


      <p className="text-center py-14 font-medium  px-8 md:px-24 text-white text-lg md:text-2xl">“ Those who are motivated only by the desire for the fruit of action are miserable, for they are constantly anxious about the results of what they do.”</p>

      <div className="w-7/12 mx-auto">
        <TimeLine />

      </div>

      <p className="text-center py-14 font-medium px-8 md:px-24 text-white text-lg md:text-2xl">I WRITE CODE | I LOVE DEBUGGING | I DEVELOP WEBSITES | I AM SELF FOCUSED AND HARD-WORKING | </p>

      <div className="px-14 md:px-28 py-12">
        <p className="text-gradient3 text-center md:text-left text-4xl font-bold">SKILL SET</p>
        <div className="flex justify-center md:justify-start flex-row gap-6 flex-wrap my-12 items-center">
          <div className="hover:shadow-lg hover:shadow-gray-400 cursor-pointer transition duration-500 hover:scale-110 flex flex-col justify-center md:justify-start gap-6 flex-wrap my-2 items-center border-white border-opacity-75  border-2 px-6 w-22 py-6 ">
            <Image src={c} width={42} height={42} alt='skill' />
            <p className="text-white text-lg">C Programming Language</p>
          </div>
          <div className="hover:shadow-lg hover:shadow-gray-400 cursor-pointer transition duration-500 hover:scale-110 flex flex-col justify-center md:justify-start gap-6 flex-wrap my-2 items-center border-white border-opacity-75  border-2 px-6 w-22 py-6 ">
            <Image src={C} width={42} height={42} alt='skill' />
            <p className="text-white texlgxs">C++ Programming Language</p>
          </div>
          <div className="hover:shadow-lg hover:shadow-gray-400 cursor-pointer transition duration-500 hover:scale-110 flex flex-col justify-center md:justify-start gap-6 flex-wrap my-2 items-center border-white border-opacity-75  border-2 px-6 w-22 py-6 ">
            <Image src={web1} width={42} height={42} alt='skill' />
            <p className="text-white text-lg">HTML</p>
          </div>
          <div className="hover:shadow-lg hover:shadow-gray-400 cursor-pointer transition duration-500 hover:scale-110 flex flex-col justify-center md:justify-start gap-6 flex-wrap my-2 items-center border-white border-opacity-75  border-2 px-6 w-22 py-6 ">
            <Image src={web2} width={42} height={42} alt='skill' />
            <p className="text-white text-lg">CSS</p>
          </div>
          <div className="hover:shadow-lg hover:shadow-gray-400 cursor-pointer transition duration-500 hover:scale-110 flex flex-col justify-center md:justify-start gap-6 flex-wrap my-2 items-center border-white border-opacity-75  border-2 px-6 w-22 py-6 ">
            <Image src={web3} width={42} height={42} alt='skill' />
            <p className="text-white text-lg">JAVASCRIPT</p>
          </div>
          <div className="hover:shadow-lg hover:shadow-gray-400 cursor-pointer transition duration-500 hover:scale-110 flex flex-col justify-center md:justify-start gap-6 flex-wrap my-2 items-center border-white border-opacity-75  border-2 px-6 w-22 py-6 ">
            <Image src={web4} width={42} height={42} alt='skill' />
            <p className="text-white text-lg">REACTJS</p>

          </div>
          <div className="hover:shadow-lg hover:shadow-gray-400 cursor-pointer transition duration-500 hover:scale-110 flex flex-col justify-center md:justify-start gap-6 flex-wrap my-2 items-center border-white border-opacity-75  border-2 px-6 w-22 py-6 ">
            <Image src={web16} width={42} height={42} alt='skill' />
            <p className="text-white text-lg">REDUX</p>
          </div>
          <div className="hover:shadow-lg hover:shadow-gray-400 cursor-pointer transition duration-500 hover:scale-110 flex flex-col justify-center md:justify-start gap-6 flex-wrap my-2 items-center border-white border-opacity-75  border-2 px-6 w-22 py-6 ">
            <Image src={web21} width={42} height={42} alt='skill' />
            <p className="text-white text-lg">NEXT.JS</p>
          </div>
          <div className="hover:shadow-lg hover:shadow-gray-400 cursor-pointer transition duration-500 hover:scale-110 flex flex-col justify-center md:justify-start gap-6 flex-wrap my-2 items-center border-white border-opacity-75  border-2 px-6 w-22 py-6 ">
            <Image src={web5} width={42} height={42} alt='skill' />
            <p className="text-white text-lg">NODE.JS</p>
          </div>
          <div className="hover:shadow-lg hover:shadow-gray-400 cursor-pointer transition duration-500 hover:scale-110 flex flex-col justify-center md:justify-start gap-6 flex-wrap my-2 items-center border-white border-opacity-75  border-2 px-6 w-22 py-6 ">
            <Image src={web6} width={42} height={42} alt='skill' />
            <p className="text-white text-lg">EXPRESS.JS</p>
          </div>
          <div className="hover:shadow-lg hover:shadow-gray-400 cursor-pointer transition duration-500 hover:scale-110 flex flex-col justify-center md:justify-start gap-6 flex-wrap my-2 items-center border-white border-opacity-75  border-2 px-6 w-22 py-6 ">
            <Image src={web7} width={42} height={42} alt='skill' />
            <p className="text-white text-lg">MONGODB</p>
          </div>
          <div className="hover:shadow-lg hover:shadow-gray-400 cursor-pointer transition duration-500 hover:scale-110 flex flex-col justify-center md:justify-start gap-6 flex-wrap my-2 items-center border-white border-opacity-75  border-2 px-6 w-22 py-6 ">
            <Image src={web18} width={42} height={42} alt='skill' />
            <p className="text-white text-lg">MYSQL</p>
          </div>
          <div className="hover:shadow-lg hover:shadow-gray-400 cursor-pointer transition duration-500 hover:scale-110 flex flex-col justify-center md:justify-start gap-6 flex-wrap my-2 items-center border-white border-opacity-75  border-2 px-6 w-22 py-6 ">
            <Image src={web23} width={42} height={42} alt='skill' />
            <p className="text-white text-lg">POSTMAN</p>
          </div>
          <div className="hover:shadow-lg hover:shadow-gray-400 cursor-pointer transition duration-500 hover:scale-110 flex flex-col justify-center md:justify-start gap-6 flex-wrap my-2 items-center border-white border-opacity-75  border-2 px-6 w-22 py-6 ">
            <Image src={web9} width={42} height={42} alt='skill' />
            <p className="text-white text-lg">THREE.JS</p>
          </div>
          <div className="hover:shadow-lg hover:shadow-gray-400 cursor-pointer transition duration-500 hover:scale-110 flex flex-col justify-center md:justify-start gap-6 flex-wrap my-2 items-center border-white border-opacity-75  border-2 px-6 w-22 py-6 ">
            <Image src={web15} width={42} height={42} alt='skill' />
            <p className="text-white text-lg">VITE</p>
          </div>
          <div className="hover:shadow-lg hover:shadow-gray-400 cursor-pointer transition duration-500 hover:scale-110 flex flex-col justify-center md:justify-start gap-6 flex-wrap my-2 items-center border-white border-opacity-75  border-2 px-6 w-22 py-6 ">
            <Image src={web22} width={42} height={42} alt='skill' />
            <p className="text-white text-lg">SOCKET.IO</p>
          </div>
          <div className="hover:shadow-lg hover:shadow-gray-400 cursor-pointer transition duration-500 hover:scale-110 flex flex-col justify-center md:justify-start gap-6 flex-wrap my-2 items-center border-white border-opacity-75  border-2 px-6 w-22 py-6 ">
            <Image src={web15} width={42} height={42} alt='skill' />
            <p className="text-white text-lg">WEBRTC</p>
          </div>
          <div className="hover:shadow-lg hover:shadow-gray-400 cursor-pointer transition duration-500 hover:scale-110 flex flex-col justify-center md:justify-start gap-6 flex-wrap my-2 items-center border-white border-opacity-75  border-2 px-6 w-22 py-6 ">
            <Image src={web12} width={52} height={62} alt='skill' />
            <p className="text-white text-lg">BOOTSTRAP CSS</p>
          </div>
          <div className="hover:shadow-lg hover:shadow-gray-400 cursor-pointer transition duration-500 hover:scale-110 flex flex-col justify-center md:justify-start gap-6 flex-wrap my-2 items-center border-white border-opacity-75  border-2 px-6 w-22 py-6 ">
            <Image src={web20} width={42} height={42} alt='skill' />
            <p className="text-white text-lg">Tailwind CSS</p>
          </div>
          <div className="hover:shadow-lg hover:shadow-gray-400 cursor-pointer transition duration-500 hover:scale-110 flex flex-col justify-center md:justify-start gap-6 flex-wrap my-2 items-center border-white border-opacity-75  border-2 px-6 w-22 py-6 ">
            <Image src={web13} width={42} height={42} alt='skill' />
            <p className="text-white text-lg">FIGMA</p>
          </div>
          <div className="hover:shadow-lg hover:shadow-gray-400 cursor-pointer transition duration-500 hover:scale-110 flex flex-col justify-center md:justify-start gap-6 flex-wrap my-2 items-center border-white border-opacity-75  border-2 px-6 w-22 py-6 ">
            <Image src={web8} width={42} height={42} alt='skill' />
            <p className="text-white text-lg">GITHUB</p>
          </div>
          <div className="hover:shadow-lg hover:shadow-gray-400 cursor-pointer transition duration-500 hover:scale-110 flex flex-col justify-center md:justify-start gap-6 flex-wrap my-2 items-center border-white border-opacity-75  border-2 px-6 w-22 py-6 ">
            <Image src={web10} width={42} height={42} alt='skill' />
            <p className="text-white text-lg">GIT</p>
          </div>
          <div className="hover:shadow-lg hover:shadow-gray-400 cursor-pointer transition duration-500 hover:scale-110 flex flex-col justify-center md:justify-start gap-6 flex-wrap my-2 items-center border-white border-opacity-75  border-2 px-6 w-22 py-6 ">
            <Image src={web11} width={42} height={42} alt='skill' />
            <p className="text-white text-lg">VS CODE</p>
          </div>
          <div className="hover:shadow-lg hover:shadow-gray-400 cursor-pointer transition duration-500 hover:scale-110 flex flex-col justify-center md:justify-start gap-6 flex-wrap my-2 items-center border-white border-opacity-75  border-2 px-6 w-22 py-6 ">
            <Image src={web14} width={102} height={52} alt='skill' />
            <p className="text-white text-lg">NPM</p>
          </div>

          <div className="hover:shadow-lg hover:shadow-gray-400 cursor-pointer transition duration-500 hover:scale-110 flex flex-col justify-center md:justify-start gap-6 flex-wrap my-2 items-center border-white border-opacity-75  border-2 px-6 w-22 py-6 ">
            <Image src={web17} width={46} height={42} alt='skill' />
            <p className="text-white text-lg">MICROSOFT AZURE</p>
          </div>
          <div className="hover:shadow-lg hover:shadow-gray-400 cursor-pointer transition duration-500 hover:scale-110 flex flex-col justify-center md:justify-start gap-6 flex-wrap my-2 items-center border-white border-opacity-75  border-2 px-6 w-22 py-6 ">
            <Image src={web19} width={42} height={42} alt='skill' />
            <p className="text-white text-lg">DOCKER</p>
          </div></
        div>
      </div>


      <p className="text-center py-6 font-medium px-8 md:px-24 text-white text-lg md:text-2xl">
        DATA STRUCTURES AND ALGORITHMS || C / C++ Programming Language || MERN Stack Development || Leadership and Team Management</p>

      <div className="px-14 md:px-28 py-12">
        <p className="text-gradient3 text-center md:text-left text-4xl font-bold">What Services I Bring?</p>
        <div className="flex justify-center flex-nowrap max-lg:flex-wrap max-lg:justify-center gap-12 pt-12">
          <Card />

        </div>
      </div>
      <p className="text-center mb-20  border-2 py-4 font-semibold mx-8 md:mx-28 px-4 md:px-16 text-white text-lg md:text-2xl">
        Responsive and Compatible Design | Customizing Existing Sites | Secured Web Site & Database | Rest API Integration | E-commerce Functionality | Payment Gateways Integration
      </p>
      <p className="text-gradient3 text-3xl md:px-28 font-bold px-14 md:text-start text-center">Why Me ?</p>
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

      <div className="px-14 md:px-28 py-12 flex justify-between items-center flex-wrap max-lg:flex-wrap max-lg:justify-center gap-12 pt-12">
        <p className="text-gradient3 text-3xl py-8 font-bold ">Coding Stats</p>
        <Link target='_blank' href='https://leetcode.com/u/ayushii06/'>
          <Image src={leetcode} height={42} className='hover:scale-110 transition-duration-500' />
        </Link>
      </div>

      <div className="flex flex-wrap items-center justify-around md:mx-28 mx-12">
        <CircularProgress
          total={data}
          completed={data.completed}
          levels={data.levels}
        />

        <div className="md:w-6/12 w-9/12">
          <p className="text-center md:text-2xl text-lg md:py-0 py-12 font-extrabold text-white pb-6 ">Topics Covered</p>
          <div className="flex flex-wrap items-center justify-center  gap-5">
            <p style={{ background: 'rgb(33 161 0)' }} className="font-bold text-white md:px-4 px-2 py-2 rounded-lg">Array</p>
            <p style={{ background: 'rgb(33 161 0)' }} className="font-bold text-white md:px-4 px-2 py-2 rounded-lg">Math</p>
            <p style={{ background: 'rgb(33 161 0)' }} className="font-bold text-white md:px-4 px-2 py-2 rounded-lg">String</p>
            <p style={{ background: 'rgb(33 161 0)' }} className="font-bold text-white md:px-4 px-2 py-2 rounded-lg">Sorting</p>
            <p style={{ background: 'rgb(243 87 15)' }} className="font-bold text-white md:px-4 px-2 py-2 rounded-lg">Linked List</p>
            <p style={{ background: 'rgb(243 87 15)' }} className="font-bold text-white md:px-4 px-2 py-2 rounded-lg">Stack</p>
            <p style={{ background: 'rgb(243 87 15)' }} className="font-bold text-white md:px-4 px-2 py-2 rounded-lg">Tree</p>
            <p style={{ background: 'rgb(243 87 15)' }} className="font-bold text-white md:px-4 px-2 py-2 rounded-lg">Binary Tree</p>
            <p style={{ background: 'rgb(243 87 15)' }} className="font-bold text-white md:px-4 px-2 py-2 rounded-lg">Graph</p>
            <p style={{ background: 'rgb(243 87 15)' }} className="font-bold text-white md:px-4 px-2 py-2 rounded-lg">B.F.S. / D.F.S</p>
            <p style={{ background: 'rgb(200 0 0)' }} className="font-bold text-white md:px-4 px-2 py-2 rounded-lg">Recursion</p>
            <p style={{ background: 'rgb(200 0 0)' }} className="font-bold text-white md:px-4 px-2 py-2 rounded-lg">Backtracking</p>
            <p style={{ background: 'rgb(200 0 0)' }} className="font-bold text-white md:px-4 px-2 py-2 rounded-lg">Dynamic Programming</p>
            <p style={{ background: 'rgb(200 0 0)' }} className="font-bold text-white md:px-4 px-2 py-2 rounded-lg">Divide and Conquer</p>
          </div>
        </div>

      </div>


      <p className="text-gradient3 text-3xl  font-bold px-14 md:px-28 md:text-start text-center py-12">Certificates</p>

      <div className="flex flex-wrap items-center justify-center mx-14 ">
        <div class="max-w-sm relative w-8/12 h-auto ">
          <Image src={cer1} alt="image" class="w-full max-w-sm  h-auto relative z-0" />
          <span class=" absolute w-full h-full top-0 left-0 bg-black opacity-0 z-10 transition-opacity duration-300 hover:opacity-20 ">

          </span>
        </div>

        <div class="relative max-w-sm w-8/12 h-auto ">
          <Image src={cer2} alt="image" class="w-full max-w-sm  h-auto relative z-0" />
          <span class=" absolute w-full h-full top-0 left-0 bg-black opacity-0 z-10 transition-opacity duration-300 hover:opacity-20 ">

          </span>
        </div>

        <div class="md:w-72 w-20 relative max-w-sm  h-auto ">
          <Image src={cer3} alt="image" class="w-full max-w-sm  h-auto relative z-0" />
          <span class=" absolute w-full h-full top-0 left-0 bg-black opacity-0 z-10 transition-opacity duration-300 hover:opacity-20 ">

          </span>
        </div>

        <div class="w-6/12 relative max-w-sm  h-auto ">
          <Image src={cer4} alt="image" class="w-full max-w-sm  h-auto relative z-0" />
          <span class=" absolute w-full h-full top-0 left-0 bg-black opacity-0 z-10 transition-opacity duration-300 hover:opacity-20 ">

          </span>
        </div>

        <div  class="relative w-8/12 max-w-sm  h-auto ">
          <Image src={cer5} alt="image" class="w-full max-w-sm  h-auto relative z-0" />
          <span class=" absolute w-full h-full top-0 left-0 bg-black opacity-0 z-10 transition-opacity duration-300 hover:opacity-20 ">

          </span></div>
      </div>



    </>
  );
}