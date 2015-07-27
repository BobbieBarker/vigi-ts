System.config({
  "baseURL": "/",
  "defaultJSExtensions": true,
  "transpiler": "typescript",
  "typescriptOptions": {
    "module": "commonjs",
    "emitDecoratorMetadata": true
  },
  "paths": {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "app": "src"
  },
  "packages": {
    "app": {
      "main": "main.ts",
      "defaultExtension": "ts"
    }
  }
});

System.config({
  "map": {
    "typescript": "github:mhegazy/typescript@v1.5-beta2"
  }
});

