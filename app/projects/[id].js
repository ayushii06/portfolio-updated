import { useRouter } from "next/router"
import {projectData} from "../../lib/projectData";

export default function ProjectDesc(){
    const query = useRouter();
    const id =query.id;

    const project = projectData.find((project) => project.id === id);


    return (
        <>
        {
            project ? (
               <div className="">

               </div> ) :(
                <div className="text-center text-3xl font-bold text-white">Project Not Found</div>
               )
    
        }
        </>
    )
}