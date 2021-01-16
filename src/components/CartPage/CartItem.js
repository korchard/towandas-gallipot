import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// STYLING
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const theme = createMuiTheme();

const styles = {
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    float: 'right',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
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
  }

//   theme.typography.h5 = {
//       fontFamily: [
//         'fantasy',
//         'serif',
//       ].join(','),
//       fontSize: '1rem',
//     '@media (min-width:600px)': {
//       fontSize: '1rem',
//       },
//       [theme.breakpoints.up('md')]: {
//         fontSize: '1.5rem',
//       },
//   };
  
//   theme.typography.p = {
//     fontSize: '1rem',
//     '@media (min-width:600px)': {
//       fontSize: '1rem',
//     },
//     [theme.breakpoints.up('md')]: {
//       fontSize: '1.5rem',
//     },
//   };

const getCookie = (cookieName) => {
    // Get name followed by anything except a semicolon
    const cookieString = RegExp(''+cookieName+'[^;]+').exec(document.cookie);
    // Return everything after the equal sign, or an empty string if the cookie name not found
    return decodeURIComponent(!!cookieString ? cookieString.toString().replace(/^[^=]+./,'') : '');
  }

class CartPage extends Component {

    state = {
        cartItems: getCookie('cart') || 0,
      }

  render() {
    const { classes } = this.props;

        return (
            <div>
                <Grid item xs={12} sm={6} theme={theme}>
                    <Card className={classes.root}>
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Typography component="h5" variant="h5">
                            {this.props.item.name}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            {this.props.item.description}
                          </Typography>
                        </CardContent>
                          <div className={classes.controls}>
                            <IconButton aria-label="previous">
                              <AddCircleIcon/>
                            </IconButton>
                            <IconButton aria-label="edit" onClick={this.editItem}>
                                <EditIcon />
                            </IconButton>
                            <IconButton aria-label="delete" onClick={this.deleteItem}>
                                <DeleteIcon />
                            </IconButton>
                          </div>
                      </div>
                        <CardMedia
                          className={classes.cover}
                          image={this.props.item.image_path}
                          title={this.props.item.name}/>
                       </Card>
                </Grid>
            </div>
        );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(CartPage));
