import { makeStyles, Theme } from "@material-ui/core";
import { theme } from '../../index.js';


export const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        maxHeight: 345,
    },
    cardWidth: {
        maxWidth: '35rem',
        color: theme.cream,
    },
}), { index: 1 },
);