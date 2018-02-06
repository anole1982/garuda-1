import {Compiler} from "../src/compiler/Compiler";
import {CompilerOptions} from "../src/compiler/CompilerOptions";

describe("compiler template", () => {
    it("compile", () => {
        const compiler = new Compiler();
        const html = "";
        const options: CompilerOptions = {
            keepComment: true
        };
        compiler.compile(html, options);
    });

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
     */
    it("compile if", () => {
        const compiler = new Compiler();
        const html = "<div *if=\"isValid\">testcontext</div>";
        const options: CompilerOptions = {
            keepComment: true
        };
        compiler.compile(html, options);
    });
    it("compile if else", () => {
        // todo
    });
    it("compile if then", () => {
        // todo
    });
    it("compile if as", () => {
        // todo
    });
    it("compile if then else",  () => {
        // todo
    });
    /**
     *  example
     * <div *switch="tab">
     * <div *switchCase="1">Tab content 1</div>
     * <div *switchCase="2">Tab content 2</div>
     * <div *switchCase="3"><app-tab-3></app-tab-3></div>
     * <div *switchDefault>Select a tab</div>
     * </div>
     */
    it("compile switch", () => {
        // todo
    });

    /**
     *  index count number
     *  frist last even odd boolean
     *
     *  example
     * <div *For="let hero of heroes; let i=index,c=count,f=first,l=last,c=even,o=odd;">
     * {{i + 1}} - {{hero.fullName}}
     * </div>
     *
     * @param node 节点
     * @param val 值
     */
    it("compile for of", () => {
        // todo
    });

    it("compile for of and state", () => {
        // todo
    });
});
