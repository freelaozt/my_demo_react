import React from 'react'
import { Layout, List, Avatar, Space } from 'antd';
import {
    MessageOutlined, LikeOutlined, StarOutlined, EllipsisOutlined
} from "@ant-design/icons";
function listItemLayout(props) {

    let { seasonData,seasonEpData } = props;
    const listData = [];
    // console.log(`seasonEpData->props`, seasonEpData)
    // for (let i = 0; i < 23; i++) {
    //     listData.push({
    //         id: i,
    //         href: 'https://ant.design',
    //         title: `ant design part ${i}`,
    //         avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    //         description:
    //             'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    //         content:
    //             'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    //     });
    // }

    seasonEpData.forEach((e, index) => {
        listData.push({
            id: e.id,
            href: `${e.thumb}`,
            title: `${e.title}`,
            seasonImg: e.thumb,
            // avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description:
            `${e.premiered}`,
            content:
            `${e.plot}`,
        });
    });

    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );

    // console.log("seasonRedu->listItemLayout：", seasonData)

    return (
        <>
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 8,
                    simple: true,
                }}
                dataSource={listData}
            //     footer={
            //         <div>
            //             <b>ant design</b> footer part
            //   </div>
            //     }
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        actions={[
                            <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                            <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                        ]}
                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src={item.seasonImg}
                            />
                        }
                    >
                        <List.Item.Meta
                            // avatar={<Avatar src={item.avatar} />}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                        {item.content}
                    </List.Item>
                )}
            />
        </>
    )
}

export default listItemLayout
