import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },

    },
    color: {
        backgroundColor: 'red',
        '&:hover': {
            backgroundColor: 'green !important'

        },
    },
}))