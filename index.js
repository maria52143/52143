import DSLParser from "./generated/DSLParser.js";
import DSLLexer from "./generated/DSLLexer.js";
// import { CustomDSLListener } from "./CustomDSLListener.js";
import { CustomDSLVisitor, transcribirAccionesAJavascript } from "./CustomCalculatorVisitor.js";
import antlr4, { CharStreams, CommonTokenStream, ParseTreeWalker } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;

    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        input = await leerCadena();
        console.log(input);
    }

    // Crear el flujo de entrada y el lexer
    let inputStream = CharStreams.fromString(input);
    let lexer = new DSLLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);

    // Mostrar lista de tokens
    tokenStream.fill();
    console.log("\nTokens:");
    for (const token of tokenStream.tokens) {
        if (token.type !== antlr4.Token.EOF) {
            console.log(`  ${DSLLexer.symbolicNames[token.type]}: '${token.text}'`);
        }
    }

    // Crear el parser y analizar
    let parser = new DSLParser(tokenStream);
    parser.removeErrorListeners();
    let errores = [];
    parser.addErrorListener({
        syntaxError: (recognizer, offendingSymbol, line, column, msg) => {
            errores.push(`Línea ${line}, columna ${column}: ${msg}`);
        }
    });

    let tree = parser.dsl();

    // Mostrar árbol de análisis
    console.log("\nÁrbol de derivación:");
    console.log(tree.toStringTree(parser.ruleNames));

    // Analizar errores
    if (errores.length > 0) {
        console.error("\nSe encontraron errores de sintaxis:");
        errores.forEach(e => console.error(e));
    } else {
        console.log("\nEntrada válida.");

        // Transcribir a JavaScript usando el Visitor
        const visitor = new CustomDSLVisitor();
        const acciones = visitor.visit(tree);
        const jsCode = transcribirAccionesAJavascript(acciones);

        console.log("\nTranscripción a JavaScript:\n");
        console.log(jsCode);
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

main();
