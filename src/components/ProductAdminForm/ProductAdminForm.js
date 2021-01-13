import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Card, CardContent, Button, TextField, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme();

const styles = {
  header: {
    backgroundColor: '#648b16',
    margin: 'auto',
    width: '100%',
    textAlign: 'center',
    padding: '10px',
    // fontFamily: 'fantasy',
    radius: '5px',
    color: '#f8f8f8',
    height: '3vh',
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
  },
}

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

class ProductAdminForm extends Component {
  state = {
      name: '',
      description: '',
      size: '',
      cost: '',
      image_path: '',
      type: ''
  };

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
    });
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
        [propertyName]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <Grid container spacing={6} className={classes.gridContainer} justify="center">
      <Grid item xs={12} sm={8} md={4}>
      <form className={classes.form} onSubmit={this.addProduct}>
        <Card>
          <ThemeProvider theme={theme}>
        <Typography gutterBottom variant="h5" component="h2" className={classes.header}>
          Add Product
        </Typography>
        </ThemeProvider>
        {/* <Typography component="p" className={classes.required}>
          *field is required
        </Typography> */}
        <CardContent>
               <TextField
                  label="Name"
                  className={classes.textField}
                  onChange={this.handleInputChangeFor('name')}
                  required
                  value={this.state.name}
               />
               <br></br><br></br>
               <TextField
                  label="Description - ingredients"
                  className={classes.textField}
                  onChange={this.handleInputChangeFor('description')}
                  required
                  value={this.state.description}
               />
               <br></br><br></br>
               <TextField
                  label="Size"
                  className={classes.textField}
                  onChange={this.handleInputChangeFor('size')}
                  required
                  value={this.state.size}
               />
               <br></br><br></br>
               <TextField
                  label="Cost"
                  className={classes.textField}
                  onChange={this.handleInputChangeFor('cost')}
                  required
                  value={this.state.cost}
               />
               <br></br><br></br>
               <TextField
                  label="Image Path"
                  className={classes.textField}
                  onChange={this.handleInputChangeFor('image_path')}
                  required
                  value={this.state.image_path}
               />
               <br></br><br></br>
               <TextField
                  label="Type"
                  className={classes.textField}
                  onChange={this.handleInputChangeFor('type')}
                  required
                  value={this.state.type}
               />
               <br></br><br></br>
               <Button>
               <input className="btn" type="submit" name="submit" value="Add" />
               </Button>
          </CardContent>
        </Card>
      </form>
      </Grid>
      </Grid>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(ProductAdminForm));