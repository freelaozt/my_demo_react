/**
 * 路由管理列表
 */

import React from 'react'
import Index from '../view/index';
import Season from '../view/season';
import TvInfo from '../view/tvInfo';

const routerList = [
    {
        name: "首页",
        path: "/",
        exact: true,
        render(props) {
            return <Index {...props} />
        }
    },
    {
        name: "季度信息",
        path: "/season",
        exact: true,
        render(props) {
            return <Season {...props} />
        }
    }, {
        name: "电视节目详情",
        path: "/tvinfo",
        exact: true,
        render(props) {
            return <TvInfo {...props} />
        }
    },
]

export default routerList
