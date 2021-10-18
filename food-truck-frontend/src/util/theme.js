import React from 'react';
import {createMuiTheme, ThemeProvider, StylesProvider, jssPreset, withStyles} from '@material-ui/core/styles';
import {create} from 'jss';
import rtl from 'jss-rtl';

const jss = create({plugins: [...jssPreset().plugins, rtl()]});

const themeOptions = {
    typography: {
        fontFamily: 'Noto Sans, sans-serif',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 14,
        lineHeight: 19,
        marginTop: 2,
        marginBottom: 2,
        body2: {
            fontSize: 14
        }
    },
    shape: {
        borderRadius: 5,
    },
    overrides: {
        MuiButton: {
            root: {
                textTransform: 'none',
                marginLeft: 8,
                marginRight: 8,
                marginTop: 8,
                marginBottom: 8,
                width: '181px',
                height: '48px',
            },
            outlinedPrimary: {
                border: '2px solid'
            },
            outlinedSecondary: {
                border: '2px solid'
            },
        },
    }
};

export const theme = createMuiTheme(themeOptions);

export const FoodTruckThemeProvider = ({children}) => {
    return (
        <StylesProvider jss={jss}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </StylesProvider>
    );
};