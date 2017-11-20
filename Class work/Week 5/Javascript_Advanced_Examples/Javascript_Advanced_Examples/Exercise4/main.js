var roomIndex = 0;
function OnLoad()
{
		document.getElementById('roomTitle').innerHTML = roomArray[roomIndex].title;
		document.getElementById('roomText').innerHTML = roomArray[roomIndex].text;

		for(var i = 0; i < roomArray[roomIndex].choices.length; i++)
		document.getElementById('roomChoices').innerHTML += "<button onclick='SelectRoom(2)'>" + roomArray[roomIndex].choices[0].text + "</button>";
}
function SelectRoom(num)
	{
		roomIndex = num;
		console.log(roomIndex);
		OnLoad(roomIndex);
	}
