// JavaScript Document
function init() {
    if( !document &&  !document.getElementById ){ return; }
}

//hello

function CashRegister() {
    var grandTotalAmout;
    
    function askForLogin() {
        //ask for a integer, string (username, password)
        //add username and password of employee
        return Boolean;
    }
    
    function scan(barcode) {
        function processBarcode() {
            //Search the database for the corresponding item
        }
        function addItemToBill() {
            //add item (name, price, qty) to the bill
        }
        function displayItem() {
            //show the price and name of each items to the client on the screen
        }
    }
    
    var bill = [];//list of all items
    
    function Item(name, barcode, price, category, quantity, airmilespoints) {
        this.name = name;//string
        this.barCode = barcode;//integer
        this.price = price;//integer
        this.category = category;//string
        this.quantity = funtion(quantity);{
            //calculates the remaining inventory
            return integer;
        }
        this.airMilesPoints = airmilespoints;
        return item;
    }

    
    var product = new Item("Milk", 0956292738, 4.95, "Dairy products", 23);
    
    function manuallyAddItem(name, price) {
        //manually add an item when it is not registered
        //name = string, price integer
    }
    
    function typeOfProduct() {
        //verify if product if is alchool and tabaco (item.category = alchool)
        promptForAge();
    }
    
    function promptForAge() {
        //ask for age
        //if 18+ continue
        //if 18- don't scan
    }
    
    function cancelOrder() {
        //cancel the whole order
    }
    
    function cancelLastItem() {
        //cancel the last item added
    }
    
    function subtotal() {
        //calculate prices of all items
        //- promotions
    }

    function Coupon(couponid, value, expirationdate) {
        this.couponId = couponid;
        this.value = value;
        this.expirationdate = expirationdate;
        this.condition = function() {
            //validate the condition (compare the value)
            //return true or false
        }
    }
    
    var coupon1 = new Coupon(92383733, 3.50, 26122013);
    
    function validateCoupon() {
        if(coupon1.condition = true){
            
        }
    }
    
    function employeeDiscount(employeeid) {
        //verify that the employee id is still valid
    }
    
    function addAirMilesPoints(cardnumber) {
        //verify that the employee id is still valid
        //verify all items points values
        //add points to card
    }
    
    function grandTotal() {
        //subtotal + TPS & TVQ
        function addBag() {
            //add a bag to the bill
        }
        function calculateTaxes() {
            //calculate the taxes
        }
        grandTotalAmout = RESULT;
    }
    
    function paiementMethod() {
        //which paiement method will be used
        //verify card number or name
    }
    
    function validatePaiement() {
        //is paiementMethod accepted
    }
    
    function processPaiement() {
        //get amout given &&&
        //get bill total
        //given - total = change
        var amountGiven = document.getElementById("").value;
        return amountGiven - grandTotalAmout;
    }
    
    function refoundClientOrder(billnumber) {
        //get bill total
        //refound
    }
    
    function printSettings() {
        //total includes taxes
        //get the date / time
        //get greetings
        //get employee number
    }
    
    function askForLogout() {
        //add username and password of employee
    }
	
	function newTest(){
		
	}
}