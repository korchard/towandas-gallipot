import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ProductsItem from '../ProductsItem/ProductsItem';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridContainer: {
    paddingLeft: '40px',
    paddingRight: '40px',
    paddingTop: '60px',
  }
}));

function ProductsList(props) {
  
  // const [heading, setHeading] = useState('Functional Component');
  const classes = useStyles();

    return (
      <div className={classes.root}>
        <Grid container spacing={6} className={classes.gridContainer} justify="center">
        {props.store.product.map((item) => {
            return (
                <ProductsItem key= {item.id} item={item}/>
            );
        })} 
        </Grid>
      </div>
    );
}

export default connect(mapStoreToProps)(ProductsList);
