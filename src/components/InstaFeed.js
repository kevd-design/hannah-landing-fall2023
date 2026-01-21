import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import {
    social,
    socialIcons,
    sectionIntro,
    feedContainer,
    instaFeedContainer,
    instagramPost,
    instagramFeed,
    
    
} from "./instafeed.module.css"

const InstaFeed = () => {
    
    return (
        <div className={instaFeedContainer}>
            
            <div className={sectionIntro}>
                <h2>Follow us!</h2>
                <p>Join our ever-growing community of home renovation enthusiasts on Instagram and Facebook!</p>
                <div className={socialIcons}>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/vantaconstruction/">
                        <StaticImage
                            alt="The Instagram logo."
                            src="../images/Instagram_Glyph_White.svg"
                            placeholder="blurred"
                            className={social}
                            
                        />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=61554693466954">
                        <StaticImage
                            alt="The Facebook logo."
                            src="../images/f_logo_RGB-White_512.png"
                            placeholder="blurred"
                            className={social}
                        />
                    </a>
                    
                </div>
            </div>
            <div className={feedContainer}>
                <div className={instagramFeed}>
                    <div className={instagramPost}>
                        <StaticImage
                            alt="Construction site with excavator working on foundation."
                            src="../images/services/Concrete.jpg"
                            placeholder="blurred"
                            style={{
                                width: "100%",
                                objectPosition: "center bottom",
                                objectFit: "cover",
                                borderRadius: "10px",
                           }}
                        />
                    </div>
                    <div className={instagramPost}>
                        <StaticImage
                            alt="Beautiful deck construction project completed."
                            src="../images/services/Decks.jpg"
                            placeholder="blurred"
                            style={{
                                width: "100%",
                                objectPosition: "center",
                                objectFit: "cover",
                                borderRadius: "10px"
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
        
         
    )

}


   

   

   


export default InstaFeed