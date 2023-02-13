const fileModels = require('./fileModels');
const fsHandler = require('fs');
 

const handlerTask = (answers: any) => {
    console.info('handlerTask::::');

    const queueName = answers.queue;
    const serviceName = answers.serviceName;

    const configFile = fileModels.generateConfigFile(queueName, serviceName);
    const stringJsonFile = JSON.stringify(configFile);
    writeConfigToFile(`${serviceName}`, stringJsonFile);

}

const writeConfigToFile = (fileName: string,jsonContent: string ) => {

    fsHandler.writeFile(`./files/${fileName}.json`, jsonContent, 'utf8', function (err: any) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
     
        console.log("JSON file has been saved.");
    });
     
}

exports.handlerTask = handlerTask;