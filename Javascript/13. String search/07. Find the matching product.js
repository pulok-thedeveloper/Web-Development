const products = [
    {id: 1, name: 'xiaomi phone one night', price: 19000},
    {id: 2, name: 'iphone', price: 82000},
    {id: 3, name: 'mac book air', price: 88000},
    {id: 4, name: 'lonovo yoga laptop', price: 98000},
    {id: 5, name: 'Dell inspiron laptop', price: 180000},
    {id: 6, name: 'Samsung Phone note 7', price: 50000},
    {id: 7, name: 'nokia old age Phone gone', price: 82000},
    {id: 8, name: 'Mi chip not cheap LapTop', price: 82000},
]

function matchProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

// const result = matchProducts(products, 'Phone');
console.log(matchProducts(products, 'Phone'));
