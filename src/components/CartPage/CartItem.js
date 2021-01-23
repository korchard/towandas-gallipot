import React, { Component } from 'react';
import { connect } from 'react-redux';
// import mapStoreToProps from '../../redux/mapStoreToProps';

// STYLING
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const theme = createMuiTheme();

const styles = {
  root: {
    display: 'flex',
    width: '100%',
    height: 'auto',
    marginBottom: '5%',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: 400,
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 200,
    float: 'left',
  },
  controls: {
    display: 'flex',
    alignItems: 'right',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    gridContainer: {
      paddingLeft: '5%',
      paddingRight: '5%',
      paddingTop: '5%',
    },
    header: {
      margin: 'auto',
      radius: '5px',
      fontFamily: 'fantasy',
      textAlign: 'left',
      paddingLeft: '20px',
      paddingTop: '20px',
    },
    subtext: {
      paddingLeft: '20px',
      paddingTop: '2%',
    },
    subtext2: {
      paddingRight: '20px',
      paddingTop: '2%',
      float: 'right',
      fontFamily: 'fantasy',
      fontWeight: 700,
    }
  }

  // responsiveness
  theme.typography.h5 = {
      fontFamily: [
        'fantasy',
        'serif',
      ].join(','),
      fontSize: '.8rem',
    '@media (min-width:600px)': {
      fontSize: '.8rem',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
      },
  };

class CartItem extends Component {

  // calls the cart items icon and car total on refresh
  componentDidMount = () => {
    this.props.dispatch({ type: 'GET_CART_ITEMS' });
    this.props.dispatch({ type: 'GET_CART_TOTAL' });
  } // end componentDidMount

  // adds to the item's quantity
  addItem = (id) => {
    this.props.dispatch({ type: 'ADD_ITEM', payload: id });
    this.componentDidMount(); // refreshes the total and items
  } // end addItem

  // subtracts from the item's quantity
  subtractItem = (id) => {
    this.props.dispatch({ type: 'SUBTRACT_ITEM', payload: id });
    this.componentDidMount(); // refreshes the total and items
  } // end subtractItem

  // removes item from the cart
  deleteItem = (id) => {
    this.props.dispatch({ type: 'DELETE_ITEM', payload: id });
    this.componentDidMount(); // refreshes the total and items
  }

  render() {
    const { classes } = this.props;

        return (
            <div>
                <Grid item xs={12} theme={theme}>
                    <Paper className={classes.root}>
                    <CardMedia
                          className={classes.cover}
                          image={this.props.item.image_path}
                          title={this.props.item.name}/>
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Typography component="h5" variant="h5" className={classes.header}>
                            {this.props.item.name}
                          </Typography>
                          <Typography variant="subtitle1" className={classes.subtext}>
                            {this.props.item.size}
                          </Typography>
                          <Typography variant="subtitle1" className={classes.subtext}>
                            quantity - {this.props.item.sum}
                          </Typography>
                          <Typography variant="subtitle1" className={classes.subtext2}>
                            Total - ${this.props.item.coalesce}
                          </Typography>
                          </CardContent>
                      </div>
                      <div className={classes.controls}>
                            <IconButton aria-label="add" onClick={() => this.addItem(this.props.item.id)}>
                              <AddCircleIcon/>
                            </IconButton>
                            <IconButton aria-label="minus" onClick={() => this.subtractItem(this.props.item.id)}>
                                <RemoveCircleIcon />
                            </IconButton>
                            <IconButton aria-label="delete" onClick={() => this.deleteItem(this.props.item.id)}>
                                <DeleteIcon />
                            </IconButton>
                          </div>
                       </Paper>
                </Grid>
            </div>
        );
  }
}

export default connect()(withStyles(styles)(CartItem));
