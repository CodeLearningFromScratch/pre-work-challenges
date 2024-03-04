

/* created by CodeLearningFromScratch */

function createHeader() {
    const headerHTML = `
        <h2 class="h2-challenge">Pre_Work_Challenge</h2>
        <div class="buttons-wrapper">
             <button class="btns-header active" onclick= "scrollFunction1()"> calc.js</button>
             <button class="btns-header" onclick= "scrollFunction2()"> jenny.js</button>
             <button class="btns-header" onclick= "scrollFunction3()"> multilanguageHello.js</button>
             <button class="btns-header" onclick= "scrollFunction4()"> noIVA.js</button>
             <button class="btns-header" onclick= "scrollFunction5()"> numToString.js</button>
             <button class="btns-header" onclick= "scrollFunction6()"> swap.js</button>
             <button class="btns-header" onclick= "scrollFunction7()"> theOpposites.js</button>
             <button class="btns-header" onclick= "scrollFunction8()"> vendingMachine.js</button>

             <button class="disabled"> cypher_decypher.js </button>
             <button class="disabled"> fizzbuzz_test.js </button>
             <button class="disabled"> pseudoLatin.js </button>
        </div>
    `;
    const test_aside = document.querySelector('.test-aside')
    test_aside.insertAdjacentHTML('afterbegin', headerHTML);
}
createHeader();



function scrollFunction1() {
    const element1 = document.getElementById('el1');
    window.scrollTo({
        top: element1.offsetTop,
        behavior: 'smooth'
    });
}

function scrollFunction2() {
    const element2 = document.getElementById('el2');
    window.scrollTo({
        top: element2.offsetTop,
        behavior: 'smooth'
    });
}

function scrollFunction3() {
    const element3 = document.getElementById('el3');
    window.scrollTo({
        top: element3.offsetTop,
        behavior: 'smooth'
    });
}
function scrollFunction4() {
    const element4 = document.getElementById('el4');
    window.scrollTo({
        top: element4.offsetTop,
        behavior: 'smooth'
    });
}

function scrollFunction5() {
    const element5 = document.getElementById('el5');
    window.scrollTo({
        top: element5.offsetTop,
        behavior: 'smooth'
    });
}

function scrollFunction6() {
    const element6 = document.getElementById('el6');
    window.scrollTo({
        top: element6.offsetTop,
        behavior: 'smooth'
    });
}

function scrollFunction7() {
    const element7 = document.getElementById('el7');
    window.scrollTo({
        top: element7.offsetTop,
        behavior: 'smooth'
    });
}

function scrollFunction8() {
    const element8 = document.getElementById('el8');
    window.scrollTo({
        top: element8.offsetTop,
        behavior: 'smooth'
    });
}


// click on buttons 8pcs START
const btns_header = document.querySelectorAll('.btns-header');

btns_header.forEach((one_btn) => {
    one_btn.addEventListener('click', () => {
        btns_header.forEach((one_btn) => { 
          one_btn.classList.remove('active')
        })
        one_btn.classList.add('active')  
    })
})
// click on buttons 8pcs END



