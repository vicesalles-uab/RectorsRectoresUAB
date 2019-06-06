import React from 'react';

//Estil
import { withStyles } from '@material-ui/core/styles';

//Components
import { AppBar, Grid, Typography, Toolbar, IconButton } from '@material-ui/core';

//Icona 
import HomeIcon from '@material-ui/icons/Home';


//Pàgina de Crèdits
function Credits(props) {
    const { classes } = props;
    return (
        <Grid id="credits">
            <AppBar>
                <Toolbar variant="dense">
                    <IconButton href="/">
                        <HomeIcon />
                    </IconButton>

                    <Grid>
                        <Typography variant="h5" color="inherit" align="left">
                            Crèdits
                        </Typography>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Toolbar variant="dense" hidden={true}> </Toolbar>
            <Grid container className={classes.creditsMainGrid} direction="column" justify="space-between">

                <Grid item className={classes.creditsSubGrid}>
                    <Typography variant="h4" className={classes.titolSobreProjecte} color="inherit" align="left">
                        Sobre aquest projecte
                    </Typography>
                    <Typography className={classes.about} align="left">
                        Aquest projecte neix com a documental audiovisual. La idea era recollir la història de la nostra Universitat
                        per boca dels rectors i rectores que l'han governat.
                    </Typography>
                    <Typography className={classes.about} align="left">
                        Guiats pel <a href="https://www.youtube.com/watch?v=1hVwAQOu83Y" style={{color:"black"}} rel="noopener noreferrer" className={classes.enllac} target="_blank">llibre del 50è aniversari</a>, entrevista rere entrevista, vam anar constatant el valor històric i
                        documental de cadascun dels testimonis. Com se suposava que havíem d'editar aquests discursos? Quin valor podíem aportar-hi?
                    </Typography>
                    <Typography className={classes.about} color="inherit" align="left">
                        Mínima manipulació i facilitar-ne l'exploració. Aquest és el valor de la funcionalitat amb la qual hem dotat aquest documental web.
                    </Typography>
                </Grid>
                <Grid item className={classes.creditsSubGrid}>                              
                    <Typography component="p" color="inherit" align="left">
                        <b>Direcció</b> Vicenç Sallés
                    </Typography>
                    <Typography component="p" color="inherit" align="left">
                    <b>Entrevistes</b> Lucas V. Santos
                    </Typography>
                    <Typography component="p" color="inherit" align="left">
                    <b>Edició</b> Xavi Torner
                    </Typography>
                    <Typography component="p" color="inherit" align="left">
                    <b>Ajudants de realització</b> Ana Lozano, Juanra
                    </Typography>
                    <Typography variant="h6" color="inherit" align="left" className={classes.titolSeccioCredits}>
                        Una producció de la Unitat d'Audiovisuals i Multimèdia
                    </Typography>       

                </Grid>
            </Grid>

        </Grid>
    )
}

const estilCredits = theme => ({

    creditsMainGrid: {
        paddingLeft: "2em",
        paddingRight:"2em",
        flex:2
    },
    creditsSubGrid:{
        paddingTop:"2em",
        flex:1,
        alignItems: "center",
        justify:"center",
        color: "black"

    },
    about:{
        fontSize:24,
        paddingTop:12,
        color:"black"
    },
    titolSobreProjecte:{
        paddingBottom:24,
        color: theme.palette.primary.main
    },
    titolSeccioCredits:{
        paddingTop:24,
        paddingBottom:12,
        color: theme.palette.primary.main
    },
    enllac:{
        fontWeight:"bold",
        color:"black",
        "&:hover":{
            color: theme.palette.primary.main
        }
    }


})


export default withStyles(estilCredits)(Credits)