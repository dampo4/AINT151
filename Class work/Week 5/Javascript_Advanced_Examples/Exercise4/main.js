function OnLoad()
{
	SelectRoom(0);
}

function SelectRoom(roomIndex)
{

	roomTitle.innerHTML = roomArray[roomIndex].title;
	roomText.innerHTML = roomArray[roomIndex].text;

	document.getElementById('roomChoices').innerHTML = "";

	for (var i = 0; i < roomArray[roomIndex].choices.length; i++){
		document.getElementById('roomChoices').innerHTML += "<button onClick='SelectRoom("+roomArray[roomIndex].choices[i].index+")'>"  + roomArray[roomIndex].choices[i].text + "</button>";
	}
}
