import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// STYLING
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Button, TextField } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
  gridContainer: {
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: '3%',
  },
  header: {
    radius: '5px',
    color: '#648b16',
    fontSize: '2em',
    fontFamily: 'fantasy',
    fontWeight: '700',
    display: 'inline-block',
  },
  textField: {
    width: '40%',
    backgroundColor: '#f8f8f8',
    marginLeft: '3%',
    marginRight: '3%',
  },
};

class ProductSearch extends Component {

    state = { 
        search: ''
    }

  // calls the GET route to display thee products
  componentDidMount = (id) => {
    this.props.dispatch({ type: 'GET_SEARCH' });
    this.props.dispatch({ type: 'GET_SEARCH', payload: this.state.search }); // GET search
    // this.props.dispatch({ type: 'GET_SEARCH', payload: this.props.match.params }) // category GET
  } // end componentDidMount

  // handles the input fields for adding a product
  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
        [propertyName]: event.target.value,
    }); // end setState
  } // end handleInputChangeFor

  searchProducts = () => {
    console.log('search is', this.state.search)
    this.props.dispatch({ type: 'GET_SEARCH', payload: this.state.search }); // GET search
    this.setState({
        search: ''
    }) // end setState
  } // end searchProducts

  clearSearch = () => {
    this.props.dispatch({ type: 'GET_PRODUCT' }); // GET search
} // end searchProducts

  render() {
  const { classes } = this.props;

    return (
      <div className={classes.root}>
        <center>
            <Grid container spacing={4} className={classes.gridContainer} justify="center">
                <Grid item xs={12}>
                    <Typography className={classes.header}>
                        Search
                    </Typography>
                    <TextField
                            label="Find Something?"
                            className={classes.textField}
                            onChange={this.handleInputChangeFor('search')}
                            value={this.state.search}/>
                    <Button onClick={this.searchProducts}>
                        <input className="btn" type="submit" value="Find" />
                    </Button>
                    <Button onClick={this.clearSearch}>
                        <input className="btn" type="submit" value="Clear" />
                    </Button>
                </Grid>
            </Grid>
        </center>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(ProductSearch));
