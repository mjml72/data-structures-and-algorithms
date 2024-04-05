const vertexData = ["A", "B", "C", "D"];

const adjacentMatrix = [
    [0, 1, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
    [1, 0, 0, 0]
]

function printAdjacentMatrix(matrix) {
    console.log("Adjacent Matrix:");

    for (const row of matrix) {
        console.log(row);
    }
}


function printConnections(matrix, vertices) {
    console.log("Connections for each vertex:");
    for (let i = 0; i < vertices.length; i++) {
        console.log(`${vertices[i]}:`);
        for (let j = 0; j < vertices.length; j++) {
            if (matrix[i][j] === 1) {
                console.log(vertices[j]);
            }

        }

    }
}


console.log(`vertexData: ${vertexData}`);
printAdjacentMatrix(adjacentMatrix);
printConnections(adjacentMatrix, vertexData);




class Graph {

    constructor(size) {
        this.adjMatrix = new Array(size);
        for (let i = 0; i < this.adjMatrix.length; i++) {
            this.adjMatrix[i] = new Array(size);
            for (let j = 0; j < this.adjMatrix[i].length; j++) {
                this.adjMatrix[i][j] = 0;

            }
        }

        this.vertexdata = new Array(size);
        this.size = size;

    }

    addEdge(u, v) {
        if (u >= 0 && u < this.size && v >= 0 && v < this.size) {
            this.adjMatrix[u][v] = 1;
            this.adjMatrix[v][u] = 1;
        }
    }

    addVertexData(vertex, data) {
        if (vertex >= 0 && vertex < this.size) {
            this.vertexdata[vertex] = data;
        }
    }

    printGraph() {
        console.log("Adjacent Matrix:");
        for (let i = 0; i < this.size; i++) {

            console.log(this.adjMatrix[i]);
        }
        console.log("Vertex Data:");
        for (let i = 0; i < this.size; i++) {
            console.log(`Vertex ${i}: ${vertexData[i]}`);

        }
    }
}


let g = new Graph(4);
g.addVertexData(0, 'A');
g.addVertexData(1, 'B');
g.addVertexData(2, 'C');
g.addVertexData(3, 'D');
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(0, 3);
g.addEdge(1, 3);

g.printGraph();



