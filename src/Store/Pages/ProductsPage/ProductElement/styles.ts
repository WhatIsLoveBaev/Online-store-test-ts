const styles: any = (theme: any) => ({
    '@keyframes remove': {
        '0%': { transform: 'scale(1)' },
        '100%': { transform: 'scale(0)' }
    },
    previewProductSale: {
        background: "#d01345",
        color: '#fff',
        position: 'absolute',
        top: '0',
        right: '0',
        width: '3rem',
        height: '3rem',
        borderRadius: '50%',
        textAlign: 'center',
        zIndex: '1',
        fontWeight: 'normal',
        letterSpacing: '0.5px',
        fontSize: '15px',
        '& span': {
            fontSize: '1rem',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        },
        [theme.breakpoints.down('sm')]: {
            background: "none",
            color: '#d01345',
            top: '-10px',
            right: '-10px',
        }
    },
    removeLike: {
        background: 'transparent',
        zIndex: '5',
        transition: '.3s',
        '& svg': {
            transition: '.3s',  
        },
        '&:hover': {
            '& svg': { fill: '#d01345' },
        },
    },
    addToBasket: {
        border: 'solid rgba(0, 128, 0, 0.808)',
        color: '#000',
        padding: '5px 8px',
        fontWeight: 'bold',
        letterSpacing: '1px',
        fontSize: '14px',
        cursor: 'pointer',
        textAlign: 'center',
        borderRadius: '0',
        width: '100%',
        '&:hover': {
            background: 'rgba(0, 128, 0, 0.1)'
        }
    },
    previewProduct: {
        position: 'relative',
        marginBottom: '10px',
        padding: '8px',
        cursor: 'pointer',
        transition: '.3s',
        '&:nth-child(4n-3)': { marginLeft: '0' },
    },
    remove: {
        animation: '$remove .4s ease',
    },
    previewProductImg: {
        width: '100%',
        position: 'relative',
        transition: '.3s',
        '&:hover': { transform: 'scale(1.050)' },
        '&::before': {
            content: "' '",
            width: '100%',
            display: 'block',
            paddingTop: '100%',
        },
        '& img': {
            maxWidth: '100%',
            maxHeight: '100%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        }
    },
    previewProductName: {
        textAlign: 'center',
        color: '#2d2d2d',
        padding: '1rem 0',
        fontWeight: 'normal',
        letterSpacing: '0.5px',
        fontSize: '14px',
        [theme.breakpoints.down('sm')]: {
            padding: '0',
        }
    },
    previewProductPrice: {
        textAlign: 'center',
        fontWeight: 'bold',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '16px',
        color: '#666',
        marginBottom: '15px',
        [theme.breakpoints.down('sm')]: {
            "& span": {
                display: 'block'
            }
        }
    },
    sale: {
        color: '#aaa',
        fontWeight: 'normal',
        letterSpacing: '0.5px',
        fontSize: '14px',
        textDecoration: 'line-through',
        textAlign: 'center',
        marginRight: '10px',
        [theme.breakpoints.down('sm')]: {
            marginRight: '0',
            
        }
    },
    red: { color: '#d01345' }
})
export default styles