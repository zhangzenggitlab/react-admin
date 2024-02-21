import React from 'react';
import { Tabs } from 'antd';
import {  useState } from 'react';

function Tab(props: any) {
    const initialItems = [
        { label: 'Tab 1', children: props.pages, key: '1' },
        { label: 'Tab 2', children: props.pages, key: '2' },
        {
            label: 'Tab 3',
            children: props.pages,
            key: '3',
            closable: false,
        },
    ];
    type TargetKey = React.MouseEvent | React.KeyboardEvent | string;
    const [activeKey, setActiveKey] = useState(initialItems[0].key);
    const [items, setItems] = useState(initialItems);

    const onChange = (newActiveKey: string) => {
        setActiveKey(newActiveKey);
    };

    const remove = (targetKey: TargetKey) => {
        let newActiveKey = activeKey;
        let lastIndex = -1;
        items.forEach((item, i) => {
            if (item.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const newPanes = items.filter((item) => item.key !== targetKey);
        if (newPanes.length && newActiveKey === targetKey) {
            if (lastIndex >= 0) {
                newActiveKey = newPanes[lastIndex].key;
            } else {
                newActiveKey = newPanes[0].key;
            }
        }
        setItems(newPanes);
        setActiveKey(newActiveKey);
    };

    const onEdit = (
        targetKey: React.MouseEvent | React.KeyboardEvent | string,

    ) => {
        remove(targetKey);
    };

    return (
        <Tabs
            hideAdd
            type="editable-card"
            onChange={onChange}
            activeKey={activeKey}
            onEdit={onEdit}
            items={items}
        />
    );
}

export default Tab;