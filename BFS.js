const tree = require("./sampleTree");

function BFS(node) {
  const queue = [node];

  while (queue.length) {
    const curr = queue.shift();
    console.log(curr.getData());

    queue.push(...curr.getChildren());
  }
}

BFS(tree);
