import React, { useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio } from 'antd';
const Download_d = () => {
  return (
    <>
      
      <Flex gap="small" align="flex-start" vertical>
        <Flex gap="small" wrap>
          <Button type="primary" icon={<DownloadOutlined />} size='large' />
          <Button type="primary" shape="circle" icon={<DownloadOutlined />} size='small' />
          <Button type="primary" shape="round" icon={<DownloadOutlined />} size='middle'/>
          <Button type="primary" shape="round" icon={<DownloadOutlined />}>Download</Button>
        </Flex>
      </Flex>
    </>
  );
};
export default Download_d;