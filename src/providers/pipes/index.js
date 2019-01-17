export const status_to_data = status => ({
    'good' : { background : '#0000ff', text : 'GOOD : )' },
    'bad' : { background : '#ff0000', text : 'BAD : (' }
}[status])