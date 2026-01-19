declare module 'vite-plugin-eslint' {
  import { Plugin } from 'vite';
  
  interface ESLintOptions {
    cache?: boolean;
    cacheLocation?: string;
    include?: string | string[];
    exclude?: string | string[];
    formatter?: string;
    eslintPath?: string;
    lintOnStart?: boolean;
    emitWarning?: boolean;
    emitError?: boolean;
    failOnWarning?: boolean;
    failOnError?: boolean;
  }
  
  export default function eslint(options?: ESLintOptions): Plugin;
}
