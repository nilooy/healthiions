#!/usr/bin/env node

const args = process.argv.slice(2);

const firstArg = args[0];
const secArg = args[1];

if (firstArg === "comp") {
  require("./make")("/components/", secArg);
} else if (firstArg === "serv") {
  require("./makeController")(secArg);
}
