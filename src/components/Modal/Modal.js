import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// STYLING
import './Modal.css';
import { Card, CardContent, Button, TextField, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// const theme = createMuiTheme();

const styles = {
  header: {
    backgroundImage: 'linear-gradient(to right, #7fad14, #395208)',
    margin: 'auto',
    width: '87%',
    textAlign: 'center',
    padding: '3%',
    fontFamily: 'fantasy',
    radius: '5px',
    color: '#f8f8f8',
    // height: '3vh',
  },
  form: {
    height: 'auto',
    textAlign: 'center',
  },
  textField: {
    marginTop: '1rem',
    width: '90%',
    backgroundColor: '#f8f8f8',
  },
}

// theme.typography.h3 = {
//   fontFamily: [
//     'fantasy',
//     'serif',
//   ].join(','),
//   fontSize: '1.5rem',
// '@media (min-width:600px)': {
//   fontSize: '1.5rem',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '2rem',
//   },
// };

class Modal extends Component {

  // sets the local state to the info sent to the product reducer on 
  // ProductsItem page
    componentDidMount = () => {
        this.setState({
            product: {
                id: this.props.store.edit.id,
                name: this.props.store.edit.name,
                description: this.props.store.edit.description,
                size: this.props.store.edit.size,
                cost: this.props.store.edit.cost,
                image_path: this.props.store.edit.image_path,
                type: this.props.store.edit.type,
            }
        }); // end setState
      } // end componentDidMount

    state = {
        product: {
            name: '',
            description: '',
            size: '',
            cost: '',
            image_path: '',
            type: ''
        }
    }

    // creating an object to set local state and send to PUT route
    updateProduct = (event, inputProperty) => {
        event.preventDefault();
        console.log('event happened', event.target.value);
        console.log('store is', this.props.store.edit);
        this.setState({
            product: {
                ...this.state.product,
                [inputProperty]: event.target.value
            }
        }); // end setState
    } // end updateProduct

    // PUT route to update the specific product
    saveItem = () => {
        console.log('newProduct', this.state.product);
        this.props.dispatch({ type: 'UPDATE_PRODUCT', payload: this.state.product })
        this.props.hideModal(); // call this function to close the modal
    } // end saveItem

render() {
  const showHideClassName = this.props.open ? "modal display-block" : "modal display-none";
  const { classes } = this.props;

  return (
    <div className={showHideClassName}>
      {/* <ThemeProvider theme={theme}> */}
      <Card className="modal-main">
        <Typography gutterBottom variant="h3" component="h3" className={classes.header}>
          Edit Product
        </Typography>
        <CardContent>
             <form className={classes.form}>
               <TextField
                  label="Name"
                  onChange={(event) => this.updateProduct(event, 'name')}
                  value={this.state.product.name} 
                  placeholder={this.props.store.edit.name} 
                  className={classes.textField}
               />
               <br></br><br></br>
               <TextField
                  label="Description - ingredients"
                  type="text"
                  multiline
                  className={classes.textField}
                  value={this.state.product.description} 
                  placeholder={this.props.store.edit.description} 
                  onChange={(event) => this.updateProduct(event, 'description')}
               />
               <TextField
                  label="Size"
                  type="text"
                  className={classes.textField}
                  value={this.state.product.size} 
                  placeholder={this.props.store.edit.size} 
                  onChange={(event) => this.updateProduct(event, 'size')}
               />
               <TextField
                  label="Cost"
                  type="text"
                  className={classes.textField}
                  value={this.state.product.cost} 
                  placeholder={this.props.store.edit.cost} 
                  onChange={(event) => this.updateProduct(event, 'cost')}
               />
               <TextField
                  label="Image"
                  type="text"
                  className={classes.textField}
                  value={this.state.product.image_path} 
                  placeholder={this.props.store.edit.image_path} 
                  onChange={(event) => this.updateProduct(event, 'image_path')}
               />
               <TextField
                  label="Type"
                  type="text"
                  className={classes.textField}
                  value={this.state.product.type} 
                  placeholder={this.props.store.edit.type} 
                  onChange={(event) => this.updateProduct(event, 'type')}
               />
               <br></br>
               <br></br>
                <Button 
                    onClick={this.props.hideModal}>
                    <input className="btn"
                    type="button"
                    value="Cancel" />
                </Button>
                <Button
                     onClick={this.saveItem}>
                      <input className="btn"
                      type="submit"
                      value="Save" />
                </Button>
             </form>
           </CardContent>
      </Card>
      {/* </ThemeProvider> */}
    </div>
  );
}};

export default connect(mapStoreToProps)(withStyles(styles)(Modal));