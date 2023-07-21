class Group {
    constructor(value){
        this.collection = value
    }

    add(num) {
        if (this.collection.includes(num) == false) this.collection.push(num)
    }

    delete(num) {
        if (this.collection.includes(num) == true)
            this.collection = this.collection.slice(0, this.collection.indexOf(num)).concat(this.collection.slice(this.collection.indexOf(num)))
    }

    has(num) {
        if (this.collection.includes(num) == true)
        return true
        return false
    }

    static from(obj) {
        let group = []
        for (let i of obj) {
            if (group.includes(i) == false) group.push(i)
        return new Group(group)
        }
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
