import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Card, CardContent, Button, TextField, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  header: {
    backgroundColor: '#648b16',
    margin: 'auto',
    width: '100%',
    textAlign: 'center',
    padding: '10px',
    fontFamily: 'fantasy',
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
  }
}

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
      <Grid container spacing={6} className={classes.gridContainer} justify="center">
      <Grid item xs={12} sm={8} md={4}>
      <form className={classes.form} onSubmit={this.addProduct}>
        <Card>
        <Typography gutterBottom variant="h5" component="h2" className={classes.header}>
          Add Product
        </Typography>
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
        {/* <h2>Add Product</h2>
        <div>
          <label htmlFor="name">
            Item Title:
            <input
              type="text"
              name="name"
              value={this.state.name}
              required
              onChange={this.handleInputChangeFor('name')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="description">
            Description - Ingredients:
            <input
              type="description"
              name="description"
              value={this.state.description}
              required
              onChange={this.handleInputChangeFor('description')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="size">
            Size:
            <input
              type="size"
              name="size"
              value={this.state.size}
              required
              onChange={this.handleInputChangeFor('size')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="cost">
            Cost:
            <input
              type="cost"
              name="cost"
              value={this.state.cost}
              required
              onChange={this.handleInputChangeFor('cost')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="image_path">
            Image Path:
            <input
              type="image_path"
              name="image_path"
              value={this.state.image_path}
              required
              onChange={this.handleInputChangeFor('image_path')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="type">
            Type:
            <input
              type="type"
              name="type"
              value={this.state.type}
              required
              onChange={this.handleInputChangeFor('type')}
            />
          </label>
        </div>
        <div>
          <input className="btn" type="submit" name="submit" value="Add" />
        </div> */}
      </form>
      </Grid>
      </Grid>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(ProductAdminForm));