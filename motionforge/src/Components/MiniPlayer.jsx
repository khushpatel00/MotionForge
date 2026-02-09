import React from 'react'
import { togglenext, togglePlayer, toggleFullPlayer, handleSlider} from '../Logic/controlPlayer'


function MiniPlayer() {
    return (
        <div id="playerContainer"
            className="fixed bottom-0 w-full max-h-[10vh] z-50 flex bg-neutral-500 items-center justify-center">
            <div className="relative h-auto w-screen flex md:block lg:block xl:block xxl:block sm:justify-between" style={{justifyContent: 'spaceBetween'}}>
                <input type="range" min="0" max="100" default="0" onChange={handleSlider} id="playerSlider" />
                <audio id="currentPlayer" src="#" className="" controls
                    hidden></audio>
                <div className="md:flex lg:flex xl:flex xxl:flex block p-2 px-5 justify-between" style={{transition: '0.3s all' }}>
                    <div className="flex items-center">
                        <div className="controls toggler cursor-pointer" onClick={togglePlayer}>
                            <pre>||</pre>
                        </div>
                        <div className="controls next ps-3 flex cursor-pointer" onClick={togglenext}>
                            {'|>'} <span className="-ms-1.5 ">|</span>
                        </div>
                        <div className="duration ms-4" onClick={toggleFullPlayer} style={{transition: '0.3s all'}}>0</div>
                        <div className="ms-5 -rotate-90 text-2xl cursor-pointer" id="fullScreenToggle" onClick={toggleFullPlayer}>{'>'}</div>
                    </div>
                    <div className="flex items-center">

                        <img src="#" alt="" id="thumb" className="h-[5vh] thumb hidden md:flex lg:flex xl:flex xxl:flex rounded-[5px]" />
                        <div className="currentTitle ps-1 md:ps-4 lg:ps-4 xl:ps-4 xxl:ps-4 end-0" style={{textOverflow: 'ellipsis', textWrap: 'wrap'}}></div>
                    </div>
                </div>

                <div className="flex md:hidden lg:hidden xl:hidden xxl:hidden justify-end my-auto px-5"><img src="#" alt="" id="thumbLarger" className="max-h-[8vh] thumb rounded-[5px]" /></div >
            </div>
        </div>
    )
}

export default MiniPlayer