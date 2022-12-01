const button=document.getElementById("btn");
const body=document.body;

const colors=["red","yellow","brown","black","orange","green","blue"]
button.addEventListener('click',changebg);

function changebg()
{
    const colorindex=Math.floor(Math.random()*colors.length)
    body.style.backgroundColor=colors[colorindex]
}
