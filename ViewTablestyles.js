// import { makeStyles } from '@material-ui/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650
    },
    tableContainer: {
        borderRadius: 15,
        marginTop: 16
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: 'theme.palette.primary.light',
        color: '#ffffff'
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'gray',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    },
    root: {
        padding: 16,
        width: '100%'
    },
    btnAdd: {
        cursor: 'pointer',
        boxShadow: '0 0.5em 0.5em 0.1em #68c2d9'
    },
    titleContainer: {
        // background: theme.palette.grey[100],
        padding: 10,
        borderRadius: 8,
        marginBottom: 20
    },
    pageTitle: {
        fontSize: 16,
        color: theme.palette.background.paper,
        fontWeight: 'bold'
    },

    viewIcon: {
        verticalAlign: 'sub',
        background: 'tranparent',
        color: '#fff'
    },
    searchControl: {
        width: '234px',
        marginLeft: '16px',
        paddingRight: '16px',
        paddingLeft: '16px',
        '& input': {
            background: 'transparent !important',
            paddingLeft: '5px !important'
        },
        [theme.breakpoints.down('lg')]: {
            width: '250px'
        },
        [theme.breakpoints.down('md')]: {
            width: '100%',
            marginLeft: '4px',
            background: '#fff'
        }
    },
    startAdornment: {
        fontSize: '1rem',
        color: theme.palette.grey[500]
    },
    listItemText: {
        fontWeight: 'bold',
        border: '1px solid',
        borderColor: theme.palette.grey[500],
        padding: 10,
        borderRadius: 8,
        marginLeft: 20,
        width: 400
    },
    listItem: {
        // padding:5,
        marginLeft: 10
    },
    listItemAvatar: {
        marginRight: 60
    },
    value: {
        width: '100%',
        border: '1px solid',
        padding: 10,
        borderRadius: 8,
        minHeight: 30,
        backgroundColor: theme.palette.primary.light
    },
    titleStyle: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}));

export default useStyles;
