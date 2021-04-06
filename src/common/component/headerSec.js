import React, { Component } from 'react';
import "../css/common.css";
import { PageHeader } from "antd"
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from "@ant-design/icons";

class headerSec extends Component {
    render() {
        return (
            <PageHeader
                className="site-page-header"
                onBack={() => null}
                title= {this.props.title}
                subTitle={this.props.subTitle}
            />
        )
    }
}

export default headerSec
