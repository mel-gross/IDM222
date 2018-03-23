var playlist = {
    "LightRock": {
        "name": "LightRock",
        "e": 3,
        "c": null,
        "g": 1,
        "l": 3
    },
    "Punk": {
        "name": "Punk",
        "e": 4,
        "c": null,
        "g": 1,
        "l": 3
    },
    "Metal": {
        "name": "Metal",
        "e": 4,
        "c": null,
        "g": 1,
        "l": 3
    },
    "RRR": {
        "name": "RRR1",
        "e": 3,
        "c": null,
        "g": null,
        "l": 3
    },
    "IndieRock": {
        "name": "IndieRock",
        "e": 3,
        "c": null,
        "g": 1,
        "l": 3
    },
    "ClassicRock": {
        "name": "ClassicRock",
        "e": 2,
        "c": null,
        "g": 1,
        "l": 3
    },
    "RapBr": {
        "name": "RapBr",
        "e": 3,
        "c": null,
        "g": 4,
        "l": 1
    },
    "RapInt": {
        "name": "RapInt",
        "e": 4,
        "c": null,
        "g": 4,
        "l": 3
    },
    "ElectroBr": {
        "name": "ElectroBr",
        "e": 4,
        "c": null,
        "g": 3,
        "l": 1
    },
    "ElectroChill": {
        "name": "ElectroChill",
        "e": 1,
        "c": null,
        "g": 3,
        "l": 3
    },
    "ElectroPop": {
        "name": "ElectroPop",
        "e": 4,
        "c": null,
        "g": 3,
        "l": 3
    },
    "MPB1": {
        "name": "MPB1",
        "e": 1,
        "c": null,
        "g": null,
        "l": 1
    },
    "MPB2": {
        "name": "MPB2",
        "e": 2,
        "c": null,
        "g": null,
        "l": 1
    },
    "Chill": {
        "name": "Chill",
        "e": 1,
        "c": null,
        "g": null,
        "l": 3
    },
    "Sensual": {
        "name": "Sensual",
        "e": 2,
        "c": 1,
        "g": null,
        "l": 3
    },
    "Sleep": {
        "name": "Sleep",
        "e": 1,
        "c": 1,
        "g": null,
        "l": 3
    },
    "Study": {
        "name": "Study",
        "e": 2,
        "c": 1,
        "g": null,
        "l": 3
    },
    "Beach": {
        "name": "Beach",
        "e": 2,
        "c": 2,
        "g": null,
        "l": 3
    },
    "Walk": {
        "name": "Walk",
        "e": 3,
        "c": 1,
        "g": null,
        "l": 3
    },
    "Hangout": {
        "name": "Hangout",
        "e": 3,
        "c": 2,
        "g": null,
        "l": 3
    },
    "Cook": {
        "name": "Cook",
        "e": 3,
        "c": 2,
        "g": null,
        "l": 3
    },
    "fourTwenty": {
        "name": "fourTwenty",
        "e": 2,
        "c": 2,
        "g": 4,
        "l": 3
    },
    "SOL": {
        "name": "SOL",
        "e": 3,
        "c": 1,
        "g": null,
        "l": 3
    },
    "Dance": {
        "name": "Dance",
        "e": 4,
        "c": 2,
        "g": null,
        "l": 3
    },
    "Party": {
        "name": "Party",
        "e": 5,
        "c": 3,
        "g": 3,
        "l": 3
    },
};
const playlistSize = 27;
var keys = ["LightRock","Punk","Metal","RRR","IndieRock","IndieRock","ClassicRock","RapBr","RapInt","ElectroBr","ElectroChill","ElectroPop","MPB1","MPB2","Chill","Sensual","Sleep","Study","Beach","Walk","Hangout","Cook","fourTwenty","SOL","Dance","Party"];
var __ = document.getElementById; //to make my life easier and the code prettier
var playlistResult = [];
//select which playlists sould be visible depending on user's input

function getPlaylist() {
    var eInput;
    var cInput;
    var gInput;
    var lInput;
    //select what buttons are checked:
    //energy = eInput 
    if (document.getElementsByName('energy')[0].checked) {
        eInput = 1;
    } else if (document.getElementsByName('energy')[1].checked) {
        eInput = 2;
    } else if (document.getElementsByName('energy')[2].checked) {
        eInput = 3;
    } else if (document.getElementsByName('energy')[3].checked) {
        eInput = 4;
    } else {
        eInput = 5;
    }
    //company = cInput 
    if (document.getElementsByName('company')[0].checked) {
        cInput = 1;
    } else if (document.getElementsByName('company')[1].checked) {
        cInput = 2;
    } else {
        cInput = 3;
    }
    //genre = gInput 
    if (document.getElementsByName('genre')[0].checked) {
        gInput = 1;
    } else if (document.getElementsByName('genre')[1].checked) {
        gInput = 2;
    } else if (document.getElementsByName('genre')[2].checked) {
        gInput = 3;
    } else {
        gInput = 4;
    }
    //lenguage = lInput 
    if (document.getElementsByName('language')[0].checked) {
        lInput = 1;
    } else if (document.getElementsByName('language')[1].checked) {
        lInput = 2;
    } else {
        lInput = 3;
    }
    console.group();
    console.log(eInput);
    console.log(cInput);
    console.log(gInput);
    console.log(lInput);
    console.groupEnd();

    getObjects(eInput, cInput, gInput, lInput);
}

//gets data from json doc :)
function getObjects(eInput, cInput, gInput, lInput) {
    //run trhough jSon object to check all data numbers    
    for (var i = 0; i < playlistSize ; i++) {
        console.log(playlist[keys[i]]['e']);
        if ((playlist[keys[i]]['e']) === eInput) {
            playlistResult.push(playlist[keys[i]]['name']);
        }
        else if (playlist[keys[i]]['c'] === cInput) {
            playlistResult.push(playlist[keys[i]]['name']);
        }
        else if (playlist[keys[i]]['g'] === gInput) {
            playlistResult.push(playlist[keys[i]]['name']);
        }
        else if (playlist[keys[i]]['l'] === lInput) {
            playlistResult.push(playlist[keys[i]]['name']);
        }

    }
    console.log(playlistResult);
}


function appendPlaylists() {
    document.getElementsByClassName[playlistResult].style.display = "none"; //makes everything invisible first
    // playlistResult[].style.display = "block"; //so I can make everything that fits the input visible
}