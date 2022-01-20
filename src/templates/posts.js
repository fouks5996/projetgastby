import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"


/*
Cette fonction sert à générer le template pour chacun des articles.
Ici il va s'agir de créer la structure de la Page Détail Article 
*/

const Posts = ({ data }) => {
    const post = data.mdx
    return (
        <Layout>
        <Seo title={post.frontmatter.title} />
        <div> 
            {post.frontmatter.img && (
            <Img
                placeholderStyle={{backgroundColor: `red`}}
                fluid={post.frontmatter.img.childImageSharp.fluid}
                style={{
                    maxHeight:`500px`,
                    borderRadius:`10px`,
                  }}
            ></Img>
            )}       
            <h1> {post.frontmatter.title} </h1>

            <MDXRenderer>
                {post.body}
            </MDXRenderer>
        </div>
    
      </Layout>
    );
}


/* 
Ici il va s'agir de faire une requête Graphql afin de récupérer : 
    - Le contenu de "Html"
    - Le contenu de "Title"
pour les visualiser sur chaque page d'article.
*/

export const query = graphql`
    query($slug: String!) {
        mdx(fields: { slug: { eq: $slug}}) {
            body
            frontmatter{
                title
                img {
                    childImageSharp{
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`    


export default Posts


