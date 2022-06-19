import { Divider, Grid, Typography } from '@mui/material'
import Markdown from 'markdown-to-jsx'
import React from 'react'
import { posts } from '../data/Data'

const Main = ({title}) => {
    return (
        <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom style={{marginTop:32}}>
                {title}
            </Typography>
            <Divider style={{backgroundColor:"white"}}/>
            {
                posts.map(post=>(
                    <Markdown key={post.body}>{post.body}</Markdown>
                ))
            }
        </Grid>
    )
}

export default Main
