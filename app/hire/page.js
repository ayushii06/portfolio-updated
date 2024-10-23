import Image from "next/image";
import hire from '../public/hire.png'
import link from '../public/link.svg'

export default function Hire() {
    return (
        <>
            <p className="text-center pb-12 text-5xl text-extrabold text-transparent" style={{"-webkit-text-stroke": "1px #00f4ff","font-weight":"800"}}>HIRE ME</p>

            <div className="mx-auto w-5/12 rounded-xl pb-2" style={{"background":"#BCE8FF","height":"70vh"}}>
                <div className="rounded-xl flex items-center gap-8 py-2 px-8" style={{"background":"#005CF1"}} >
                    <Image className="" width={50} src={hire} />
                    <div className="">
                        <p className="text-2xl  font-bold text-white">Ayushi Pal</p>
                        <p className="">Online</p>
                    </div>
                </div>

                <div className="flex items-center mx-4 gap-2 my-4" style={{"position":"relative","top":"46vh"}}>
                    <div className="w-9/12 bg-white rounded-xl py-2 px-6 flex gap-6 justify-start items-center">
                        <Image className="" width={20} src={link} />
                        <p className="">Type Something....</p>
                    </div>
                    <div className="w-2/12 text-center text-white rounded-xl py-2 px-4 font-bold" style={{"background":"#0032E5"}}>SEND</div>
                </div>
            </div>
        </>
    )
}