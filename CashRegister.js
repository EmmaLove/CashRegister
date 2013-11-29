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

    function Coupon(code,name,combination,discount,percentage,quantitie,startingdate,expirationdate) {
        this.code = code;// barcode number 
		this.valid= true;//valid coupon 
		this.name =name;//name for the coupon
		this.combination=combination ; // some discount work with qt not by percentage mean if u buy 3 pen the 4 for free 
		this.discount=discount;// discount on the price 
		this.percentagediscount=percentagediscount; // discount work by percentage 	
		this.quantite = qunatite;// how many copon/user
		this.startingdate=startingdate;// first date for the discount 
        this.expirationdate = expirationdate;//last date for the coupon 
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
	
	
    function refoundClientOrder(billnumber) {
        //get bill total
        //refound
		// return integer
    }
    
    function validatePaiement() {
        //is paiementMethod accepted
		//return boolean
    }
	
    /**
     * Enters the payment received from the client.
		 * give the number of dollars that we need to give to the client
		 * give the number of quarters that we need to give to the client
		 * give the number of dimes that we need to give to the client
		 * give the number of nickels that we need to give to the client
		 * give the number of pennies that we need to give to the client
	 */
     
  	function enterPayment(dollars,quarters,dimes,nickels,pennies){
        var payment = dollars + quarters*QUARTER_VALUE + dimes*DIME_VALUE +
                nickels*NICKEL_VALUE + pennies*PENNY_VALUE;
    }
	
	function giveChange(payment,grandTotalAmount) {
        //get enterPayment
        //get bill total
        //payment - grandTotalAmount = change
		//return int
       
        return payment - grandTotalAmount;//=change
    }
    function giveDollars(){
        /**changeInDollars=(int)(change/100);
        change=change-100;*/
        return changeInDollars;
    }
    function giveQuarters(){
        /**changeInQuarters=(int) (change/(QUARTER_VALUE*100));
        change = (int) (change - (quarters*QUARTER_VALUE*100));*/
        return changeInQuarters;
    }
    function giveDimes(){
        /**changeInDimes = (int) (change/DIME_VALUE*100);
        change=(int) (change-(dimes*DIME_VALUE*100));*/
        return changeInDimes;
    }
    function giveNickels(){
        /**changeInNickels = (int) (change/NICKEL_VALUE*100);
        change = (int) (change - (nickels*NICKEL_VALUE*100));*/
        return changeInNickels;
    }
    function givePennies(){
        /**changeInPennies=(int) change;*/
        return changeInPennies;
    }
    // Calling the function so we know how much we need to give back to the client
    changeInPennies;
    changeInQuarters;
    changeInDollars;
    changeInDimes;
    changeInNickels;
	
	
    
    function printReceipt() {
        var printHeader = function() {
            var printStoreInfo = function() {}
            var printEmployeeInfo = function() {}
            var printReceiptInfo = function() {}
            var printDateTime = function() {}
        }
        
        var printBody = function() {
            var printItemList = function() {}
            var printDiscounts = function() {}
            var printSubtotal = function() {}
            var printTaxes = function() {}
            var printTotal = function() {}
        }
        
        var printFooter = function() {
            var printPaiementMethod = function() {}
            var printPoints = function() {}
            var printGreetings = function() {}
        }
    }
    
    function askForLogout() {
        //add username and password of employee
		// return boolean
    }
	
}