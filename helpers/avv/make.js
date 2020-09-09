const fs = require("fs");

const makeComponent = (dir, name) => {
  const initPath = "./src" + dir;

  const folderPath = initPath + name + "/";
  const jsFIle = folderPath + name + ".js";
  const indexFile = folderPath + "index.js";

  const indexFileContent = `import ${name} from './${name}.js'
  export default ${name}
  `;

  const jsFileContent = `  import React from 'react'
  
const ${name} = () => {
  return (
    <div>
      
    </div>
  )
}

export default ${name}`;

  fs.mkdir(folderPath, () => {
    fs.writeFileSync(indexFile, indexFileContent);
    fs.writeFileSync(jsFIle, jsFileContent);
  });
};

module.exports = makeComponent;
