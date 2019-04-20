var mysql = require("mysql");
var inquirer = require("inquirer");

// creating the connection information for the database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "RollshopshoreSQL",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    start();
});

function start() {
    inquirer
        .prompt({
            name: "welcome",
            type: "list",
            message: "Welcome to Bamazon! Would you like a [LIST] of our items for sale, [SEARCH] for items you know are in stock, or [EXIT]?",
            choices: ["LIST", "SEARCH", "EXIT"]
        })
        .then(function (answer) {
            if (answer.welcome === "LIST") {
                listProducts();
            }
            if (answer.welcome === "SEARCH") {
                searchProducts();
            }
            if (answer.welcome === "EXIT") {
                console.log("Thanks for stopping by!");
                connection.end();
            }

        })
}

function listProducts() {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        var choiceArray = [];
        for (var i = 0; i < results.length; i++) {
            choiceArray.push(results[i].product_name);
        }
        console.log(choiceArray);
        console.log(['EXIT']);

        selectProducts();
    });
}

function searchProducts() {
    inquirer
        .prompt({
            name: "searchProducts",
            type: "input",
            message: "Please enter the name of the item you'd like to purchase. You will be notified if the item you enter is not available. Enter 'list' to be redirected to our full list of products."
        })
        .then(function (answer) {
            if (answer.searchProducts === "apples") {
                console.log("You've selected apples.");
                selectQuantity();
            }
            if (answer.searchProducts === "oranges") {
                console.log("You've selected oranges.");
                selectQuantity();
            }
            if (answer.searchProducts === "milk") {
                console.log("You've selected milk.");
            }
            if (answer.searchProducts === "t-shirts") {
                console.log("You've selected t-shirts.");
            }
            if (answer.searchProducts === "dresses") {
                console.log("You've selected dresses.");
            }
            if (answer.searchProducts === "shoes") {
                console.log("You've selected shoes.");
            }
            if (answer.searchProducts === "blankets") {
                console.log("You've selected blankets.");
            }
            if (answer.searchProducts === "bicycles") {
                console.log("You've selected bicycles.");
            }
            if (answer.searchProducts === "laptops") {
                console.log("You've selected laptops.");
            }
            if (answer.searchProducts === "television") {
                console.log("You've selected shoes.");
            }
            if (answer.searchProducts === "list") {
                console.log("Redirecting you the products list...");
                listProducts();
            }
        })
}

function selectProducts() {
    inquirer
        .prompt({
            name: "selectProducts",
            type: "input",
            message: "Please enter an item from the list above to purchase. If you do not want to purchase an item, please enter 'exit' to return to the main menu."
        })
        .then(function (answer) {
            if (answer.selectProducts === "apples") {
                console.log("You've selected apples.");
            }
            if (answer.selectProducts === "oranges") {
                console.log("You've selected oranges.");
            }
            if (answer.selectProducts === "milk") {
                console.log("You've selected milk.");
            }
            if (answer.selectProducts === "t-shirts") {
                console.log("You've selected t-shirts.");
            }
            if (answer.selectProducts === "dresses") {
                console.log("You've selected dresses.");
            }
            if (answer.selectProducts === "shoes") {
                console.log("You've selected shoes.");
            }
            if (answer.selectProducts === "blankets") {
                console.log("You've selected blankets.");
            }
            if (answer.selectProducts === "bicycles") {
                console.log("You've selected bicycles.");
            }
            if (answer.selectProducts === "laptops") {
                console.log("You've selected laptops.");
            }
            if (answer.selectProducts === "television") {
                console.log("You've selected shoes.");
            }
            if (answer.selectProducts === "exit") {
                console.log("Redirecting to main menu...");
                start();
            }
        });
}

function selectQuantity() {
    inquirer
        .prompt({
            name: "selectQuantity",
            type: "input",
            message: "Please enter the desired quantity of the item you selected.",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        })
        .then(function (answer) {
            console.log("You've selected " + answer.selectQuantity + " " + answer.);
        })
}