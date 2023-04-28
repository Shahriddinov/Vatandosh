import React, { useState } from 'react'
import './virtualTour.scss'
import { Pannellum } from "pannellum-react";
import myImage from '../../../../../assets/images/tourist-facilities/360.jpg'


const VirtualTour = () => {

    const [open360, setOpen360] = useState(false)

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
          setOpen360(!open360)
        }
    };

    return (
        <>  
            <div className="virtual_tour">
                <div className="virtual_tour_hero">
                    <div className="view_3d">
                        <div className="view_3d_circle">
                            <div className="view_3d_circle_inner">
                                <div className="view_3d_circle_inner_inner" onClick={() => setOpen360(!open360)}>Start 3D tour</div>
                            </div>
                        </div>
                    </div>
                </div>
                {open360 && <div className="view360" onKeyDown={handleKeyDown}>
                <Pannellum
                    width="100%"
                    height="100%"
                    image={myImage}
                    pitch={10}
                    yaw={180}
                    hfov={110}
                    autoLoad
                    showZoomCtrl={false}
                    onLoad={() => {
                    console.log("panorama loaded");
                    }}
                >
                </Pannellum>
                </div>}
            </div>
        </>
    )
}

export default VirtualTour