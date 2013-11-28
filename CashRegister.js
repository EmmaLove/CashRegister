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
			//return integer
        }
        function addItemToBill() {
            //add item (name, price, qty) to the bill
			// return string and integer
        }
        function displayItem() {
            //show the price and name of each items to the client on the screen
			//// return string and integer
        }
    }
    
    var bill = [];//list of all items
                  // Type array and return integer, string
    function Item(name, barcode, price, category, quantity, airmilespoints) {
        this.name = name;//string
        this.barCode = barcode;//integer
        this.price = price;//integer
        this.category = category;//string
        this.quantity = funtion(quantity);{
            //calculates the remaining inventory
            return integer;
        }
        this.airMilesPoints = airmilespoints;//return integer
        return item;
    }

    
    var product = new Item("Milk", 0956292738, 4.95, "Dairy products", 23);
    
    function manuallyAddItem(name, price) {
        //manually add an item when it is not registered
        //name = string, price integer
    }
    
    function typeOfProduct() {
        //verify if product if is alchool and tabaco (item.category = alchool)
		//return integer
        promptForAge();
    }
    
    function promptForAge() {
        //ask for age
        //if 18+ continue
        //if 18- don't scan
		//return boolean
    }
    
    function cancelOrder() {
        //cancel the whole order
		//return integer 
    }
    
    function cancelLastItem() {
        //cancel the last item added
		//return integer
    }
    
    function subtotal() {
        //calculate prices of all items
        //- promotions
		//return integer
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
		//return integer 
    }
    
    function addAirMilesPoints(cardnumber) {
        //verify that the employee id is still valid
        //verify all items points values
        //add points to card
		//return integer 
    }
    
    function grandTotal() {
        //subtotal + TPS & TVQ
		// return integer
        function addBag() {
            //add a bag to the bill
			// return integer
        }
        function calculateTaxes() {
            //calculate the taxes
			// return integer
        }
        grandTotalAmout = RESULT;
		// return integer
    }
    
    function paiementMethod() {
        //which paiement method will be used
        //verify card number or name
		// return string
    }
    
    function validatePaiement() {
        //is paiementMethod accepted
		//return boolean
    }
    
    function processPaiement() {
        //get amout given &&&
        //get bill total
        //given - total = change
		//return string
        var amountGiven = document.getElementById("").value;
        return amountGiven - grandTotalAmout;
    }
    
    function refoundClientOrder(billnumber) {
        //get bill total
        //refound
		// return integer
    }
    
    function printSettings() {
        //total includes taxes
        //get the date / time
        //get greetings
        //get employee number
		//return integer and string
    }
    
    function askForLogout() {
        //add username and password of employee
		// return boolean
    }
	
	function newTest(){
		
	}
}