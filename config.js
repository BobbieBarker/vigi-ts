System.config({
  "baseURL": "/",
  "defaultJSExtensions": true,
  "transpiler": "typescript",
  "paths": {
      "github:*": "jspm_packages/github/*",
      "npm:*": "jspm_packages/npm/*",
      "app": "src"
    },
  "typescriptOptions":{
    "module":"commonjs",
    "emitDecoratorMetadata": true
  },
  "packages": {
    "app": {
      "main": "main.ts",
      "defaultExtension": "ts" //or "ts" for typescript
    }
  }
});

System.config({
  "map": {
    "typescript": "github:mhegazy/typescript@v1.5-beta2"
  }
});

