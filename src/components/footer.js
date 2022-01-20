import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"


const Footerr = styled.div`
  padding-top: 37px;
  padding-right: 10%;
  padding-bottom: 25px;
  padding-left: 10%;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 9px 0 hsla(0, 0.00%, 0.00%, 0.34);
`
const FooterTop = styled.div`
  display: flex;
  margin-bottom: 37px;
  justify-content: space-around;
`
const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
`
const Paragraph = styled.p`
  text-align: center;
`

const Footer = ({}) =>  (
<footer>
  <Footerr>
    <div>
      <FooterTop>
        <FooterContent>
          <Link to="#" className="footer-link">Text Link</Link>
          <Link to="#" className="footer-link">Text Link</Link>
          <Link to="#" className="footer-link">Text Link</Link>
        </FooterContent>
        <FooterContent>
          <Link to="#" className="footer-link">Text Link</Link>
          <Link to="#" className="footer-link">Text Link</Link>
          <Link to="#" className="footer-link">Text Link</Link>
        </FooterContent>
        <FooterContent>
          <Link to="#" className="footer-link">Text Link</Link>
          <Link to="#" className="footer-link">Text Link</Link>
          <Link to="#" className="footer-link">Text Link</Link>
        </FooterContent>
      </FooterTop>
      <div>
        <Paragraph>Copyright © {new Date().getFullYear()} My Company. All rights reserved.</Paragraph>
      </div>
    </div>
  </Footerr>
</footer>
)

export default Footer