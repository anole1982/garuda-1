import {AstNode} from "./AstNode";
import {AstNodeType} from "./AstNodeType";
import {AstExpression} from "./AstExpression";
/**
 *  example
 * <div *switch="tab">
 * <div *switchCase="1">Tab content 1</div>
 * <div *switchCase="2">Tab content 2</div>
 * <div *switchCase="3"><app-tab-3></app-tab-3></div>
 * <div *switchDefault>Select a tab</div>
 * </div>
 *
 */
export class AstSwitchExpression extends AstExpression{
    private static type = AstNodeType.SWITCH_EXPRESSION;

    private condition:string;
    private tmpls:{[valueExp:string]:string};
    private defaultTmpl:string;

    constructor (exp:string){
        super(AstSwitchExpression.type,exp);
    }

}