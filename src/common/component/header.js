import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

class CHeader extends Component {
    
    render() {
        return (
            <Header className="site-layout-background" style={{ padding: 0 }}>
                {React.createElement(
                     MenuUnfoldOutlined,
                    {
                        className: "trigger",
                        onClick: this.toggle
                    }
                )}
            </Header>
        )
    }
}

CHeader.propTypes = {

};

export default CHeader
