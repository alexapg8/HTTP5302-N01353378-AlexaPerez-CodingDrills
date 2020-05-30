// J1 (2019)

window.onload=function () {
	var formHandle = document.forms[0];
	
	formHandle.onsubmit = getScore;
	
	function getScore(){
		// get values from input
		var apples3Point = document.getElementById("ap_in__3point").value;
		var apples2Point = document.getElementById("ap_in__2point").value;
		var apples1Point = document.getElementById("ap_in__1point").value;
		var bananas3Point = document.getElementById("ba_in__3point").value;
		var bananas2Point = document.getElementById("ba_in__2point").value;
		var bananas1Point = document.getElementById("ba_in__1point").value;
		
		// multiply values by the point scoring system	
		var applesTotal3 = ((apples3Point)*3);
		var applesTotal2 = ((apples2Point)*2);
		var applesTotal1 = ((apples1Point)*1);
		
		var bananasTotal3 = ((bananas3Point)*3);
		var bananasTotal2 = ((bananas2Point)*2);
		var bananasTotal1 = ((bananas1Point)*1);
		
		// add new values to get scoring results
		
		var applesTotal = (applesTotal3 + applesTotal2 + applesTotal1);
		console.log(applesTotal);
		
		var bananasTotal = (bananasTotal3 + bananasTotal2 + bananasTotal1);
		console.log(bananasTotal);
		
		var winner = document.getElementById("gameWinner");
		
		// if A is higher than B output A
		if (applesTotal > bananasTotal) {
			winner.innerHTML = "A";
			
		// if B is higher than A output B
		} else if (applesTotal < bananasTotal) {
			winner.innerHTML = "B";
		} else {
			winner.innerHTML = "T";
		}
		return false;
	}
}