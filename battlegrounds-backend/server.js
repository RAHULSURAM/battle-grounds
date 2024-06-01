// server.js



const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const path = require('path');
const dir = path.join(__dirname, 'public');

app.use(express.static(dir));


app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({
  origin: 'http://localhost:3000' 
}));

const gameModes = [
  {
    id: 1,
    title: 'LARGE SCALE BATTLES',
    items: [
      {
        id: 1,
        title: 'LARGE SCALE BATTLES',
        imageUrl: 'http://localhost:5000/Images/image-1.png',
        description: 'The best vehicle focused Conquest Large maps.'
      }
    ]
  },
  {
    id: 2,
    title: 'THE BATTLEFIELD',
    items: [
      {
        id: 2,
        title: 'THE BATTLEFIELD',
        imageUrl: 'http://localhost:5000/Images/Image-2.png',
        description: 'Battlefield at its best. Conquest Small, Rush, and Obliteration, with a good balance between infantry and vehicle gameplay.'
      }
    ]
  },
  {
    id: 3,
    title: 'CLOSE QUARTERS',
    items: [
      {
        id: 3,
        title: 'CLOSE QUARTERS',
        imageUrl: 'http://localhost:5000/Images/Image-3.png',
        description: 'Smaller scale infantry focused maps and modes.'
      }
    ]
  },{
    id: 4,
    title: 'NIGHT OPERATIONS',
    items: [
      {
        id: 4,
        title: 'NIGHT OPERATIONS',
        imageUrl: 'http://localhost:5000/Images/Image-4.png',
        description: 'A tactical mode where flashlights, flares, scopes and other gadgets shine in the dark. Take the fight into nighttime -as part of the graveyard shift you are re-visiting a familiar but a very different Battlefield.'
      }
    ]
  },
  {
    id: 5,
    title: 'NIGHT OPERATIONS LARGE',
    items: [
      {
        id: 5,
        title: 'NIGHT OPERATIONS LARGE',
        imageUrl: 'http://localhost:5000/Images/image-5.png',
        description: 'A tactical mode where flashlights, flares, scopes and other gadgets shine in the dark. Take the fight into nighttime -as part of the graveyard shift you are re-visiting a familiar but a very different Battlefield.'
      }
    ]
  },
  {
    id: 6,
    title: 'NIGHT OPERATIONS INFANTRY',
    items: [
      {
        id: 6,
        title: 'NIGHT OPERATIONS INFANTRY',
        imageUrl: 'http://localhost:5000/Images/image-6.png',
        description: 'An infantry focused tactical mode where flashlights, flares, scopes and other gadgets shine in the dark. - Take the flight into nighttime - as part of the graveyard shift you are re-visiting a familiar but a very different Battlefiled.'
      }
    ]
  },
  {
    id: 7,
    title: 'COMMUNITY OPERATIONS',
    items: [
      {
        id: 7,
        title: 'COMMUNITY OPERATIONS',
        imageUrl: 'http://localhost:5000/Images/image-7.png',
        description: 'Experience Conquest Small, Rush, Obliteration, CTF, and Chainlink on Operation Outbreak. -Battlefield at its best with Conquest Small, Rush, Obliteration, Capture the Flag and Chain Link on the jungle map Operation Outbreak.'
      }
    ]
  },{
    id: 8,
    title: 'COMMUNITY OPERATIONS LARGE',
    items: [
      {
        id: 8,
        title: 'COMMUNITY OPERATIONS LARGE',
        imageUrl: 'http://localhost:5000/Images/image-8.png',
        description: 'Experience Conquest Large on Operation Outbreak. - All-out war with Conquest Large on the jungle map Operation Outbreak'
      }
    ]
  },
  {
    id: 9,
    title: 'COMMUNITY OPERATIONS INFANTRY',
    items: [
      {
        id: 9,
        title: 'COMMUNITY OPERATIONS INFANTRY',
        imageUrl: 'http://localhost:5000/Images/image-9.png',
        description: 'Experience infantry based game modes on Operation Outbreak. - Infantry focused with Death Math, Squad Death Math, Domination, and Gun Master on the jungle map Operation Outbreak'
      }
    ]
  },
  {
    id: 10,
    title: 'LEGACY OPERATIONS LARGE',
    items: [
      {
        id: 10,
        title: 'LEGACY OPERATIONS LARGE',
        imageUrl: 'http://localhost:5000/Images/image-10.png',
        description: 'Experience Conquest large on Dragon Valley 2015. - All out warfare on the 2015 version of the classic Dragon Valley map'
      }
    ] 
  },
  {
    id: 11,
    title: 'LEGACY OPERATIONS',
    items: [
      {
        id: 11,
        title: 'LEGACY OPERATIONS',
        imageUrl: 'http://localhost:5000/Images/image-11.png',
        description: 'Experience Conquest Small, Rush and Obliteration on Dragon Valley 2015. - Battlefield at its best with Conquest Small, Rush and Obliteration on the 2015 version of the classic Dragon valley map'
      }
    ]
  },{
    id: 12,
    title: 'LEGACY OPERATIONS INFANTRY',
    items: [
      {
        id: 12,
        title: 'LEGACY OPERATIONS INFANTRY',
        imageUrl: 'http://localhost:5000/Images/image-12.png',
        description: 'Experience infantry based game modes on Dragon Valley 2015. - Infantry focused with Team/Squad Death Match, Domination and Gun Master - in the Nashahr Canals inspired Harbor on the 2015 version of the classic Dragon Valley map'
      }
    ]
  },
  {
    id: 13,
    title: 'AIR SUPERIORITY',
    items: [
      {
        id: 13,
        title: 'AIR SUPERIORITY',
        imageUrl: 'http://localhost:5000/Images/image-13.png',
        description: 'Air warfare on a massive scale, Capture and hold objectives using only air vehicles. - Control the majority of the objectives to drain the enemies tickets - Avoid casualties - The team with the  most tickets remaining wins'
      }
    ]
  },
  {
    id: 14,
    title: 'CAPTURE THE FLAG',
    items: [
      {
        id: 14,
        title: 'CAPTURE THE FLAG',
        imageUrl: 'http://localhost:5000/Images/image-14.png',
        description: 'Medium-scale warfare. Each team must capture the enemy flag while keeping their own flag protected. - Capture the enemy flag by bringing it back to your base - Defend you base, if the enemy team has your flag you cannot capture and score points - The forst team to capture 3 flags wins'
      }
    ]
  },
  {
    id: 15,
    title: 'CARRIER ASSAULT LARGE',
    items: [
      {
        id: 15,
        title: '',
        imageUrl: 'http://localhost:5000/Images/image-15.png',
        description: 'Capture and hold objectives to damage carrier. When the carrier is open take out 2 objectives while defending your own carrier to win. - Capture and hold missile launchers to damage the enemy carrier - When the enemy carrier is at half health, it cracks open and canbe boarded'
      }
    ]
  },{
    id: 16,
    title: 'CARRIER ASSAULT SMALL',
    items: [
      {
        id: 16,
        title: 'CARRIER ASSAULT SMALL',
        imageUrl: 'http://localhost:5000/Images/image-12.png',
        description: 'Capture and hold objectives to damage carrier. When the carrier is open take out 2 objectives while defending your own carrier to win.'
      }
    ]
  },
  {
    id: 17,
    title: 'CHAINLINK',
    items: [
      {
        id: 17,
        title: 'CHAINLINK',
        imageUrl: 'http://localhost:5000/Images/image-17.png',
        description: 'Create links by capturing two adjacent capture points. The more links you control, the more enemy tickets bleed. The team with the most tickets remaining wins.'
      }
    ]
  },
  {
    id: 18,
    title: 'CONQUEST LARGE',
    items: [
      {
        id: 18,
        title: 'CONQUEST LARGE',
        imageUrl: 'http://localhost:5000/Images/image-10.png',
        description: 'Experience our signature game mode in the largest scale possible, with up to 64 players per map.'
      }
    ]
  },
  {
    id: 19,
    title: 'CONQUEST SMALL',
    items: [
      {
        id: 19,
        title: 'CONQUEST SMALL',
        imageUrl: 'http://localhost:5000/Images/image-11.png',
        description: 'Experience our signature game mode on some of the greatest Battlefield maps of all time.'
      }
    ]
  },{
    id: 20,
    title: 'DEFUSE',
    items: [
      {
        id: 20,
        title: 'DEFUSE',
        imageUrl: 'http://localhost:5000/Images/image-5.png',
        description: 'Take turns in trying to detonate a bomb at the enemy base. Quick rounds are played out and the team with most won rounds wins the game.'
      }
    ]
  },
  {
    id: 21,
    title: 'DOMINATION',
    items: [
      {
        id: 21,
        title: 'DOMINATION',
        imageUrl: 'http://localhost:5000/Images/image-12.png',
        description: 'Capture and hold objectives. Similar to the Conquest game mode but faster pace and smaller maps.'
      }
    ]
  },
  {
    id: 22,
    title: 'GUN MASTER',
    items: [
      {
        id: 22,
        title: 'GUN MASTER',
        imageUrl: 'http://localhost:5000/Images/image-13.png',
        description: 'Progress through a series of weapons by killing the enemy. The first player to earn a kill with the last weapon wins.'
      }
    ]
  },
  {
    id: 23,
    title: 'OBLITERATION',
    items: [
      {
        id: 23,
        title: 'OBLITERATION',
        imageUrl: 'http://localhost:5000/Images/image-14.png',
        description: 'Use teamwork to obliterate the enemy by first delivering, then detonating bombs at their bases while defending your own. New game mode in Battlefield 4.'
      }
    ]
  },{
    id: 24,
    title: 'RUSH',
    items: [
      {
        id: 24,
        title: 'RUSH',
        imageUrl: 'http://localhost:5000/Images/image-15.png',
        description: 'Together with your team, attack or defend pairs of M-COM objectives, kits, gadgets and vehicles are at your disposal.'
      }
    ]
  },
  {
    id: 25,
    title: 'SQUAD DEATHMATCH',
    items: [
      {
        id: 25,
        title: 'SQUAD DEATHMATCH',
        imageUrl: 'http://localhost:5000/Images/image-10.png',
        description: 'Your squad fights three other squads simultaneous. The objective is for your squad to get the highest amount of kills together.'
      }
    ]
  },
  {
    id: 26,
    title: 'SQUAD OBLITERATION',
    items: [
      {
        id: 26,
        title: 'SQUAD OBLITERATION',
        imageUrl: 'http://localhost:5000/Images/image-17.png',
        description: 'Close quarters infantry combat. Both teams fight over possession of a bomb that they need to detonate at the enemy objectives.'
      }
    ]
  },
  {
    id: 27,
    title: 'TEAM DEATHMATCH',
    items: [
      {
        id: 27,
        title: 'TEAM DEATHMATCH',
        imageUrl: 'http://localhost:5000/Images/image-17.png',
        description: 'Small maps, high intensity and no vehicles. One single objective for your team: kill the enemy.'
      }
    ]
  },{
    id: 28,
    title: 'COMMANDER',
    items: [
      {
        id: 28,
        title: 'COMMANDER',
        imageUrl: 'http://localhost:5000/Images/image-10.png',
        description: '- Unite your team by setting the right orders - Help your team with supplies and strikes at the enemy - Keep the enemy Commander at bay to protect your team'
      }
    ]
  },
];

// API endpoint for game modes
app.get('/api/gameModes', (req, res) => {
  res.json(gameModes);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});