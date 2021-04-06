import HTTP from './http'

export default function tvInfoNextEpAct() {
    return function (dispatch) {
        return HTTP.get(`api/getIdSeasonEpData?q=76&s=1`).then(res => {
            console.log('tvInfoNextEp.js', res.data)
            dispatch({
                type: "tvInfoNextEpSuccess",
                tvInfoNextEpData: res.data
            })
            return true;
        })
    }
}