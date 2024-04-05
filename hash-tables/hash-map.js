class SimpleHashMap {
    constructor(size = 100) {
        this.size = size;
        this.buckets = new Array(size);
        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = [];

        }
    }

    hashFunction(key) {
        let sum = 0;
        let array = key.split("");
        array = array.filter((c) => parseInt(c));
        array.forEach(element => {
            sum += parseInt(element);
        });
        return sum % 10;
    }

    put(key, value) {
        let index = this.hashFunction(key);
        let bucket = this.buckets[index];
        for (const pair of bucket) {
            if (pair.key === key) {
                pair.value = value;
            }
        }
        let pair = new Pair(key, value);
        bucket.push(pair);
    }

    get(key) {
        let index = this.hashFunction(key);
        let bucket = this.buckets[index];
        for (const pair of bucket) {
            if (pair.key === key) {
                return pair.value;
            }
        }

        return null;
    }

    remove(key) {
        let index = this.hashFunction(key);
        let bucket = this.buckets[index];
        bucket = bucket.filter((pair) => pair.key !== key);
        this.buckets[index] = bucket;

    }

    printMap() {
        console.log(`Hash Map Contentes:`);
        for (let i = 0; i < this.buckets.length; i++) {
            console.log(`Bucket: ${i}:`);
            this.buckets[i].forEach((pair, j)=>{
                console.log(`${j} ${pair.key}: ${pair.value}`);
            });
        }

    }

}


class Pair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}


const hashmap = new SimpleHashMap(10);

hashmap.put("93-1", "MiguelJesús");



hashmap.printMap();