const memes = document.getElementById("memes");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const hide = document.getElementById("hide");
var url = "";

const displayMemes = (url) => {
  const htmlString = `
            <img src = ${url} height = "300" width = "300"/>
        `;

  memes.innerHTML = htmlString;
};
const loadMemes = async () => {
  const res = await fetch("https://meme-api.herokuapp.com/gimme");
  url = await res.json();
  displayMemes(url.url);
};

loadMemes();

btn2.onclick = function () {
  loadMemes();
};
btn1.onclick = function () {
  hide.innerHTML=`${url.url}`
  share();
};

function share() {
  const el = document.createElement('textarea')
  el.value = `${url.url}`
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
  alert(`Copied to Clipboad \nShare with your Friends!`)
}

