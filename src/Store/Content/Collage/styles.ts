import { makeStyles } from '@material-ui/core/styles'

const styles: any = makeStyles(theme => ({
    collage: { marginTop: theme.spacing(7), marginBottom: theme.spacing(7)},
    collageElem: {
        border: '5px solid #fff',
        position: 'relative',
        "&::after": {
            content: "' '",
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(0, 0, 0, 0.000)',
            transition: '.3s'
        },
        '&:hover::after': {
            background: 'rgba(0, 0, 0, 0.9)'
        },
    },
    elem: {
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    elemLabel: {
        width: '100%',
        height: '100%',
        zIndex: 5,
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        cursor: 'pointer',
        opacity: '0',
        transition: '.3s',
        fontWeight: 'bold',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '18px',
        '&:hover': {
            opacity: '1'
        }
    }
}))
export default styles 