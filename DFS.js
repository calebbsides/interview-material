const tree = require("./sampleTree");

function DFS(node) {
  const visited = [];

  DFSRec(node, visited);
}

function DFSRec(node, visited) {
  if (visited.includes(node)) {
    return;
  }

  visited.push(node);
  console.log(node.getData());

  for (let child of node.getChildren()) {
    DFSRec(child, visited);
  }
}

DFS(tree);
