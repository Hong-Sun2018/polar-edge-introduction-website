import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        margin: 0,
        height: '3em',
        background: 'yellow',
    },
});

const HeaderBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <h1>Header Bar</h1>
        </div>
    );
}

export default HeaderBar;