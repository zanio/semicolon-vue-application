class File {
  s = 7;
  constructor() {}
  static install() {
    console.log("I am installing a plugin");
  }
  fetchAll() {
    console.log("This is the fetch method", this.s);
  }
  set(newNumber) {
    this.s = newNumber;
  }
  get() {
    return this.s;
  }
  handleFunction = () => {
    console.log("this is the handle function");
    this.s = 200;
    console.log(this.fetchAll());
  };
}

const file = new File();

// Attach an instance method:
File.prototype.deleteFile = function () {
  console.log("I am deleteing a file in this section");
};

console.log(file.deleteFile());

file.handleFunction();

console.log(file.s);
