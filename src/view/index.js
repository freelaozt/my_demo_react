import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { Layout, BackTop } from "antd";

//引入组件
import Frame from '../common/component/frame';
import CHeader from '../common/component/header';
import IndexListFilm from '../common/component/index/indexListFilm'
//引入Action
import indexListFilmAction from '../store/action/indexListFilmAction'

function Index(props) {
    const { Content } = Layout;

    let { dispatch } = props
    // console.log('props', props)
    function getIndexListFilmData() {
        return dispatch((indexListFilmAction()))
    }
    useEffect(() => {
        getIndexListFilmData()
    }, []);

    return (
        <Frame
            pullUp={true}
            getData={getIndexListFilmData}
        >
            <Layout>
                <Layout className="site-layout">
                <CHeader></CHeader>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: "24px 16px",
                            padding: 24,
                            minHeight: 280
                        }}
                    >
                        {/* <h2>首页</h2> */}
                        {/* <section className="content"> */}
                        <IndexListFilm  {...props} />
                        {/* </section> */}
                    </Content>
                </Layout>
            </Layout>
        </Frame>
    )
}
// 向子组件传值（...props.indexListFilm
export default connect(props => ({ ...props.getIndexListFilmReduc }))(Index)
