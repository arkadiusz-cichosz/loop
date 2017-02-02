//Exercise 8.9
function drawTree(branch) {
	if (branch > 0) {
		for (var i = 1; i <= branch; i++) {
			var star='';
				for (var j = i; j <= i * 2-1; j++) {
					star+='*';
				}
			console.log(star);
		}
	}
	
	else {
		console.log('Parametr funkcji mniejszy lub równy zero.');
	}
}

drawTree(5);
drawTree(-2);
drawTree(2);
drawTree(0);
drawTree(20);
