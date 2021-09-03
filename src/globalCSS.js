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

        // misc

        'noDecoration': {
            textDecoration: 'none',
        },
    }
}))(() => null);

export default GlobalCss;