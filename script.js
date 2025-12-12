//CONTACT ME: Show My Information

const btn = document.getElementById('contactinfo');
const contactbtn = document.getElementById('contactbtn');

contactbtn.addEventListener('click',function(){
	btn.innerHTML = "Tel: +1 (646)-468-9716<br>Email: hl4942@nyu.edu"
})


//INCREASE FONT SIZE

let size;
size = 1.2;

const texts = document.getElementsByClassName('texts');

document.getElementById('cssbtn').addEventListener('click',function(){
	size += 0.1
	if(size >= 1.6){
		size = 1.2
	}

	for (let t of texts) {
        t.style.fontSize = size + "rem";
    }
})
