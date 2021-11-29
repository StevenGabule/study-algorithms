let contacts = new Map();
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
// console.log(contacts.has("Jessie")); // true
// console.log(contacts.get("Hilary")); // undefined
// console.log(contacts.get("Jessie")); // {phone: "213-555-1234", address: "123 N 1st Ave"}
// console.log(contacts.delete("Raymond")); // false
// console.log(contacts.delete("Jessie")); // true
// console.log(contacts.size); // 1

for (let [key, value] of contacts) {
  console.log(key, value);
}
