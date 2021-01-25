let set = new Set([5,8,9,3])
set.add(12)
set.add(9)
console.log(set);
console.log(set.size);

set.delete(3)
console.log(set);

console.log(set.has(5));
console.log();


for (let v of set){
    console.log(v);
}


set.clear()
console.log(set);