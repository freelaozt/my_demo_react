import React, { useEffect, useRef } from 'react';
import { useInnerHeight } from "../hook/index";
import BScroll from "better-scroll";
import { Layout, BackTop } from "antd";
// import http from '../../store/action/http'

const Frame = (props) => {
    //获取div高度
    const innerH = useInnerHeight();
    const wrap = useRef(null);
    let { pullUp, getData } = props;
    // console.log(props);
    useEffect(() => {
        //滚动高度自变
        window.pageScroll = new BScroll(wrap.current, {
            observeDOM: true,
            preventDefaultException: {
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/,
                className: /(^|\s)work_a(\s|$)/
            },
            pullUpLoad: pullUp ? { threshold: 200 } : false,
        });
        // console.log(pageScroll);
        window.pageScroll.on("pullingUp", () => {
            //console.log("上滑加载更多");
            getData().then(res => {
                if (res) {
                    window.pageScroll.finishPullUp();
                    window.pageScroll.refresh();
                } else {
                    window.pageScroll.closePullUp();
                }

            });
        })
        return () => {
            window.pageScroll = null;
        }
    }, [])

    //测试代理转发
    // http.get('api/user/login')
    // .then((res)=>{
    //     console.log(res.data)
    // }).catch(err=>{
    //     console.log(err)
    // })

    return (
        <div
            id="main"
            style={{
                height: innerH
            }}
            ref={wrap}//处理滑屏
        >
            <div
                
            >
                {props.children}
            </div>
        </div>
    )
}

export default Frame
