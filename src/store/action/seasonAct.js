import HTTP from './http'

export default function seasonAct(){
    return function (dispatch) {
        return HTTP.get(`/api/getData?p=1`).then(res => {
            // console.log('seasonAct.js', res.data.results.resData)
            dispatch({
                type: "seasonSuccess",
                seasonData: res.data.results.resData
            })
            return true;
        })
    }
};