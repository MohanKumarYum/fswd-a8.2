var foodOrder ={
    tableNumber: 0,
    items:[],
};

const tableNumber = 10;
const foodItems = ["burger", "pasta","coke"];

const prepareFood = function (tableNumber, foodItems, callback) {
    foodOrder.tableNumber = tableNumber;
    foodOrder.items = foodItems;
    console.log("Preparing food for items :" + foodOrder.items);
    callback(foodOrder.tableNumber, foodOrder.items);
}

const serveFood = function (tableNumber, items) {
    console.log("Serving food for items :" + items);
}
prepareFood(tableNumber, foodItems, serveFood);