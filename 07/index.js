const _ = require('lodash');

const parseChildren = (properties) => {
  const children = [];
  for (let i = 3; i < properties.length; i++) {
    children.push({ name: properties[i].replace(/,/, '') });
  }
  return children;
};

const parseNode = (nodeString) => {
  const properties = _.split(nodeString, ' ');
  const children = properties.length > 2 ? parseChildren(properties) : [];
  const node = {
    name: properties[0],
    weight: parseInt(properties[1], 10),
    children,
  };
  return node;
};

const buildTree = (nodes) => {
  const tree = _.cloneDeep(nodes);
  const fullTree = _.keyBy(tree, 'name');

  _.forEach(tree, (node) => {
    _.forEach(tree, (n) => {
      _.forEach(n.children, (child) => {
        if (node.name === child.name) {
          fullTree[node.name].parent = fullTree[n.name];
        }
      });
    });
  });
  return fullTree;
};

const findRoot = (tree) => {
  let parent = tree[Object.keys(tree)[0]];
  while (parent.parent) {
    parent = parent.parent;
  }
  return parent;
};

const first = (input) => {
  const nodes =
    _(input)
      .split('\n')
      .map(parseNode)
      .value();
  const tree = buildTree(nodes);
  return findRoot(tree);
};

const weights = {};

const calculateWeight = (tree) => {
  const calculateNodeWeight = (n) => {
    if (weights[n.name]) {
      return weights[n.name];
    }
    const childWeights = _.map(n.children, child => calculateNodeWeight(tree[child.name]));
    const totalWeight = _.sum([...childWeights, tree[n.name].weight]);
    weights[n.name] = totalWeight;
    return totalWeight;
  };

  const traverse = (node) => {
    const nodeWeight = calculateNodeWeight(node);
    const childWeights = _.map(node.children, c => calculateNodeWeight(tree[c.name]));
    const optionsDict = _.countBy(childWeights);
    const keys = Object.keys(optionsDict);
    if (keys.length > 1) {
      const unbalancedIndex = parseInt(_.find(keys, k => optionsDict[k] === 1), 10);
      const unbalancedNode = _.find(node.children, (c) => {
        const weight = weights[c.name];
        const result = weights[c.name] === unbalancedIndex;
        return result;
      });
      const newNode = tree[unbalancedNode.name];
      const newWeights = _.map(newNode.children, c => calculateNodeWeight(tree[c.name]));
      _.forEach(newNode.children, c => traverse(tree[c.name]));

      const difference = Math.abs(parseInt(keys[0], 10) - parseInt(keys[1], 10));
      return newNode.weight - (difference);
    }
  };
  return traverse;
};

const second = (input) => {
  const nodes =
    _(input)
      .split('\n')
      .map(parseNode)
      .value();
  const tree = buildTree(nodes);
  const root = findRoot(tree);
  const treeFunc = calculateWeight(tree);
  return treeFunc(root);
};

module.exports = {
  first,
  second,
};
