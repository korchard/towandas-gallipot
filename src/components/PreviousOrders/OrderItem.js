import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// STYLING
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme();

const styles = {
  root: {
    display: 'flex',
    width: '100%',
    height: 'auto',
    // maxHeight: 200,
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
    // display: 'flex',
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
      // fontSize: '2em',
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
  
//   theme.typography.p = {
//     fontSize: '1rem',
//     '@media (min-width:600px)': {
//       fontSize: '1rem',
//     },
//     [theme.breakpoints.up('md')]: {
//       fontSize: '1.5rem',
//     },
//   };

class OrderItem extends Component {

  componentDidMount = () => {
    this.props.dispatch({ type: 'GET_CART_ITEMS' });
    this.props.dispatch({ type: 'GET_CART_TOTAL' });
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
                       </Paper>
                </Grid>
            </div>
        );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(OrderItem));
