import './Modal.css';
import React from 'react';
import { Card, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  header: {
    backgroundColor: "#C78B50",
    margin: " auto",
    width: "80%",
    textAlign: "center",
    padding: "3rem",
    border: '3px solid #FFF9E6',
    letterSpacing: '5px',
  }
});

function Modal({ handleClose, show, children }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const classes = useStyles();
  return (
    <div className={showHideClassName}>
      <Card className="modal-main">
        <Typography gutterBottom variant="h5" component="h2" className={classes.header}>
          Send Message:
           </Typography>
        {children}
        <Button type="button" onClick={handleClose}>
          Cancel
        </Button>
      </Card>
    </div>
  );
};
export default Modal;