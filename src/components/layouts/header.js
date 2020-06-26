import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar/index';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

export default function ButtonAppBar() {

  return (
  
      <AppBar position="static" style={{backgroundColor:'black'}}>
        <Toolbar>
        
          <Typography variant="h5" display="block" >
            LETFIX TECHNOLOGIES
          </Typography>
        </Toolbar>
      </AppBar>

  );
}
