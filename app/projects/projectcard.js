import Image from "next/image";
import calendar from '../public/Calendar.png'
import Link from "next/link";

export default function projectcard(props){
    let {title, id , desc, date , image,preview} = props;
    return(
       <>
         <div className=" my-12 md:w-5/12 w-10/12">
          <img src={image} className="object-cover" />
          <div className="border-2 px-8 py-8">
                <p className="text-lg md:text-2xl pb-4 font-bold text-white">{title}</p>
                <p className="text-lg text-slate-200 pb-2">{desc}</p>
                <p className="flex gap-4 text-lg text-white">
                    <Image src={calendar} />
                    {date}
                </p>
          

          <div className="flex flex-wrap max-sm:justify-center gap-2">
          <Link href={preview} className="my-6 text-center  bg-white	px-6 rounded py-2 text-xl font-bold">Live Preview</Link>

          <Link href={`/projects/${id}`} className="my-6 text-center  bg-white	px-12 py-2 rounded text-xl font-bold">View Details</Link>
          </div>
          </div>
            </div>
       </> 
    )
}