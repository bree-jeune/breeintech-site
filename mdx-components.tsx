import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="labs-post-h1">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="labs-post-h2">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="labs-post-h3">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="labs-post-p">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="labs-post-ul">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="labs-post-ol">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="labs-post-li">{children}</li>
    ),
    code: ({ children }) => (
      <code className="labs-post-code">{children}</code>
    ),
    pre: ({ children }) => (
      <pre className="labs-post-pre">{children}</pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="labs-post-blockquote">{children}</blockquote>
    ),
    a: ({ href, children }) => (
      <a href={href} className="labs-post-link" target={href?.startsWith('http') ? '_blank' : undefined} rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    ),
    ...components,
  };
}
