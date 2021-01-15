import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { withRouter } from "react-router";

// PDF FORM
import herbalintake from '../../assets/herbalintake.pdf';

// STYLING
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

  const useStyles = makeStyles({
    root: {
        flexGrow: 1,
      },
      gridContainer: {
        // paddingLeft: '12%',
        // paddingRight: '12%',
        paddingTop: '2%',
        marginBottom: '15px',
      },
      button: {
          paddingBottom: '3%',
      },
  });

function ConsultForm(props) {
    
    const classes = useStyles();

    // translates the PDF to react app
    pdfjs.GlobalWorkerOptions.workerSrc =  
        `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`; 
    
    const [numPages, setNumPages] = useState(9);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }

    const goToConsult = () => {
        props.history.push('/consultations');
    }
  
    return (
        <div className={classes.root}>
            <Grid container spacing={0} className={classes.gridContainer} justify="center">
                <Grid item xs={12} className={classes.button}>
                    <center>
                        <Button onClick={goToConsult}>
                            <input className="btn" type="button" value="Back to Consultation Page" />
                        </Button>
                    </center>
                </Grid>
                <Grid item xs={12}>
                    <center>
                        <Document
                            file={herbalintake}
                            options={{workerSrc: "pdf.worker.js"}}
                            onLoadSuccess={onDocumentLoadSuccess}>

                                {Array.from(new Array(numPages), (el, index) => (
                                    <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                                ))}
                        </Document>
                    </center>
                </Grid>
            </Grid>
        </div>
    );
}

export default withRouter(ConsultForm);