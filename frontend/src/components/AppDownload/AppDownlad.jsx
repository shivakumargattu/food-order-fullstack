import React from 'react'
import "./AppDownload.css"
import { assets } from '../../assets/assets'

const AppDownlad = () => {
  return (
    <div>
        <div className="app-download" id='ap-download'>
<p>For Better Experience Download <br/> Tomato App</p>
<div className="app-download-platforms">
    <img src={assets.play_store} alt="" />
    <img src={assets.app_store} alt="" />
</div>
        </div>
    </div>
  )
}

export default AppDownlad