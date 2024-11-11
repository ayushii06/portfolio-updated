'use client'

import {usePathname} from "next/navigation";
import {projectData} from '../../lib/projectData'

export default function ProjectDesc(){
    const pathname = usePathname();

    const id = pathname.split('/').pop();

    //1st data 
    const id_find = id-1;

    const project = projectData[id_find];

    return (
        <>
        {
            project ? (
               <div className="text-center my-12 ">
                <p style={{   "text-shadow":" 0 0 5px #14ebf1, 0 0 15px #126688, 0 0 20px #063aa4, 0 0 40px #405eff, 0 0 60px #6dd3ff, 0 0 10px #36acff, 0 0 98px #b91fff",
    "-webkit-text-stroke": "#00f4ff"}} className="max-sm:text-4xl text-5xl w-8/12 mx-auto text-white font-bold mb-16">{project.title}</p>
                <p className=" max-sm:text-4xl text-center text-4xl mb-8 px-16 font-bold text-gradient3">Tech Stack</p>
                <p className="max-sm:text-lg max-sm:px-6 text-white text-center font-medium text-2xl">{project.techStack}</p>
                <p className="text-white mb-16 px-16 font-medium">{project.summary}</p>

                {project.video && <>
                <p className="max-sm:text-4xl text-center text-4xl mb-8 px-16 font-bold text-gradient3">Video</p>
                <div className="flex justify-center">
                    <video src={project
                    .video} controls className="w-8/12"></video>
                </div>
                </> }
                <p className="max-sm:text-4xl text-center text-white mb-16 px-4 text-5xl text-extrabold " style={{   "text-shadow":" 0 0 5px #14ebf1, 0 0 15px #126688, 0 0 20px #063aa4, 0 0 40px #405eff, 0 0 60px #6dd3ff, 0 0 10px #36acff, 0 0 98px #b91fff",
    "-webkit-text-stroke": "#00f4ff"}}>GALLERY</p>

                <div className="flex flex-wrap gap-4  justify-center">
                   {
                          project.img.map((image, index) => {
                            return (
                                 <img key={index} src={image} className="px-12 md:p-0 md:w-5/12 md:h-7/12 object-cover" />
                            )
                          })
                   }
                </div>

               </div> ) :(
                <div className="text-center my-48 text-5xl font-bold text-white">Project Not Found</div>
               )
    
        }
        </>
    )
}