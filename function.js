document.getElementById("helloText").innerHTML = "hello world";
const txt = "hello pinecone";
document.getElementsByClassName("htext")[0].innerHTML = txt;

const boxel = document.getElementsByClassName("box")[0];
const btnel = document.getElementsByTagName("button")[0];
console.log(boxel);
console.log(btnel);

const colors = ["green", "yellow", "red"];
let i = 0;

function changebackgroundcolor() {
  boxel.computedStyleMap.backgroundcolor = colors[i];
  i++;
}
