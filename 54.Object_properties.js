var point = {
    x : 10,
    y : 20,
    z :30
}

point.x = 40
point["y"] = 400
var prop = 'a'
point[prop] = 100

console.log(point)

delete point.a

console.log(point)