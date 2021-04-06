import HTTP from './http'

export default function tvInfoNextSeasonAct() {
    return function (dispatch) {
        return HTTP.get(`api/getIdSeasonTitleData?q=76`).then(res => {
            console.log('tvInfoNextSeasonAct.js', res.data)
            dispatch({
                type: "tvInfoNextSeasonSuccess",
                tvInfoNextSeasonData: res.data
            })
            return true;
        })
    }
}