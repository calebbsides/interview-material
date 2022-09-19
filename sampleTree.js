const Node = require("./Node");

const root = new Node(0);

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);
const node8 = new Node(8);
const node9 = new Node(9);

root.addChild(node1);
root.addChild(node2);

node1.addChild(node3);
node1.addChild(node4);

node2.addChild(node5);
node2.addChild(node6);

node3.addChild(node7);
node3.addChild(node9);

node4.addChild(node8);

module.exports = root;

/*
                            0
                1                       2
        3               4       5               6
    7       9       8    
*/
