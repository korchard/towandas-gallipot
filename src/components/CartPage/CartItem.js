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
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const theme = createMuiTheme();

const styles = {
  root: {
    display: 'flex',
    width: 800,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
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
    header: {
      margin: 'auto',
      radius: '5px',
      fontSize: '2em',
      fontFamily: 'fantasy',
      textAlign: 'left',
      paddingLeft: '20px',
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
  
//   theme.typography.p = {
//     fontSize: '1rem',
//     '@media (min-width:600px)': {
//       fontSize: '1rem',
//     },
//     [theme.breakpoints.up('md')]: {
//       fontSize: '1.5rem',
//     },
//   };

class CartPage extends Component {

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
                       </Paper>
                </Grid>
            </div>
        );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(CartPage));
