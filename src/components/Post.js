import React from "react"
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material"
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material"

export const Post = () => {
  return (
    <Card sx={{ margin: "35px", borderRadius: "10px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label='cats'>
            C
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVert />
          </IconButton>
        }
        title='John Doe'
        subheader='February 10th, 2022'
      />
      <CardMedia
        component='img'
        height='20%'
        image='https://images.pexels.com/photos/11146305/pexels-photo-11146305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        alt='Orange Tabby Cat Lying on the Floor'
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
        </IconButton>
        <IconButton aria-label='share'>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  )
}
