const rotors = [
  [
    [
      4, 10, 12, 5, 11, 6, 3, 16, 21, 25, 13, 19, 14, 22, 24, 7, 23, 20, 18, 15,
      0, 8, 1, 17, 2, 9,
    ],
    [
      20, 22, 24, 6, 0, 3, 5, 15, 21, 25, 1, 4, 2, 10, 12, 19, 7, 23, 18, 11,
      17, 8, 13, 16, 14, 9,
    ],
  ],

  [
    [
      0, 9, 3, 10, 18, 8, 17, 20, 23, 1, 11, 7, 22, 19, 12, 2, 16, 6, 25, 13,
      15, 24, 5, 21, 14, 4,
    ],
    [
      0, 9, 15, 2, 25, 22, 17, 11, 5, 1, 3, 10, 14, 19, 24, 20, 16, 6, 4, 13, 7,
      23, 12, 8, 21, 18,
    ],
  ],

  [
    [
      1, 3, 5, 7, 9, 11, 2, 15, 17, 19, 23, 21, 25, 13, 24, 4, 8, 22, 6, 0, 10,
      12, 20, 18, 16, 14,
    ],
    [
      19, 0, 6, 1, 15, 2, 18, 3, 16, 4, 20, 5, 21, 13, 25, 7, 24, 8, 23, 9, 22,
      11, 17, 10, 14, 12,
    ],
  ],

  [
    [
      4, 18, 14, 21, 15, 25, 9, 0, 24, 16, 20, 8, 17, 7, 23, 11, 13, 5, 19, 6,
      10, 3, 2, 12, 22, 1,
    ],
    [
      7, 25, 22, 21, 0, 17, 19, 13, 11, 6, 20, 15, 23, 16, 2, 4, 9, 12, 1, 18,
      10, 3, 24, 14, 8, 5,
    ],
  ],

  [
    [
      21, 25, 1, 17, 6, 8, 19, 24, 20, 15, 18, 3, 13, 7, 11, 23, 0, 22, 12, 9,
      16, 14, 5, 4, 2, 10,
    ],
    [
      16, 2, 24, 11, 23, 22, 4, 13, 5, 19, 25, 14, 18, 12, 21, 9, 20, 3, 10, 6,
      8, 0, 17, 15, 7, 1,
    ],
  ],
];
var pos = [0, 0, 0, 0, 0];

const reflectors = [
  [
    24, 17, 20, 7, 16, 18, 11, 3, 15, 23, 13, 6, 14, 10, 12, 8, 4, 1, 5, 25, 2,
    22, 21, 9, 0, 19,
  ],
  [
    5, 21, 15, 9, 8, 0, 14, 24, 4, 3, 17, 25, 23, 22, 6, 2, 19, 10, 20, 16, 18,
    1, 13, 12, 7, 11,
  ],
];

function getLetter(input, selectedRotors, reflector) {
  pos[selectedRotors[0]]++;
  pos[selectedRotors[1]] += Math.floor(pos[selectedRotors[0]] / 26);
  pos[selectedRotors[0]] = pos[selectedRotors[0]] % 26;
  pos[selectedRotors[2]] += Math.floor(pos[selectedRotors[1]] / 26);
  pos[selectedRotors[1]] = pos[selectedRotors[1]] % 26;
  pos[selectedRotors[2]] = pos[selectedRotors[2]] % 26;
  console.log(pos);
  console.log(input);
  input =
    rotors[selectedRotors[0]][0][
      (((input + pos[selectedRotors[0]]) % 26) + 26) % 26
    ];
  console.log(input);
  input =
    rotors[selectedRotors[1]][0][
      (((input + pos[selectedRotors[1]] - pos[selectedRotors[0]]) % 26) + 26) %
        26
    ];
  console.log(input);
  input =
    rotors[selectedRotors[2]][0][
      (((input + pos[selectedRotors[2]] - pos[selectedRotors[1]]) % 26) + 26) %
        26
    ];
  console.log(input);
  input =
    reflectors[reflector][(((input - pos[selectedRotors[2]]) % 26) + 26) % 26];
  console.log(input);
  input =
    rotors[selectedRotors[2]][1][
      (((input + pos[selectedRotors[2]]) % 26) + 26) % 26
    ];
  console.log(input);
  input =
    rotors[selectedRotors[1]][1][
      (((input + pos[selectedRotors[1]] - pos[selectedRotors[2]]) % 26) + 26) %
        26
    ];
  console.log(input);
  input =
    rotors[selectedRotors[0]][1][
      (((input + pos[selectedRotors[0]] - pos[selectedRotors[1]]) % 26) + 26) %
        26
    ];
  console.log(input);

  return (((input - pos[selectedRotors[0]]) % 26) + 26) % 26;
}

document.addEventListener("keypress", function onEvent(event) {
  for (i = 0; i < 26; i++) {
    document.getElementById(String.fromCharCode(97 + i)).style.backgroundColor =
      "#2D4263";
    document.getElementById(String.fromCharCode(97 + i)).style.color =
      "#ECDBBA";
  }
  console.log(event.key);
  document.getElementById("input").innerHTML =
    document.getElementById("input").innerHTML + event.key;
  output = getLetter(event.key.charCodeAt() - 97, [0, 1, 2], 0) + 97;
  console.log(output);
  output = String.fromCharCode(output);
  document.getElementById("output").innerHTML =
    document.getElementById("output").innerHTML + output;

  document.getElementById(output).style.backgroundColor = "#ECDBBA";
  document.getElementById(output).style.color = "#191919";

  document.getElementById(event.key).style.backgroundColor = "#C84B31";
  document.getElementById(event.key).style.color = "#2D4263";
});

function buttonPress(key) {
  for (i = 0; i < 26; i++) {
    document.getElementById(String.fromCharCode(97 + i)).style.backgroundColor =
      "#2D4263";
    document.getElementById(String.fromCharCode(97 + i)).style.color =
      "#ECDBBA";
  }

  document.getElementById("input").innerHTML =
    document.getElementById("input").innerHTML + key.id;
  output = String.fromCharCode(
    getLetter(key.id.charCodeAt(0) - 97, [0, 1, 2], 0) + 97
  );
  console.log(output);
  document.getElementById("output").innerHTML =
    document.getElementById("output").innerHTML + output;

  document.getElementById(output).style.backgroundColor = "#ECDBBA";
  document.getElementById(output).style.color = "#191919";

  document.getElementById(key.id).style.backgroundColor = "#C84B31";
  document.getElementById(key.id).style.color = "#2D4263";
}
