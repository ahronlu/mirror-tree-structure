function mirrorTree(node) {
  if (!node) {
    return null;
  }

  // Swap left and right
  const temp = node.left;
  node.left = mirrorTree(node.right);
  node.right = mirrorTree(temp);

  return node;
}

// Sample tree node structure
const tree = {
  value: 1,
  left: {
    value: 2,
    left: { value: 4, left: null, right: null },
    right: { value: 5, left: null, right: null }
  },
  right: {
    value: 3,
    left: { value: 6, left: null, right: null },
    right: { value: 7, left: null, right: null }
  }
};

console.log("Original Tree:", JSON.stringify(tree, null, 2));
mirrorTree(tree);
console.log("Mirrored Tree:", JSON.stringify(tree, null, 2));
