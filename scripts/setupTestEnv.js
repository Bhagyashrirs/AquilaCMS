const {fs} = require('aql-utils');

(async () => {
    try {
        console.log('Tests setup script launched');

        const dotEnvContent = 'NODE_ENV=test\nAQUILA_ENV=test\nPORT=3050';
        await fs.writeFile('.env', dotEnvContent);

        const envJsonContent = {
            test : {
                db      : 'mongodb://aquilacms-server:d3yayXB135vqK6bTaYGsJTLiJthyIB7B29BlN82YcawqP8iCjmDQpEpkRRxsF6jLCY8NDkqPIAPKACDbQsr0bQ==@aquilacms-server.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@aquilacms-server@',
                devMode : {
                    mailTo  : 'testaquila@yopmail.com',
                    compile : false,
                    active  : true
                }
            }
        };
        await fs.writeFile('./config/env.json', JSON.stringify(envJsonContent));

        console.log('Tests setup script ended');
    } catch (err) {
        console.error(err);
    }
})();
