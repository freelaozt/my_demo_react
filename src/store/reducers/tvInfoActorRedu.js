export default function getTvInfoActorRedu(state = {
    tvInfoActorData: [],
    page: 1
}, action) {
    switch (action.type) {
        case 'tvInfoActorSuccess':
            return {
                ...state,
                page: ++state.page,
                tvInfoActorData: state.tvInfoActorData.concat(action.tvInfoActorData)
            }
        case 'tvInfoActorError':
            return {
                ...state
            }
    }
    return state
}