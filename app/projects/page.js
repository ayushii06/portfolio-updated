import ProjectCard from "./projectcard"
import { projectData } from "../lib/projectData"

export default function projects(){
    return (
        <>
            <p className="text-center px-4 text-5xl text-extrabold text-transparent" style={{   "-webkit-text-stroke": "1px #00f4ff","font-weight":"800",  "text-shadow": "0 0 5px #14ebf1, 0 0 15px #126688, 0 0 20px #063aa4, 0 0 40px #405eff, 0 0 60px #6dd3ff, 0 0 10px #36acff, 0 0 98px #b91fff"
   , "color": "#fccaff"
   , "color": "#0dfffa"}}>MY PROJECTS</p>

            <div className="flex my-12 flex-wrap justify-evenly">
                {
                    projectData.map((item, index) => {
                        return (
                            <ProjectCard key={index} id={item.id} title={item.title} desc={item.desc} date={item.date} image={item.image} preview={item.preview}/>
                        )
                    })
                }
            </div>
       
        </>
    )
}