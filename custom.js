function displayname(){
  var xx = document.getElementById("namehere").value;
  var val = xx.toLowerCase();
  //document.getElementById("demo").innerHTML = val;
  var arr = ["mahen", "kaliyani", "anjali", "mansoor", "pradip", "salman", "pooja", "ajmal", "swami", "manjunath"];
  
  if(val =="" || val == null){
	  
	  alert("Recipient's Input shouldn't be empty")
	  
		
  }else{
	  
	  if (arr.indexOf(val) > -1) {
		  var indexValue = arr.indexOf(val) + 1;
		  
		  document.getElementById("demo").innerHTML = val +" "+"("+ indexValue +")";
	  }else{
			
			document.getElementById("demo").innerHTML = "Not Available";
		}
	  
  }
  
  
}
  