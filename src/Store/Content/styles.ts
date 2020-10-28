import { makeStyles } from '@material-ui/core/styles'

const useStyles: any = makeStyles({
    myButton: (props: any) => ({

        background: props.bg ?
        'black' : 'blue',
        border: 0,
        borderRadius: props.radius ? props.radius : '0',
        padding: props.padding ? props.padding : "0.5rem",
        color: props.color ? props.color : 'red',
        transition: props.t ? props.t : '5s',
        "&:hover": {
            background: props.bg ? 'yellow': 'transparent'
        }
        
    })
})
export default useStyles

/* const useStyles: any = makeStyles({
    myButton: (props: any) => ({

        background: props.bg ?
        'black' : 'blue',
        border: 0,
        borderRadius: props.radius ? props.radius : '0',
        padding: props.padding ? props.padding : "0.5rem",
        color: props.color ? props.color : 'red',
        transition: props.t ? props.t : '5s',
        "&:hover": {
            background: props.bg ? 'yellow': 'transparent'
        }
        
    })
}) */