import { withStyles } from '@material-ui/styles';

export const GlobalCss = withStyles(() => ({
    '@global': {
        '.m1': {
            margin: '1rem',
        },
        '.mt05': {
            marginTop: '.5rem',
        },
        '.mt1': {
            marginTop: '1rem',
        },
        '.mt2': {
            marginTop: '1.5rem',
        },
        '.mt3': {
            marginTop: '2rem',
        },
        '.mr1': {
            marginRight: '1rem',
        },
        '.mr2': {
            marginRight: '1.5rem',
        },
        '.mr3': {
            marginRight: '2rem',
        },
        '.mb05': {
            marginBottom: '0.5rem',
        },
        '.mb1': {
            marginBottom: '1rem',
        },
        '.mb2': {
            marginBottom: '1.5rem',
        },
        '.mb3': {
            marginBottom: '2rem',
        },
        '.ml1': {
            marginLeft: '1rem',
        },
        '.ml2': {
            marginLeft: '1.5rem',
        },
        '.ml3': {
            marginLeft: '2rem',
        },
        '.my1': {
            marginTop: '1rem',
            marginBottom: '1rem',
        },
        '.my2': {
            marginTop: '1.5rem',
            marginBottom: '1.5rem',
        },
        '.my3': {
            marginTop: '2rem',
            marginBottom: '2rem',
        },
        '.my4': {
            marginTop: '2.5rem',
            marginBottom: '2.5rem',
        },
        '.mxAuto': {
            marginTop: 'auto',
            marginBottom: 'auto',
        },
        '.mAuto': {
            margin: 'auto',
        },
    
        /* Padding */
        '.p1': {
            padding: '1rem',
        },
        'p2': {
            padding: '1.5rem',
        },
        '.pt05': {
            paddingTop: '.5rem',
        },
        '.pt1': {
            paddingTop: '1rem',
        },
        '.pt2': {
            paddingTop: '1.5rem',
        },
        '.pt3': {
            paddingTop: '2rem',
        },
        '.pr1': {
            paddingRight: '1rem'
        },
        '.pr2': {
            paddingRight: '1.5rem'
        },
        '.pr3': {
            paddingRight: '2rem',
        },
        '.pb1': {
            paddingBottom: '1rem',
        },
        '.pb2': {
            paddingBottom: '1.5rem',
        },
        '.pb3': {
            paddingBottom: '2rem',
        },
        '.pl1': {
            paddingLeft: '1rem',
        },
        '.pl2': {
            paddingLeft: '1.5rem',
        },
        '.pl3': {
            paddingLeft: '2rem',
        },
        '.py05': {
            paddingTop: '.5rem',
            paddingBottom: '.5rem',
        },
        '.py1': {
            paddingTop: '1rem',
            paddingBottom: '1rem',
        },
        '.px1': {
            paddingLeft: '1rem',
            paddingRight: '1rem',
        },
        '.px2': {
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
        },
        '.px3': {
            paddingLeft: '2rem',
            paddingRight: '2rem',
        },

        // misc

        '.noDecoration': {
            textDecoration: 'none',
        },

        // Hiding certain breakpoints

        '.displaySmNone': {
            display: 'none',
            '@media (min-width: 960px)' : {
                display: 'block',
            },
        },
        '.displayMdNone': {
            display: 'block',
            '@media (min-width: 960px)' : {
                display: 'none',
            },
        },
    }
}))(() => null);

export default GlobalCss;