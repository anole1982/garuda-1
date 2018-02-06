export class Exception {

    private description: string;
    private fileName: string;
    private lineNumber: number;
    private number: number;
    private column: number;
    private stack: any;
    private message: string;
    private name: string;

    constructor(message: string, node: any) {
        Error.prototype.constructor.call(this, message);
        const loc = node && node.loc;
        let line;
        let column;
        if (loc) {
            line = loc.start.line;
            column = loc.start.column;

            message += " - " + line + ":" + column;
        }
        /* istanbul ignore else */
        // if (Error.captureStackTrace) {
        //     Error.captureStackTrace(this, Exception);
        // }
        try {
            if (loc) {
                this.lineNumber = line;

                // Work around issue under safari where we can't directly set the column value
                /* istanbul ignore next */
                if (Object.defineProperty) {
                    Object.defineProperty(this,  "column", {
                        value: column,
                        enumerable: true
                    });
                } else {
                    this.column = column;
                }
            }
        } catch (nop) {
            /* Ignore if the browser is very particular */
        }
    }

}
