import { useState } from 'react'
import MS from './menu.module.css'
import Link from 'next/link'
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from '@material-ui/core/Zoom';

export default function Menu() {
    return (
        <div className={MS.container}>
            <MBoton nombre="Home" icon="fa-home" link="/" />
            <MBoton nombre="Blog" icon="fa-vcard" link="/blog" />
            <MBoton nombre="Portfolio" icon="fa-briefcase" link="/" />
            <MBoton nombre="Projects" icon="fa-lightbulb-o" link="/" />
            
            <MBoton nombre="Contact me!" icon="fa-envelope-open" link="/" />
        </div>
    )
}


const MBoton= ({nombre, icon, link}) => {
    return (
        <Tooltip
            title={nombre}
            placement="right"
            classes={{tooltip: "toolTest"}}
            arrow
            TransitionComponent={Zoom}
        >
            <div className={MS.button}>
                <Link href={link} prefetch><center><a><i style={{fontSize: "32px"}} className={`fa ${icon}`} /></a></center></Link>
            </div>
        </Tooltip>
    )
}