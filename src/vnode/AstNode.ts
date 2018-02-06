import {AstNodeType} from "./AstNodeType";

export abstract class AstNode {
    private type: AstNodeType;
    private parant: AstNode;
    private children: AstNode[] = [];
    constructor(type: AstNodeType) {
        this.type = type;
    }
    public addChild(node: AstNode) {
        this.children.push(node);
    }

}
