import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Headerr = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  padding-right: 10%;
  padding-bottom: 20px;
  padding-left: 10%;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 9px 0 hsla(0, 0.00%, 0.00%, 0.10);
`
const Navigationwrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`
const Navigationitems = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  align-items: center;
`

const Header = ({ siteTitle }) => (
<Headerr>
    <Navigationwrapper> <Link to="/"> <img  src="https://uploads-ssl.webflow.com/61e19abe758c388d4b788976/61e19abe758c38580a788989_webflow-w-small%402x.png" loading="lazy" alt=""></img></Link>
      <Navigationitems>

        <Link to="/Page2"> Home</Link>
        <Link to="/blog"> Les articles </Link>
        <Link to="#">Products</Link>
        <Link to="#">Contact</Link>

      </Navigationitems>
    </Navigationwrapper>
</Headerr>
)

export default Header
