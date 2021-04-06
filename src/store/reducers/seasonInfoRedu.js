export default function getSeasonInfoRedu(state = {
    seasonInfoData: [],
    page: 1
}, action) {
    // console.log('getSeasonInfoRedu-action:', action)
    switch (action.type) {
        case 'seasonInfoSuccess':
            return {
                ...state,
                page: ++state.page,
                seasonInfoData: state.seasonInfoData.concat(action.seasonInfoData)
            }
        case 'seasonInfoError':
            return {
                ...state
            }
    }
    return state
}