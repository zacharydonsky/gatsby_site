
import React from 'react'
import Layout from '../components/layout.js'
import Link from 'gatsby-link'
import { background_Yellow } from '../utilities/colors.js'
import styled from 'styled-components'

const BlogPage = ({data}) => {
  return(
    <div>
    <Background>
    </Background>
      <Layout>
        <h1>Latest Posts</h1>
        {data.allMarkdownRemark.edges.map(post => (
          <div key={post.node.id}>
            <h3>{post.node.frontmatter.title}</h3>
            <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
            <br />
            <br />
            <Link to={post.node.frontmatter.path}> Read More</Link>
            <br />
            <br />
            <hr />
          </div>
        ))}
      </Layout>
    </div>
  );
}

const Background = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;  
  width:100vw;
  height: 100vh;
  background: ${background_Yellow};
`

export const pageQuery = graphql`
  query blogIndexQuery{
    allMarkdownRemark(
      filter: {frontmatter: {type: { eq: "blog"}}}
    ){
      edges{
        node{
          id
          frontmatter{
                title
                date
                author
                path
          }
        }
      }
    }
  } 
`

export default BlogPage;
