class Node {
  data = null;
  children = [];

  constructor(data) {
    this.setData(data);
  }

  addChild(node) {
    this.children.push(node);
  }

  getChildren() {
    return this.children;
  }

  setData(data) {
    this.data = data;
  }

  getData() {
    return this.data;
  }
}

module.exports = Node;
