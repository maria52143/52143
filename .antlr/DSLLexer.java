// Generated from c:/Users/maria/OneDrive/Desktop/52143/DSL.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class DSLLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		IDENTIFICADOR=10, RUTA=11, MENSAJE=12, WS=13;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
			"IDENTIFICADOR", "RUTA", "MENSAJE", "LETRA", "DIGITO", "CARACTER", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'accion'", "'{'", "'}'", "'moverArchivo'", "'a'", "'usarEscaneoProfundo'", 
			"'retornar'", "'resultado'", "'notificar'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, "IDENTIFICADOR", 
			"RUTA", "MENSAJE", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public DSLLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "DSL.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\r\u008e\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0002\u0001"+
		"\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b"+
		"\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0005\tp\b\t\n\t\f\ts\t\t\u0001"+
		"\n\u0004\nv\b\n\u000b\n\f\nw\u0001\u000b\u0004\u000b{\b\u000b\u000b\u000b"+
		"\f\u000b|\u0001\f\u0001\f\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001"+
		"\u000e\u0003\u000e\u0086\b\u000e\u0001\u000f\u0004\u000f\u0089\b\u000f"+
		"\u000b\u000f\f\u000f\u008a\u0001\u000f\u0001\u000f\u0000\u0000\u0010\u0001"+
		"\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007"+
		"\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\u0000\u001b\u0000\u001d"+
		"\u0000\u001f\r\u0001\u0000\u0004\u0002\u0000AZaz\u0001\u000009\u0004\u0000"+
		"  --//__\u0003\u0000\t\n\r\r  \u0091\u0000\u0001\u0001\u0000\u0000\u0000"+
		"\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000"+
		"\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000"+
		"\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f"+
		"\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013"+
		"\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017"+
		"\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0001!\u0001"+
		"\u0000\u0000\u0000\u0003(\u0001\u0000\u0000\u0000\u0005*\u0001\u0000\u0000"+
		"\u0000\u0007,\u0001\u0000\u0000\u0000\t9\u0001\u0000\u0000\u0000\u000b"+
		";\u0001\u0000\u0000\u0000\rO\u0001\u0000\u0000\u0000\u000fX\u0001\u0000"+
		"\u0000\u0000\u0011b\u0001\u0000\u0000\u0000\u0013l\u0001\u0000\u0000\u0000"+
		"\u0015u\u0001\u0000\u0000\u0000\u0017z\u0001\u0000\u0000\u0000\u0019~"+
		"\u0001\u0000\u0000\u0000\u001b\u0080\u0001\u0000\u0000\u0000\u001d\u0085"+
		"\u0001\u0000\u0000\u0000\u001f\u0088\u0001\u0000\u0000\u0000!\"\u0005"+
		"a\u0000\u0000\"#\u0005c\u0000\u0000#$\u0005c\u0000\u0000$%\u0005i\u0000"+
		"\u0000%&\u0005o\u0000\u0000&\'\u0005n\u0000\u0000\'\u0002\u0001\u0000"+
		"\u0000\u0000()\u0005{\u0000\u0000)\u0004\u0001\u0000\u0000\u0000*+\u0005"+
		"}\u0000\u0000+\u0006\u0001\u0000\u0000\u0000,-\u0005m\u0000\u0000-.\u0005"+
		"o\u0000\u0000./\u0005v\u0000\u0000/0\u0005e\u0000\u000001\u0005r\u0000"+
		"\u000012\u0005A\u0000\u000023\u0005r\u0000\u000034\u0005c\u0000\u0000"+
		"45\u0005h\u0000\u000056\u0005i\u0000\u000067\u0005v\u0000\u000078\u0005"+
		"o\u0000\u00008\b\u0001\u0000\u0000\u00009:\u0005a\u0000\u0000:\n\u0001"+
		"\u0000\u0000\u0000;<\u0005u\u0000\u0000<=\u0005s\u0000\u0000=>\u0005a"+
		"\u0000\u0000>?\u0005r\u0000\u0000?@\u0005E\u0000\u0000@A\u0005s\u0000"+
		"\u0000AB\u0005c\u0000\u0000BC\u0005a\u0000\u0000CD\u0005n\u0000\u0000"+
		"DE\u0005e\u0000\u0000EF\u0005o\u0000\u0000FG\u0005P\u0000\u0000GH\u0005"+
		"r\u0000\u0000HI\u0005o\u0000\u0000IJ\u0005f\u0000\u0000JK\u0005u\u0000"+
		"\u0000KL\u0005n\u0000\u0000LM\u0005d\u0000\u0000MN\u0005o\u0000\u0000"+
		"N\f\u0001\u0000\u0000\u0000OP\u0005r\u0000\u0000PQ\u0005e\u0000\u0000"+
		"QR\u0005t\u0000\u0000RS\u0005o\u0000\u0000ST\u0005r\u0000\u0000TU\u0005"+
		"n\u0000\u0000UV\u0005a\u0000\u0000VW\u0005r\u0000\u0000W\u000e\u0001\u0000"+
		"\u0000\u0000XY\u0005r\u0000\u0000YZ\u0005e\u0000\u0000Z[\u0005s\u0000"+
		"\u0000[\\\u0005u\u0000\u0000\\]\u0005l\u0000\u0000]^\u0005t\u0000\u0000"+
		"^_\u0005a\u0000\u0000_`\u0005d\u0000\u0000`a\u0005o\u0000\u0000a\u0010"+
		"\u0001\u0000\u0000\u0000bc\u0005n\u0000\u0000cd\u0005o\u0000\u0000de\u0005"+
		"t\u0000\u0000ef\u0005i\u0000\u0000fg\u0005f\u0000\u0000gh\u0005i\u0000"+
		"\u0000hi\u0005c\u0000\u0000ij\u0005a\u0000\u0000jk\u0005r\u0000\u0000"+
		"k\u0012\u0001\u0000\u0000\u0000lq\u0003\u0019\f\u0000mp\u0003\u0019\f"+
		"\u0000np\u0003\u001b\r\u0000om\u0001\u0000\u0000\u0000on\u0001\u0000\u0000"+
		"\u0000ps\u0001\u0000\u0000\u0000qo\u0001\u0000\u0000\u0000qr\u0001\u0000"+
		"\u0000\u0000r\u0014\u0001\u0000\u0000\u0000sq\u0001\u0000\u0000\u0000"+
		"tv\u0003\u001d\u000e\u0000ut\u0001\u0000\u0000\u0000vw\u0001\u0000\u0000"+
		"\u0000wu\u0001\u0000\u0000\u0000wx\u0001\u0000\u0000\u0000x\u0016\u0001"+
		"\u0000\u0000\u0000y{\u0003\u001d\u000e\u0000zy\u0001\u0000\u0000\u0000"+
		"{|\u0001\u0000\u0000\u0000|z\u0001\u0000\u0000\u0000|}\u0001\u0000\u0000"+
		"\u0000}\u0018\u0001\u0000\u0000\u0000~\u007f\u0007\u0000\u0000\u0000\u007f"+
		"\u001a\u0001\u0000\u0000\u0000\u0080\u0081\u0007\u0001\u0000\u0000\u0081"+
		"\u001c\u0001\u0000\u0000\u0000\u0082\u0086\u0003\u0019\f\u0000\u0083\u0086"+
		"\u0003\u001b\r\u0000\u0084\u0086\u0007\u0002\u0000\u0000\u0085\u0082\u0001"+
		"\u0000\u0000\u0000\u0085\u0083\u0001\u0000\u0000\u0000\u0085\u0084\u0001"+
		"\u0000\u0000\u0000\u0086\u001e\u0001\u0000\u0000\u0000\u0087\u0089\u0007"+
		"\u0003\u0000\u0000\u0088\u0087\u0001\u0000\u0000\u0000\u0089\u008a\u0001"+
		"\u0000\u0000\u0000\u008a\u0088\u0001\u0000\u0000\u0000\u008a\u008b\u0001"+
		"\u0000\u0000\u0000\u008b\u008c\u0001\u0000\u0000\u0000\u008c\u008d\u0006"+
		"\u000f\u0000\u0000\u008d \u0001\u0000\u0000\u0000\u0007\u0000oqw|\u0085"+
		"\u008a\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}