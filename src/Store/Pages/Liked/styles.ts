const styles: any = {
    likedSection: {
        margin: '5% auto',
        display: 'flex',
        flexWrap: 'wrap'
    },
    liked: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        background: 'rgb(240, 240, 240)',
        fontWeight: 'bold',
        letterSpacing: '1px',
        fontSize: '14px',
        padding: '1% 0'
    },
    noLikedContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10%',
        '& button': {
            border: '0',
            background: '#333',
            color: '#fff',
            fontWeight: 'normal',
            letterSpacing: '0.5px',
            fontSize: '16px',
            cursor: 'pointer',
            padding: '16px 20px',
            borderRadius: '0',
            "&:hover": {
                background: '#525050'
            }
        }
    },
    noLiked: {
        textAlign: 'center',
        '& h2': {
            fontWeight: 'bold',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            fontSize: '22px',
        },
        '& p': {
            fontWeight: 'normal',
            letterSpacing: '0.5px',
            fontSize: '16px',
            padding: '5%'
        }
    }
}
export default styles