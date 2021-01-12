import './Modal.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Card, CardContent, Button, TextField, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  header: {
    backgroundColor: '#648b16',
    margin: 'auto',
    width: '87%',
    textAlign: 'center',
    padding: '10px',
    fontFamily: 'fantasy',
    radius: '5px',
    color: '#f8f8f8',
    height: '3vh',
  },
  form: {
    height: '52vh',
    textAlign: 'center'
  },
  textField: {
    marginTop: '1rem',
    width: '90%',
    backgroundColor: '#f8f8f8',
  },
}


class Modal extends Component {

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
        })
    }

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

    updateProduct = (event, inputProperty) => {
        event.preventDefault();
        console.log('event happened', event.target.value);
        console.log('store is', this.props.store.edit);
        this.setState({
            product: {
                ...this.state.product,
                [inputProperty]: event.target.value
            }
        })
    }

    saveItem = () => {
        console.log('newProduct', this.state.product);
        this.props.dispatch({ type: 'UPDATE_PRODUCT', payload: this.state.product })
        this.props.hideModal();
    }

render() {
  const showHideClassName = this.props.open ? "modal display-block" : "modal display-none";
  const { classes } = this.props;
  return (
    <div className={showHideClassName}>
        
      <Card className="modal-main">
        <Typography gutterBottom variant="h5" component="h2" className={classes.header}>
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
                <Button type="button" onClick={this.props.hideModal}>
                    Cancel
                </Button>
                <Button
                    onClick={this.saveItem} type="submit">
                    Save
                </Button>
             </form>
           </CardContent>
      </Card>
    </div>
  );
}};

export default connect(mapStoreToProps)(withStyles(styles)(Modal));