import DSLVisitor from "./generated/DSLVisitor.js";

export class CustomDSLVisitor extends DSLVisitor {

    constructor() {
        super();
        this.acciones = [];
    }

    visitDsl(ctx) {
        // Devuelve un array de acciones
        return ctx.accion().map(accionCtx => this.visit(accionCtx));
    }

    visitAccion(ctx) {
        const nombre = ctx.nombreAccion().getText();
        const comandos = ctx.comando().map(comandoCtx => this.visit(comandoCtx));
        return { nombre, comandos };
    }

    visitNombreAccion(ctx) {
        return ctx.IDENTIFICADOR().getText();
    }

    visitComando(ctx) {
        if (ctx.RUTA) {
            // moverArchivo a RUTA
            return { tipo: "moverArchivo", ruta: ctx.RUTA().getText() };
        }
        if (ctx.children[0].getText() === "usarEscaneoProfundo") {
            return { tipo: "usarEscaneoProfundo" };
        }
        if (ctx.children[0].getText() === "retornar") {
            return { tipo: "retornarResultado" };
        }
        if (ctx.MENSAJE) {
            return { tipo: "notificar", mensaje: ctx.MENSAJE().getText() };
        }
        return null;
    }
}

export function transcribirAccionesAJavascript(acciones) {
    let resultado = "";
    for (const accion of acciones) {
        resultado += `function ${accion.nombre}() {\n`;
        for (const comando of accion.comandos) {
            switch (comando.tipo) {
                case "moverArchivo":
                    resultado += `    // Mover archivo a ${comando.ruta}\n`;
                    break;
                case "usarEscaneoProfundo":
                    resultado += `    // Usar escaneo profundo\n`;
                    break;
                case "notificar":
                    resultado += `    console.log("${comando.mensaje}");\n`;
                    break;
                case "retornarResultado":
                    resultado += `    return "resultado";\n`;
                    break;
                default:
                    resultado += `    // Comando desconocido\n`;
            }
        }
        resultado += `}\n\n`;
    }
    return resultado;
}