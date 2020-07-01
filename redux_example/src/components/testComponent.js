import React from 'react';
import Grid from '@material-ui/core/Grid';

export default function testComponent(){
    return(
        <Grid container>
            <Grid item sm={4}>
                <h1>Grades</h1>
            </Grid>
            <Grid item sm={8}>
                <h1>Welcome</h1>
            </Grid>
        </Grid>
    )
}