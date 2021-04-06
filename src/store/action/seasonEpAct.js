import HTTP from './http'

export default function seasonEpAct(){
    return function (dispatch) {
        return HTTP.get(`api/getIdSeasonEpData?q=76&s=1`).then(res => {
            // console.log('seasonEpAct.js-->', res.data.resData)
            dispatch({
                type: "seasonEpSuccess",
                seasonEpData: res.data.resData
            })
            return true;
        })
    }
};