export default function getSeasonRedu(state = {
    seasonData: [],
    page: 1
}, action) {
    // console.log('getSeasonRedu-action:', action)
    switch (action.type) {
        case 'seasonSuccess':
            return {
                ...state,
                page: ++state.page,
                seasonData: state.seasonData.concat(action.seasonData)
            }
        case 'seasonError':
            return {
                ...state
            }
    }
    return state
}