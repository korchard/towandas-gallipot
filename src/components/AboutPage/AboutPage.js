import React, { Component } from 'react';

import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme();

const styles = {
  header: {
    margin: 'auto',
    width: '100%',
    marginBottom: '30px',
    radius: '5px',
    color: '#648b16',
    fontSize: '2em',
    fontFamily: 'fantasy',
    fontWeight: '700',
    textAlign: 'center',
    paddingRight: '20px',
  },
  root: {
    flexGrow: 1,
  },
  gridContainer: {
    paddingLeft: '12%',
    paddingRight: '12%',
    paddingTop: '2%',
    marginBottom: '15px',
  },
  paragraph: {
    marginBottom: '10px',
    marginTop: '10px',
    textAlign: 'left',
    paddingLeft: '20px',
  },
}

class AboutPage extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={0} className={classes.gridContainer} justify="center">
          <ThemeProvider theme={theme}>
            <Grid item xs={12} >
              <Typography variant="h3" component="h3" className={classes.header}>
                The Herbalist, Steph...
              </Typography>
            </Grid>
            <Grid item xs={12} sm={5}>
              <img src={window.location.origin + '/image/steph.jpg'} alt="Steph, the herbalist" className={classes.image}/>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Typography variant="p" component="p" className={classes.paragraph}>
                “Towanda! Righter of Wrongs, Queen Beyond Compare!”
              </Typography>
            </Grid>
          </ThemeProvider>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(AboutPage);

