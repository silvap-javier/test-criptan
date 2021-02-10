const coins = [10,20,50,100,200,500]

const products = [
    {number : 1 , price: 100 , name:'Orange Juice'},
    {number : 2 , price: 200 , name:'Soda'},
    {number : 3 , price: 150 , name:'Chocolate snack'},
    {number : 4 , price: 250 , name:'Cookies'},
    {number : 5 , price: 180 , name:'Gummy bears'},
    {number : 6 , price: 500 , name:'Condoms'},
    {number : 7 , price: 120 , name:'Crackers'},
    {number : 8 , price: 220 , name:'Potato chips'},
    {number : 9 , price: 80 , name:'Small snack'},
] 

function getAmountChange (product,amount) {
    let rest = amount - product.price
    let array_change = []
    let is_simple_change = false
    if (rest > 1) {
        var money = mod(rest);
        
        function mod(num){
            if (num % 5 === 0){
                return num;
            }else{
                return num + 5 - num % 5
            }
        }

        function getChange(money){
            var index = coins.length - 1;
            var splits = [];
            while (money >= coins[0]){
                if (money >= coins[index]){
                money -= coins[index];
                splits.push(coins[index]);
                }else{
                    index--;
                }
            }
            return splits;
        }
        array_change = getChange(money)
    }
    return array_change
}

function vendingMachine(productId,mount){
    let product = products.find(element => element.number == productId);
    return {
        change : getAmountChange(product,mount),
        product : product.name
    }
}

console.log((vendingMachine(1,90)))
