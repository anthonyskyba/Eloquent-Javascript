class PGroup {
    constructor(value){
        this.collection = value
    }

    add(value) {
        let a = Object.assign({}, this.collection)
        a[Object.keys(a).length + 1] = value
        return new PGroup(a)
    }

    delete(value) {
        let a = Object.assign({}, this.collection)
        for (let i of Object.keys(a)) {
            if (a[i] == value) delete a[i]
        }
        return new PGroup(a)
    }

    has(value) {
        for (let i of Object.keys(this.collection)) {
            if (this.collection[i] == value) return true
        }
        return false
    }

    static empty = new PGroup({})
}

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
