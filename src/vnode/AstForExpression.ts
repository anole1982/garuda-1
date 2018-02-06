import {AstExpression} from "./AstExpression";
import {AstNodeType} from "./AstNodeType";
/**
 *  index,count: number
 *  frist,last,even,odd:boolean
 *
 *  example
 * <div *For="let hero of heroes; let i=index,c=count,f=first,l=last,c=even,o=odd;">
 * {{i + 1}} - {{hero.fullName}}
 * </div>
 *
 */
export class AstForExpression extends AstExpression {
    private static type = AstNodeType.FOR_EXPRESSION;

    private tmpl: string;

    private item: string;
    private context: string;

    private indexAlias: string;
    private countAlias: string;
    private firstAlias: string;
    private lastAlias: string;
    private evenAlias: string;
    private oddAlias: string;

    constructor(exp: string) {
        super(AstForExpression.type, exp);
    }
}