import React,{Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

//Components
import {AppBar,Toolbar,Typography,Grid} from '@material-ui/core/';
import CartaRector from '../components/Home/CartaRector';
import HistoriesGeneral from '../components/HistoriesGeneral/HistoriesGeneral';
import Searcher from '../components/Searcher/Searcher';

//Accions
import {globalHistories} from '../state/actions';

//Estil
const styles = theme => ({
    
      cap:{
          marginLeft:25
      },
      menuButton: {
        marginLeft: -18,
        marginRight: 10,
      },
      graellaRectors:{     
        minWidth:400
      },
      bigAvatar: {
        margin: 10,
        width: 90,
        height: 90,
      },
      logo:{       
        paddingRight:16
      },
      histories:{
        flex:1,
        marginTop:0
      },
      cercador:{
          display: 'flex',
          flexWrap: 'wrap',
          marginTop:30,
          marginLeft: "2.5%",
          width:"95%",
          
      },
      titolApp:{
        fontSize:24,
        fontWeight:"bold",
      },
      toolbar: theme.mixins.toolbar

     
  });

class Home extends Component{

    //Crea les Cartes dels Rectors
    factory = (rectors) =>{

        return rectors.map((r,i)=>{            
            return <CartaRector key={r.nom} animacio={(i+1)*500} rector={r}/>
        })

    }

    componentDidMount(){
        //Estableix es histories
        this.props.dispatch(globalHistories());
    }

    render(){
        const { classes } = this.props;
        return (<Grid className="cos" container>
                    <AppBar position="fixed">
                        <Toolbar variant="regular">   
                            <Link to="/"><img alt="Rectors i rectores de la UAB" src={`/img/logos/uab.png`} className={classes.logo}/></Link>
                            <Typography className={classes.titolApp} variant="h5" color="inherit" align="left">
                                Rectors i rectores de la UAB 
                            </Typography>                     
                        </Toolbar>
                    </AppBar>    
                         
                    <Grid container direction="column" justify="center" alignItems="center" alignContent="center" className={classes.cercador} position="fixed">
                        <div className={classes.toolbar}></div>      
                        <Searcher isGlobal={true}/>
                    </Grid>
                    <Grid container className={classes.histories}                    
                        direction="column"
                        alignItems="center"
                        justify="center"
                    >                       
                        <HistoriesGeneral/>
                    </Grid>
                    <Grid container spacing={24} direction="row" justify="center" alignItems="flex-start" alignContent="flex-start" className={classes.graellaRectors}>
                        {this.factory(this.props.rectors)}
                    </Grid>                
                
                </Grid>)
    }

}

function mapStateToProps(state){
    const {rectors} = state;   
    return rectors;
}

export default withRouter(connect(mapStateToProps)(withStyles(styles)(Home)));