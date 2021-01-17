import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import swal from 'sweetalert';

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
theme.typography.h3 = {
  fontFamily: [
    'fantasy',
    'serif',
  ].join(','),
  fontSize: '1.5rem',
'@media (min-width:320px)': {
  fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

class ContactPage extends Component {

  state = {
    name: '',
    email_address: '',
    subject: '',
    message: '',
};

componentDidMount = () => {
  this.props.dispatch({ type: 'GET_CART' });
}

// POST route to add a new product
sendMessage = (event) => {
  event.preventDefault();
  swal({
    title: "Your message has been sent!",
    text: "I will get back to you as soon as possible!",
    icon: "success",
    button: "Woot!",
  }); // sweetalert to verify email was sent
  this.props.dispatch({
    type: 'SEND_MESSAGE',
    payload: {
      name: this.state.name,
      email_address: this.state.email_address,
      subject: this.state.subject,
      message: this.state.message,
    },
  }); // end dispatch
  // clears the inputs
  this.setState({
    name: '',
    email_address: '',
    subject: '',
    message: '',
  }); // end setState
} // end registerUser

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
            <form className={classes.form} onSubmit={this.sendMessage}>
              <Card>
                <ThemeProvider theme={theme}>
                  <Typography gutterBottom variant="h3" component="h3" className={classes.header}>
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
