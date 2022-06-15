const localRiddles = [
    {
		"id": "0",
		"question": "Which letter of the alphabet has the most water?",
		"answer": "C"
	},
	{
		"id": "1",
		"question": "What kind of dog keeps the best time?",
		"answer": "Watchdog"
	},
	{
		"id": "2",
		"question": "What time of day, when written in a capital letters, is the same forwards, backwards and upside down?",
		"answer": "Noon"
	},
	{
		"id": "3",
		"question": "Laughing Out",
		"answer": "Loud"
	},
	{
		"id": "4",
		"question": "A tasty reward given to well behaved dogs and kids",
		"answer": "Treat"
	},
	{
		"id": "5",
		"question": "A caribbean shape that makes ships disappear",
		"answer": "Triangle"
	},
	{
		"id": "6",
		"question": "It takes two people to do this",
		"answer": "Tango"
	},
	{
		"id": "7",
		"question": "What has a face and two hands but no arms or legs?",
		"answer": "Clock"
	},
	{
		"id": "8",
		"question": "What five-letter word becomes shorter when you add two letters to it?",
		"answer": "Short"
	},
	{
		"id": "9",
		"question": "What word begins and ends with an 'E' but only has one letter?",
		"answer": "Envelope"
	},
	{
		"id": "10",
		"question": "What has a neck but no head?",
		"answer": "Bottle"
	},
	{
		"id": "11",
		"question": "What type of cheese is made backwards?",
		"answer": "Edam"
	},
	{
		"id": "12",
		"question": "What gets wetter as it dries?",
		"answer": "Towel"
	},
	{
		"id": "13",
		"question": "Which letter of the alphabet has the most water?",
		"answer": "C"
	},
	{
		"id": "14",
		"question": "What starts with a 'P', ends with an 'E' and has thousands of letters?",
		"answer": "Post Office"
	},
	{
		"id": "15",
		"question": "What has to be broken before you can eat it?",
		"answer": "Egg"
	},
	{
		"id": "16",
		"question": "What begins with T, ends with T and has T in it?",
		"answer": "Teapot"
	},
	{
		"id": "17",
		"question": "Teddy bears are never hungry because they are always what?",
		"answer": "Stuffed"
	},
	{
		"id": "18",
		"question": "What belongs to you but others use it more than you do?",
		"answer": "Name"
	},
	{
		"id": "19",
		"question": "The more you take aways, the larger it becomes? What is it?",
		"answer": "Hole"
	},
	{
		"id": "20",
		"question": "What is full of holes, but can still hold a lot of water?",
		"answer": "Sponge"
	},
	{
		"id": "21",
		"question": "Where do fish keep their money?",
		"answer": "Riverbank"
	},
	{
		"id": "22",
		"question": "What do you get when you cross an automobile with a household animal?",
		"answer": "Carpet"
	},
	{
		"id": "23",
		"question": "Mary's father has 4 children; three are named Nana, Nene, and Nini. So what is the 4th child's name?",
		"answer": "Mary"
	},
	{
		"id": "24",
		"question": "What bone has a sense of humor?",
		"answer": "Humorous"
	},
	{
		"id": "25",
		"question": "The more of them you take, the more you leave behind. What are they?",
		"answer": "Footsteps"
	},
	{
		"id": "26",
		"question": "What is that you will break everytime you name it?",
		"answer": "Silence"
	},
	{
		"id": "27",
		"question": "What has four fingers and one thumb, but is not alive?",
		"answer": "Glove"
	},
	{
		"id": "28",
		"question": "What flies without wings?",
		"answer": "Time"
	},
	{
		"id": "29",
		"question": "What turns everything around, but does not move?",
		"answer": "Mirror"
	},
	{
		"id": "30",
		"question": "What is half of two plus two?",
		"answer": "Three"
	},
	{
		"id": "31",
		"question": "What word looks the same upside down and backwards?",
		"answer": "Swims"
	},
	{
		"id": "32",
		"question": "What kind of fish chases a mouse?",
		"answer": "Catfish"
	},
	{
		"id": "33",
		"question": "Your mother's brother's only brother-in-law is asleep on your coach. Who is asleep on your couch?",
		"answer": "Dad"
	},
	{
		"id": "34",
		"question": "What's the difference between here and there?",
		"answer": "T"
	},
	{
		"id": "35",
		"question": "What goes up and down without moving?",
		"answer": "Stairs"
	},
	{
		"id": "36",
		"question": "Take off my skin and I won't cry, but you will, What am I?",
		"answer": "Onion"
	},
	{
		"id": "37",
		"question": "What doesn't get any wetter, no matter how much rain falls on it?",
		"answer": "Water"
	},
	{
		"id": "38",
		"question": "What sits in a corner while traveling all around the world?",
		"answer": "Stamp"
	},
	{
		"id": "39",
		"question": "I have a face, two arms, and two hands, yet I can not move. I count to twelve, yet I can not speak. I can still tell you something everyday.",
		"answer": "Clock"
	},
	{
		"id": "40",
		"question": "You enter a dark room. You have only one match. There is an oil lamp, a furnace, and a stove in the room. Which would you light first?",
		"answer": "Match"
	},
	{
		"id": "41",
		"question": "What is round on both ends and hi in the middle?",
		"answer": "Ohio"
	},
	{
		"id": "42",
		"question": "What do you call a dog that sweats so much?",
		"answer": "Hotdog"
	},
	{
		"id": "43",
		"question": "What do you call a rabbit with fleas?",
		"answer": "Bugs Bunny"
	},
	{
		"id": "44",
		"question": "What rains at the north pole?",
		"answer": "Reindeer"
	},
	{
		"id": "45",
		"question": "What kind of apple has a short temper?",
		"answer": "Crabapple"
	},
	{
		"id": "46",
		"question": "What do you do with a dead chemist?",
		"answer": "Barium"
	},
	{
		"id": "47",
		"question": "What calls for help, when written in capital letters, is the same forwards, backwards and upside down?",
		"answer": "SOS"
	},
	{
		"id": "48",
		"question": "What body part is pronounced as one letter but written with three, only two different letters are used?",
		"answer": "Eye"
	},
	{
		"id": "49",
		"question": "What is 2+2? What is 4+4? What is 8+8? What is 16+16? Pick a number between 12 and 5",
		"answer": "Seven"
	},
	{
		"id": "50",
		"question": "Feed me and I live, give me something to drink and i'll die, What am I?",
		"answer": "Fire"
	},
	{
		"id": "51",
		"question": "What keeps things green and keeps kids occupied in the summertime?",
		"answer": "Sprinkler"
	},
	{
		"id": "52",
		"question": "Old Mcdonald had this",
		"answer": "Farm"
	},
	{
		"id": "53",
		"question": "Poorly behaved children often find themselves sitting in these",
		"answer": "Corner"
	},
	{
		"id": "54",
		"question": "Brings you may flowers",
		"answer": "Showers"
	},
	{
		"id": "55",
		"question": "A shower that lights up the sky",
		"answer": "Meteor"
	},
	{
		"id": "56",
		"question": "Longer than a decade and shorter than a milennium",
		"answer": "Century"
	},
	{
		"id": "57",
		"question": "Rolling on floor",
		"answer": "Laughing"
	},
	{
		"id": "58",
		"question": "There are four of these, but everyone's favourite seems to be spades",
		"answer": "Ace"
	},
	{
		"id": "59",
		"question": "Rabbits do this to carrots and Jason Mraz does this to ears",
		"answer": "Nibble"
	},
	{
		"id": "60",
		"question": "These minerals are vital to your health",
		"answer": "Vitamin"
	},
	{
		"id": "61",
		"question": "Commits friendly home invasions one night a year",
		"answer": "Santa claus"
	},
	{
		"id": "62",
		"question": "Treats said to be based on a shephero's staff",
		"answer": "Candy cane"
	},
	{
		"id": "63",
		"question": "Everyone claims to know a way to stop these involuntary contractions but none of them work",
		"answer": "Hiccup"
	},
	{
		"id": "64",
		"question": "Has 4 lucky leaves",
		"answer": "Shamrock"
	},
	{
		"id": "65",
		"question": "One of the best things you can hope for after whacking a ball with a stick",
		"answer": "Home run"
	},
	{
		"id": "66",
		"question": "They put the heat in pop tarts",
		"answer": "Toaster"
	},
	{
		"id": "67",
		"question": "What has a ring, but no finger?",
		"answer": "Telephone"
	},
	{
		"id": "68",
		"question": "What has four legs, but can't walk?",
		"answer": "Table"
	},
	{
		"id": "69",
		"question": "What is higher without the head, than with it?",
		"answer": "Pillow"
	},
	{
		"id": "70",
		"question": "What is harder to catch the faster you run?",
		"answer": "Breath"
	},
	{
		"id": "71",
		"question": "What invention lets you look right through a wall?",
		"answer": "Window"
	},
	{
		"id": "72",
		"question": "What is that you will break everytime you name it?",
		"answer": "Silence"
	},
	{
		"id": "73",
		"question": "What is made of wood, but can't be sawed?",
		"answer": "Sawdust"
	},
	{
		"id": "74",
		"question": "What is a witch's favorite school subject?",
		"answer": "Spelling"
	},
	{
		"id": "75",
		"question": "What is an aliens favourite sport?",
		"answer": "Spaceball"
	},
	{
		"id": "76",
		"question": "What is the saddest fruit?",
		"answer": "Blueberry"
	},
	{
		"id": "77",
		"question": "What is black and white and read all over?",
		"answer": "Newspaper"
	},
	{
		"id": "78",
		"question": "What is easy to get into, and hard to get out of?",
		"answer": "Trouble"
	},
	{
		"id": "79",
		"question": "What is there more of the less you see?",
		"answer": "Darkness"
	},
	{
		"id": "80",
		"question": "If two hours ago, it was as long after one o'clock in the afternoon as it was before one o'clock in the morning, what time would it be now?",
		"answer": "Nine"
	},
	{
		"id": "81",
		"question": "What is as big as you are and yet does not weigh anything?",
		"answer": "Shadow"
	},
	{
		"id": "82",
		"question": "What types of words are these: Madam, Civic, Eye, Level?",
		"answer": "Palindrome"
	},
	{
		"id": "83",
		"question": "When you have me, you feel like sharing me. But, if you do share me, you don't have me. What am I?",
		"answer": "Secret"
	},
	{
		"id": "84",
		"question": "The person who makes it has no need for it. The person who purchases it does not use it. The person who does use it does not know he or she is. What is it?",
		"answer": "Coffin"
	},
	{
		"id": "85",
		"question": "It is an insect, and the first part of its name is the name of another insect. What is it?",
		"answer": "Beetle"
	},
	{
		"id": "86",
		"question": "What english word retains the same pronunciation, even after you take away four of its five letters?",
		"answer": "Queue"
	},
	{
		"id": "87",
		"question": "What becomes white when it is dirty?",
		"answer": "Blackboard"
	},
	{
		"id": "88",
		"question": "What word of five letters has only one left when two letters are removed?",
		"answer": "Stone"
	},
	{
		"id": "89",
		"question": "How many 9's are there between 1 and 100?",
		"answer": "Twenty"
	},
	{
		"id": "90",
		"question": "Which vehicle is spelled the same forwards and backwards?",
		"answer": "Racecar"
	},
	{
		"id": "91",
		"question": "I am lighter than air but a million men cannot lift me up, What am I?",
		"answer": "Bubble"
	},
	{
		"id": "92",
		"question": "Five men were eating apples, a finished before B, but behind C. D finished before E, but behind B. What was the finishing order?",
		"answer": "CABDE"
	},
	{
		"id": "93",
		"question": "David's father has three sons: Snap, Crackle, and ?",
		"answer": "David"
	},
	{
		"id": "94",
		"question": "It is everything to someone, and nothing to everyone else. What is it?",
		"answer": "Mind"
	},
	{
		"id": "95",
		"question": "What has a mouth but can't chew?",
		"answer": "River"
	},
	{
		"id": "96",
		"question": "If it is two hours later, then it will take half as much time till it's midnight as it would be if it were an hour later. What time is it?",
		"answer": "Nine"
	},
	{
		"id": "97",
		"question": "Forward I am heavy, backwards I am not. What am I?",
		"answer": "Ton"
	},
	{
		"id": "98",
		"question": "What object has keys that open no locks, space but no room, and you can enter but not go in?",
		"answer": "Keyboard"
	},
    {
        "riddle": "What begins with T, ends with T, and has T in it?",
        "answer": "Teapot"
      },
      {
        "riddle": "Nobody has ever walked this way. What way is that?",
        "answer": "The Milky Way"
      },
      {
        "riddle": "What is orange and sounds like a parrot?",
        "answer": "Carrot"
      },
      {
        "riddle": "What kind of room has no doors or windows?",
        "answer": "Mushroom"
      },
      {
        "riddle": "What starts with an E, ends with an E and only has one letter in it?",
        "answer": "Envelope"
      },
      {
        "riddle": "What has no beginning and no end”. ",
        "answer": "Death"
      },
      {
        "riddle": "What has one eye but cannot see”. ",
        "answer": "Needle"
      },
      {
        "riddle":"What man cannot live inside a house?",
        "answer":"Snowman"
      },
      {
        "riddle":"The part of the computer that you can kick",
        "answer":"Hardware"
      },
      {
        "riddle":"Who makes it, has no need of it. Who buyes it, has no use for it Who uses it can neither.",
        "answer":"A coffin"
      },
      {
        "riddle":"I don't have eyes, but once I did see. Once I had thoughts, but now I'm white and empty.",
        "answer":"Skull."
      },
      {
        "riddle":"Imagine you are in a sinking rowboat surrounded by sharks. How would you survive?",
        "answer":"Quit imagining"
      },
      {
        "riddle":"I always come down and never ever go up? Think, think and think! We all just love it.",
        "answer":"Rain"
      },
      {
        "riddle": "I am always hungry and will die if not fed, but whatever I touch will soon turn red. What am I?",
        "answer": "fire"
      },
      {
        "riddle": " I have lakes with no water, mountains with no stone and cities with no buildings. What am I?",
        "answer": "a map"
      },
      {
        "riddle": "I have branches, but no fruit, trunk or leaves. What am I?",
        "answer": "A Bank"
      },
      {
        "riddle":" If you drop me I’m sure to crack, but give me a smile and I’ll always smile back. What am I?",
        "answer":"Mirror"
      },
      {
        "riddle": "Thirty white horses on a red hill, First they champ, Then they stamp, Then they stand still. ",
        "answer": "Teeth"
      },
      {
        "riddle": "This thing all things devours: Birds, beasts, trees, flowers; Gnaws iron, bites steel; Grinds hard stones to meal; Slays king, ruins town, And beats high mountain down",
        "answer": "Time"
      },
      {
        "riddle": "What has roots as nobody sees, Is taller than trees Up, up it goes, And yet never grows?",
        "answer": "Mountain"
      },
      {
        "riddle": "No-legs lay on one-leg, two legs sat near on three legs, four legs got some.",
        "answer": "Fish on a little one-legged table, man at table sitting on a three-legged stool, the cat gets the bones"
      },
      {
        "riddle": "An eye in a blue face Saw an eye in a green face. 'That eye is like to this eye' Said the first eye, 'But in low place Not in high place.'",
        "answer": "Sun shining on daisies which are growing in a field"
      },
      {
        "riddle": "What month of an year has 28 days?",
        "answer": "All of them"
      },
      {
        "riddle": "Alive without breath, As cold as death; Never thirsty, ever drinking, All in mail never clinking",
        "answer": "Fish"
      },
      {
        "riddle": "It cannot be seen, cannot be felt, Cannot be heard, cannot be smelt. It lies behind stars and under hills, And empty holes it fills. It comes first and follows after, Ends life, kills laughter",
        "answer": "Dark"
      },
      {
        "riddle": "Thirty white horses on a red hill, First they champ, Then they stamp, Then they stand still. ",
        "answer": "Teeth"
      },
      {
        "riddle": "A box without hinges, key or lid, Yet golden treasure inside is hid.",
        "answer": "Egg"
      },
      {
        "riddle": "Voiceless it cries, Wingless flutters, Toothless bites, Mouthless mutters.",
        "answer": "Wind"
      },
      {
        "riddle": "What has to be broken before you can use it?",
        "answer": "Egg"
      },
      {
        "riddle": "What is always in front of you but can’t be seen?",
        "answer": "The future"
      },
      {
        "riddle": "It goes up and down the stairs without moving.",
        "answer": "Carpet"
      },
      {
        "riddle": "The more there is the less you see.",
        "answer": "Darkness"
      },
      {
        "riddle": "A doctor and a bus driver are both in love with the same woman, an attractive girl named Sarah. The bus driver had to go on a long bus trip that would last a week. Before he left, he gave Sarah seven apples. Why?",
        "answer": "An apple a day keeps the doctor away!"
      },
      {
        "riddle": "What has hands but cannot clap?",
        "answer": "A clock"
      },
      {
        "riddle": "What goes though towns and over hills but never moves?",
        "answer": "Roads!"
      },
      {
        "riddle": "How Long is a Chinese name?",
        "answer": "How Long IS a Chinese name."
      },
      {
        "riddle": "How can a son marry his mother?",
        "answer": "The son is a priest who performed the marriage ceremony."
      },
      {
        "riddle": "Two fathers and two sons walk into a candy store. They each buy something for $0.50 but they only spent $1.50. How is that possible?",
        "answer": "One grandfather, one father and one son makes two fathers and two sons."
      },
      {
        "riddle": "I am lighter than air but a hundred people cannot lift me. Careful, I am fragile. What am I?",
        "answer": "A bubble"
      },
      {
        "riddle": "What month of an year has 28 days?",
        "answer": "All of them"
      },
      {
        "riddle": " What question can you never answer yes to?",
        "answer": "Are you asleep yet?"
      },
      {
        "riddle": "There’s a one-story house in which everything is yellow. Yellow walls, yellow doors, yellow furniture. What color are the stairs?",
        "answer": "There aren’t any—it’s a one-story house."
      },
      {
        "riddle": "What gets wet while drying?",
        "answer": "A towell"
      },
      {
        "riddle": " What can’t talk but will reply when spoken to?",
        "answer": "An echo"
      },
      {
        "riddle": "I have branches, but no fruit, trunk or leaves. What am I?",
        "answer": "A bank"
      },
      {
        "riddle": "I'm tall when I'm young and I'm short when I'm old. What am I?",
        "answer": "A candle"
      },
      {
        "riddle": "What can you break, even if you never pick it up or touch it?",
        "answer": "Promise"
      },
      {
        "riddle": ": A man who was outside in the rain without an umbrella or hat didn’t get a single hair on his head wet. Why?",
        "answer": "He was bald"
      },
      {
        "riddle": "I shave every day, but my beard stays the same. What am I?",
        "answer": "Barber"
      },
      {
        "riddle": "I have branches, but no fruit, trunk or leaves. What am I?",
        "answer": "Bank"
      },
      {
        "riddle": "What is black when it’s clean and white when it’s dirty?",
        "answer": "Chalkboard"
      },
      {
        "riddle": "If you’ve got me, you want to share me; if you share me, you haven’t kept me. What am I?",
        "answer": "Secret"
      },
      {
        "riddle": "What has words, but never speaks?",
        "answer": "Book"
      },
      {
        "riddle": "What has a thumb and four fingers, but is not a hand?",
        "answer": "Glove"
      },
      {
        "riddle": "What building has the most stories?",
        "answer": "Library"
      },
      {
        "riddle": "What has 13 hearts, but no other organs?",
        "answer": "Deck of cards"
      },
      {
        "riddle": "What has a thumb and four fingers, but is not a hand?",
        "answer": "Glove"
      },
      {
        "riddle": "What has words, but never speaks?",
        "answer": "Book"
      },
      {
        "riddle": "What has one head, one foot and four legs?",
        "answer": "Bed"
      },
      {
        "riddle": "What has legs, but does not walk?",
        "answer": "Table"
      },
      {
        "riddle": "What has a head, a tail, is brown, and has no legs?",
        "answer": "A Penny"
      },
      {
        "riddle": "What room do ghosts avoid?",
        "answer": "The living room."
      },
      {
        "riddle": "What comes once in a minute, twice in a moment, but never in a thousand years?",
        "answer": "The letter 'm'."
      },
      {
        "riddle": "A box without hinges, lock or key, yet golden treasure lies within.",
        "answer": "An egg"
      },
      {
        "riddle": "I follow you all the time and copy your every move, but you can’t touch me or catch me. What am I?",
        "answer": "Your shadow"
      },
      {
        "riddle": "How many 9's are there between 1 and 100?",
        "answer": "20"
      },
      {
        "riddle": "What did one math book say to another?",
        "answer": "I have so many problems"
      },
      {
        "riddle": "What do mathematics teachers like to eat?",
        "answer": "Pi"
      },
      {
        "riddle": "What goes through cities and fields, but never moves?",
        "answer": "A road"
      },
      {
        "riddle": "What has to be broken before you can use it?",
        "answer": "Egg"
      },
      {
        "riddle": "What is so fragile that saying its name breaks it?",
        "answer": "Silence"
      },
      {
        "riddle": "What is always in front of you but can't be seen?",
        "answer": "The future"
      },
      {
        "riddle": "The more you fill a bag with it, the less the bag weights. What is it?",
        "answer": "Holes"
      },
      {
        "riddle": "Something that requires our mental skill to decode it, our imagination to understand it, our knowledge is tested to its max, it confuses us at every stage, it seems easy yet difficult, only those who are used to, will get through. What is it?",
        "answer": "A riddle."
      },
      {
        "riddle": "You see me once in June, twice in November and not at all in May. What am I?",
        "answer": "The letter 'e'"
      },
      {
        "riddle": "I am wet when drying. What am I?",
        "answer": "Towel"
      },
      {
        "riddle": "The more you take, the more you leave behind. What am I?",
        "answer": "Footsteps"
      },
      {
        "riddle": "I am an odd number. Take away a letter and I become even. What number am I?",
        "answer": "Seven"
      },
      {
        "riddle": "I'm tall when I'm young and I'm short when I'm old. What am I?",
        "answer": "A Candle"
      },
      {
        "riddle": "You can drop me from the tallest building and I'll be fine, but if you drop me in water I die. What am I?",
        "answer": "Paper"
      },
      {
        "riddle": "Which creature has one voice and yet becomes four-footed and two-footed and three-footed?",
        "answer": "Human"
      },
      {
        "riddle": "What is at the end of everything?",
        "answer": "The letter g"
      },
      {
        "riddle": "You can you serve it, but never eat it? What is it?",
        "answer": "A tennis ball"
      },
      {
        "riddle": "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I? ",
        "answer": "An echo"
      },
      {
        "riddle":"Which is heavier: a ton of bricks or a ton of feathers?",
        "answer":"Neither—they both weigh a ton."
      },
      {
        "riddle":"I'm tall when I'm young, and I'm short when I'm old. What am I?",
        "answer":"A candle"
      },
      {
        "riddle":"What is full of holes but still holds water?",
        "answer":"A sponge"
      }
]