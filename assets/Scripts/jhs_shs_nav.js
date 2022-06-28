function header(){
    const nav = document.querySelector('.header')
    fetch('../assets/HTML/header_sub.html')
    .then(res=>res.text())
    .then(data=>{
        
        nav.innerHTML=data
        let loc = window.location.pathname.split('/');
         console.log(loc)
        if(loc[1] == 'JHS'){
            let shs = document.getElementById('shs');
            shs.innerHTML=`
                <a href="../SHS/index.html">SHS</a>
            `
        }else if(loc[1] == 'SHS'){
            let jhs = document.getElementById('jhs');
            jhs.innerHTML = `
            <a href="../JHS/index.html">JHS</a>
            `
        }
        const parser = new DOMParser()
        const doc = parser.parseFromString(data, 'text/html')
        // eval(doc.querySelector('script').textContent)
    })
    }
    header()
    
    function footer() {
    const footer_1= document.querySelector('.footer')
    fetch('../assets/HTML/footer_sub.html')
    .then(res=>res.text())
    .then(data=>{
        footer_1.innerHTML=data
        const parser = new DOMParser()
        const doc = parser.parseFromString(data, 'text/html')
        // eval(doc.querySelector('script').textContent)
    })}
    footer()

  