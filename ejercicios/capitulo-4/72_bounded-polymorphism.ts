// type TreeNode = {
// value: string;
// };

// type LeafNode = TreeNode & {
//   isLeaf: true;
// };

// type InnerNode = TreeNode & {
//   children: [TreeNode] | [TreeNode, TreeNode];
// };

const a: TreeNode = { value: "a" };
const b: LeafNode = { value: "b", isLeaf: true };
const c: InnerNode = { value: "c", children: [b] };

function mapNode<T extends TreeNode>(node: T, f: (value: string) => string): T {
  return {
    ...node,
    value: f(node.value),
  };
}

const a1 = mapNode(a, (_) => _.toUpperCase()); // TreeNode
const b1 = mapNode(b, (_) => _.toUpperCase()); // LeafNode
const c1 = mapNode(c, (_) => _.toUpperCase()); // InnerNode

console.log(a1); // { value: 'A' }
console.log(b1); // { value: 'B', isLeaf: true }
console.log(c1); // { value: 'C', children: [ { value: 'b', isLeaf: true } ] }
