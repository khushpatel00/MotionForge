import React from 'react'
import { togglePlayer, togglenext } from '../Logic/controlPlayer'
function FullScreenPlayer() {
    return (
        <section id="playerFullScreen" className="bg-blue-950 overflow-x-hidden absolute top-0 left-0 h-screen w-screen z-20">
            <div className="relative w-full h-full  backdropfilter">
                <span className="absolute top-1/2 text-4xl -translate-y-1/2 left-1/5 z-10 cursor-not-allowed"> {'<'} </span>
                <span onClick={togglenext} className="absolute top-1/2 text-4xl -translate-y-1/2 right-1/5 z-10"> {'>'} </span>
                <img style={{transition: '0.2s'}} src="#" alt="" id="thumbCurrent" className="thumbCurrent h-[40vh] pointer-events-none rounded-2xl absolute top-1/2 left-1/2 -translate-1/2 z-30" />
                <img style={{transition: '0.2s'}} src="#" alt="" id="thumbPrev" className="thumbPrev h-[40vh] pointer-events-none rounded-2xl absolute top-1/2 left-1/2 opacity-50 scale-90 -translate-y-1/2 -translate-x-full z-10" />
                <img style={{transition: '0.2s'}} src="#" alt="" id="thumbNext" className="thumbNext h-[40vh] pointer-events-none rounded-2xl absolute top-1/2 left-1/2 opacity-50 scale-90 -translate-y-1/2 z-10" />
                <div id="title" className="ps-4 pt-4 text-5xl font-bold currentTitle start-0 absolute z-10"
                    style={{textOverflow: 'ellipsis', textWrap: 'wrap'}}>name</div>
            </div>
        </section>
    )
}

export default FullScreenPlayer