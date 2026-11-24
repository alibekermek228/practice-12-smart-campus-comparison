import { cp, mkdir, rm } from 'node:fs/promises';

await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await cp('index.html', 'dist/index.html');
await cp('src', 'dist/src', { recursive: true });
await cp('report', 'dist/report', { recursive: true });
await cp('evidence', 'dist/evidence', { recursive: true });
await cp('README.md', 'dist/README.md');
console.log('Built GitHub Pages site in dist/');
