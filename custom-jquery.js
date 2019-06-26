$(document).ready(function(){
	
	$("#getText").on("click", function(){
		
		
		var orginalValue = $("#userInput").val();
		var value = orginalValue.toLowerCase();
		var arr = ["mahen", "kaliyani", "anjali", "mansoor", "pradip", "salman", "pooja", "ajmal", "swami", "manjunath"];
		
		if(value == "" || value == null){
			$("#myModal").modal();
			
		}else{
			
			if (arr.indexOf(value) > -1) {
				var indexValue = arr.indexOf(value) + 1;
				$("#demo2").html(orginalValue + " "+ "("+ indexValue + ")");
			}else{
				
				$("#demo2").html("Not Available");
			}
			
		}
		
	})
	
})