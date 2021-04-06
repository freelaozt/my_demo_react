import React from 'react';
import {
    Row, Col, Card, Image, Layout, Tag, Statistic, Divider
} from "antd";
import { LikeOutlined } from "@ant-design/icons";

function tvInfoNextSeasonLay(props) {
    let { tvInfoData, tvInfoActorData, tvInfoNextEpData, tvInfoNextSeasonData } = props

    const { Meta } = Card;
    let layout;
    tvInfoNextSeasonData.forEach(res => {
        layout = (
            res.resData.map(item => (
                <Col xs={18} sm={14} md={10} lg={8} xl={6} xxl={4}>
                    <Card
                        title={item.season_name}
                        bordered={false}
                        hoverable
                        extra={<a href="#">详情</a>}
                        cover={
                            <img
                                alt=""
                                src={item.season_img}
                            />
                        }
                    >
                        <Meta title={item.season_number} description="" />
                    </Card>
                </Col>
            ))
        )
    });

    return (
        <>
            <Divider orientation="left">季度</Divider>
            <Row gutter={[16, 16]}>
            {layout}
            </Row>
        </>
    );
}

export default tvInfoNextSeasonLay;