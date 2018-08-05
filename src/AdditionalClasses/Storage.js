export default class Storage {
    constructor() {
        this.storage = localStorage;
    }

    getItem(key) {
        return JSON.parse(this.storage.getItem(key));   
    }

    setItem(key, val) {
        try {
            this.storage.setItem(key, JSON.stringify(val));
        } catch (e) {
            console.log(e);
        }
    }

    setNewPropertyToItem(key, newKey, val) {
        try {
            let item = this.storage.getItem(key);
            this.setItem(key, JSON.stringify({...item, [key] : val}))
        } catch (e) {
            console.log(e);  
        }
    }
}