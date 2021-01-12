import './Modal.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Card, CardContent, Button, TextField, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  header: {
    backgroundColor: "#C78B50",
    margin: " auto",
    width: "80%",
    textAlign: "center",
    padding: "3rem",
    border: '3px solid #FFF9E6',
    letterSpacing: '5px',
  },
  form: {
    height: '52vh',
    textAlign: 'center'
  },
  textField: {
    marginTop: '1rem',
    width: '90%',
    backgroundColor: '#fff9e6',
  },
}


class Modal extends Component {

    state = {
        product: {
            name: '',
            description: '',
            size: '',
            cost: '',
            image_path: '',
            type: '',
          }
        //   product: {
            //     name: this.props.edit[0].name,
            //     description: this.props.edit[0].description,
            //     size: this.props.edit[0].size,
            //     cost: this.props.edit[0].cost,
            //     image_path: this.store.edit[0].image_path,
            //     type: this.props.edit[0].type,
            //   }
    }

    updateProduct = (event, inputProperty) => {
        this.setState({
            product: {
                ...this.state.product,
                [inputProperty]: event.target.value
            }
      });
    }

    saveItem = (event) => {
        event.preventDefault();
        console.log('newProduct', this.state.product);
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
                  value={props.store.edit.name} 
                  placeholder={props.store.edit.name} 
                  className={classes.textField}
               />
               <br></br><br></br>
               <TextField
                  label="Description - ingredients"
                  type="text"
                  multiline
                  className={classes.textField}
                  value={this.props.product.description} 
                  placeholder={this.props.product.description} 
                  onChange={(event) => this.updateProduct(event, 'description')}
               />
               <TextField
                  label="Size"
                  type="text"
                  className={classes.textField}
                  value={this.props.product.size} 
                  placeholder={this.props.product.size} 
                  onChange={(event) => this.updateProduct(event, 'size')}
               />
               <TextField
                  label="Cost"
                  type="text"
                  className={classes.textField}
                  value={this.props.product.cost} 
                  placeholder={this.props.product.cost} 
                  onChange={(event) => this.updateProduct(event, 'cost')}
               />
               <TextField
                  label="Image"
                  type="text"
                  className={classes.textField}
                  value={this.props.product.image_path} 
                  placeholder={this.props.product.image_path} 
                  onChange={(event) => this.updateProduct(event, 'image_path')}
               />
               <TextField
                  label="Type"
                  type="text"
                  className={classes.textField}
                  value={this.props.product.type} 
                  placeholder={this.props.product.type} 
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