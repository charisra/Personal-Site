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
			var bigspender = new employee ("Maria Bigspender", "Accountant");
			console.log(bigspender);

			var weirdoChoice = prompt("Your longtime top developer" + weirdo.position + ',' + weirdo.name + " messed up your website. You are losing users, sales. What do you do with Mark? 'Fire', 'Confront' him for 1 hour asking why this happend and blaming god for putting this misery your way, 'Tell' him it's ok but he'll have to work hard to fix the issue, 'Cut' 50% of his salary. Answer by typing 1 word with '' ");
				while (weirdoChoice!='Cut' && weirdoChoice!='Fire' && weirdoChoice!='Tell' && weirdoChoice!='Tell'){
					var weirdoChoice = prompt("Your longtime top developer" + weirdo.position + ',' + weirdo.name + " messed up your website. You are losing users, sales. What do you do with Mark? 'Fire', 'Confront' him for 1 hour asking why this happend and blaming god for putting this misery your way, 'Tell' him it's ok but he'll have to work hard to fix the issue, 'Cut' 50% of his salary. Answer by typing 1 word with '' ");
			switch (weirdoChoice){
				case 'Fire':
					totalscore += 10;
					console.log('poor Mark');
					break;
				case 'Confront':
					totalscore = totalscore -5;
					console.log('How much do you value your time?');
					break;
				case 'Tell':
					totalscore =+ 25;
					console.log('You are so calm');
					break;
				case 'Cut':
					totalscore =+ 0;
					console.log('Just 50% ?');
					break;
			}
		}


			}
		else{
			alert("bye");
		}
