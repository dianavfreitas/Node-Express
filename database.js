// database.js
let data = [];

module.exports = {
    getAll: () => data,
    addEntry: (entry) => {
        data.push(entry);
    },
    updateEntry: (id, updatedEntry) => {
        const index = data.findIndex(item => item.id === id);
        if (index!== -1) {
            data[index] = updatedEntry;
        }
    },
    deleteEntry: (id) => {
        const index = data.findIndex(item => item.id === id);
        if (index!== -1) {
            data.splice(index, 1);
        }
    }
};
