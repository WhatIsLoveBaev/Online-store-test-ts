const styles: any = {
    saleBlockContainer: {
        marginTop: '60px',
        backgroundImage: 'url("https://content.asos-media.com/-/media/homepages/unisex/homepages/2020/06_june/ss-sale/red/ww-red-desktop.jpg")',
        backgroundSize: 'cover',
    },
    saleBlock: {
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    sbHeader: { 
        width: '100%',
        margin: '2%',
        display: 'flex',
        justifyContent: 'center'
    },
    sbHeaderText: {
        color: '#fff',
        lineHeight: '70px',
        textAlign: 'center',
        cursor: 'pointer',
        fontWeight: 'bold',
        letterSpacing: '2.5px',
        textTransform: 'uppercase',
        fontSize: '48px',
        "& span": {
            backgroundColor: 'rgb(253, 1, 54)',
            lineHeight: '3.7vw',
            boxShadow: '0.37em 0 0 rgb(253, 1, 54), -0.37em 0 0 rgb(253, 1, 54)'
        }
    },
    sbExamples: {
        padding: 0,
        height: '100%'
    },
    sbExample: {
        listStyle: 'none',
        height: '100%',
        cursor: 'pointer',
        transition: '.3s',
        fontWeight: 'bold',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '16px',
        borderRadius: '0',
        '&:hover': {
            transform: 'scale(1.025)'
        }
    },
    sbImg: {
        height: 'calc(100% - 38px)',
        width: '100%',
        "& img": {
            objectFit: 'cover',
            width: '100%',
            height: '100%'
        }
    },
    sbText: {
        width: '100%',
        padding: '8px 0',
        backgroundColor: '#fff',
        textAlign: 'center',
        overflow: 'hidden',
        color: '#000',
    },
    sbButton: {
        backgroundColor: '#fff',
        padding: '4px 16px',
        border: 0,
        borderRadius: 0,
        cursor: 'pointer',
        transition: '.3s',
        margin: '24px 0',
        fontWeight: 'bold',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '16px',
        '&:hover': {
            backgroundColor: '#000',
            color: '#fff'
        }
    }
}
export default styles