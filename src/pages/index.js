import * as React from "react"
import {
  mainStyle,
  divProfile,
  imgProfile,
  pName,
  pLocation,
  divStats,
  divStat,
  pStatProperty,
  pStatValue,
  divGallery,
  imgGallery,
  imgGallery1,
  imgGallery2,
  imgGallery3,
  imgGallery4,
  imgGallery5,
  imgGallery6,
  footerStyle,
  pFooter
} from "./index.module.css";
import profileImage from "../images/profilePhoto.png";
import galleryImage1 from "../images/photo1.png";
import galleryImage2 from "../images/photo2.png";
import galleryImage3 from "../images/photo3.png";
import galleryImage4 from "../images/photo4.png";
import galleryImage5 from "../images/photo5.png";
import galleryImage6 from "../images/photo6.png";

const IndexPage = () => {
  return (
    <main className={mainStyle}>
      <div className={divProfile}>
        <img src={profileImage} alt={"Profile"} className={imgProfile}/>
        <p className={pName}>Rodney Cotton</p>
        <p className={pLocation}>Helsinki, Finland</p>
        <div className={divStats}>
          <div className={divStat}>
            <p className={pStatProperty}>100</p>
            <p className={pStatValue}>Posts</p>
          </div>
          <div className={divStat}>
            <p className={pStatProperty}>2,242</p>
            <p className={pStatValue}>Follower</p>
          </div>
          <div className={divStat}>
            <p className={pStatProperty}>1,432</p>
            <p className={pStatValue}>Following</p>
          </div>
        </div>
      </div>
      <div className={divGallery}>
        <img src={galleryImage1} alt={"Gallery"} className={`${imgGallery} ${imgGallery1}`}/>
        <img src={galleryImage2} alt={"Gallery"} className={`${imgGallery} ${imgGallery2}`}/>
        <img src={galleryImage3} alt={"Gallery"} className={`${imgGallery} ${imgGallery3}`}/>
        <img src={galleryImage4} alt={"Gallery"} className={`${imgGallery} ${imgGallery4}`}/>
        <img src={galleryImage5} alt={"Gallery"} className={`${imgGallery} ${imgGallery5}`}/>
        <img src={galleryImage6} alt={"Gallery"} className={`${imgGallery} ${imgGallery6}`}/>
      </div>
      <footer className={footerStyle}>
        <p className={pFooter}>created by pranav0281999 - devChallenges.io</p>
      </footer>
    </main>
  )
}

export default IndexPage
