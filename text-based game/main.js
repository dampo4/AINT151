var items = [];

function OnLoad()
{
	SelectRoom(0);
}

function SelectRoom(roomIndex)
{
	RemoveItemOnUse(roomIndex);
	//displays room name and description
	roomTitle.innerHTML = roomArray[roomIndex].title;
	roomText.innerHTML = roomArray[roomIndex].text;

	//resets room choices
	roomChoices.innerHTML = "";
	roomItems.innerHTML = "";

	//displays items in the room and calls the PickUpItem function
	if (roomArray[roomIndex].items != null) {
		for (var i = 0; i < roomArray[roomIndex].items.length; i++){
			document.getElementById('roomItems').innerHTML += "<button onClick='PickUpItem("+roomIndex+","+i+")'>"  + roomArray[roomIndex].items[i].option + "</button>";
		}
	}

	//displays choices to move to different rooms
	for (var i = 0; i < roomArray[roomIndex].choices.length; i++)
	{
		if(roomArray[roomIndex].choices[i].clickable != null)
		{
			if(roomArray[roomIndex].choices[i].clickable > 0)
			{
				document.getElementById('roomChoices').innerHTML += "<button onClick='Control("+roomArray[roomIndex].choices[i].index+","+roomIndex+","+i+")'>"  + roomArray[roomIndex].choices[i].text + "</button>";
		 	}
		}
		else if (roomIndex == 3 && items.indexOf('Machete') != -1) {
			document.getElementById('roomChoices').innerHTML += "<button onClick='Control("+roomArray[roomIndex].choices[i].index+","+roomIndex+","+i+")'>"  + roomArray[roomIndex].choices[i].text + "</button>";
			document.getElementById('roomChoices').innerHTML += "<button onClick='Control("+12+","+3+","+i+")'>"  + 'Use the machete to carve a path' + "</button>";
		}
		else if (roomIndex == 1 && items.indexOf('Rope') != -1) {
			document.getElementById('roomChoices').innerHTML += "<button onClick='Control("+roomArray[roomIndex].choices[i].index+","+roomIndex+","+i+")'>"  + roomArray[roomIndex].choices[i].text + "</button>";
			document.getElementById('roomChoices').innerHTML += "<button onClick='Control("+15+","+1+","+i+")'>"  + 'Lasso a branch and swing across' + "</button>";
		}
		else if (roomIndex == 16 && items.indexOf('Torch') != -1) {
			document.getElementById('roomChoices').innerHTML += "<button onClick='Control("+roomArray[roomIndex].choices[i].index+","+roomIndex+","+i+")'>"  + roomArray[roomIndex].choices[i].text + "</button>";
			document.getElementById('roomChoices').innerHTML += "<button onClick='Control("+17+","+16+","+i+")'>"  + 'Explore deeper into the cave' + "</button>";
		}
		else if (roomIndex == 17 && items.indexOf('Knife') != -1) {
			document.getElementById('roomChoices').innerHTML += "<button onClick='Control("+roomArray[roomIndex].choices[i].index+","+roomIndex+","+i+")'>"  + roomArray[roomIndex].choices[i].text + "</button>";
			document.getElementById('roomChoices').innerHTML += "<button onClick='Control("+19+","+17+","+i+")'>"  + 'Kill yourself with your knife' + "</button>";
		}
		else
		{
			document.getElementById('roomChoices').innerHTML += "<button onClick='Control("+roomArray[roomIndex].choices[i].index+","+roomIndex+","+i+")'>"  + roomArray[roomIndex].choices[i].text + "</button>";
		}
}


	roomArray[0].text = 'You return to the clearing. You hear unfamiliar growls from deep within the jungle which set you on edge.'
}

function Control(room, currentIndex, i)
{
	if(currentIndex == 9 || currentIndex == 18 || currentIndex == 19)
	{
			location.reload();
	}
	else{
			Clickable(currentIndex, i);
			ChangeText(currentIndex, i);
			SelectRoom(room);
	}
}

function PickUpItem(roomIndex, i)
{
	//checks to see if the item has already been picked up
	if (roomArray[roomIndex].items[i].pickedUp == false)
 	{
		if(roomIndex == 11 && items.indexOf('Hammer') == -1)
		{
			alert("You don't have a hammer yet");
		}
		else if(roomIndex == 13 && items.indexOf('Matches') == -1)
		{
			alert("You don't have any matches to light the torch with");
		}
		else {
		//adds the item to the player's inventory
		document.getElementById('items').innerHTML += "<li id="+ roomArray[roomIndex].items[i].item + ">" + roomArray[roomIndex].items[i].item + "</li>";
		roomArray[roomIndex].items[i].pickedUp = true;
		items.push(roomArray[roomIndex].items[i].item);
			if(roomIndex == 11)
			{
				var index = items.indexOf('Hammer');
				items.splice(index, 1);
				var list = document.getElementById("items");
				list.removeChild(list.childNodes[index]);
				roomArray[11].text = 'The villagers smile at you as you approach but are too busy with work to stop and chat.';
			}
			else if(roomIndex == 13)
			{
				var index = items.indexOf('Matches');
				items.splice(index, 1, 'Torch');
				var list = document.getElementById("items");
				list.removeChild(list.childNodes[index]);
			}
							console.log(items);
	}
}
	else {
		alert("You have already picked up this item!");
	}
	if(roomArray[6].items[0].pickedUp && roomArray[6].items[1].pickedUp && roomArray[6].items[2].pickedUp && roomArray[6].items[3].pickedUp)
	{
		roomArray[6].allItems = true;
	}
}

function Clickable(roomIndex, i)
{
		if(roomIndex = 6 && roomArray[6].allItems)
			roomArray[5].choices[0].clickable -= 1;
}

function ChangeText(roomIndex, i)
{
		if(roomIndex == 6)
		{
			roomArray[5].text = roomArray[5].choices[0].changeText1;
			roomArray[6].text = roomArray[6].changeText;
			roomArray[5].choices[0].text = "View crate remnants"
			if(roomArray[6].allItems)
		  {
			  roomArray[5].text = roomArray[5].choices[0].changeText2;
		  }
		}
		if (roomIndex == 10) {
			roomArray[0].choices[1].index = 10;
			roomArray[10].text = 'You return to the center of the village';
		}
		if (roomIndex == 15) {
			roomArray[0].choices[0].index = 15;
		}
		if (items.indexOf('Torch') != -1)
		{
			roomArray[16].text = 'Your lit torch cuts through the darkness and you see a long winding tunnel ahead of you. As night is falling, you decide it is best to venture deeper and rest under shelter for the night.'
		}
		if (items.indexOf('Knife') != -1) {
			roomArray[14].text = 'The counter is extremely dirty; covered in rotting, maggot infested meat and vegetables.'
		}
		if (roomIndex == 12) {
			roomArray[0].choices[2].index = 12;
		}
}
function RemoveItemOnUse(roomIndex)
{
	if(roomIndex == 15 && items.indexOf('Rope') != -1)
	{
		var index = items.indexOf('Rope');
		items.splice(index, 1);
		var list = document.getElementById("items");
		list.removeChild(list.childNodes[index]);
	}
	if(roomIndex == 12 && items.indexOf('Machete') != -1)
	{
		var index = items.indexOf('Machete');
		items.splice(index, 1);
		var list = document.getElementById("items");
		list.removeChild(list.childNodes[index]);
	}
}
