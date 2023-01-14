class HashTable {
  constructor() {
    this.table = {};
  }

  add(key, value) {
    this.table[key] = value;
  }

  get(key) {
    return this.table[key];
  }
}

export const resultTable = new HashTable();
export const questionTable = new HashTable();
export const vitalTable = new HashTable();