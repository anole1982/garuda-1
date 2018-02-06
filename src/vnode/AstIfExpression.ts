import {AstExpression} from "./AstExpression";
import {AstNodeType} from "./AstNodeType";

/**
 *  <div *if="isValid">
 *  content here ...
 *  </div>
 *
 *  <div *if="condition; then elseBlock">
 *  <div>true</div>
 *  <div #thenBlock>elseBlock</div>
 *  </div>
 *
 *  <div *if="condition; else elseBlock">
 *  <div>false</div>
 *  <div #elseBlock>elseBlock</div>
 *  </div>
 *
 *  <div *if="condition; then thenBlock else elseBlock">
 *
 *  <div>true</div>
 *  <div #thenBlock>thenBlock</div>
 *  <div #elseBlock>elseBlock</div>
 *  </div>
 *
 *  <div *if="condition as value; else elseBlock">
 *  <div{{value}}</div>
 *  <div #elseBlock>...</div>
 *  </div>
 *
 */
export class AstIfExpression extends AstExpression {
    private static type = AstNodeType.IF_EXPRESSION;

    private conditionExp: string;
    private thenExp: string;
    private elseExp: string;

    constructor(exp: string) {
        super(AstIfExpression.type, exp);
    }

}
