import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Grid container direction="row" justify="center" alignItems="center" spacing={16}>
          <Grid item xs={2}>
            <Paper>
              Hej1
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper>
              Hej1
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper>
              Hej1
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper>
              Hej1
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper>
              Hej1
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper>
              Hej1
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
