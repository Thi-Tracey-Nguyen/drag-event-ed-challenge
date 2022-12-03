function challengeOne() {
    const form = document.querySelector('form')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const name = document.getElementById('name').value
        const language = document.getElementById('language').value
        const cohort = document.getElementById('cohort').value
        const para = document.getElementById('output')
        para.innerText = `Hello ${name}, hope you are enjoying learning about ${language} in ${cohort}`
    })
}

function challengeTwo() {
    const themeButton = document.querySelector('#change-theme')
    themeButton.addEventListener('click', (event) => {
        event.preventDefault()
        const column = document.querySelector('#challenge-two')
        column.classList.toggle('darkmode')
        themeButton.innerText === 'Dark Mode' ? themeButton.innerText = 'Light Mode' : 
            themeButton.innerText = 'Dark Mode'
    })
}

function challengeThree() {
    function drag(dragevent) {
        dragevent.dataTransfer.setData("text", dragevent.target.id);
    }

    function drop(dropevent) {
        dropevent.preventDefault();
        let data = dropevent.dataTransfer.getData("text");
        let child = document.getElementById(data)
        dropevent.target.appendChild(child)
        if (dropevent.target.id == "to") {
            child.style.backgroundColor = "green"
        } else {
            child.style.backgroundColor = "red"
        }
    }

    function allowDrop(allowdropevent) {
        allowdropevent.preventDefault();
    }

    let divs = document.getElementsByClassName("drag")
    for (let div of divs) {
        div.addEventListener('dragover', allowDrop)
        div.addEventListener('drop', drop)
        console.log(div)
    }

    document.getElementById("dragger").addEventListener('dragstart', drag)
}    
function activity() {
    challengeOne()
    challengeTwo()
    challengeThree()
}

try {
    module.exports = {
        challengeOne,
        challengeTwo,
        challengeThree
    }
} catch {
}
