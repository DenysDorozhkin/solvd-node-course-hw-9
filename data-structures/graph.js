import { PriorityQueue } from "./queue.js";

// Represents a Graph with basic property: adjacencyList.
export class Graph {
  // Creates an instance of Graph.
  constructor() {
    this.adjacencyList = {};
  }

  // Add vertex to Graph.
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // Add edge to Graph.
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  // Depth-first search.
  dfs(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    (function dfsRecursive(vertex) {
      if (!vertex) return;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          dfsRecursive(neighbor);
        }
      });
    })(start);
    return result;
  }

  // Breadth-first search.
  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    while (queue.length) {
      let currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

// Represents a WeightedGraph with basic property: adjacencyList.
export class WeightedGraph {
  // Creates an instance of WeightedGraph.
  constructor() {
    this.adjacencyList = {};
  }

  // Add vertex to WeightedGraph.
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // Add edge to WeightedGraph.
  addEdge(vertex1, vertex2, weight) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
  }

  // Shortest path Dijkstra's Algorithm.
  dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;

    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (nodes.queue.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    return path.concat(smallest).reverse();
  }

  // Shortest path Breadth-First Search.
  bfsShortestPath(start, finish) {
    const queue = [start];
    const distances = { [start]: 0 };
    const previous = { [start]: null };

    while (queue.length) {
      const currentVertex = queue.shift();
      if (currentVertex === finish) {
        const path = [];
        let step = finish;
        while (step !== null) {
          path.push(step);
          step = previous[step];
        }
        return path.reverse();
      }

      for (let neighbor of this.adjacencyList[currentVertex]) {
        if (!(neighbor.node in distances)) {
          distances[neighbor.node] = distances[currentVertex] + 1;
          previous[neighbor.node] = currentVertex;
          queue.push(neighbor.node);
        }
      }
    }

    return null;
  }
}
