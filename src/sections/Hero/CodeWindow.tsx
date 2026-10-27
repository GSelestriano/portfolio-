type TokenType = 'keyword' | 'fn' | 'string' | 'prop' | 'comment' | 'plain'

type Token = [TokenType, string]

// Código ilustrativo exibido no painel decorativo do hero.
const lines: Token[][] = [
  [['comment', '// Full Stack Developer']],
  [],
  [['keyword', 'const'], ['fn', ' developer'], ['plain', ' = {']],
  [['prop', '  name'], ['plain', ': '], ['string', "'Guilherme Selestriano'"], ['plain', ',']],
  [['prop', '  role'], ['plain', ': '], ['string', "'Full Stack Developer'"], ['plain', ',']],
  [['prop', '  passion'], ['plain', ': ['], ['string', "'technology'"], ['plain', ', '], ['string', "'solutions'"], ['plain', ',']],
  [['plain', '            '], ['string', "'continuous learning'"], ['plain', '],']],
  [['plain', '};']],
  [],
  [['keyword', 'function'], ['fn', ' buildBetter'], ['plain', '() {']],
  [['keyword', '  return'], ['string', " 'Sempre em evolução'"], ['plain', ';']],
  [['plain', '}']],
]

export function CodeWindow() {
  return (
    <div className="code-window">
      <div className="code-window__bar">
        <span className="code-window__dot" />
        <span className="code-window__dot" />
        <span className="code-window__dot code-window__dot--active" />
      </div>
      <pre className="code-window__body">
        <code>
          {lines.map((tokens, index) => (
            <span key={index} className="code-window__line">
              <span className="code-window__number">{index + 1}</span>
              <span>
                {tokens.map(([type, text], tokenIndex) => (
                  <span key={tokenIndex} className={`tok-${type}`}>
                    {text}
                  </span>
                ))}
                {index === lines.length - 1 && <span className="code-window__caret" />}
              </span>
            </span>
          ))}
        </code>
      </pre>
    </div>
  )
}
