import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

//Components
import {Grid,Card,CardActionArea,CardMedia,CardContent} from '@material-ui/core/';
import { Typography } from '@material-ui/core';
import GraellaArxiu from './GraellaArxiu';

// Estil
const estilArxiu = {    
    card: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
      titolSeccio:{
          fontSize:24,
          marginTop:12,
          marginBottom: 24
      }
    };

class Arxiu extends Component {
    
    render(){
        
        const { classes,currentRector } = this.props;
        console.log('render',currentRector);
        if(currentRector!==null){
            return(<Grid>
                <Typography className={classes.titolSeccio} color="primary" align="left">
                    Moments del mandat
                </Typography>
                <GraellaArxiu videos={currentRector.videos}/>
            </Grid>)
        }else{
            return(<Grid>
                <Typography className={classes.titolSeccio} color="primary" align="left">
                    Moments del mandat
                </Typography>                
            </Grid>)
        }
        
    }
}

function mapStateToProps(state){    
    return state.rectors;
}

export default withRouter(connect(mapStateToProps)(withStyles(estilArxiu)(Arxiu)));