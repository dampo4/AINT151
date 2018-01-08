var roomArray = [
	//index 0
	{
		title:'Jungle clearing',
		text:'You awake in a clearing with no recollection of how you got there. The remnants of a cart lay shattered around a nearby tree. Four paths lead out of the clearing in each of the orthogonal directions. The path to the west contains a set of tracks, presumably from the cart. You fathom that this must have been the way that you came from.',
		choices:[
			{
				text:'Go North',
				index:1
			},
			{
				text:'Go East',
				index:2
			},
			{
				text:'Go South',
				index:3
			},
			{
				text:'Go West',
				index:4
			},
			{
				text:'Investigate Cart',
				index:5
			},
		]
	},
	//index 1
	{
		title:'River Bank',
		text:'You emerge from the jungle and find yourself on the bank of a deep river. Without a safe way to cross, you decide against wading through the murky, possibly life threatening waters.',
		choices:[
			{
				text:'Go South',
				index:0
			},
		]
	},
	//index 2
	{
		title:'Village Outskirts',
		text:'Through the trees you notice a more uniform structure of logs and soon realise that these form the outer perimeter wall of a village. As you get closer, you begin to make out human figures armed with spears guarding the entrance.',
		choices:[
			{
				text:'Return to Clearing',
				index:0
			},
			{
				text:'Approach the Guards',
				index:7
			},
		]
	},
	//index 3
	{
		title:'Overgrown Path',
		text:'As you venture further down this path, you notice it starts to narrow as the local foliage works to reclaim this path. You will need some sort of cutting implement if you are to explore further this way.',
		choices:[
			{
				text:'Go North',
				index:0
			},
		]
	},
	//index 4
	{
		title:'Cart Tracks',
		text:'You follow the cart tracks to the west, hoping to find some clues as to who you are or at least some indication of where you came from. However, your hopes are dashed and your curiosity piqued when you find that the cart tracks trail off into impenetrable foliage. You reason to yourself that it would have been impossible for the cart to have come this way yet you are unable to venture further due to the denseness of this area.',
		choices:[
			{
				text:'Go East',
				index:0
			},
		]
	},
	//index 5
	{
		title:'Cart',
		text:'As you approach the cart, you notice a few crates located under the tarp. The wood appears rotten and you reason that a few hard kicks would be enough to break them open.',
		choices:[
			{
				text:'Attempt to open crates',
				index:6,
				changeText1:'There are still a few items left in the cart.',
				changeText2:'The cart is now empty.',
				clickable: 1
			},
			{
				text:'Return to Clearing',
				index:0
			},
		]
	},
	//index 6
	{
		title:'Cart',
		text:'You bring your foot down onto the boxes and they shatter into splinters. Within the rubble you find a few useful supplies.',
		changeText:'You find some useful items still located within the rubble.',
		allItems: false,
		items:[
			{
				item: 'Rope',
				option:'Take Rope',
				pickedUp: false
			},
			{
				item: 'Hammer',
				option:'Take Hammer',
				pickedUp: false
			},
			{
				item: 'Matches',
				option:'Take Matches',
				pickedUp: false
			},
		],
		choices:[
			{
				text:'Return to Clearing',
				index:0
			},
		]
	},
//index 7
{
	title:'Village Entrance',
	text:'The guards soon notice you and raise their spears defensively, their eyes locked onto you. You raise your hands in an attempt to show that you pose no threat and the guards seem to relax slightly.',
	choices:[
		{
			text:'Attempt to communicate with the guards',
			index:8
		},
		{
			text:'Charge at the guards and attack them',
			index:9
		},
	]
},
//index 8
{
	title:'Village Entrance',
	text:"You attempt to ask the guards where you are but the words that escape your mouth are different to the ones you form in your head. However, the guards seem to understand you and respond in the same native tongue which your brain somehow manages to translate. They're inviting you into the village.",
	choices:[
		{
			text:'Follow the guards',
			index:10
		},
	]
},
//index 9
{
	title:'Game Over',
	text:'You foolishly charge at the armed guards and impale yourself on their spears resulting in multiple torn organs and immense blood loss.',
	choices:[
		{
			text:'restart',
		},
	]
},
//index 10
{
title:'Village Center',
text:'Upon entering the village, you notice many houses in disrepair with a small group of people idling near to them. The guards tell you that they have recently been under attack from a large beast and, because of this, much of their infrastructure has been damaged and many of the neighbouring villages have ceased trade with them.',
choices:[
	{
		text:'Talk to the group of people',
		index:11
	},
	{
		text:'return to clearing',
		index:0
	}
]
},
//index 11
{
title:'Damaged Building',
text:'As you approach the group of people, you spot a machete near a pile of freshly cut branches. After introducing yourself to the group, you soon learn of their need for building supplies and tools. You offer to help find them something to help with their building efforts in exchange for use of their machete',
choices:[
	{
		text:'Return To Village Center',
		index:10
	},
],
items:[
	{
		item: 'Machete',
		option:'Trade hammer for machete',
		pickedUp: false
	},
]
},
//index 12
{
title:"Hunter's Outpost",
text:"You eventually arrive at a decrepit hunter's outpost which has clearly been abandoned for some time. The door lays on the ground, off to the side with several large claw marks gouged into the wood. The damage to the door frame suggests it was ripped from its hinges by some unknown entity.",
choices:[
	{
		text:'Enter the shack',
		index:13
	},
	{
		text:'return to clearing',
		index:0
	}
],
},
//index 13
{
title:"Hunter's Shack",
text:'The inside of the shack is a mess with tables and chairs strewn across the room and rotting food on the counter. You initially reel from the stench but eventually regain your composure.<br /> Looking around, you soon notice some useful items located within the shack:<br />* A knife on the counter<br />* An unlit torch on a wall mounted bracket',
choices:[
	{
		text:'Leave The Shack And Return To Clearing',
		index:0
	},
	{
		text:'Investigate the Counter',
		index:14
	},
],
items:[
	{
		item: 'Torch',
		option:'Light torch using matches',
		pickedUp: false
	},
]
},
//index 14
{
title:"Counter",
text:'The counter is extremely dirty; covered in rotting, maggot infested meat and vegetables. Stuck in a slab of rotting meat, however, you find a knife.',
choices:[
	{
		text:'View Room',
		index:13
	},
],
items:[
	{
		item: 'Knife',
		option:'Take Knife',
		pickedUp: false
	},
]
},
//index 15
{
title:"Cave Entrance",
text:'After walking for a while on the other side of the river, you eventually stumble upon a cave entrance. However, it is too dark to investigate without appropriate lighting.',
choices:[
	{
		text:'Enter Cave',
		index:16
	},
],
},
//index 16
{
title:"Cave",
text:"It's too dark to see in here!",
choices:[
	{
		text:'Return to Clearing',
		index:0
	},
],
},
//index 17
{
title:"Den",
text:"As you work your way through the winding tunnels, a sudden sense of dread washes over you. A pounding headache develops and you start to feel weak. However, as you are about to sit down and rest, you stumble into a large open area. Your torch light only barely reaches the walls and you struggle to make out much detail. You soon notice that surrounding the room are mountains of bones and dried pools of blood are in abundance, lining the floor. The stench of rotting corpses causes you to retch and you collapse to the floor. You begin to feel an immense pain working its way through your entire body as bones snap and rejoin, growing longer. You feel your body shift and change as you begin to mould into something inhuman.",
choices:[
	{
		text:'Pass out from exhaustion',
		index:18
	},
],
},
//index 18
{
title:"Den",
text:"You wake up some time later, your whole body aching and covered in a thick layer of fur. You look down at your hands which have grown substantially in size with fingernails being replaced with claws. Within minutes you become overwhelmed by a strong sense of bloodlust as your stomach rumbles and you trudge off into the night in search of food.",
choices:[
	{
		text:'The End',
	},
],
},
//index 19
{
title:"Den",
text:"Fearing what you may become, you withdraw your knife, hands shaking, and plunge it directly into your neck. You fall to the floor gasping for air and shudder as your blood pools around you. However, you die in the knowledge that you will no longer bring harm to another person.",
choices:[
	{
		text:'The End',
	},
],
},
]
