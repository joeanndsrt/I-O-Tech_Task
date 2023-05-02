import React from 'react'
import { Card, CardContent, CardMedia, Grid, Chip } from '@mui/material';

const Class = ({ classes }) => {

  //function to check if image in classes api has a valid image file
  function isValidUrl(url) {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  }

  return (
    <>
      {classes && classes.map((c) => (
        c.id && // check if the id is not null or undefined
        <Grid item xs={4}>
          <Card  sx={{ maxWidth: 345 }} key={c.id}> 
          <CardMedia
            sx={{ height: 170 }}
            image={c.image ? (isValidUrl(c.image) ? c.image : 'https://via.placeholder.com/200x200.png?text=Image+Not+Available') : 'https://via.placeholder.com/200x200.png?text=Image+Not+Available'}
            title='Class Image'
          />
            <CardContent>
              <h2>{c.title}</h2>
              <p>{c.description}</p>
              <p>{c.coach_name}</p>
              <p>{c.coach_brief}</p>
              <p>{c.timing}</p>
              <Chip label={'$ ' + c.price} color='success'></Chip>
            </CardContent>
        </Card>
      </Grid>
      ))}
    </>
  )
}

export default Class;
