import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// STYLING
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
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
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    gridContainer: {
      paddingLeft: '5%',
      paddingRight: '5%',
      paddingTop: '5%',
    },
  }

  theme.typography.h5 = {
      fontFamily: [
        'fantasy',
        'serif',
      ].join(','),
      fontSize: '1rem',
    '@media (min-width:600px)': {
      fontSize: '1rem',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
      },
  };
  
  theme.typography.p = {
    fontSize: '1rem',
    '@media (min-width:600px)': {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5rem',
    },
  };

class CartPage extends Component {

  // componentDidMount = () => {
  //   this.props.dispatch({ type: 'ADD_TO_CART' });
  // }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {JSON.stringify(this.props.store.cart)}
          <Grid container spacing={4} className={classes.gridContainer} justify="center">
              {this.props.store.cart.map((item) => {
                  return (
                    <Grid item xs={12} sm={6} md={3}>
                    <Card className={classes.root} key={item.id}>
                    <ThemeProvider theme={theme}>
                      <CardHeader
                        title={item.name}/>
                    </ThemeProvider>
                      <CardMedia
                        className={classes.media}
                        image={item.image_path}
                        title={item.name}/>
                      <CardContent>
                        <ThemeProvider theme={theme}>
                          <Typography color="textSecondary" component="p">
                            {item.size} - ${item.cost} - {item.type}
                          </Typography>
                        </ThemeProvider>
                      </CardContent>
                      <CardActions disableSpacing>
                        <IconButton aria-label="add to cart" onClick={this.purhcaseItem}>
                          <AddShoppingCartIcon />
                        </IconButton>
                        <IconButton aria-label="edit" onClick={this.editItem}>
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete" onClick={this.deleteItem}>
                            <DeleteIcon />
                        </IconButton>
                      </CardActions>
                      <CardContent>
                        <ThemeProvider theme={theme}>
                          <Typography paragraph>
                            Ingredients:
                          </Typography>
                          <Typography paragraph>
                            {item.description}
                          </Typography>
                        </ThemeProvider>
                      </CardContent>
                  </Card>
                </Grid>
                  );
              })} 
          </Grid>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(CartPage));
