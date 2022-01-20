import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Content = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0 20px 0;
  height: 90vh;
`
const HeroButton = styled.button`
  background-color: indigo;
  color: white;
  font-family: CocoSharp Trial;
  font-weight: 500;
  border-radius: 30px;
  padding: 10px 25px 10px 25px;
  display: inline-block;
  margin-top: 20px;
`
const ContentLeft = styled.div`
  position: relative;
  padding-right: 8%;
  margin-bottom: 120px; 
`
const Hero = ({}) =>  (

<Content>
    <ContentLeft>
      <StaticImage
          style={{
            position: `absolute`,
            zIndex:`999`,
            top:`10%`,
            left:`-20%`,
            width:`15%`,
          }}

        className="paper-plane"
        alt="3D Image"
        src="https://res.cloudinary.com/pitch-software/image/upload/f_auto,e_trim/v1602085364/website-images/images/product-tour/paperplane_hires.png"
      ></StaticImage>
      <StaticImage
          style={{
            position: `absolute`,
            zIndex:`999`,
            bottom:`-5%`,
            right:`0%`,
            width:`12%`,
          }}
        className="star"
        alt="3D Image"
        src="https://d17v9ds8p1uxd3.cloudfront.net/img_analytics/diagram-2.png"
      ></StaticImage>
          <h1>A place for every team’s best thinking </h1>
          <p> We’re unifying the entire workflow of presenting, so teams can go from draft to deck in no time, and presenters and audiences can connect anywhere, anytime. All in one place. </p>
          <HeroButton> Appuyer ici </HeroButton>
    </ContentLeft>
    <div>
      <StaticImage
          style={{
            width:`130% `,
          }}
        alt="3D Image"
        src="https://res.cloudinary.com/pitch-software/image/upload/f_auto,c_scale,w_1680/v1622830467/website-images/about/about-hero.jpg"
      ></StaticImage>
    </div>
</Content>
)

export default Hero