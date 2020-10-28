const styles: any = {
    results: {
        width: '100%',
        textAlign: 'center',
        background: 'rgb(240, 240, 240)',
        padding: '1% 0',
        '& p': { 
            fontWeight: 'normal',
            letterSpacing: '0.5px',
            fontSize: '19px',
        },
        '& h2': {
            fontWeight: 'bold',
            letterSpacing: '1px',
            fontSize: '25px'
        }
    },
    container: {
        marginTop: '30px',
        marginBottom: '30px',
    },
    noResultsContainer: {
        background: 'lightcyan',
        minHeight: '50vh'
    },
    noResults: {
        textAlign: 'center',
        padding: '64px 16px',
        '& h2': {
            fontWeight: 'bold',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            fontSize: '25px',
            marginBottom: '1%'
        },
        '& p': {
            fontWeight: 'bold',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            fontSize: '19px'
        }
    },
    counter: {
        textAlign: 'center',
        padding: '16px 0',
        fontWeight: 'normal',
        letterSpacing: '0.5px',
        fontSize: '16px',
        color: '#666'
    },
    filter: {
        textAlign: 'center',
        marginTop: '30px',
        fontWeight: 'normal',
        letterSpacing: '0.5px',
        fontSize: '16px',
        color: '#666'
    },
}
export default styles