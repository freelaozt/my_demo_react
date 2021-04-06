import React from 'react'
import { Button, Row, Col, Card } from 'antd';

function IndexListFilm(props) {
    const { Meta } = Card;
    // console.log('IndexListFilm.js', props)
    let { data, loadEnd, loading } = props;
    // console.log('pull-Data：', data.length)
    let listLayout;

    data.forEach(res => {
        listLayout = (
            res.results.resData.map(item => (
                <Col xs="2" sm="2" md="4" lg="6" key={item.id} >
                    <Card
                        title={item.title}
                        bordered={true}
                        hoverable
                        extra={<a href="/details">More</a>}
                        cover={<img alt="example" src={item.season_img} />}
                        style={{ "width": "150px" }}
                    >
                        Card content
                        <Meta title={item.season_number} description="www.instagram.com" />
                    </Card>
                </Col>
            ))
        )
    });

    const cols = [];
    const colCount = 20;

    for (let i = 0; i < colCount; i++) {
        cols.push(
            <Col xs="2" sm="2" md="4" lg="6">
                <Card
                    title="Card title"
                    bordered={false}
                    hoverable
                    extra={<a href="#">More</a>}
                    cover={
                        <img
                            alt="example"
                            src={"https://picsum.photos/150/250/?image=1" + i}
                        />
                    }
                >
                    Card content
              <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </Col>
        );
    }

    return (
        <div className="">
            <h3>List FIlm</h3>
            <Row gutter={[8, 8]} justify="center">
                {listLayout}

                {/* {cols} */}
            </Row>
            <a className="">{loadEnd ? "没有新的数据了" : (loading ? "正在加载中" : "上滑加载更多")}</a>
        </div>
    )
}

export default IndexListFilm

