/**
 * 总路由
 */
import React from 'react'
import {Switch,Route} from "react-router-dom";
import routeList from "./router_list";

const IndexRoute = (props) => {
    return (
        <Switch>
            {routeList.map((item,index)=>{
                return (<Route 
                    path={item.path} 
                    exact={item.exact} 
                    render={item.render} 
                    key = {index}
                    {...props}
                />
            )})}
        </Switch>
    )
}

export default IndexRoute
