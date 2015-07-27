System.config({
  "baseURL": "/",
  "transpiler": "typescript",
  "paths": {
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "app": "src",
    "*": "*.js"
  },
  "defaultJSExtensions": true,
  "typescriptOptions": {
    "module": "commonjs",
    "emitDecoratorMetadata": true
  },
  "packages": {
    "app": {
      "main": "main",
      "defaultExtension": "ts"
    }
  }
});

System.config({
  "map": {
    "babel-runtime": "npm:babel-runtime@5.8.9",
    "core-js": "npm:core-js@0.9.18",
    "typescript": "npm:babel-core@5.8.9",
    "typescript-runtime": "npm:babel-runtime@5.8.9",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:babel-runtime@5.8.9": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    }
  }
});

