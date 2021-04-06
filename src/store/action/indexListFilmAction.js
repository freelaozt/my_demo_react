import HTTP from './http'

export default function indexListFilmAction() {
    
    return function (dispatch,getState) {
        dispatch({
            type: "LOADING"
        })
        let {page} = getState().getIndexListFilmReduc
        console.log('getState():', page)
        return HTTP.get(`/api/getData?p=${page}`).then(res => {
            console.log('indexListFilmAction.js', res.data.results.resData.length)
            if(!res.data.results.resData.length){
                dispatch({
                    type: "LOADEND"
                });
                return false;
            }
            dispatch({
                type: "LOADOVER",
                data: res.data
            })
            return true;
        })
    }
}
