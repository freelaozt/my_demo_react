import React, { useEffect } from 'react';
import { connect } from "react-redux";

import "../index.css";
import {
    Row, Col, Card, Image, Layout, Tag, Statistic, Divider
} from "antd";
import { LikeOutlined } from "@ant-design/icons";

import HeaderSec from '../common/component/headerSec';
import TvInfoHeaderLay from '../common/component/tvinfo/tvInfoHeaderLay';
import TvInfoNextEpLay from '../common/component/tvinfo/tvInfoNextEpLay';
import TvInfoNextSeasonLay from '../common/component/tvinfo/tvInfoNextSeasonLay';
import ComActorLay from '../common/component/comActorLay';

import tvInfoAct from '../store/action/tvInfoAct'
import tvInfoNextEpAct from '../store/action/tvInfoNextEpAct'
import tvInfoNextSeasonAct from '../store/action/tvInfoNextSeasonAct'
import tvInfoActorAct from '../store/action/tvInfoActorAct'

const { Meta } = Card;
const { Content } = Layout;


function TvInfo(props) {

    let { dispatch } = props

    function getTvInfoActData() {
        return dispatch((tvInfoAct()))
    }
    function getTvInfoNextEpData() {
        return dispatch((tvInfoNextEpAct()))
    }
    function getTvInfoNextSeasonData() {
        return dispatch((tvInfoNextSeasonAct()))
    }
    function getTvInfoActorData() {
        return dispatch((tvInfoActorAct()))
    }
    useEffect(() => {
        getTvInfoActData();
        getTvInfoNextEpData();
        getTvInfoNextSeasonData();
        getTvInfoActorData();
    }, []);

    return (
        <>
            <Layout>
                <HeaderSec title="返回" subTitle="电视节目详情" />
                <Layout className="site-layout">
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: "16px",
                            padding: 5,
                            minHeight: 280
                        }}
                    >
                        <TvInfoHeaderLay {...props} />
                        <TvInfoNextEpLay {...props} />
                        <TvInfoNextSeasonLay {...props} />
                        <ComActorLay {...props} />
                       
                    </Content>
                </Layout>
            </Layout>
        </>

    )
}

export default connect(props => ({
    ...props.getTvInfoRedu,
    ...props.getTvInfoNextEpRedu,
    ...props.getTvInfoNextSeasonRedu,
    ...props.getTvInfoActorRedu,
}))(TvInfo);
