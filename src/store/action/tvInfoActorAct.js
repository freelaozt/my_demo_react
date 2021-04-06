import HTTP from './http'

export default function tvInfoActorAct() {
    return function (dispatch) {
        return HTTP.get(`api/getIdTvShowActorData?q=1`).then(res => {
            console.log('tvInfoActorAct.js', res.data)
            dispatch({
                type: "tvInfoActorSuccess",
                tvInfoActorData: res.data
            })
            return true;
        })
    }
}