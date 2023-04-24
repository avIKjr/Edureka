//function col() {
    // var r = document.getElementById('h');
    // r.style.color='red';
   // var o = document.getElementById('h');
   // o.style.color = "orange";
   // var n = document.getElementsByName('change')[0];
   // n.setAttribute("type", "checkbox")
//}
var col = () => {
    document.getElementById('h').style.color = "orange";
    n = document.getElementsByName('change')[0];
    n.setAttribute("type", "checkbox")
    n = document.querySelector('.btn')
    n.style.backgroundColor = "green"
    document.getElementById('h').parentNode.style.backgroundColor='yellow';
    document.getElementById('h').style.border="2px solid black"
    const ne = document.createElement('button');
    ne.setAttribute('type', 'reset');
    ne.textContent='reset this';
    document.body.append(ne)
}
var re = ()=> {
    document.getElementById('h').style.color = "black";
    n = document.getElementsByName('change')[0];
    n.setAttribute("type", "text")
    n = document.querySelector('.btn')
    n.style.backgroundColor = "white"
    document.getElementById('h').parentNode.style.backgroundColor='White';
    document.getElementById('h').style.border="none";
    
}


