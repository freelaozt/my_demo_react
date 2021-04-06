export default function getTvInfoNextEpRedu(state = {
    tvInfoNextEpData: [],
    page: 1
}, action) {
    switch (action.type) {
        case 'tvInfoNextEpSuccess':
            return {
                ...state,
                page: ++state.page,
                tvInfoNextEpData: state.tvInfoNextEpData.concat(action.tvInfoNextEpData)
            }
        case 'tvInfoNextEpError':
            return {
                ...state
            }
    }
    return state
}