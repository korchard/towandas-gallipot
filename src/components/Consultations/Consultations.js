import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// STYLING
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// create a variable for the theme
const theme = createMuiTheme();

const styles = {
  header: {
    margin: 'auto',
    width: '100%',
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
    marginBottom: '3%',
    marginTop: '3%',
    radius: '5px',
    color: '#648b16',
    // fontSize: '1.5em',
    fontFamily: 'fantasy',
    textAlign: 'center',
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
  button: {
    alignItems: 'center',
  },
  image: {
    marginTop: '10%',
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

class Consultations extends Component {

  // routes the user to the consult form when button is clicked
  goToForm = () => {
    this.props.history.push('/consult-form');
  } // end goToForm

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={0} className={classes.gridContainer} justify="center">
          <ThemeProvider theme={theme}>
            <Grid item xs={12} >
              <Typography variant="h3" component="h3" className={classes.header}>
                Consultations
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" component="p" className={classes.header2}>
                About Herbal Remedies and How They Work
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Typography variant="p" component="p" className={classes.paragraph}>
                Herbs work to aid in the harmonization of both the mental and physical, 
                to help create awareness, and stimulate the resolution of unhealthy 
                conditioned habits or perceptions. This process of re-learning and 
                re-balancing can lead to greater well-being and harmony in our lives. 
                Whether or not we are aware of it, many of the issues we experience stem 
                from the powerhouse that is our brain. Therefore, it is important to 
                treat both the physical symptoms, as well as, the mental issues from which 
                they arise. 
              </Typography>
              <Typography variant="p" component="p" className={classes.paragraph}>
                Herbal remedies can address physical issues such as nerve and muscular 
                pain, asthma, allergies, headaches/migraines, digestion, fertility, PMS, 
                and menopause. They can also address mental/emotional concerns by 
                re-balancing the central nervous system, which supports the healing of 
                depression, trauma/PTSD, ADHD, stress, anxiety, panic attacks, family 
                issues, sexual dysfunction and grief.  
              </Typography>
              <Typography variant="p" component="p" className={classes.paragraph}>
                Through the stimulation of healing in the body with herbs, you can 
                regain a sense of physical and emotional well-being.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" component="p" className={classes.header2}>
                Initial consultation: $199 (includes your herbal remedies)
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Typography variant="p" component="p" className={classes.paragraph}>
                Before the initial consultation, you will fill out a detailed form 
                about your mental and physical health as well as some personal history. 
                This gives me an advanced look into any concerns you may want/need to 
                address prior to our visit. The form is linked below.
              </Typography>
              <Typography variant="p" component="p" className={classes.paragraph}>
                The initial consultation lasts about 2 hours, which allows us time to 
                talk about your health history and provide me with any additional 
                information about your main concerns. This time together gives me a 
                full picture of your overall condition so that I can address your 
                system as a whole, rather than just the symptoms. Through this process, 
                we will seek to find the right mix of herbal remedies just for you. 
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <center>
                <Button className={classes.button} onClick={this.goToForm}>
                  <input className="btn" type="button" value="Consultation Form" />
                </Button>
              </center>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" component="p" className={classes.header2}>
                Follow-up sessions: $45 (plus the cost of additional herbs if necessary)
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Typography variant="p" component="p" className={classes.paragraph}>
                Follow up visits are 30-45 minutes and are recommended every 3-4 
                weeks in order to assess how you are feeling and to adjust the dosage 
                if necessary. Remember: these supplements are tailored for your body 
                and are meant to help rebuild and rebalance, therefore, maintaining 
                contact to monitor your progress is essential to meeting your ultimate 
                wellness goals.
              </Typography>
              <Typography variant="p" component="p" className={classes.paragraph}>
                The general guideline is to complete 2-3 visits within the first 3-4 
                months, which can be followed by additional sessions on an as-needed 
                basis.  
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <img src={window.location.origin + '/image/flower-purple.png'} alt="purple flowers" className={classes.image}/>
            </Grid>
          </ThemeProvider>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(Consultations));
