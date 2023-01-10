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

export const userTable = new HashTable();
export const questionTable = new HashTable();
export const vitalTable = new HashTable();

// // Add data to the hash tables using the user's ID as the key
// userTable.add("123", { name: "John", age: 30 });
// questionTable.add("123", {
//   "Is there any event affecting your mood today?": "Yes",
//   "How does this event affect your thoughts and behavior?":
//     "It makes me feel more positive and motivated.",
//   "Mood Scale": "5",
// });
// questionTable.add("1", {
//   "Is there any event affecting your mood today?": "No",
//   "How does this event affect your thoughts and behavior?":
//     "It makes me feel more positive and motivated.",
//   "Mood Scale": "4",
// });
// vitalTable.add("123", {
//   heartRate: 82,
//   wristTemperature: 98.6,
// });
