// Generated from DSL.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by DSLParser.

export default class DSLVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by DSLParser#dsl.
	visitDsl(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DSLParser#accion.
	visitAccion(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DSLParser#nombreAccion.
	visitNombreAccion(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DSLParser#comando.
	visitComando(ctx) {
	  return this.visitChildren(ctx);
	}



}