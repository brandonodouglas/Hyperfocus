import React, { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';
import { Button } from 'primereact/button';
import { NodeService } from './services/NodeService';



export default function TaskTreeWrapper() {
  const [nodes, setNodes] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState(null);

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
        
        NodeService.traverseTreeData(NodeService.getTreeNodes());
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Tree value={nodes} selectionMode="checkbox" selectionKeys={selectedKeys} onSelectionChange={(e) => setSelectedKeys(e.value)} dragdropScope="demo" onDragDrop={(e) => setNodes(e.value)} className="w-full md:w-30rem" />
        </div>
    )
}