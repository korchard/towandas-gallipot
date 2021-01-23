import React, { Component } from 'react';
import { connect } from 'react-redux';
// import mapStoreToProps from '../../redux/mapStoreToProps';

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

const getCookie = (cookieName) => {
  // Get name followed by anything except a semicolon
  const cookieString = RegExp(''+cookieName+'[^;]+').exec(document.cookie);
  // Return everything after the equal sign, or an empty string if the cookie name not found
  return decodeURIComponent(!!cookieString ? cookieString.toString().replace(/^[^=]+./,'') : '');
}

class ProductSearch extends Component {

  // setting the search cookie
    state = { 
        search: getCookie('search') || '',
    }

    // if there is anything in the search reducer, on manual 
    // refresh the search items will remain
    componentDidMount = () => {
      if (this.state.search !== '') {
        this.setState({
          search: getCookie('search')
        });
      }
      this.searchProducts(); // calls the search GET route
    }

  // handles the input fields for adding a product
  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
        [propertyName]: event.target.value,
    }); // end setState
  } // end handleInputChangeFor

  searchProducts = () => {
    console.log('search is', this.state.search)
    const newSearch = (this.state.search);
    document.cookie = `search=${newSearch}`
    this.props.dispatch({ type: 'GET_SEARCH', payload: newSearch }); // GET search
    this.props.dispatch({ type: 'SET_COOKIE', payload: {cookie: newSearch} }); // sets the search reducer
    this.setState({
        search: ''
    }) // end setState
  } // end searchProducts

  clearSearch = () => {
    this.props.dispatch({ type: 'GET_PRODUCT' }); // GET search
    this.props.dispatch({ type: 'RESET_COOKIE' }); // emptys the search reducer
    document.cookie = "search=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  } // end searchProducts

  render() {
  const { classes } = this.props;

    return (
      <div className={classes.root}>
        <center>
            <Grid container spacing={4} className={classes.gridContainer} justify="center">
                <Grid item xs={12}>
                    <Typography className={classes.header} variant="h5">
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

export default connect()(withStyles(styles)(ProductSearch));
