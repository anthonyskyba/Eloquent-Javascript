const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};
  
function withBoxUnlocked(body) {
    const locked = box.locked
    if (locked) box.unlock()
    try {
        body()
    } finally {
        if (!locked) box.lock()
    }
}
  
withBoxUnlocked(function() {
    box.content.push("gold piece");
});
  
try {
    withBoxUnlocked(function() {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised: " + e);
}

console.log(box.locked);
// → true
console.log(box._content)
// → ["gold piece"]
