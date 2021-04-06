import HTTP from "./http";

export default function indexAction(param) {
    console.log('外部传入:',param)
    return function (dispatch) {
        return HTTP.get("/api/getData?p=1").then(res => {
            console.log('indexAction',res)
            return res;
        })
    }
}
