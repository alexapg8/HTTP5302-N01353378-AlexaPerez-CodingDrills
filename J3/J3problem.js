// J3 (2011)

window.onload=function () {
	var formHandle = document.forms[0];
	
	formHandle.onsubmit = getSeq;
	
	function getSeq(){
		// get values from input
		var seqNum_1 = document.getElementById("t1").value;
		var seqNum_2 = document.getElementById("t2").value;
		
		// create sequence array with input values where we will add the next values 
		var sequence = [seqNum_1,seqNum_2];
		console.log(sequence);
		
		
		var seq_number = document.getElementById("lengthSeq");
		
			// for loop to create sequence and store it an array
			// number cannot be lower than 0, that's when the loop should stop
			for(i = seqNum_1 - seqNum_2; i>=0; i = i - seqNum_2)
				//for(i = seqNum_1 - seqNum_2; i>=0; i = i - (i -1))
				//for(i = seqNum_1 - seqNum_2; i>=0; i = i - seqNum_2)
				//for(i = seq_number[i] - seq_number[i-1]; i>=0; i = i - seq_number[i-1])
				// starting from third number the value should be the subtraction result of the previous two values
				// the code works getting the third number but the third statement in the for loop is not
				// i should be equal to i minus the previous index value of the array
            {
                sequence.push(i);
				console.log(sequence);
            }
			console.log(sequence.length);
			// display sequence length
			seq_number.innerHTML = sequence.length;
			
		return false;
	}
}
