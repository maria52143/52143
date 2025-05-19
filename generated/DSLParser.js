// Generated from DSL.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import DSLListener from './DSLListener.js';
import DSLVisitor from './DSLVisitor.js';

const serializedATN = [4,1,13,36,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,4,0,
10,8,0,11,0,12,0,11,1,1,1,1,1,1,1,1,4,1,18,8,1,11,1,12,1,19,1,1,1,1,1,2,
1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,34,8,3,1,3,0,0,4,0,2,4,6,0,0,36,
0,9,1,0,0,0,2,13,1,0,0,0,4,23,1,0,0,0,6,33,1,0,0,0,8,10,3,2,1,0,9,8,1,0,
0,0,10,11,1,0,0,0,11,9,1,0,0,0,11,12,1,0,0,0,12,1,1,0,0,0,13,14,5,1,0,0,
14,15,3,4,2,0,15,17,5,2,0,0,16,18,3,6,3,0,17,16,1,0,0,0,18,19,1,0,0,0,19,
17,1,0,0,0,19,20,1,0,0,0,20,21,1,0,0,0,21,22,5,3,0,0,22,3,1,0,0,0,23,24,
5,10,0,0,24,5,1,0,0,0,25,26,5,4,0,0,26,27,5,5,0,0,27,34,5,11,0,0,28,34,5,
6,0,0,29,30,5,7,0,0,30,34,5,8,0,0,31,32,5,9,0,0,32,34,5,12,0,0,33,25,1,0,
0,0,33,28,1,0,0,0,33,29,1,0,0,0,33,31,1,0,0,0,34,7,1,0,0,0,3,11,19,33];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class DSLParser extends antlr4.Parser {

    static grammarFileName = "DSL.g4";
    static literalNames = [ null, "'accion'", "'{'", "'}'", "'moverArchivo'", 
                            "'a'", "'usarEscaneoProfundo'", "'retornar'", 
                            "'resultado'", "'notificar'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, "IDENTIFICADOR", "RUTA", "MENSAJE", 
                             "WS" ];
    static ruleNames = [ "dsl", "accion", "nombreAccion", "comando" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = DSLParser.ruleNames;
        this.literalNames = DSLParser.literalNames;
        this.symbolicNames = DSLParser.symbolicNames;
    }



	dsl() {
	    let localctx = new DslContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, DSLParser.RULE_dsl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 9; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 8;
	            this.accion();
	            this.state = 11; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	accion() {
	    let localctx = new AccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, DSLParser.RULE_accion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13;
	        this.match(DSLParser.T__0);
	        this.state = 14;
	        this.nombreAccion();
	        this.state = 15;
	        this.match(DSLParser.T__1);
	        this.state = 17; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 16;
	            this.comando();
	            this.state = 19; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 720) !== 0));
	        this.state = 21;
	        this.match(DSLParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombreAccion() {
	    let localctx = new NombreAccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, DSLParser.RULE_nombreAccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this.match(DSLParser.IDENTIFICADOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comando() {
	    let localctx = new ComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, DSLParser.RULE_comando);
	    try {
	        this.state = 33;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 25;
	            this.match(DSLParser.T__3);
	            this.state = 26;
	            this.match(DSLParser.T__4);
	            this.state = 27;
	            this.match(DSLParser.RUTA);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 28;
	            this.match(DSLParser.T__5);
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 29;
	            this.match(DSLParser.T__6);
	            this.state = 30;
	            this.match(DSLParser.T__7);
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 31;
	            this.match(DSLParser.T__8);
	            this.state = 32;
	            this.match(DSLParser.MENSAJE);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

DSLParser.EOF = antlr4.Token.EOF;
DSLParser.T__0 = 1;
DSLParser.T__1 = 2;
DSLParser.T__2 = 3;
DSLParser.T__3 = 4;
DSLParser.T__4 = 5;
DSLParser.T__5 = 6;
DSLParser.T__6 = 7;
DSLParser.T__7 = 8;
DSLParser.T__8 = 9;
DSLParser.IDENTIFICADOR = 10;
DSLParser.RUTA = 11;
DSLParser.MENSAJE = 12;
DSLParser.WS = 13;

DSLParser.RULE_dsl = 0;
DSLParser.RULE_accion = 1;
DSLParser.RULE_nombreAccion = 2;
DSLParser.RULE_comando = 3;

class DslContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DSLParser.RULE_dsl;
    }

	accion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AccionContext);
	    } else {
	        return this.getTypedRuleContext(AccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DSLListener ) {
	        listener.enterDsl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DSLListener ) {
	        listener.exitDsl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DSLVisitor ) {
	        return visitor.visitDsl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DSLParser.RULE_accion;
    }

	nombreAccion() {
	    return this.getTypedRuleContext(NombreAccionContext,0);
	};

	comando = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ComandoContext);
	    } else {
	        return this.getTypedRuleContext(ComandoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DSLListener ) {
	        listener.enterAccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DSLListener ) {
	        listener.exitAccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DSLVisitor ) {
	        return visitor.visitAccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreAccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DSLParser.RULE_nombreAccion;
    }

	IDENTIFICADOR() {
	    return this.getToken(DSLParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DSLListener ) {
	        listener.enterNombreAccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DSLListener ) {
	        listener.exitNombreAccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DSLVisitor ) {
	        return visitor.visitNombreAccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DSLParser.RULE_comando;
    }

	RUTA() {
	    return this.getToken(DSLParser.RUTA, 0);
	};

	MENSAJE() {
	    return this.getToken(DSLParser.MENSAJE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DSLListener ) {
	        listener.enterComando(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DSLListener ) {
	        listener.exitComando(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DSLVisitor ) {
	        return visitor.visitComando(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




DSLParser.DslContext = DslContext; 
DSLParser.AccionContext = AccionContext; 
DSLParser.NombreAccionContext = NombreAccionContext; 
DSLParser.ComandoContext = ComandoContext; 
