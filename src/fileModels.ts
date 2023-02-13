const generateConfigFile = (queueName: string, serviceName: string) => {

return configObject(queueName, serviceName);
}

const configObject = (queueName: string, serviceName: string) =>  {
  
  return {
    "config": {
        "S": `1|${serviceName}`
      },
      "uri": {
        "S": `S|${queueName}`
      }
  }
}

exports.generateConfigFile = generateConfigFile