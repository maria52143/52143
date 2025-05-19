// Generated from DSL.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link DSLParser}.
 */
public interface DSLListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link DSLParser#dsl}.
	 * @param ctx the parse tree
	 */
	void enterDsl(DSLParser.DslContext ctx);
	/**
	 * Exit a parse tree produced by {@link DSLParser#dsl}.
	 * @param ctx the parse tree
	 */
	void exitDsl(DSLParser.DslContext ctx);
	/**
	 * Enter a parse tree produced by {@link DSLParser#accion}.
	 * @param ctx the parse tree
	 */
	void enterAccion(DSLParser.AccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link DSLParser#accion}.
	 * @param ctx the parse tree
	 */
	void exitAccion(DSLParser.AccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link DSLParser#nombreAccion}.
	 * @param ctx the parse tree
	 */
	void enterNombreAccion(DSLParser.NombreAccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link DSLParser#nombreAccion}.
	 * @param ctx the parse tree
	 */
	void exitNombreAccion(DSLParser.NombreAccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link DSLParser#comando}.
	 * @param ctx the parse tree
	 */
	void enterComando(DSLParser.ComandoContext ctx);
	/**
	 * Exit a parse tree produced by {@link DSLParser#comando}.
	 * @param ctx the parse tree
	 */
	void exitComando(DSLParser.ComandoContext ctx);
}