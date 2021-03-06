import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { PickerOverlay } from 'filestack-react';

// STYLING
import './Modal.css';
import { Card, CardContent, Button, TextField, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

// DOTENV 
const filestackApiKey = process.env.REACT_APP_FILESTACK_API_KEY

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
    fontSize: '2em',
    marginTop: '.5em',
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

    // local state to reset the items in edit
    state = {
        product: {
            name: '',
            description: '',
            size: '',
            cost: '',
            image_path: '',
            type: '',
            imageUpload: false,
        }
    }

    // when image upload is successful set image_path to url
    onSuccess = (result) => {
      this.setState({
        product: {
          ...this.state.product,
          image_path: result.filesUploaded[0].url,
        }
      }); // end setState
    } // end onSuccess
  
    // provide a message when image upload is not successful
    onError = (error) => {
      console.error('Image did not successfully upload...', error);
    } // end onError
  
    // to open up the image modal
    upload = () => {
      this.setState({
        imageUpload: !this.state.imageUpload
      }); // end setState
    } // end upload

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
  const basicOptions = {
    accept: 'image/*',
    fromSources: ['local_file_system'],
    maxSize: 1024 * 1024,
    maxFiles: 1,
  }

  return (
    <div className={showHideClassName}>
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
               {this.state.imageUpload ? 
                  <PickerOverlay
                    apikey={filestackApiKey}
                    buttonText="Upload Image"
                    className="btn"
                    options={basicOptions}
                    onSuccess={(event) => this.onSuccess(event, 'image_path')}
                    onError={this.onError}
                  />   :
                <Button onClick={this.upload}>
                    <input className="btn" type="submit" name="submit" value="Upload Image" />
                </Button>
                }
               {/* <TextField
                  label="Image"
                  type="text"
                  className={classes.textField}
                  value={this.state.product.image_path} 
                  placeholder={this.props.store.edit.image_path} 
                  onChange={(event) => this.updateProduct(event, 'image_path')}
               /> */}
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
    </div>
  );
}};

export default connect(mapStoreToProps)(withStyles(styles)(Modal));