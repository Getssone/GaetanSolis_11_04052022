import React from "react"
import Banner from "../../components/Banner"
import BannerHome from "../../assets/banner-Home.jpg"
import Galery from "../../components/Galery"

export default class Home extends React.Component {
  render() {
    return (
      <main className="Home">
        <Banner
          imgSrc={BannerHome}
          altTxt="Falaise proche de l'océan"
          title="Chez vous, partout et ailleurs"
        />
        <Galery />
      </main>
    )
  }
}
