const styles: any = {
    container: { backgroundColor: '#EFEFEF' },
    list: { padding: "32px 0" },
    block: { color: '#666' },
    blockHeader: {
        fontWeight: 'normal',
        letterSpacing: '0.5px',
        fontSize: '18px',
        textTransform: 'uppercase',
        paddingLeft: '8px',
        paddingRight: '8px',
        paddingBottom: '16px',
        cursor: 'default'
    },
    blockList: {
        display: 'flex',
        flexDirection: "column",
        alignItems: 'start',
        '& span': {
            display: 'block',
            width: '100%',
            fontWeight: 'normal',
            letterSpacing: '0.5px',
            fontSize: '14px',
        },
        '& button': {textTransform: "none"},
        '& button:hover': { color: 'cornflowerblue' }
    },
    info: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '60px',
        backgroundColor: '#DFDFDF',
        color: '#666',
        fontWeight: 'normal',
        letterSpacing: '0.5px',
        fontSize: '14px',
        cursor: 'default'
    }
}

export default styles
