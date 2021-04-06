import React from 'react';
import {
    Row, Col, Card, Image, Layout, Tag, Statistic, Divider
} from "antd";
import { LikeOutlined } from "@ant-design/icons";

function tvInfoNextEpLay(props) {
    let { tvInfoData, tvInfoActorData, tvInfoNextEpData, tvInfoNextSeasonData } = props
    const { Meta } = Card;

    let layout;
    tvInfoNextEpData.forEach(res => {
        layout = (
            res.resData.map(item => (
                <Col xs={18} sm={14} md={10} lg={8} xl={6} xxl={4}>
                    <Card
                        title={item.title}
                        bordered={false}
                        hoverable
                        extra={<a href="#">详情</a>}
                        cover={
                            <img
                                alt=""
                                src={item.thumb}
                            />
                        }
                    >

                        <Meta title={item.rating} description={item.plot} />
                    </Card>
                </Col>
            ))
        )
    });

    return (
        <>
            <Divider orientation="left">接下来</Divider>
            <Row gutter={[16, 16]}>
                {layout}
            </Row>
        </>
    );
}

export default tvInfoNextEpLay;