import { procedure } from "@/utils/trpc/factories";

import type { Edge, Tree } from "../types";

/**
 * ルートノードとその子ノードを含む木構造を取得する
 */
export const listTrees = procedure.query(async ({ ctx: { db } }) => {
  const roots = await db.root.findMany({
    include: {
      edges: {
        include: {
          parent: true,
          child: true,
        },
      },
    },
  });

  return roots.map((root) => ({
    id: root.id,
    name: root.name,
    level: null,
    children: buildTree(root.edges),
  }));
});

/**
 * エッジ配列から木構造を生成する
 *
 * エッジには親子関係とレベル情報が含まれており、同じ親を持つノードは同じレベルに属する
 */
const buildTree = (edges: Edge[]): Tree[] => {
  /**
   * 親子関係をマッピングする
   *
   * キー：親ノードのID（rootの場合はnull）
   * 値：子ノードの配列
   */
  const childrenByParent = new Map<number | null, Edge[]>();
  for (const edge of edges) {
    const parentId = edge.parentId;

    if (!childrenByParent.has(parentId)) {
      childrenByParent.set(parentId, []);
    }

    childrenByParent.get(parentId)?.push(edge);
  }

  /**
   * 指定された親IDを持つ子ノードから木構造を再帰的に構築
   */
  const buildNodes = (parentId: number | null): Tree[] => {
    const children = childrenByParent.get(parentId) || [];

    return children.map((edge) => ({
      id: edge.child.id,
      name: edge.child.name,
      level: edge.level,
      children: buildNodes(edge.child.id),
    }));
  };

  /**
   * ルートレベルの子ノード（parentId = null）から木構造を構築
   */
  return buildNodes(null);
};
