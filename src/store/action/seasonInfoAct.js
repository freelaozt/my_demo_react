import HTTP from './http'

export default function seasonInfoAct(){
    return function (dispatch) {
        return HTTP.get(`api/getIdTvShowData?q=76`).then(res => {
            // console.log('seasonInfoAct.js', res.data)
            dispatch({
                type: "seasonInfoSuccess",
                seasonInfoData: res.data
            })
            return true;
        })
    }
};