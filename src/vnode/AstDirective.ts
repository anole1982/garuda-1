import {AstNode} from "./AstNode";
import {AstNodeType} from "./AstNodeType";

export class AstDirective extends AstNode {
    private static type = AstNodeType.DIRECTIVE;
    constructor() {
        super(AstDirective.type);
    }
}
