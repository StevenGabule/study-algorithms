// ** print a pine tree
/*
							*
						* * *
					* * * * *
				*	* * * * * *
			*	*	* * * * * * *
		*	*	*	* * * * * * * *
	*	*	*	*	* * * * * * * * *

	** Investigation part:
		-> when the current number is odd it will render 2 more *
		-> must be loop based on the height 
*/

function printPineTree(height) {
  for (let i = 0; i <= height; i++) {
    var star = '';
		var space = height - i;

		if (i == 0) {
			for (let q = 0; q < (space+1); q++) {
				star += ' '
			}
			star += '\n'
		}

		for (let w = 1; w <= (space + 1); w++) {
			star += ' '
		}
		var zero = 2 * i + 1;
		for (let e = 0; e < zero; e++) {
			star += "*"
		}
		console.log(star);
  }
}

printPineTree(10);
