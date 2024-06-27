// document.getElementById("helloText").innerHTML = "hello world";
// const txt = "hello pinecone";
// document.getElementsByClassName("htext")[0].innerHTML = txt;

// function handleClick() {
//   console.log("Button clicked");
//   textEl.style.color = "red";
//   textEl.style.fontSize = "40px";
//   textEl.style.backgroundColor = "yellow";
//   textEl.textContent = "Pinecone LLC";
//   textEl.innerText = "<h1>Pinecone Company</h1>";
//   textEl.innerHTML = "<h1>Pinecone Company</h1>";
// }

// function change() {
//   console.log("Button clicked");
// }

// const btnEl = document.getElementById("btn");
// console.log("=====>", btnEl);
// btnEl.addEventListener("click", change);

// const boxel = document.getElementsByClassName("box")[0];
// const btnel = document.getElementsByTagName("button")[0];
// console.log(boxel);
// console.log(btnel);

// const colors = ["green", "yellow", "red"];
// let i = 0;

function generateColor() {
  const rColor = Math.floor(Math.random() * 256); // 0.9234324 => 253
  const gColor = Math.floor(Math.random() * 256); // 0.9234324 => 253
  const bColor = Math.floor(Math.random() * 256);
  //   return "rgb(" + rColor + "," + gColor + "," + bColor + ")"; //
  return `rgb(${rColor},${gColor},${bColor})`;
}

// const box = document.getElementsByClassName("box")[0];
// const btn = document.getElementsByTagName("button")[0];
// // function changecolor() {
// //   box.style.backgroundColor = generateColor();
// // }
// // btn.addEventListener("click", changecolor);

// const cards = document.getElementsByClassName("card");
// const btncolor = document.getElementsByTagName("button")[1];
// function changecolor() {
//   for (let i = 0; i < cards.length; i++) {
//     cards[i].style.backgroundColor = generateColor();
//   }
// }
// btncolor.addEventListener("click", changecolor);

// // add box
// const addBtn = document.getElementById("addBtn");

// addBtn.addEventListener("click", function () {
//   const newBox = document.createElement("div");
//   newBox.className = "box";
//   const parent = document.getElementsByClassName("boxes")[0];
//   parent.appendChild(newBox);
// });
// // audio
const audio = document.getElementsByTagName("audio")[0];
const pausebtn = document.getElementById("pausebtn");
const playbtn = document.getElementById("playbtn");
const nextbtn = document.getElementById("nextbtn");
const songs = [
  "./Adele - Someone Like You (Official Music Video).mp3",
  "./Rihanna - We Found Love ft. Calvin Harris.mp3",
  "./Rihanna - Diamonds.mp3",
];

console.log(playbtn);
let currentsong = 0; // 1, 2, 3
playbtn.addEventListener("click", () => {
  //play song
  audio.src = songs[0];
  audio.play();
  console.log("AUD", audio);
});

nextbtn.addEventListener("click", () => {
  //next song
  currentsong++;
  if (currentsong === songs.length) {
    currentsong = 0;
  }
  audio.src = songs[currentsong];

  // songs[currentsong]
  audio.play();
});

pausebtn.addEventListener("click", () => {
  //pause song
  audio.pause();
  console.log("AUD", audio);
});
