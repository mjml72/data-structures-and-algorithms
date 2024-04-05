class SimpleHashSet{
    constructor(size = 100){
        this.size = size;
        this.buckets = new Array(size);
        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = [];

        }
    }

    hashFunction(str) {
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += str.charCodeAt(i);
        }
        return sum % 10;
    }
    
    add(str) {
        let index = this.hashFunction(str);
        let bucket = this.buckets[index];
        if(!bucket.includes(str)){
            bucket.push(str);
        }
    }

    contains(str){
        let index = this.hashFunction(str);
        let bucket = this.buckets[index];
        return bucket.includes(str);
    }
    
    remove(str){
        let index = this.hashFunction(str);
        let bucket = this.buckets[index];
        bucket = bucket.filter((word) => word !== str);
        this.buckets[index] = bucket;
    }

    printSet(){
        console.log('Has Set Contents:');
        for (let index = 0; index < this.buckets.length; index++) {
           
            console.log(`Bucket ${index} : ${this.buckets[index]}`);        
            
        }
    }
}


const hashset = new SimpleHashSet(10);

hashset.add("Miguel");
hashset.add("Jesús");
hashset.add("Martín");
hashset.add("Luis");

hashset.printSet();


