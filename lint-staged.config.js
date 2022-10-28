module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'eslint'],
  '**/*.ts?(x)': () => ['npm run check-types', 'npm run test'],
  '*.json': ['prettier --write'],
};
