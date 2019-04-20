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
    });
}

function searchProducts() {

}
