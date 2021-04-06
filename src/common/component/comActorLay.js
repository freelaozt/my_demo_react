import React from 'react';
import {
    Row, Col, Card, Image, Layout, Tag, Statistic, Divider
} from "antd";
import { LikeOutlined } from "@ant-design/icons";

function comActorLay(props) {
    const { Meta } = Card;

    let { tvInfoData, tvInfoActorData, tvInfoNextEpData, tvInfoNextSeasonData } = props

    let layout;

    tvInfoActorData.forEach(res => {
        layout = (
            res.resData.map(item => (
                <Col xs={18} sm={14} md={10} lg={8} xl={6} xxl={4}>
                    <Card
                        title={item.name}
                        bordered={false}
                        hoverable
                        extra={<a href={item.profile}>更多</a>}
                        cover={
                            <img
                                alt=""
                                src={item.thumb}
                            />
                        }
                    >
                        <Meta title={item.role} description={item.profile} />
                    </Card>
                </Col>
            ))
        )
    });

    return (
        <>
            <Divider orientation="left">饰演</Divider>
            <Row gutter={[16, 16]}>
                {layout}
            </Row>
        </>
    );
}

export default comActorLay;