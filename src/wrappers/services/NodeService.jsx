import React, { useState, useEffect } from 'react';

export const NodeService = {
    getTreeNodesData() { return [
                {
                    key: '0',
                    label: 'Todo Example 1',
                    data: 'Todo Folder',
                    children: [
                        {
                            key: '0-0',
                            label: 'Subtask 1',
                            data: 'Work Folder',
                            children: [
                                { key: '0-0-0', label: 'Expenses.doc', data: 'Expenses Document' },
                                { key: '0-0-1', label: 'Resume.doc', data: 'Resume Document' }
                            ]
                        },
                        {
                            key: '0-1',
                            label: 'Subtask 2',
                            data: 'Home Folder',
                            children: [{ key: '0-1-0', label: 'Invoices.txt', data: 'Invoices for this month' }]
                        }
                    ]
                },
                {
                    key: '1',
                    partialChecked: 'false',
                    label: 'Events',
                    data: 'Events Folder',
                    children: [
                        { key: '1-0', label: 'Meeting', data: 'Meeting' },
                        { key: '1-1', label: 'Product Launch',  data: 'Product Launch' },
                        { key: '1-2', label: 'Report Review', data: 'Report Review' }
                    ]
                },
                {
                    key: '2',
                    label: 'Movies',
                    partialChecked: 'false',
                    data: 'Movies Folder',
                    children: [
                        {
                            key: '2-0',
                            label: 'Al Pacino',
                            data: 'Pacino Movies',
                            children: [
                                { key: '2-0-0', label: 'Scarface',  data: 'Scarface Movie' },
                                { key: '2-0-1', label: 'Serpico', data: 'Serpico Movie' }
                            ]
                        },
                        {
                            key: '2-1',
                            label: 'Robert De Niro',
                            data: 'De Niro Movies',
                            children: [
                                { key: '2-1-0', label: 'Goodfellas', data: 'Goodfellas Movie' },
                                { key: '2-1-1', label: 'Untouchables',  data: 'Untouchables Movie' }
                            ]
                        }
                    ]
                }
            ]

        },
        getTreeData() {
            return (this.treeNodesData)
        },


        
      
        // Traverse tree/array
       traverseTreeData(treeData) {
            let treeNumber = 0;
            console.log("Traverse tree data started.")
            console.log(treeData)
            // Iterate to the last node in the tree
            treeData.forEach((tree) => {
                console.log(tree.key)
                /*
                treePosition = treePosition + 1;
                if (treePosition == tree.length) {
                    // If last tree/subtree has children 
                    // if last tree/subtree does not have children
                        // return addition

                    console.log(tree.key);
                }


              */  
            })
            return "done";

        },

        getLastNode() {
            // Gets the last node from the array/tree
            let lastTodoNode = treeNodesData[treeNodesData.length - 1]
            return lastTodoNode;
            


        },

        // Method to add todos into the Node service
        
        // Method to get the todo data from the node service

       
        
        
        getTreeNodes() {
            return Promise.resolve(this.getTreeNodesData());
        }
    };
    