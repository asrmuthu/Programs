import React, { useMemo, useState } from 'react';
import { CheckOutlined, HighlightOutlined } from '@ant-design/icons';
import { Radio, Typography } from 'antd';
const { Paragraph } = Typography;
const App = () => {
  const [editableStr, setEditableStr] = useState('This is an editable text.');

  return (
    <>
      <Paragraph
        editable={{
          onChange: setEditableStr,
        }}
      >
        {editableStr}
      </Paragraph>
      <Paragraph copyable>This is a copyable text.</Paragraph>
    </>
  );
};
export default App;