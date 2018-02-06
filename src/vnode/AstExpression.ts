import {AstNode} from "./AstNode";
import {AstNodeType} from "./AstNodeType";
export abstract class AstExpression extends AstNode {
    private exp: string;
    constructor(type: AstNodeType, exp: string) {
        super(type);
        this.exp = exp;
    }

}
