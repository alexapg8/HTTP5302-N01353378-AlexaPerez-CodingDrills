window.onload=function () {
	var formHandle = document.forms[0];
	
	formHandle.onsubmit = getVotes;
	
	function getVotes(){
		// get values from input
		var vote_num = document.getElementById("num_votes").value;
		var vote_seq = document.getElementById("seq_votes").value;
		
		// count how many times does "A" and "B" appear in vote_seq	
		var A_seq = (vote_seq.match(/A/g) || []).length;
		console.log(A_seq);
		
		var B_seq = (vote_seq.match(/B/g) || []).length;
		console.log(B_seq);
		
		var vote_winner = document.getElementById("voteWinner");
		
		// we verify that the number of votes matches the length of the sequence of votes
		if (vote_seq.length == vote_num){
		
			// if A appears more than B
			if (A_seq > B_seq) {
				vote_winner.innerHTML = "A";
				
			// if B appears more than A
			} else if (A_seq < B_seq) {
				vote_winner.innerHTML = "B";
			} else {
			// if its a tie
				vote_winner.innerHTML = "Tie";
			}
		} else {
			vote_winner.innerHTML = "The number of votes does not match the length of sequence.";
		}
		return false;
	}
}