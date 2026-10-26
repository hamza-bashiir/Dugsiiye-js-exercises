const people = [
    {name: "Hassan", age: 30, city: "Mogadisho"},
    {name: "Nuura", age: 20, city: "Jig-jiga"},
    {name: "Muscab", age: 22, city: "Kismayo"}
];
for(let student of people){
    console.log(student);
}

for(let key in people){
    console.log(people[key]);
}