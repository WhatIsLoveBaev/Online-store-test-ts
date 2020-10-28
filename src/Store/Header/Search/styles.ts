const styles: any = {
    searchModal: {
        position: 'absolute',
        width: '100%',
        top: '-100%',
        left: '50%',
        background: '#eee',
        transform: 'translateX(-49.99%)',
        zIndex: '15',
        marginTop: '40px',
        display: 'flex',
        justifyContent: 'center',
        borderTopLeftRadius: '25px',
        borderTopRightRadius: '25px'
    },
    searchElements: {
        padding: '50px 0px 10px 0px',
        listStyle: 'none',
        width: '100%',
        fontWeight: 'normal',
        letterSpacing: '1px',
        fontSize: '18px'
    },
    searchElement: {
        padding: '5px 16px',
        color: '#000',
        cursor: 'pointer',
        fontWeight: 'lighter',
        overflow: 'hidden',
        border: '.5px solid #efefef',
        '&:hover': {
            background: '#cfcfcf',
        },
        '&:active': {
            border: '.5px solid #777'
        }
    },
    highlight: {
        fontWeight: 'normal'
    },
    searchWrapper: {
        width: '850px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: 'rgba(0, 0, 0, 0.000)',
        zIndex: '20'
    },
    searchInput: {
        width: '100%',
        height: '40px',
        border: '0',
        fontWeight: 'normal',
        letterSpacing: '0.5px',
        fontSize: '18px',
        paddingLeft: '16px',
        paddingRight: '75px',
        borderRadius: '21px/50%',
        zIndex: '20',
        '&::placeholder': {
            fontWeight: 'normal',
            letterSpacing: '0.5px',
            fontSize: '16px'
        }
    },
    searchBcg: {
        background: 'rgba(0, 0, 0, 0.550)',
        position: 'fixed',
        top: '-40px',
        left: '0',
        right: '0',
        width: '100',
        height: 'calc(100vh + 40px)',
        opacity: '0',
        transition: '.3s',
        pointerEvents: 'none',
        zIndex: '10',
    },
    bcgHide: {
        opacity: '1',
        pointerEvents: 'all',
    },
    clearSearch: {
        position: 'absolute',
        top: '50%',
        right: '43.5px',
        width: '15px',
        height: '15px',
        zIndex: '20',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        pointerEvents: 'none',
        '&:before': {
            transform: 'rotate(45deg)'
        },
        '&::after': {
            transform: 'rotate(-45deg)'
        },
        '&:before, &::after': {
            position: 'absolute',
            content: "' '",
            height: '16px',
            width: '2px',
            background: 'rgb(0, 197, 223)',
            opacity: '0',
            borderRadius: '20px',
            transition: '.3s'
        }
    },
    clearActive: {
        '&::before, &::after': {
            opacity: '1',
            pointerEvents: 'all'
        }  
    },
    svgSearchWrapper: {
        position: 'absolute',
        right: '0px',
        background: '#fff',
        width: '40px',
        height: '40px',
        borderRadius: '20px',
        zIndex: '20',
        transition: '.3s',
        cursor: 'pointer',
        '&:active': {
            borderStyle: 'inset'
        }
    },
    svgSearchWrapActive: {
        background: 'rgb(0, 197, 223)'
    },
    svgSearch: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '20',
        fill: '#000',
        transition: '.3s'
    },
    svgSearchActive: {
        fill: '#fff'
    }
}
export default styles