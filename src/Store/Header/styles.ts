const styles: any = (theme: any) => ({
    iconButton: {
        display: 'none',
        zIndex: 1500,
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    accordionHeader: {
        // background: 'url("https://avatars.mds.yandex.net/get-mpic/1244413/img_id6063597382562623069.jpeg/orig") no-repeat',
        backgroundSize: 'auto 100%',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        padding: '12px 16px'
    },
    accordionHeadSale: {
        background: "url('https://beauty-hamster.ru/wp-content/uploads/2018/12/asos-sale-18.jpg')  -25px 0 no-repeat",
        color: '#fff',
        padding: '12px 16px'
    },
    headerContainer: {
        display: 'flex',
        marginTop: '30px',
        height: "70px",
        background: '#000',
        color: '#fff',
        fontSize: '20px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '0',
        }
    },
    logoWrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '0 24px',
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
        marginRight: '24px',
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
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
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
    },
    productElementWrapper: {
        display: 'flex',
        paddingLeft: '0',
        paddingRight: '12px',
        '& button': {
            color: '#fff',
            letterSpacing: '.8px',
            lineHeight: '60px',
            border: 'none',
            padding: '0 10px',
            background: '#525050',
            margin: '0',
            outline: 'none',
            borderRadius: '0',
            paddingLeft: '0'
        }
    },
    productElement: {
        color: '#fff',
        cursor: 'default',
        maxHeight: '100%',
        padding: '0 12px',
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'normal',
        letterSpacing: '1px',
        fontSize: '16px',
        '&:hover': {
            background: '#fff',
            color: '#525050'
        },
    },
    sale: {
        display: 'block',
        background: '#d01345',
        transform: 'skew(-12deg)',
        fontWeight: 'bold',
        letterSpacing: '1px',
        fontSize: '16px',
        transition: '.3s',
        '&:hover': {
            background: "#fff",
            transform: 'skew(0deg)'
        }
    },
    expandedListBcg: {
        width: '100%',
        height: '400vw' ,
        position: 'absolute',
        background: 'rgba(0, 0, 0, 0.550)',
        zIndex: '10',
    },
    menuOpenBcg: {
        width: '100%',
        height: '400vw' ,
        position: 'absolute',
        top: '0',
        background: 'rgba(0, 0, 0, 0.550)',
        zIndex: '50',
    },
    closeIcon: {
        position: 'relative',
        zIndex: '150'
    },
    expandedListContainer: {
        position: 'absolute',
        background: '#fff',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 5,
        display: 'flex',
        justifyContent: 'space-around',
        padding: '0',
    },
    expandedList: {
        padding: '0',
        minWidth: '25%',
        listStyle: 'none',
        margin: '25px'
    },
    expandedListSort: {
        paddingBottom: '10px',
        cursor: 'default',
        fontWeight: 'bold',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '16px',
    },
    expandedListItem: {
        margin: '2% 0',
        cursor: 'pointer',
        color: '#000',
        fontWeight: 'normal',
        letterSpacing: '0.5px',
        fontSize: '14px',
        '&:hover': {
            color: 'cornflowerblue',
        }
    },
    randomItemWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderLeft: '0.5px solid #dfdfdf',
        position: 'relative',
        listStyle: 'none',
        width: '60%'
    },
    randomItem: {
        width: '40%',
        position: 'relative',
        margin: '3% auto',
        cursor: 'pointer',
        transition: '.3s',
        '&:hover': {
            transform: 'scale(1.050)'
        }
    },
    randomImg: {
        width: '100%',
        position: 'relative',
        '& img': {
            maxWidth: '100%',
            maxHeight: '100%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
        '&::before': {
            content: "' '",
            width: '100%',
            display: 'block',
            paddingTop: '130%'
        }
    },
    randomMake: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        fontWeight: 'bold',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '12px',
        color: '#000'
    }
})

export default styles