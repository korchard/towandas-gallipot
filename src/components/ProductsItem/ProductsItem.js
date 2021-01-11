import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './ProductsItem.css';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
    height: 500,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

const theme = createMuiTheme();

theme.typography.h6 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

theme.typography.p = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

function ProductsItem(props) {
  const { classes } = props;

    return (
      <Grid item xs={12} sm={3}>
          <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={props.item.name}
              className={classes.media}
              height="250"
              image={props.item.image_path}
              title={props.item.name}
            />
            <CardContent>
            <ThemeProvider theme={theme}>
              <Typography gutterBottom variant="h5" component="h2" className="typeText">
                {props.item.name}
              </Typography>
              </ThemeProvider>
              <ThemeProvider theme={theme}>
              <Typography variant="p" component="p" className="typeText">
                {props.item.description}
              </Typography>
              </ThemeProvider>
              <ThemeProvider theme={theme}>
              <Typography variant="p" component="p" className="typeText">
                {props.item.size}
              </Typography>
              </ThemeProvider>
              <ThemeProvider theme={theme}>
              <Typography variant="p" component="p" className="typeText">
                {props.item.cost}
              </Typography>
              </ThemeProvider>
            </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" className="typeText">
                Share
              </Button>
              <Button size="small" color="primary" className="typeText">
                Learn More
              </Button>
            </CardActions>
          </Card>
          </Grid>
       
    );
}

ProductsItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStoreToProps)(withStyles(styles)(ProductsItem));