
//Exercise 8.9
function rysujChoinke(branch) {
	if (branch>0) {
		for (var i=1; i<=branch; i++) {
			var star='';
				for (var j=i; j<=i*2-1; j++) {
					star+='*';
				}
			console.log(star);
		}
	}
	
	else {
		console.log('Parametr funkcji mniejszy lub równy zero.');
	}
}

rysujChoinke(5);
rysujChoinke(-2);
rysujChoinke(2);
rysujChoinke(0);
rysujChoinke(20);