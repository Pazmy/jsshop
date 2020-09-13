module.exports = {
  env: {
    browser: true, //for frontend
    node: true, //for backend
    es2020: true,
  },
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 11,
  },
};
