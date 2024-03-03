import React from 'react'
import {Typography} from '@mui/material'

const MuiTypography = () => {
  return (
    <div>
        <Typography variant="h1">h1 Heading</Typography>
        <Typography variant="h2">h2 Heading</Typography>
        <Typography variant="h3">h3 Heading</Typography>
        <Typography variant="h4">h4 Heading</Typography>
        <Typography variant="h5" component="h1" gutterBottom>h5 Heading</Typography>
        <Typography variant="subtitle1">subtitle1 Heading</Typography>
        <Typography variant="subtitle2">subtitle2 Heading</Typography>
        <Typography variant="h6">h6 Heading</Typography>
        <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rerum laboriosam, tempore eos voluptatem molestias! Provident consequuntur hic ratione laudantium? Atque pariatur nemo deserunt praesentium soluta quos quidem consequuntur libero!</Typography>
        <Typography variant="body2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam accusantium obcaecati harum, at dolores, molestiae hic veritatis aperiam ipsum quidem cum sit aspernatur. Itaque, architecto commodi. Impedit necessitatibus voluptatum sapiente!</Typography>
    </div>
  )
}

export default MuiTypography 