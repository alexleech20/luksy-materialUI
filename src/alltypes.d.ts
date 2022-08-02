import React from 'react';

declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {

    }
}

type misc = {
    typography: {
        heroText?: React.ClassAttributes;
    };
    
}


declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
        misc: misc;
    }
}