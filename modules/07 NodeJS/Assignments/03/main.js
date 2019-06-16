
const fileSystem = require('prom-fs');
const fileName = 'recipeFile.JSON';

const readFilePromise = async fileName => {
    try{
        const fileContent = await fileSystem.readFilePromise(fileName);
        console.log(fileContent);
    }
    catch(err) {
        console.error(err);
    }
}
readFilePromise();
