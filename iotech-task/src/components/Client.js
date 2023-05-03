import React from 'react';
import { Grid, Avatar, Chip, Card, CardContent } from '@mui/material';

const Client = ({ clients }) => {
  return (
    <>
      {clients &&
        clients.map((c) => (
          c.id && (
            <Grid item xs={5} key={c.id}>
              <Card className="Card-root" sx={{ display: 'flex', alignItems: 'center', padding: '15px', maxWidth: 500 }}>
                <div style={{ marginRight: '16px' }}>
                <Avatar
                    alt={c.full_name}
                    src={c.avatar}
                    sx={{
                      width: { xs: 60, sm: 80, md: 100 },
                      height: { xs: 60, sm: 80, md: 100 },
                    }}
                  />
                </div>
                <CardContent sx={{ flexGrow: 1, textAlign: 'left' }}>
                  <h4>{c.full_name}</h4>
                  <h6>{c.address}</h6>
                  <h6>{c.mobile_number}</h6>
                </CardContent>
                <Chip 
                  label={c.subscription_plan}
                  sx={{
                    backgroundColor:
                      c.subscription_plan === "Basic Plan" ? "#020e62" : "#625602",
                    color: "#fff",
                  }}
                />
              </Card>
            </Grid>
          )
        ))}
    </>
  );
};

export default Client;
