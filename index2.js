const notebook = {
    processor: "i7",
    memory: "16GB",
    price: 5000,
    hd: "1TB",
    ssd: "256GB"
}

const keys = Object.keys(notebook);

for (const key of keys) {
    console.log(`${key.toUpperCase()}: ${notebook[key]}`);
}
