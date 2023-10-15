"use strict";
const Generator = require("yeoman-generator");
const yosay = require("yosay");
const { camelCase, pascalCase } = require("change-case");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.answers = {};
    this.log(
      yosay(`
        Welcome to Alectify Redux Component Generator,
        Please enter name of the redux component you want to generate ( eg. master-project )
    `)
    );
  }

  async prompting() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "componentName",
        message: "Your Redux Component Name",
        default: "Test",
      },
    ]);
  }

  writing() {
    this.answers.componentName = this.answers.componentName
    this.answers.componentNameCamelCase = this.answers.componentName;
    // copyRootFiles
    this.destinationRoot("src/redux/components/");
    this.fs.copyTpl(
      this.templatePath("index.txt"),
      this.destinationPath(`${this.answers.componentName}/index.ts`),
      {
        componentName: this.answers.componentName,
        componentNameCamelCase: this.answers.componentNameCamelCase,
      }
    );

    this.fs.copyTpl(
      this.templatePath("component.initialState.txt"),
      this.destinationPath(`${this.answers.componentName}/initialState.ts`),
      {
        componentName: this.answers.componentName,
        componentNameCamelCase: this.answers.componentNameCamelCase,
      }
    );

    this.fs.copyTpl(
      this.templatePath("component.constants.txt"),
      this.destinationPath(
        `${this.answers.componentName}/${this.answers.componentName}.constants.ts`
      ),
      {
        componentName: this.answers.componentName,
        componentNameCamelCase: this.answers.componentNameCamelCase,
      }
    );

    this.fs.copyTpl(
      this.templatePath("component.interface.txt"),
      this.destinationPath(
        `${this.answers.componentName}/${this.answers.componentName}.interface.ts`
      ),
      {
        componentName: this.answers.componentName,
        componentNameCamelCase: this.answers.componentNameCamelCase,
      }
    );

    this.fs.copyTpl(
      this.templatePath("component.enum.txt"),
      this.destinationPath(
        `${this.answers.componentName}/${this.answers.componentName}.enum.ts`
      ),
      {
        componentName: this.answers.componentName,
        componentNameCamelCase: this.answers.componentNameCamelCase,
      }
    );

    // copying internal folders
    this.fs.copyTpl(
      this.templatePath("affects/index.txt"),
      this.destinationPath(`${this.answers.componentName}/affects//index.ts`),
      {
        componentName: this.answers.componentName,
        componentNameCamelCase: this.answers.componentNameCamelCase,
      }
    );

    this.fs.copyTpl(
      this.templatePath("normalizers/index.txt"),
      this.destinationPath(
        `${this.answers.componentName}/normalizers/index.ts`
      ),
      {
        componentName: this.answers.componentName,
        componentNameCamelCase: this.answers.componentNameCamelCase,
      }
    );

    this.fs.copyTpl(
      this.templatePath("sources/index.txt"),
      this.destinationPath(`${this.answers.componentName}/sources/index.ts`),
      {
        componentName: this.answers.componentName,
        componentNameCamelCase: this.answers.componentNameCamelCase,
      }
    );
  }
};
