import fs from "fs";

class StringUtil {
  static async stringFromFile(input) {
    // const readFileAsync = (inputFile) => {
    //   return new Promise((resolve, reject) => {
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //       resolve(reader.result);
    //     };
    //     reader.onerror = reject;
    //     reader.readAsDataURL(inputFile);
    //   });
    // };

    // const returnString = await readFileAsync(input);
    // return returnString;
    const data = await fs.promises.readFile(input);
    return (new Buffer(data)).toString('utf8');
  }
}

export default StringUtil;
