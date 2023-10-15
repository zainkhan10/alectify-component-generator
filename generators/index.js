"use strict";
const Generator = require("yeoman-generator");
const yosay = require("yosay");
const generatorPaths = require("./paths");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.answers = {};
    this.log(
      yosay(`
        Welcome,
        Generate your files as you wish :)
    `)
    );
  }

  async prompting() {
    this.answers = await this.prompt([
      {
        type: "list",
        name: "generatorName",
        message: "Please Enter Generator Name",
        choices: [
          {
            name: "Redux Component",
            value: "generate-redux-component",
          },
          {
            name: "component",
            value: "generate-redux-component",
          },
        ],
      },
    ]);
  }

  writing() {
    // copyRootFiles
    const generatorPath = generatorPaths[this.answers.generatorName];
    if (generatorPath) {
      this.composeWith(require.resolve(generatorPath));
    } else {
      this.log.error(yosay("Oppps, Wrong Generator Name"));
      return;
    }
  }
};
