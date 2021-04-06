import HTTP from './http'

export default function tvInfoAct() {
    return function (dispatch) {
        return HTTP.get(`api/getIdTvShowData?q=76`).then(res => {
            console.log('tvInfoAct.js', res.data)
            dispatch({
                type: "tvInfoSuccess",
                tvInfoData: res.data
            })
            return true;
        })
    }
}