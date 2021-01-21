import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import swal from 'sweetalert';

// COMPONENTS
import Modal from '../Modal/Modal';

// STYLING
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const theme = createMuiTheme();

const styles = {
    root: {
      maxWidth: 345,
      minWidth: 200,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    title: {
      fontFamily: 'fantasy',
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
  
  theme.typography.body1 = {
    fontSize: '.9rem',
    '@media (min-width:600px)': {
      fontSize: '.9rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
  };

class ProductsItem extends Component {
    
    state = {
        expanded: false,
        mode: 'edit',
        open: false,
    }
  
    componentDidMount = () => {
      this.props.dispatch({ type: 'GET_CART_ITEMS '});
    }

    // expands the card info for the products
    handleExpandClick = () => {
        this.setState({
            expanded: !this.state.expanded
        }); // end setState
    } // end handleExpandClick
  
    // DELETE route
    deleteItem = () => {
      console.log('delete item', this.props.item.id)
      swal({
        title: "Are you sure you want to remove this item?",
        text: "Once deleted, you will not be able to recover and will need to re-add!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }) // sweetalert to ensure a product is meant to be deleted
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your product is no longer for sale!", {
            icon: "success",
          }); 
          // ACTUAL delete request
          this.props.dispatch({ type: 'DELETE_PRODUCT', 
                       payload: this.props.item.id })
        } else {
          swal("Your product is still for sale!");
        } // end conditional
      }); // end sweetalert
    } // end deleteItem
  
    // whichButton = () => {
    //   if (this.state.mode === 'edit') {
    //     return <IconButton aria-label="edit"
    //               onClick={this.showModal}>
    //               <EditIcon />
    //            </IconButton>
    //   } else if (this.state.mode === 'save') {
    //     return <IconButton aria-label="save"
    //               onClick={this.saveItem}>
    //               <CheckIcon />
    //            </IconButton>
    //   }
    // }
  
    // PUT route
    editItem = () => {
      console.log (`Edit Mode`, this.state.mode);
      console.log('item is', this.props.item);
      this.props.dispatch({ type: 'EDIT_PRODUCT', payload: this.props.item })
      this.setState({
          mode: 'save',
          open: true,
      }); // end setState
    } // end editItem

    // handles the pop-up modal
    hideModal = () => {
      console.log('mode', this.state.mode);
      this.setState({ 
        mode: 'edit',
        open: false 
      }); // end setState
    } // end hideModal

    purhcaseItem = (id) => {
      console.log('item id', id);
      console.log('user', this.props.store.user.id);
      
      if (this.props.store.user.id === undefined) {
        swal({
          title: "Are you logged in?",
          text: "Please log in or register in order to make purchases and save items into your cart!",
          icon: "info",
          button: "Thank you!",
        });
      } else {
        this.props.dispatch({ type: 'ADD_TO_CART', payload: {
            product_id: this.props.item.id,
            quantity: 1,
            total_cost: this.props.item.cost,
          } 
        });
        // this.props.dispatch({ type: 'GET_CART_ITEMS '});
        this.componentDidMount(); 
      } 
      // this.componentDidMount(); // ------------------------------ WANT CART ITEMS TO UPDATE WHEN BUTTON IS CLICKED
    }

  render() {
    const { classes } = this.props;

    return (
        <Grid item xs={10} sm={6} md={3}>
          {this.state.mode === 'edit' ?
            <Card className={classes.root}>
              <ThemeProvider theme={theme}>
                <CardHeader
                  title={this.props.item.name}
                  variant="h5"
                  className={classes.title}/>
                <CardMedia
                  className={classes.media}
                  image={this.props.item.image_path}
                  title={this.props.item.name}/>
                <CardContent>
                    <Typography color="textSecondary" component="p" variant="body1">
                      {this.props.item.size} - ${this.props.item.cost} - {this.props.item.type}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to cart" onClick={() => this.purhcaseItem(this.props.item)}>
                    <AddShoppingCartIcon />
                  </IconButton>
              {this.props.store.user.administrator &&
                <>
              {/* <>{this.whichButton()}</> */}
                  <IconButton aria-label="edit" onClick={this.editItem}>
                      <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete" onClick={this.deleteItem}>
                      <DeleteIcon />
                  </IconButton>
                </>
              }
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: this.state.expanded,
                    })}
                    onClick={this.handleExpandClick}
                    aria-expanded={this.state.expanded}
                    aria-label="show more">
                      <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
              <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph variant="body1">
                      Ingredients:
                    </Typography>
                    <Typography paragraph>
                      {this.props.item.description}
                    </Typography>
                </CardContent>
              </Collapse>
              </ThemeProvider>
            </Card> :
          <>
          <Card className={classes.root}>
            <CardHeader
              title={this.props.item.name}/>
              <ThemeProvider theme={theme}>
                <CardMedia
                  className={classes.media}
                  image={this.props.item.image_path}
                  title={this.props.item.name}
                  variant="h4"/>
                <CardContent>
                    <Typography color="textSecondary" component="p" variant="body1">
              {this.props.item.size} - ${this.props.item.cost} - {this.props.item.type}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to cart">
              <AddShoppingCartIcon />
            </IconButton>
            {this.props.store.user.administrator &&
            <>
            {/* <>{this.whichButton()}</> */}
            <IconButton aria-label="edit" onClick={this.editItem}>
                <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" onClick={this.deleteItem}>
              <DeleteIcon />
            </IconButton>
            </>
            }
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="show more">
                <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph variant="body1">Ingredients:</Typography>
                <Typography paragraph variant="body1">
                  {this.props.item.description}
                </Typography>
              </CardContent>
          </Collapse>
          </ThemeProvider>
        </Card>
          <Modal open={this.state.open} hideModal={this.hideModal} editItem={this.editItem}/>
         </>}
        </Grid>
      );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(ProductsItem));