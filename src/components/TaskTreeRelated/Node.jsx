export default class Node {
    constructor(value) {
        this.value = value;
        this.neighbours = [] // Neighbors or children
    }

    // Add a node object to the children list
    getNodeValue() {
        console.log('This node has a value of: ' + this.value)
        return this.value;
    }

}