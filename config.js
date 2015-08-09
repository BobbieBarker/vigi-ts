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
  "trace": true,
  "packages": {
    "app": {
      "main": "main.ts",
      "defaultExtension": "ts"
    }
  }
});

System.config({
  "map": {
    "rx": "npm:rx@2.5.3",
    "typescript": "github:mhegazy/typescript@v1.5-beta2",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:rx@2.5.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

