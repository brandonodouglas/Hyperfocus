import Node from './Node';


 export class Tree {
    constructor() {
        this.neighbours = [];

    }
   
    addNeighbour(value) {
        let neighbour = new Node(value);
        this.neighbours.push(neighbour)
        return value;

    }
}