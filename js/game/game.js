alert('Hello, welcome to the Best Boss game.');

	var userInput = confirm('Are you ready to start?');
		if (userInput === true){
			alert("Ok, let's do this !");
		
			var totalscore = 0;
			function employee(name,position){
				this.name=name;
				this.position=position;
			}
			var weirdo = new employee("Mark Weirdo", "Programmer");
			var arrogant = new employee("Steve Arrogant", "Marketing Director");
			var bigspender = new employee ("Sofia Bigspender", "Accountant");
			var employees = ["Mark","Steve","Sofia"];
			for (i=0; i<3; i++){
			console.log(employees[i]);
			}
			console.log('Step1 Totalscore = ' + totalscore);

			var weirdoChoice = prompt("Your company, an early stage tech startup has 3 employees currently: \n *Mark Weirdo - Developer \n *Steve Arrogant - Marketing Director \n *Sofia Bigspender - Accountant \n Your longtime top developer" + weirdo.position + "," + weirdo.name + " messed up your website. You are losing users, sales. What do you do with Mark? 'Fire', 'Confront' him for 1 hour asking why this happend and blaming god for putting this misery your way, 'Tell' him it's ok but he'll have to work hard to fix the issue, 'Cut' 50% of his salary. Answer by typing 1 word with '' ").toUpperCase();
				while (weirdoChoice!='CUT' && weirdoChoice!='FIRE' && weirdoChoice!='CONFRONT' && weirdoChoice!='TELL'){
					var weirdoChoice = prompt("Your longtime top developer" + weirdo.position + ',' + weirdo.name + " messed up your website. You are losing users, sales. What do you do with Mark? 'Fire', 'Confront' him for 1 hour asking why this happend and blaming god for putting this misery your way, 'Tell' him it's ok but he'll have to work hard to fix the issue, 'Cut' 50% of his salary. Answer by typing 1 of the words above ").toUpperCase();
				}

			switch (weirdoChoice){
				case 'FIRE':
					totalscore += 10;
					console.log("poor Mark");
					break;
				case 'CONFRONT':
					totalscore -= 5;
					console.log('How much do you value your time?');
					break;
				case 'TELL':
					totalscore +=  25;
					console.log('You are so calm');
					break;
				case 'CUT':
					totalscore +=  0;
					console.log('Just 50% ?');
					break;

		}
			console.log("Step 2 Totalscore = "+ totalscore);

			var check = prompt("Good Boss Check !\n Do you remember the first names of your 3 employees?\n Yes or No?").toUpperCase();
				while (check !='YES' && check !='NO'){
					var check = prompt ("Good Boss Check.\n Do you remember the first names of your 3 employees?\n Yes or No?").toUpperCase();
				}
					if (check='YES'){
						console.log('Wow, you have some guts!');
						var checkResponse1 = prompt('Ok Mr.Fantastic Boss, write the 3 first names separated by a comma');
						if (checkResponse1.indexOf("Steve")>-1){
							totalscore += 10
						}
						if (checkResponse1.indexOf("Mark")>-1){
							totalscore += 10
						}
						if (checkResponse1.indexOf("Sophia")>-1){
							totalscore += 10
						}
						/*alert(checkResponse1.indexOf("Steve") > -1); */

						/*if (checkResponse1 == 'Mark,Steve,Sofia' || checkResponse1 == 'Mark, Steve, Sofia' || checkResponse1 == 'Steve,Mark,,Sofia'){
							console.log('Nice');
							totalscore += 25;
						} 
					else {
						totalscore-=5;
					} */
					console.log("Step 3 Totalscore = "+ totalscore);
					}
		alert("Your final score is: " + totalscore);

			}
		else{
			alert("bye");
		}
