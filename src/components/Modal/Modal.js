import './Modal.css';
import React, { Component } from 'react';
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
  }
}


class Modal extends Component {

    state = {
        product: {
            name: this.props.product.name,
            description: this.props.product.description,
            size: this.props.product.size,
            cost: this.props.product.cost,
            image_path: this.props.product.image_path,
            type: this.props.product.type
          }
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
                  value={this.props.product.name} 
                  placeholder={this.props.product.name} 
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

export default withStyles(styles)(Modal);