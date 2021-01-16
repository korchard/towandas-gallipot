import React, { Component } from 'react';

// STYLING
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// create a variable for theme
const theme = createMuiTheme();

const styles = {
  header: {
    margin: 'auto',
    width: '100%',
    marginBottom: '30px',
    radius: '5px',
    color: '#648b16',
    // fontSize: '2em',
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
    // fontSize: '1.5em',
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

theme.typography.h6 = {
  fontSize: '1rem',
'@media (min-width:320px)': {
  fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
};

theme.typography.h3 = {
  fontSize: '1.5rem',
'@media (min-width:320px)': {
  fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

theme.typography.p = {
  fontSize: '.7rem',
'@media (min-width:320px)': {
    fontSize: '.7rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
};

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
              <Typography variant="h6" component="h6" className={classes.header2}>
                Picture me with pruning shears in one hand and a basket in the other, 
                skipping through open fields yelling “Towanda the Avenger!” as I collect 
                plant medicine for my modern day gallipots (aka mason jars).
              </Typography>
            </Grid>
            <Grid item xs={12} sm={5}>
              <img src={window.location.origin + '/image/mason-jars.png'} 
                    alt="Steph, the herbalist" 
                    className={classes.image}/>
            </Grid>
            <Grid item xs={12} sm={5}>
              <img src={window.location.origin + '/image/steph.jpg'} 
                    alt="Steph, the herbalist" 
                    className={classes.image}/>
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
                My love of nature and animals continued into adulthood. As I embarked on 
                my career as a pet groomer, it was here that I utilized my little knowledge 
                of healing plants to soothe and treat my clients’ pets. Using oats, tea tree 
                oil, raw tomato juice, lavender, and aloe vera became common in my daily 
                practice. 
              </Typography>
              <Typography variant="p" component="p" className={classes.paragraph}>
                In 2019, I enrolled in the Herbal Studies program at Minneapolis Community 
                and Technical College in Minneapolis, MN where I studied under the famed 
                Erica Fargione. 
              </Typography>
              <Typography variant="p" component="p" className={classes.paragraph}>
                After graduating in May of 2020, in the wake of George Floyd’s death, 
                I jumped into social justice work by creating and distributing formulations 
                for PTSD, shock, trauma, exhaustion and COVID-19. In addition, I gathered 
                and distributed bulk herbs for the mindful medicine making by, and for, 
                the frontline workers, protesters, and the BIPOC and LGBTQIA+ communities. 
                Summer of 2020, my time was spent mentored by local elders in the herbalist 
                community where I have continued my growth.
              </Typography>
              <Typography variant="p" component="p" className={classes.paragraph}>
                Now, in 2021, as a COVID vaccine pushes its way into our population, 
                and the stress of an overwhelmingly hostile year for the entire world 
                comes to a close, I believe it is the right time to open up and focus 
                more on my practice so I can continue to help people navigate the difficult 
                road back to wellness and prosperity.
              </Typography>
              <Typography variant="p" component="p" className={classes.paragraph}>
                I invite you to join me on this journey; to further explore this magical 
                symbiosis between plants, humans and animals with the hopes that we can not 
                only reconnect but start to heal from this wreckage together.
              </Typography>
            </Grid>
          </ThemeProvider>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(AboutPage);

