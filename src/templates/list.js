import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import Img from "gatsby-image"

const Titlemain = styled.h1`
  color: black;
  font-weight: 800;
  font-size: 78px;
  margin: 0;
  margin-bottom: 10px;
  margin-top: 30px;
`
const Styledlink = styled(Link)`
    text-decoration: underline;
    font-style: italic;
    margin-top: 15px;
    font-size:14px;

`
const Listwrap = styled.div`
  display: flex;
 
  background-color: #ececec;
  border-radius: 10px;
  padding: 15px;
  margin-bottom:14px;
`
const Title = styled.h1`
  color: black;
  font-weight: 700;
  font-size: 32px;
  margin: 0;
  margin-bottom: 8px;
`
const Tag = styled.h5`
  background-color: green;
  color: white;
  font-weight: 500;
  font-size: 14px;
  margin: 0;
  padding: 5px 10px 5px 10px;
  border-radius: 6px;
  display: inline-block;
`
const Excerpt = styled.p`
  color: black;
  font-size: 16px;
  line-height:19px;
  margin: 0;
  width:50%;
  margin-top: 15px;
  padding: 0;
`
const Stylepage = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: flex-start;
`
const PreviousNext = styled(Link)`
  text-decoration: underline;
  font-weight : 600;
  margin-right: 40px;
  font-size:16px;

`

const IndexPage = ({ data }) => {
    const { nodes, pageInfo } = data.allMdx
    return (
        <Layout>
            <Seo title="bloghome" />
            <Titlemain> Liste des posts</Titlemain>
            <div  
              style={{
                fontSize:`1.3vw`,
                marginBottom:`20px`,
                      }}> {pageInfo.totalCount} articles </div>
            {nodes.map( e => (
                <Listwrap>
                    <Img  
                      style={{
                        minWidth: `250px`,
                        borderRadius:`10px`,
                        marginRight:`20px`,
                      }}
                      placeholderStyle={{backgroundColor: `red`}} 
                      fluid={e.frontmatter.img.childImageSharp.fluid}
                      />
                    <div
                      style={{
                        padding:`15px`,
                      }}>
                      <Title> {e.frontmatter.title}</Title>
                      <div> <Tag> {e.frontmatter.tag} </Tag> </div>
                      <Excerpt> {e.excerpt}</Excerpt>
                      <Styledlink to={e.fields.slug}> Voir l'article</Styledlink>
                    </div>
                </Listwrap>
            ))}
            <Stylepage>
            <div
              style={{
                fontSize: `1.2vw`,
                marginRight:`20px`,
                    }}
                > Page {pageInfo.currentPage} </div>
              {pageInfo.hasPreviousPage ? (
                <PreviousNext to={`${pageInfo.currentPage === 2 ? "/blog" : `/blog/${pageInfo.currentPage - 1}`}`}>  
                  Page précédente 
                </PreviousNext>
              ) : (
                <div/>
              )}
              {pageInfo.hasNextPage && (
                    <PreviousNext to={`/blog/${pageInfo.currentPage + 1}`}> Page suivante  </PreviousNext>
              )}

              
            </Stylepage>    
        </Layout>
    )
}

export const query = graphql`
query getPosts ($skip: Int!, $limit: Int!) {
    allMdx(
      sort: {fields: frontmatter___date, order: ASC}
      limit: $limit
      skip: $skip
      ) {
        nodes {
          frontmatter {
            tag
            title
            img {
              childImageSharp{
                  fluid{
                      ...GatsbyImageSharpFluid
                  }
              }
          }
            date(formatString: "DD MM YYYY")
            
          }
          excerpt
          fields {
            slug
        }
      } 
        pageInfo {
          currentPage
          hasNextPage
          hasPreviousPage
          itemCount
          pageCount
          perPage
          totalCount
        }
      }
    }
`
export default IndexPage