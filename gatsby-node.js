exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}



/*
Grâce à la fonction CreateFilePath on va pouvoir créer un chemin défini vers tout les articles.
ex : ../liste-articles/article-1

Le slug va permettre d'identifier le chemin.
*/

const path = require("path")
const { createFilePath } = require ('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
    if (node.internal.type === 'MarkdownRemark' || node.internal.type ===  `Mdx` ) {
     const slug = createFilePath ({ 
        node, 
        getNode, 
        basePath: 'content',
      })
          createNodeField ({
          node, 
          name: `slug`,
          value: `/blog${slug}`,
      })
    }
}  


/*
La fonction createPages va permettre, à chaque slug, d'y associer une page. 
*/
 
exports.createPages =  async function ({ actions, graphql}) {
  const {data} = await graphql(`
    {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
          }
        }
        totalCount
      }
    }
  `)

/*
Ici nous 
nous associons la page qui vient d'être créée au template des posts existants 
*/

 data.allMdx.edges.forEach(edge => {
   const { slug } = edge.node.fields
   actions.createPage({
        path: slug,
        component: require.resolve('./src/templates/posts.js'),
        context: {slug: slug},
      })
    })

    const perPage = 4;
    const nbPage = Math.ceil(data.allMdx.totalCount / perPage)

    for (let i =0; i < nbPage; i++) {
      actions.createPage({
        path: i < 1 ? "/blog" : `/blog/${i + 1}`,
        // path: '/blog',
        component: require.resolve(`./src/templates/list.js`),
        context: {
          limit: perPage,
          skip: i * perPage,
        },
      })
  }
}
