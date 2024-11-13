'use client';
export default function DownloadButton() {
    const handelDownload = () => {
        window.open('https://drive.google.com/file/d/1uNiVyeIIq1QcM93JHKLVfviLfSY95pfu/view?usp=sharing', '_blank');
    }

    return (
        <button onClick={handelDownload} className="my-6 mx-auto md:mx-0 text-center w-7/12 gradient-btn px-2 py-3 text-xl font-bold">Download Resume</button>
    )
}
