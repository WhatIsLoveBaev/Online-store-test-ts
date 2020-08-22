const styles: any = {
    headerContainer: {
        display: 'flex',
        marginTop: '30px',
        height: "70px",
        background: '#000',
        color: '#fff',
        fontSize: '20px',
    },
    logoWrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginLeft: '24px',
        flexGrow: 3
    },
    logo: {
        textTransform: 'uppercase',
        fontSize: '42px',
        cursor: 'pointer',
        fontWeight: 'bold',
        color: "#fff"
    },
    productWrapper: {
        borderLeft: '1px solid #525050',
        borderRight: '1px solid #525050',
        height: '100%',
        maxWidth: '100px',
        margin: '0 24px',
        transition: '.3s',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: '16px',
        letterSpacing: '1.5px',
        background: '#525050',
        cursor: 'default',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 0.3,
        "& div": {
            width: '85px',
            textAlign: 'center'
        }
    },
    svgWrapper: {
        marginLeft: '12px',
        marginRight: '24px',
        minWidth: '120px',
        display: 'flex',
        flexGrow: 3
    },
    svg: {
        height: '20px',
        padding: '0 12px'
    },
    productListContainer: {
        height: '60px',
        background: '#525050',
        justifyContent: 'space-evenly',
        '@media (max-width:1200px)': {
            justifyContent: 'start',
        }
    }

}

export default styles