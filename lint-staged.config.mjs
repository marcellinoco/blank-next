/** @type {import('lint-staged').Config} */
const config = {
  "**/*.{json,css,md}": "prettier --write",
  "**/*.{js,ts,jsx,tsx}": ["prettier --write", "eslint --fix", "eslint"],
};

export default config;
