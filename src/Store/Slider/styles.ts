const styles = {
    "@keyframes slide": {
        "0%": { opacity: 0, transform: 'scale(1.1)' },
        "100%": { opacity: 1, transform: 'scale(1)' }
    },
    "@keyframes slideText": {
        "0%": { opacity: 0, transform:  'translateX(-100px)' },
        "100%": { opacity: 1, transform:  'translateX(0px)' }
    },
    home: {
        width: '70%',
        margin: '0 auto',
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
        left: 0
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
        right: 0
    },
    slider: {
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    slide: {
        backgroundRepeat: 'no-repeat',
        width: '80%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: (props: { display: string }) => props.display,
        animation: '$slide 2s ease',
        padding: '25% 0',
        position: 'relative',
    },
    caption: {
        opacity: 0,
        animation: '$slideText 1s ease forwards',
        animationDelay: '1s',
    }
}
export default styles