import React from 'react';
import { Tree } from 'antd';
import type { GetProps, TreeDataNode } from 'antd';

type DirectoryTreeProps = GetProps<typeof Tree.DirectoryTree>;

const { DirectoryTree } = Tree;

const treeData: TreeDataNode[] = [
    {
        title: 'Account Tree',
        key: '0-0',
        children: [
            {
                title: 'Assets', key: '0-0-0', children: [
                    {
                        title: 'General Assets', key: '0-0-0-0', children: [
                            {
                                title: 'Motor Vehicles', key:'0-0-0-0-0', isLeaf: true
                            },
                            {
                                title: 'Goodwill', key:'0-0-0-0-1', isLeaf: true
                            },
                        ]
                    }
                ]
            },
            {
                title: 'Assets2', key: '0-0-1', children: [
                    {
                        title: 'General Assets2', key: '0-0-1-0', children: [
                            {
                                title: 'Motor Vehicles2', key:'0-0-1-0-0', isLeaf: true
                            },
                            {
                                title: 'Goodwill2', key:'0-0-1-0-1', isLeaf: true
                            },
                        ]
                    }
                ]
            },
        ],
    }
];


export const Trees: React.FC = () => {
    const onSelect: DirectoryTreeProps['onSelect'] = (keys, info) => {
        console.log('Trigger Select', keys, info);
    };

    const onExpand: DirectoryTreeProps['onExpand'] = (keys, info) => {
        console.log('Trigger Expand', keys, info);
    };

    return (
        <DirectoryTree
            multiple
            defaultExpandAll
            onSelect={onSelect}
            onExpand={onExpand}
            treeData={treeData}
        />
    );
};
