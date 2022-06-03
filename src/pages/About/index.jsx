import React from "react"
import "./About.css"
import BannerAbout from "../../assets/banner-About.jpg"
import Banner from "../../components/Banner"
import { aboutText } from "../../datas/about-datas"
import Collapse from "../../components/Collapse"

export default class About extends React.Component {
  render() {
    return (
      <main className="About">
        <Banner imgSrc={BannerAbout} altTxt="paysage montagne" />
        <div className="collapses collapses-about">
        {console.log(aboutText)}
          {aboutText.map(({ title, content }) => (
            <Collapse key={title} title={title} content={content} />
          ))}
          
          
        </div>
        
      </main>
    )
  }
}
