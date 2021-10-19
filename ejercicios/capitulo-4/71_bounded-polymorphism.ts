/* eslint-disable @typescript-eslint/no-unused-vars */
function mapNode<T extends TreeNode>( // 1
  node: T, // 2
  f: (value: string) => string
): T { // 3
  return {
    ...node,
    value: f(node.value),
  };
}
