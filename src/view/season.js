import React, { useEffect } from 'react';
import { connect } from "react-redux";

import { Layout } from 'antd';
import {
  MenuUnfoldOutlined
} from "@ant-design/icons";

import '../index.css'

import Frame from '../common/component/frame';
import HeaderSec from '../common/component/headerSec';
import ListItemLayout from '../common/component/season/listItemLayout';
import SeasonHeader from '../common/component/season/seasonHeader';

import seasonAct from '../store/action/seasonAct'
import seasonEpAct from '../store/action/seasonEpAct'
import seasonInfoAct from '../store/action/seasonInfoAct'

function Season(props) {

  let { dispatch } = props

  function getSeasonActData() {
    return dispatch((seasonAct()))
  }

  function getSeasonEpActData() {
    return dispatch((seasonEpAct()))
  }

  function getSeasonInfoActData() {
    return dispatch((seasonInfoAct()))
  }

  useEffect(() => {
    getSeasonActData();
    getSeasonEpActData();
    getSeasonInfoActData();
  }, []);

  // console.log('success:', props)

  return (
    <Frame>
      <HeaderSec title="返回" subTitle="电视节目详情" />
      <SeasonHeader {...props} />
      <Layout className="site-layout">
        <ListItemLayout {...props} />
      </Layout>
    </Frame>
  );
}

export default connect(props => ({
  ...props.getSeasonRedu,
  ...props.getSeasonEpRedu,
  ...props.getSeasonInfoRedu
}))(Season);