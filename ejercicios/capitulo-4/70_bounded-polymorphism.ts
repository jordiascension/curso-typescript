/* eslint-disable @typescript-eslint/no-unused-vars */
// type TreeNode = {
// value: string;
// };

// type LeafNode = TreeNode & {
// isLeaf: true;
// };

// type InnerNode = TreeNode & {
// children: [TreeNode] | [TreeNode, TreeNode];
// };

const a: TreeNode = { value: 'a' };
const b: LeafNode = { value: 'b', isLeaf: true };
const c: InnerNode = { value: 'c', children: [b] };

// const a1 = mapNode(a, _ => _.toUpperCase()); // TreeNode
// const b1 = mapNode(b, _ => _.toUpperCase()); // LeafNode
// const c1 = mapNode(c, _ => _.toUpperCase()); // InnerNode
