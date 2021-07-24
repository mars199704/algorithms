const { Hash } = require("crypto");

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = [];
    for (let i = 0; i < this.size; i++) {
      this.table.push([]);
    }
  }

  // division method
  hashDivision(key) {
    return key % this.size;
  }

  // multiplication method
  hashMulti(key) {
    let parseKey = 0;
    if (typeof key !== "number") {
      parseKey = this.parse(key);
    } else {
      parseKey = key;
    }
    let A = (Math.sqrt(5) - 1) / 2;
    return Math.floor(this.size * ((parseKey * A) % 1));
  }

  set(key, value) {
    let index = this.hashMulti(key);
    this.table[index].push({ key, value });
  }

  get(key) {
    let index = this.hashMulti(key);
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i].key == key) {
        return {
          key: this.table[index][i].key,
          value: this.table[index][i].value,
        };
      }
    }
    return null;
  }

  // parse str to integer

  parse(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
      result = str.charCodeAt(i);
    }
    return result % this.size;
  }

  printAll() {
    console.log(this.table);
  }
}

let myyHash = new HashTable(6);

myyHash.set(11124, "Mars");
myyHash.set(39011, "Liu");
myyHash.set(244, "Kevin");
myyHash.set(12093812, "Black");

myyHash.printAll();

console.log("-------------------------");

console.log(myyHash.get(244));

console.log("-------------------------");

myyHash.set("white", "#FFFFFF");
myyHash.set("magenta", "#FFOOFF");

myyHash.printAll();
