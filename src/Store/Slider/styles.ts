const styles: any = {
    "@keyframes slide": {
        "0%": { opacity: 0, transform: 'scale(1.1)' },
        "100%": { opacity: 1, transform: 'scale(1)' }
    },
    "@keyframes slideText": {
        "0%": { opacity: 0, transform:  'translateX(-100px)' },
        "100%": { opacity: 1, transform:  'translateX(0px)' }
    },
    container: {
        color: '#fff',
        width: '20%',
        height: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    home: {
        marginTop: '60px',
        backgroundColor: '#000',
        overflow: 'hidden',
        position: 'relative',
    },
    prev: {
        position: 'absolute',
        zIndex: 2,
        top: '50%',
        height: '60px',
        width: '60px',
        marginTop: '-30px',
        cursor: 'pointer',
        transition: '.3s',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        "& span": {
            border: 'solid rgb(60, 60, 60)',
            borderWidth: '0 3px 3px 0',
            display: 'inline-block',
            padding: '3px',
            width: '20px',
            height: '20px',
            transform: 'rotate(135deg)'
        }
    },
    next: {
        position: 'absolute',
        zIndex: 2,
        top: '50%',
        height: '60px',
        width: '60px',
        marginTop: '-30px',
        cursor: 'pointer',
        transition: '.3s',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        right: 0,
        "& span": {
            border: 'solid rgb(60, 60, 60)',
            borderWidth: '0 3px 3px 0',
            display: 'inline-block',
            padding: '3px',
            width: '20px',
            height: '20px',
            transform: 'rotate(-45deg)'
        }
    },
    slider: {
        position: 'relative',
    },
    slide: {
        backgroundRepeat: 'no-repeat',
        width: '80%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'block',
        animation: '$slide 2s ease',
        padding: '25% 0',
        position: 'relative',
    },
    face: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        transformStyle: 'preserve-3d',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: '2s ease-in-out',
        backfaceVisibility: 'hidden',
        transform: 'perspective(500px) rotateY(0deg)',
        cursor: 'pointer',
        '& h1': {
            textTransform: 'uppercase',
            fontSize: '16px'
        }
    },
    front: {
        background: 'transparent'
    },
    back: {
        background: 'transparent',
        transform: 'perspective(500px) rotateY(180deg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '0.5px solid #fff',
        '& h1': {
            color: "#fff",
            position: 'relative',
            zIndex: 3
        },
        '&::before': {
            content: "''",
            position: 'absolute',
            top: '5px',
            left: '-4px',
            width: 'calc(100% + 8px)',
            height: 'calc(100% - 12px)',
            background: '#000',
            transition: '.8s ease-in-out',
            transform: 'scaleY(1)'
        },
        '&::after': {
            content: "''",
            position: 'absolute',
            left: '5px',
            top: '-4px',
            height: 'calc(100% + 8px)',
            width: 'calc(100% - 12px)',
            background: "#000",
            transition: '.8s ease-in-out',
            transform: 'scaleX(1)'
        },
        '&:hover::before': {
            transform: 'scaleY(0)'
        },
        '&:hover::after': {
            transform: 'scaleX(0)'
        }
    },
    caption: {
        opacity: 0,
        animation: '$slideText 1s ease forwards',
        animationDelay: '1s',
        width: '130px',
        height: '40px',
        transformStyle: 'preserve-3d',
        position: 'absolute',
        top: '20%',
        fontWeight: 'bold',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '16px',

        '&:hover $back': {
            transform: 'perspective(500px) rotateY(360deg)',
        },

        '&:hover $front': {
            transform: 'perspective(500px) rotateY(180deg)',
        }
    },
    circles: {
        position: 'absolute',
        left: '50%',
        bottom: '30px',
        zIndex: '2',
        color: '#fff',
        display: 'flex',
        transform: 'translateX(-50%)',
    },
    circle: {
        display: 'flex',
        justifyContent: 'center',
        width: '15px',
        height: '15px',
        backgroundColor: 'rgb(60, 60, 60)',
        borderRadius: '50%',
        margin: '0 3px',
        cursor: 'pointer'
    },
    circleActive: {
        background: 'rgb(130, 130, 130)'
    }
}
export default styles