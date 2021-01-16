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
    fontFamily: 'fantasy',
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
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '5%',
    // width: '60%',
  },
}

// responsiveness
theme.typography.h5 = {
  fontFamily: [
    'fantasy',
    'serif',
  ].join(','),
  fontSize: '1.5rem',
'@media (min-width:600px)': {
  fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

class ProductAdminForm extends Component {

  state = {
      name: '',
      description: '',
      size: '',
      cost: '',
      image_path: '',
      type: ''
  };

  // POST route to add a new product
  addProduct = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'ADD_PRODUCT',
      payload: {
        name: this.state.name,
        description: this.state.description,
        size: this.state.size,
        cost: this.state.cost,
        image_path: this.state.image_path,
        type: this.state.type
      },
    }); // end dispatch
    this.setState({
      name: '',
      description: '',
      size: '',
      cost: '',
      image_path: '',
      type: ''
    })
  }; // end registerUser

  // handles the input fields for adding a product
  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
        [propertyName]: event.target.value,
    }); // end setState
  } // end handleInputChangeFor

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container className={classes.gridContainer} justify="center">
          <Grid item xs={12} sm={10}>
            <form className={classes.form} onSubmit={this.addProduct}>
              <Card>
                <ThemeProvider theme={theme}>
                  <Typography gutterBottom variant="h5" component="h5" className={classes.header}>
                    Add Product
                  </Typography>
              <CardContent>
               <TextField
                  label="Name"
                  className={classes.textField}
                  onChange={this.handleInputChangeFor('name')}
                  required
                  value={this.state.name}/>
               <br></br><br></br>
               <TextField
                  label="Description - ingredients"
                  className={classes.textField}
                  onChange={this.handleInputChangeFor('description')}
                  required
                  value={this.state.description}/>
               <br></br><br></br>
               <TextField
                  label="Size"
                  className={classes.textField}
                  onChange={this.handleInputChangeFor('size')}
                  required
                  value={this.state.size}/>
               <br></br><br></br>
               <TextField
                  label="Cost"
                  className={classes.textField}
                  onChange={this.handleInputChangeFor('cost')}
                  required
                  value={this.state.cost}/>
               <br></br><br></br>
               <TextField
                  label="Image Path"
                  className={classes.textField}
                  onChange={this.handleInputChangeFor('image_path')}
                  required
                  value={this.state.image_path}/>
               <br></br><br></br>
               <TextField
                  label="Type"
                  className={classes.textField}
                  onChange={this.handleInputChangeFor('type')}
                  required
                  value={this.state.type}/>
                <br></br><br></br>
                <Button >
                    <input className="btn" type="submit" name="submit" value="Add" />
                </Button>
              </CardContent>
              </ThemeProvider>
              </Card>
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(ProductAdminForm));