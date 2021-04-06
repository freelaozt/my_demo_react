export default function getTvInfoNextEpRedu(state = {
    tvInfoNextSeasonData: [],
    page: 1
}, action) {
    switch (action.type) {
        case 'tvInfoNextSeasonSuccess':
            return {
                ...state,
                page: ++state.page,
                tvInfoNextSeasonData: state.tvInfoNextSeasonData.concat(action.tvInfoNextSeasonData)
            }
        case 'tvInfoNextSeasonError':
            return {
                ...state
            }
    }
    return state
}