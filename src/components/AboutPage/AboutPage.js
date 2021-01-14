import React, { Component } from 'react';

// STYLING
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
  header2: {
    margin: 'auto',
    width: '100%',
    marginBottom: '30px',
    marginTop: '10%',
    radius: '5px',
    color: '#648b16',
    fontSize: '1.5em',
    fontFamily: 'fantasy',
    textAlign: 'right',
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
              <Typography variant="h6" component="p" className={classes.header2}>
                Picture me with pruning shears in one hand and a basket in the other, 
                skipping through open fields yelling “Towanda the Avenger!” as I collect 
                plant medicine for my modern day gallipots (aka mason jars).
              </Typography>
            </Grid>
            <Grid item xs={12} sm={5}>
              <img src={window.location.origin + '/public/image/mason-jars.png'} alt="Steph, the herbalist" className={classes.image}/>
            </Grid>
            <Grid item xs={12} sm={5}>
              <img src={window.location.origin + '/image/steph.jpg'} alt="Steph, the herbalist" className={classes.image}/>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Typography variant="p" component="p" className={classes.paragraph}>
                As a child, my innate love for nature was abundant. I could often be 
                found in a sun-kissed field surrounded by dewy prairie grass, talking to 
                the animals, with a flower tucked behind my ear and a freshly picked handful 
                of weeds to adorn my mother’s kitchen table.  Growing up, my family spent 
                their free time camping in the Boundary Waters or at our cabin on the lake 
                where I would wander off to glean the wonders of the woods. I would collect 
                saps, berries, flowers and other things I found to make teas, salves and other 
                topicals to treat scrapes, bug bites and sunburn. Of course, it was all trial 
                and error as I knew nothing about the medicinal properties of plants back then. 
                My parents humored me as I would rub dandelion mash on their arms or make 
                and serve them sumac tea. 
              </Typography>
              <Typography variant="p" component="p" className={classes.paragraph}>
                “Towanda! Righter of Wrongs, Queen Beyond Compare!”
              </Typography>
              <Typography variant="p" component="p" className={classes.paragraph}>
                “Towanda! Righter of Wrongs, Queen Beyond Compare!”
              </Typography>
              <Typography variant="p" component="p" className={classes.paragraph}>
                “Towanda! Righter of Wrongs, Queen Beyond Compare!”
              </Typography>
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

