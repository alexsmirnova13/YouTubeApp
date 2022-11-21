module.exports = {
    root: true,
    overrides: [
      {
        files: ["*.ts"],
        parserOptions: {
          project: [
            "tsconfig.*?.json",
            "tsconfig.json"
          ],
          tsconfigRootDir: __dirname,
          sourceType: "module",
          createDefaultProgram: true
        },
        extends: ["plugin:import/recommended", "plugin:@angular-eslint/recommended", "airbnb-typescript/base",
        "plugin:prettier/recommended"],
        rules: {
        }
      },
      {
        files: ["*.component.html"],
        extends: ["plugin:@angular-eslint/template/recommended"],
        rules: {
          "max-len": ["error", { "code": 140 }]
        }
      },
      {
        files: ["*.component.ts"],
        extends: ["plugin:@angular-eslint/template/process-inline-templates"]
      }
    ]
  }