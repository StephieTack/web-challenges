const myConsole = {
  name: "stephie",
  clear: () => {
    console.clear();
    console.log("diese konsole wurde gelöscht");
  },
  log: (platzhalter) => {
    console.log("ente:", platzhalter);
  },
};
console.clear();
myConsole.clear();
myConsole.log("quack quack");

function greet(name) {
  console.log("hello:", name);
}

greet("stephie");
