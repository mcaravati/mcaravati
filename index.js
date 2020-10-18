const Mustache = require("mustache");
const fs = require("fs");
const MUSTACHE_MAIN_DIRECTORY = "./main.mustache";

let DATA = {
  name: "Matteo",
  date: new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "Europe/Paris",
  }),
};

function generateReadMe() {
    fs.readFile(MUSTACHE_MAIN_DIRECTORY, (error, data) => {
        if(!error) {
            const output = Mustache.render(data.toString(), DATA);
            fs.writeFileSync('README.md', output);
        } else {
            throw error;
        }
    });
}

generateReadMe();
