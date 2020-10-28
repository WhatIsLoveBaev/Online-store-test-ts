const styles: any = {
    "@keyframes like": {
        "0%": { transform: 'scale(1)' },
        '50%': { transform: 'scale(1.5)' },
        '100%': { transform: 'scale(1)' }
    },
    itemContainer: {
        margin: '24px 0',
        marginBottom: '60px'
    },
    itemImage: {
        position: 'relative',
        overflow: 'hidden',
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
            transform: 'translate(-50%, -50%)'
        }
    },
    itemDescription: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    itemName: {
        fontWeight: 'normal',
        letterSpacing: '0.5px',
        fontSize: '22px',
        color: '#2d2d2d'
    },
    itemPrice: {
        display: 'flex',
        flexDirection: 'column',
        margin: '16px 0'
    },
    sale: {
        color: '#aaa',
        fontWeight: 'normal',
        letterSpacing: '0.5px',
        fontSize: '14px',
        textDecoration: 'line-through'
    },
    price: {
        fontWeight: 'bold',
        letterSpacing: '1px',
        fontSize: '22px',
        color: '#555',
        padding: '5px 0' 
    },
    redPrice: { color: '#d01345' },
    itemShortDesc: {
        padding: '0',
        '& li': {
            padding: '2px 0px',
            fontWeight: 'normal',
            letterSpacing: '0.5px',
            fontSize: '14px',
            color: '#2d2d2d'
        }
    },
    basketAndLiked: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '32px',
    },
    addToBasket: {
        background: 'rgba(0, 128, 0, 0.8)',
        border: '2px solid rgba(0, 128, 0, 0.8)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6px 15px',
        fontWeight: 'bold',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '18px',
        cursor: 'pointer',
        borderRadius: '0',
        '&:hover': {
            background: '#fff',
            color: 'rgba(0, 128, 0, 0.8)'
        }
    },
    addToLiked: {
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#efefef',
        borderRadius: '50%',
        marginLeft: '5%',
        cursor: 'pointer',
        '& span': { opacity: '1' },
    },
    act: { animation: '$like .4s ease-in-out infinite' }
}
export default styles