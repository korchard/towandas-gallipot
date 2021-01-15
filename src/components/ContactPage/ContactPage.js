import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// STYLING
import { Card, CardContent, Button, TextField, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// calls the theme
const theme = createMuiTheme();

const styles = {
  header: {
    backgroundImage: 'linear-gradient(to right, #7fad14, #395208)',
    margin: 'auto',
    width: '100%',
    textAlign: 'center',
    padding: '3%',
    // fontFamily: 'fantasy',
    radius: '5px',
    color: '#f8f8f8',
  },
  form: {
    textAlign: 'center',
  },
  textField: {
    marginTop: '1rem',
    width: '90%',
    backgroundColor: '#f8f8f8',
  },
  root: {
    flexGrow: 1,
  },
  gridContainer: {
    paddingLeft: '40px',
    paddingRight: '40px',
    paddingTop: '60px',
    // width: '60%',
  },
}

// responsiveness
theme.typography.h5 = {
  fontFamily: [
    'fantasy',
    'serif',
  ].join(','),
  fontSize: '1.2rem',
'@media (min-width:600px)': {
  fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
};

class ContactPage extends Component {

  state = {
    name: '',
    email_address: '',
    subject: '',
    message: '',
};

// POST route to add a new product
sendMessage = (event) => {
  event.preventDefault();
  this.props.dispatch({
    type: 'SEND_MESSAGE',
    payload: {
      name: this.state.name,
      description: this.state.email_address,
      size: this.state.subject,
      cost: this.state.message,
    },
  }); // end dispatch
}; // end registerUser

// handles the input fields for sending a message
handleInputChangeFor = (propertyName) => (event) => {
  this.setState({
      [propertyName]: event.target.value,
  }); // end setState
} // end handleInputChangeFor

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={6} className={classes.gridContainer} justify="center">
          <Grid item xs={12} md={6}>
            <form className={classes.form} onSubmit={this.addProduct}>
              <Card>
                <ThemeProvider theme={theme}>
                  <Typography gutterBottom variant="h5" component="h2" className={classes.header}>
                    Send a Message
                  </Typography>
                </ThemeProvider>
              <CardContent>
                <Grid container justify="center">
                  <Grid item xs={12} sm={6}>
                    <TextField
                        label="Name"
                        className={classes.textField}
                        onChange={this.handleInputChangeFor('name')}
                        required
                        value={this.state.name}/>
                        <br></br><br></br>
                    <TextField
                        label="Email Address"
                        className={classes.textField}
                        onChange={this.handleInputChangeFor('email_address')}
                        required
                        value={this.state.email_address}/>
                        <br></br><br></br>
                    <TextField
                        label="Subject"
                        className={classes.textField}
                        onChange={this.handleInputChangeFor('subject')}
                        required
                        value={this.state.subject}/>
                        <br></br><br></br>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                        label="Message"
                        className={classes.textField}
                        onChange={this.handleInputChangeFor('message')}
                        required
                        multiline
                        rows={10}
                        value={this.state.message}/>
                        <br></br><br></br>
                  </Grid>
                      <Button >
                          <input className="btn" type="submit" name="submit" value="Send" />
                      </Button>
                </Grid>
              </CardContent>
              </Card>
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(ContactPage));
