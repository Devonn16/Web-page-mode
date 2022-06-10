function header(){
const nav = document.querySelector('.header')
fetch('../assets/HTML/header.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script').textContent)
})
}
header()

function footer() {
const footer_1= document.querySelector('.footer')
fetch('../assets/HTML/footer.html')
.then(res=>res.text())
.then(data=>{
    footer_1.innerHTML=data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script').textContent)
})}
footer()