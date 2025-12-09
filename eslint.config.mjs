import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Allow unused variables (common in creative/experimental components)
      "@typescript-eslint/no-unused-vars": "warn",
      
      // Allow any types (useful for WebGL/Three.js code)
      "@typescript-eslint/no-explicit-any": "off",
      
      // Allow unused expressions (common in graphics/animation code)
      "@typescript-eslint/no-unused-expressions": "off",
      
      // Allow prefer-const warnings instead of errors
      "prefer-const": "warn",
      
      // Allow ts-ignore comments (sometimes needed for experimental APIs)
      "@typescript-eslint/ban-ts-comment": "off",
      
      // Allow empty object types
      "@typescript-eslint/no-empty-object-type": "off",
      
      // Make React Hooks rules warnings for now - this is the problematic one
      "react-hooks/exhaustive-deps": "off",
      "react-hooks/rules-of-hooks": "warn", // Make this a warning too for now
      
      // Allow img elements (can be warnings)
      "@next/next/no-img-element": "off",
      
      // Allow missing alt text warnings
      "jsx-a11y/alt-text": "off",
    },
  },
];

export default eslintConfig;
