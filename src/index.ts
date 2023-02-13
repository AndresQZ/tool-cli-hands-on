
const { Command } = require("commander");
const { description, version } = require('../package.json')
const inquirer = require('inquirer');

const handlerModule = require('./handlerTask');

const figlet = require("figlet");

const program = new Command();
console.log(figlet.textSync("tool-cli-hands-on"));


program
  .version("1.0.0")
  .description(description)
  .option("-c, --create", "create a file")
  .parse(process.argv);

const options = program.opts();





if (options.create) {
    console.log(`starting file() :: ${options.create}`);    

    inquirer.prompt([
        {
          name: 'queue',
          message: 'Nombre de la queue?'
        },
        {
            name: 'serviceName',
            type: "input",
            message: "Nombre del servicio"
        },
      ])
      .then((answers : any) => {
        handlerModule.handlerTask(answers);
      });
  }