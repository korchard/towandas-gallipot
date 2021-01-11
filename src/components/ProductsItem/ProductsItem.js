import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './ProductsItem.css';
import { useState } from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
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
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 225,
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
}));

const theme = createMuiTheme();

theme.typography.h4 = {
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
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [mode, setMode] = useState('edit');

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const deleteItem = () => {
    console.log('delete item', props.item.id)
    props.dispatch({ type: 'DELETE_PRODUCT', 
                     payload: props.item.id })
  }

  const whichButton = () => {
    if (mode === 'edit') {
      return <IconButton aria-label="edit"
                onClick={editItem}>
                <EditIcon />
             </IconButton>
    } else if (mode === 'save') {
      return <IconButton aria-label="save"
                onClick={saveItem}>
                <CheckIcon />
             </IconButton>
    }
  }

  const editItem = () => {
    console.log (`Edit Mode`, mode);
    setMode('save');
  }

  const saveItem = () => {
    console.log (`save Mode`, mode);
    setMode('edit');
  }

    return (
      <Grid item xs={12} sm={6} md={3}>
          <Card className={classes.root}>
          <CardHeader
            title={props.item.name}
          />
          <ThemeProvider theme={theme}>
          <CardMedia
            className={classes.media}
            image={props.item.image_path}
            title={props.item.name}
            variant="h4"
          />
          </ThemeProvider>
          <CardContent>
            <ThemeProvider theme={theme}>
            <Typography color="textSecondary" component="p">
              {props.item.size} - ${props.item.cost}
            </Typography>
            </ThemeProvider>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to cart">
              <AddShoppingCartIcon />
            </IconButton>
            {props.store.user.administrator &&
            <>
            <>{whichButton()}</>
            <IconButton aria-label="delete"
                        onClick={deleteItem}>
              <DeleteIcon />
            </IconButton>
            </>
            }
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <ThemeProvider theme={theme}>
              <Typography paragraph>Ingredients:</Typography>
              <Typography paragraph>
                {props.item.description}
              </Typography>
              </ThemeProvider>
            </CardContent>
          </Collapse>
        </Card>
          </Grid>
       
    );
}

export default connect(mapStoreToProps)(ProductsItem);