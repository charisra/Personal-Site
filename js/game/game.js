alert('Hello, welcome to the Best Boss game. \nThis game intends to give you an estimation of how good of a boss you are or would be on a scale up to 100.');

	var userInput = confirm('The game takes you through some simple but important scenarios, similar to real-life. Are you ready to start?');
		if (userInput === true){
			alert("Ok, let's do this ! \n \n Tip: Think like a boss, act like a boss");
		
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

			var weirdoChoice = prompt("Your company, an early stage tech startup has 3 employees currently: \n \n *Mark Weirdo - Developer \n *Steve Arrogant - Marketing Director \n *Sofia Bigspender - Accountant \n \n Your longtime top developer" + weirdo.position + "," + weirdo.name + " messed up your website. You are losing users, sales. What do you do with Mark? 'Fire', 'Confront' him for 1 hour asking why this happend and blaming god for putting this misery your way, 'Tell' him it's ok but he'll have to work hard to fix the issue, 'Cut' 50% of his salary. Answer by typing 1 word with '' ").toUpperCase();
				while (weirdoChoice!='CUT' && weirdoChoice!='FIRE' && weirdoChoice!='CONFRONT' && weirdoChoice!='TELL'){
					var weirdoChoice = prompt("Your longtime top developer" + weirdo.position + ',' + weirdo.name + " messed up your website. You are losing users, sales. What do you do with Mark? 'Fire', 'Confront' him for 1 hour asking why this happend and blaming god for putting this misery your way. For some reason all the bad thing happen to you, you are just unlucky! 'Tell' him it's ok but he'll have to work hard to fix the issue, 'Cut' 50% of his salary. Answer by typing 1 of the words above ").toUpperCase();
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
						if (checkResponse1.indexOf("Sofia")>-1){
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
				var profits = prompt ("Your business is doing very well. Starting from zero (0) a couple of years ago, you have managed to start earning profits ! Sofia presents you the annual balance sheet that says you had $217,899 income last year, up %768 while expenses increased just 39%, to reach $192,224. \n With your current growth rates and conservative estimations, your startup should become much more profitable next year and on its way to more success. \n \n What do you plan for next year? \n a) Push all employees to perform better, work more hours per day and on Saturdays. You have to keep on restraining expenses so you can have more money as a boss of the company. You want to buy that new car after all. \n b) You give a %20 bonus-raise to your employees, spend all your profits on business-bonding activities. You take your employees to the best restaurant for dinner and for a group-skiing excursion in the Alpes. \n You target to re-invest 90% of your prodits back to the company, hiring those 2 extra employees you needed to fill the holes your team had. You expect that with 2 new team members, your company's growth will be even more boosted. \n The remaining 10% goes to bonuses of your best employees and for you having fun with & without your team. \n\n Answer with a, b or c").toUpperCase();
					while (profits !='A' && profits !='B' && profits !='C'){
				var profits = prompt ("Your business is doing very well. Starting from zero (0) a couple of years ago, you have managed to start earning profits ! Sofia presents you the annual balance sheet that says you had $217,899 income last year, up %768 while expenses increased just 39%, to reach $192,224. \n With your current growth rates and conservative estimations, your startup should become much more profitable next year and on its way to more success. \n \n What do you plan for next year? \n a) Push all employees to perform better, work more hours per day and on Saturdays. You have to keep on restraining expenses so you can have more money as a boss of the company. You want to buy that new car after all. \n b) You give a %20 bonus-raise to your employees, spend all your profits on business-bonding activities. You take your employees to the best restaurant for dinner and for a group-skiing excursion in the Alpes. \n You target to re-invest 90% of your prodits back to the company, hiring those 2 extra employees you needed to fill the holes your team had. You expect that with 2 new team members, your company's growth will be even more boosted. \n The remaining 10% goes to bonuses of your best employees and for you having fun with & without your team. \n\n Answer with a, b or c").toUpperCase();
				}

						if (profits = 'A'){
							totalscore += 0
							console.log('Greedy bosses!')
						}
						if (profits = 'B'){
							totalscore += 10
							console.log('Happy skiing')
						}
						if (profits = 'C'){
							totalscore += 25
							console.log('Niceee.. ;)')
						}


		alert("Your final score is: " + totalscore);

			}
		else{
			alert("Bye Bye");
		}
