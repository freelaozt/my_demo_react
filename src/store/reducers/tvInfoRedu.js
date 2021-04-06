export default function getTvInfoRedu(state = {
    tvInfoData: [],
    page: 1
}, action) {
    switch (action.type) {
        case 'tvInfoSuccess':
            return {
                ...state,
                page: ++state.page,
                tvInfoData: state.tvInfoData.concat(action.tvInfoData)
            }
        case 'tvInfoError':
            return {
                ...state
            }
    }
    return state
}
