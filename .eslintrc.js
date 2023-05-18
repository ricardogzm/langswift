const isProd = process.env.NODE_ENV === "production";

module.exports = {
  extends: ["next/core-web-vitals", "prettier"],
  rules: {
    "no-console": isProd ? "error" : "warn",
  },
};
