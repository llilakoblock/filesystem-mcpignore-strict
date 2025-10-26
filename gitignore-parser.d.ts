declare module '@gerhobbelt/gitignore-parser' {
    export interface GitignoreParser {
        /**
         * Returns true if the file should be ignored (denied)
         */
        denies(filePath: string): boolean;

        /**
         * Returns true if the file should NOT be ignored (accepted)
         */
        accepts(filePath: string): boolean;

        /**
         * Returns true if the file maybe should be ignored
         */
        maybe(filePath: string): boolean;

        /**
         * Returns the line number in the .gitignore file that caused the file to be ignored
         */
        inspects(filePath: string): number | null;
    }

    /**
     * Compiles a gitignore content string into a parser
     * @param content - The content of a .gitignore file
     * @returns A parser object with deny/accept methods
     */
    export function compile(content: string): GitignoreParser;

    export default { compile };
}