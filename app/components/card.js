export default function card(){
    return (
        <>
            <div className="px-8 py-4 border-2 " style={{'background':'rgba(0, 0, 0, 0.26)'}}>
                <p className=" text-center text-white font-bold text-2xl">I will create MERN stack website for you.</p>
                <div className="text-slate-200 flex my-6  ">
                    <p className="w-4/12">Frontend : </p>
                    <p className="">HTML , CSS , Javascript ,  React JS, Next JS, Tailwind CSS, Bootstrap</p>
                </div>
                <div className="text-slate-200 flex  my-6  ">
                    <p className="w-4/12">Backend : </p>
                    <p className="">Node JS, Express JS</p>
                    </div>

                <div className="text-slate-200 flex my-6  ">
                    <p className="w-4/12">Database : </p>
                    <p className="">MongoDB</p>
                </div>

                <div className="text-slate-200 flex  my-6  ">
                    <p className="w-4/12">Duration : </p>
                    <p className="">1 week - 1 Month (depends on project needs)</p>
                    </div>
                
                <div className="text-slate-200 flex  my-6 ">
                    <p className="w-4/12">Price : </p>
                    <p className="">₹5,000 - ₹50,000</p>
                </div>
                <div className="mx-auto text-center  w-8/12">
                <button className="my-6 text-center rounded bg-white	px-12 py-2 text-xl font-bold">BOOK NOW</button>
                </div>
            </div>
        </>
    )
}