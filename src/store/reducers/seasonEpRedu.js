export default function getSeasonEpRedu(state = {
    seasonEpData: [],
    page: 1
}, action) {
    // console.log('getSeasonEpRedu-action:', action)
    switch (action.type) {
        case 'seasonEpSuccess':
            return {
                ...state,
                page: ++state.page,
                seasonEpData: state.seasonEpData.concat(action.seasonEpData)
            }
        case 'seasonEpError':
            return {
                ...state
            }
    }
    return state
}