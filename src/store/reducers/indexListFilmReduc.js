export default function indexListFilmReduc(state = {
    data: [],
    loading: false,
    loadEnd: false,
    page: 1 
}, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                loading: true
            }
        case 'LOADOVER':
            return {
                ...state,
                loading: false,
                page: ++state.page,
                data: state.data.concat(action.data)
            }
        case 'LOADEND':
            return {
                ...state,
                loading: true,
            }
    }
    return state
}
