let generlT = false;
let nohalT = false;
let careT = false;
let searchT = false;
let second = true;
let wrongQ = [];

window.addEventListener("load", (event) => {
    document.getElementById('next').addEventListener('click', Page2);
})
const Page1 = () => {
    document.getElementById('back').removeEventListener('click', Page1);
    document.getElementById('next').removeEventListener('click', Page3);
    document.getElementById('p2').style.display = 'none';
    document.getElementById('p1').style.display = 'block';
    document.getElementById('back').style.display = 'none';
    document.getElementById('next').addEventListener('click', Page2);
}
const Page2 = () => {
    document.getElementById('next').removeEventListener('click', Page2);
    document.getElementById('back').removeEventListener('click', Page2);
    document.getElementById('next').removeEventListener('click', Page4);
    document.getElementById('p1').style.display = 'none';
    document.getElementById('p3').style.display = 'none';
    document.getElementById('p2').style.display = 'inline';
    document.getElementById('back').style.display = 'inline';
    document.getElementById('back').addEventListener('click', Page1);
    document.getElementById('next').addEventListener('click', Page3);
}
const Page3 = () => {
    document.getElementById('back').removeEventListener('click', Page3);
    document.getElementById('back').removeEventListener('click', GenerlPage);
    document.getElementById('next').removeEventListener('click', Generel3);
    document.getElementById('generlD').removeEventListener('click', GenerlPage);
    document.getElementById('nohalD').removeEventListener('click', NohalPage);
    document.getElementById('careD').removeEventListener('click', CarePage);
    document.getElementById('searchD').removeEventListener('click', SearchPage);
    document.getElementById('back').removeEventListener('click', Page1);
    document.getElementById('next').removeEventListener('click', Page3);
    document.getElementById('back').removeEventListener('click', Page3);
    document.getElementById('p2').style.display = 'none';
    document.getElementById('p4').style.display = 'none';
    document.getElementById('p3').style.display = 'inline';
    document.getElementById('next').style.display = 'inline';
    document.getElementById('back').addEventListener('click', Page2);
    document.getElementById('next').addEventListener('click', Page4);
}
const Page4 = () => {
    document.getElementById('back').removeEventListener('click', Page2);
    document.getElementById('next').removeEventListener('click', Page4);
    document.getElementById('back').removeEventListener('click', Page4);
    document.getElementById('back').removeEventListener('click', Generel7);
    document.getElementById('back').removeEventListener('click', Nohal4);
    document.getElementById('back').removeEventListener('click', Care9);
    document.getElementById('back').removeEventListener('click', Search4);
    document.getElementById('p3').style.display = 'none';
    document.getElementById('g8').style.display = 'none';
    document.getElementById('n5').style.display = 'none';
    document.getElementById('c10').style.display = 'none';
    document.getElementById('s5').style.display = 'none';
    document.getElementById('infoTest').style.display = 'none';
    document.getElementById('generl').style.display = 'none';
    document.getElementById('nohal').style.display = 'none';
    document.getElementById('care').style.display = 'none';
    document.getElementById('search').style.display = 'none';
    document.getElementById('p4').style.display = 'inline';
    document.getElementById('next').style.display = 'none';
    document.getElementById('back').addEventListener('click', Page3);
    document.getElementById('generlD').addEventListener('click', GenerlPage);
    document.getElementById('nohalD').addEventListener('click', NohalPage);
    document.getElementById('careD').addEventListener('click', CarePage);
    document.getElementById('searchD').addEventListener('click', SearchPage);
    if (generlT && careT && nohalT && searchT && second) {
        test();
    }
}
const GenerlPage = () => {
    document.getElementById('back').removeEventListener('click', Page3);
    document.getElementById('back').removeEventListener('click', GenerlPage);
    document.getElementById('next').removeEventListener('click', Generel3);
    document.getElementById('generlD').removeEventListener('click', GenerlPage);
    document.getElementById('nohalD').removeEventListener('click', NohalPage);
    document.getElementById('careD').removeEventListener('click', CarePage);
    document.getElementById('searchD').removeEventListener('click', SearchPage);
    generlT = true;
    second = true;
    document.getElementById('p4').style.display = 'none';
    document.getElementById('g2').style.display = 'none';
    document.getElementById('generl').style.display = 'inline';
    document.getElementById('g1').style.display = 'inline';
    document.getElementById('back').style.display = 'none';
    document.getElementById('next').style.display = 'inline';
    document.getElementById('next').addEventListener('click', Generel2);
}
const Generel2 = () => {
    document.getElementById('next').removeEventListener('click', Generel2);
    document.getElementById('back').removeEventListener('click', Generel2);
    document.getElementById('next').removeEventListener('click', Generel4);
    document.getElementById('back').style.display = 'inline';
    document.getElementById('g1').style.display = 'none';
    document.getElementById('g3').style.display = 'none';
    document.getElementById('g2').style.display = 'inline';
    document.getElementById('back').addEventListener('click', GenerlPage);
    document.getElementById('next').addEventListener('click', Generel3);
}
const Generel3 = () => {
    document.getElementById('back').removeEventListener('click', GenerlPage);
    document.getElementById('next').removeEventListener('click', Generel3);
    document.getElementById('back').removeEventListener('click', Generel3);
    document.getElementById('next').removeEventListener('click', Generel5);
    document.getElementById('g2').style.display = 'none';
    document.getElementById('g4').style.display = 'none';
    document.getElementById('g3').style.display = 'inline';
    document.getElementById('back').addEventListener('click', Generel2);
    document.getElementById('next').addEventListener('click', Generel4);
}
const Generel4 = () => {
    document.getElementById('back').removeEventListener('click', Generel2);
    document.getElementById('next').removeEventListener('click', Generel4);
    document.getElementById('back').removeEventListener('click', Generel4);
    document.getElementById('next').removeEventListener('click', Generel6);
    document.getElementById('g3').style.display = 'none';
    document.getElementById('g5').style.display = 'none';
    document.getElementById('g4').style.display = 'inline';
    document.getElementById('back').addEventListener('click', Generel3);
    document.getElementById('next').addEventListener('click', Generel5);
}
const Generel5 = () => {
    document.getElementById('back').removeEventListener('click', Generel3);
    document.getElementById('next').removeEventListener('click', Generel5);
    document.getElementById('back').removeEventListener('click', Generel5);
    document.getElementById('next').removeEventListener('click', Generel7);
    document.getElementById('g4').style.display = 'none';
    document.getElementById('g6').style.display = 'none';
    document.getElementById('g5').style.display = 'inline';
    document.getElementById('back').addEventListener('click', Generel4);
    document.getElementById('next').addEventListener('click', Generel6);
}
const Generel6 = () => {
    document.getElementById('back').removeEventListener('click', Generel4);
    document.getElementById('next').removeEventListener('click', Generel6);
    document.getElementById('back').removeEventListener('click', Generel6);
    document.getElementById('next').removeEventListener('click', Generel8);
    document.getElementById('g5').style.display = 'none';
    document.getElementById('g7').style.display = 'none';
    document.getElementById('g6').style.display = 'inline';
    document.getElementById('back').addEventListener('click', Generel5);
    document.getElementById('next').addEventListener('click', Generel7);
}
const Generel7 = () => {
    document.getElementById('back').removeEventListener('click', Generel5);
    document.getElementById('next').removeEventListener('click', Generel7);
    document.getElementById('back').removeEventListener('click', Generel7);
    document.getElementById('g6').style.display = 'none';
    document.getElementById('g8').style.display = 'none';
    document.getElementById('g7').style.display = 'inline';
    document.getElementById('back').addEventListener('click', Generel6);
    document.getElementById('next').addEventListener('click', Generel8);
}
const Generel8 = () => {
    document.getElementById('back').removeEventListener('click', Generel6);
    document.getElementById('next').removeEventListener('click', Generel8);
    document.getElementById('g7').style.display = 'none';
    document.getElementById('g8').style.display = 'inline';
    document.getElementById('back').addEventListener('click', Generel7);
    document.getElementById('next').addEventListener('click', Page4);
}
const NohalPage = () => {
    document.getElementById('back').removeEventListener('click', Page3);
    document.getElementById('back').removeEventListener('click', NohalPage);
    document.getElementById('next').removeEventListener('click', Nohal3);
    document.getElementById('generlD').removeEventListener('click', GenerlPage);
    document.getElementById('nohalD').removeEventListener('click', NohalPage);
    document.getElementById('careD').removeEventListener('click', CarePage);
    document.getElementById('searchD').removeEventListener('click', SearchPage);
    nohalT = true;
    second = true;
    document.getElementById('p4').style.display = 'none';
    document.getElementById('n2').style.display = 'none';
    document.getElementById('nohal').style.display = 'inline';
    document.getElementById('n1').style.display = 'inline';
    document.getElementById('back').style.display = 'none';
    document.getElementById('next').style.display = 'inline';
    document.getElementById('next').addEventListener('click', Nohal2);
}
const Nohal2 = () => {
    document.getElementById('next').removeEventListener('click', Nohal2);
    document.getElementById('back').removeEventListener('click', Nohal2);
    document.getElementById('next').removeEventListener('click', Nohal4);
    document.getElementById('back').style.display = 'inline';
    document.getElementById('n1').style.display = 'none';
    document.getElementById('n3').style.display = 'none';
    document.getElementById('n2').style.display = 'inline';
    document.getElementById('back').addEventListener('click', NohalPage);
    document.getElementById('next').addEventListener('click', Nohal3);
}
const Nohal3 = () => {
    document.getElementById('back').removeEventListener('click', NohalPage);
    document.getElementById('next').removeEventListener('click', Nohal3);
    document.getElementById('back').removeEventListener('click', Nohal3);
    document.getElementById('next').removeEventListener('click', Nohal5);
    document.getElementById('n2').style.display = 'none';
    document.getElementById('n4').style.display = 'none';
    document.getElementById('n3').style.display = 'inline';
    document.getElementById('back').addEventListener('click', Nohal2);
    document.getElementById('next').addEventListener('click', Nohal4);
}
const Nohal4 = () => {
    document.getElementById('back').removeEventListener('click', Nohal2);
    document.getElementById('next').removeEventListener('click', Nohal4);
    document.getElementById('back').removeEventListener('click', Nohal4);
    document.getElementById('n3').style.display = 'none';
    document.getElementById('n5').style.display = 'none';
    document.getElementById('n4').style.display = 'inline';
    document.getElementById('back').addEventListener('click', Nohal3);
    document.getElementById('next').addEventListener('click', Nohal5);
}
const Nohal5 = () => {
    document.getElementById('back').removeEventListener('click', Nohal3);
    document.getElementById('next').removeEventListener('click', Nohal5);
    document.getElementById('n4').style.display = 'none';
    document.getElementById('n5').style.display = 'inline';
    document.getElementById('back').addEventListener('click', Nohal4);
    document.getElementById('next').addEventListener('click', Page4);
}
const CarePage = () => {
    document.getElementById('back').removeEventListener('click', Page3);
    document.getElementById('back').removeEventListener('click', NohalPage);
    document.getElementById('next').removeEventListener('click', Nohal3);
    document.getElementById('generlD').removeEventListener('click', GenerlPage);
    document.getElementById('nohalD').removeEventListener('click', NohalPage);
    document.getElementById('careD').removeEventListener('click', CarePage);
    document.getElementById('searchD').removeEventListener('click', SearchPage);
    careT = true;
    second = true;
    document.getElementById('p4').style.display = 'none';
    document.getElementById('c2').style.display = 'none';
    document.getElementById('care').style.display = 'inline';
    document.getElementById('c1').style.display = 'inline';
    document.getElementById('back').style.display = 'none';
    document.getElementById('next').style.display = 'inline';
    document.getElementById('next').addEventListener('click', Care2);
}
const Care2 = () => {
    document.getElementById('next').removeEventListener('click', Care2);
    document.getElementById('back').removeEventListener('click', Care2);
    document.getElementById('next').removeEventListener('click', Care4);
    document.getElementById('back').style.display = 'inline';
    document.getElementById('c1').style.display = 'none';
    document.getElementById('c3').style.display = 'none';
    document.getElementById('c2').style.display = 'inline';
    document.getElementById('back').addEventListener('click', CarePage);
    document.getElementById('next').addEventListener('click', Care3);
}
const Care3 = () => {
    document.getElementById('back').removeEventListener('click', CarePage);
    document.getElementById('next').removeEventListener('click', Care3);
    document.getElementById('back').removeEventListener('click', Care3);
    document.getElementById('next').removeEventListener('click', Care5);
    document.getElementById('c2').style.display = 'none';
    document.getElementById('c4').style.display = 'none';
    document.getElementById('c3').style.display = 'inline';
    document.getElementById('back').addEventListener('click', Care2);
    document.getElementById('next').addEventListener('click', Care4);
}
const Care4 = () => {
    document.getElementById('back').removeEventListener('click', Care2);
    document.getElementById('next').removeEventListener('click', Care4);
    document.getElementById('back').removeEventListener('click', Care4);
    document.getElementById('next').removeEventListener('click', Care6);
    document.getElementById('c3').style.display = 'none';
    document.getElementById('c5').style.display = 'none';
    document.getElementById('c4').style.display = 'inline';
    document.getElementById('back').addEventListener('click', Care3);
    document.getElementById('next').addEventListener('click', Care5);
}
const Care5 = () => {
    document.getElementById('back').removeEventListener('click', Care3);
    document.getElementById('next').removeEventListener('click', Care5);
    document.getElementById('back').removeEventListener('click', Care5);
    document.getElementById('next').removeEventListener('click', Care7);
    document.getElementById('c4').style.display = 'none';
    document.getElementById('c6').style.display = 'none';
    document.getElementById('c5').style.display = 'inline';
    document.getElementById('back').addEventListener('click', Care4);
    document.getElementById('next').addEventListener('click', Care6);
}
const Care6 = () => {
    document.getElementById('back').removeEventListener('click', Care4);
    document.getElementById('next').removeEventListener('click', Care6);
    document.getElementById('back').removeEventListener('click', Care6);
    document.getElementById('next').removeEventListener('click', Care8);
    document.getElementById('c5').style.display = 'none';
    document.getElementById('c7').style.display = 'none';
    document.getElementById('c6').style.display = 'inline';
    document.getElementById('back').addEventListener('click', Care5);
    document.getElementById('next').addEventListener('click', Care7);
}
const Care7 = () => {
    document.getElementById('back').removeEventListener('click', Care5);
    document.getElementById('next').removeEventListener('click', Care7);
    document.getElementById('back').removeEventListener('click', Care7);
    document.getElementById('next').removeEventListener('click', Care9);
    document.getElementById('c6').style.display = 'none';
    document.getElementById('c8').style.display = 'none';
    document.getElementById('c7').style.display = 'inline';
    document.getElementById('back').addEventListener('click', Care6);
    document.getElementById('next').addEventListener('click', Care8);
}
const Care8 = () => {
    document.getElementById('back').removeEventListener('click', Care6);
    document.getElementById('next').removeEventListener('click', Care8);
    document.getElementById('back').removeEventListener('click', Care8);
    document.getElementById('next').removeEventListener('click', Care10);
    document.getElementById('c7').style.display = 'none';
    document.getElementById('c9').style.display = 'none';
    document.getElementById('c8').style.display = 'inline';
    document.getElementById('back').addEventListener('click', Care7);
    document.getElementById('next').addEventListener('click', Care9);
}
const Care9 = () => {
    document.getElementById('back').removeEventListener('click', Care7);
    document.getElementById('next').removeEventListener('click', Care9);
    document.getElementById('back').removeEventListener('click', Care9);
    document.getElementById('next').removeEventListener('click', Page4);
    document.getElementById('c8').style.display = 'none';
    document.getElementById('c10').style.display = 'none';
    document.getElementById('c9').style.display = 'inline';
    document.getElementById('back').addEventListener('click', Care8);
    document.getElementById('next').addEventListener('click', Care10);
}
const Care10 = () => {
    document.getElementById('back').removeEventListener('click', Care8);
    document.getElementById('next').removeEventListener('click', Care10);
    document.getElementById('c9').style.display = 'none';
    document.getElementById('c10').style.display = 'inline';
    document.getElementById('back').addEventListener('click', Care9);
    document.getElementById('next').addEventListener('click', Page4);
}
const SearchPage = () => {
    document.getElementById('back').removeEventListener('click', Page3);
    document.getElementById('back').removeEventListener('click', SearchPage);
    document.getElementById('next').removeEventListener('click', Search3);
    document.getElementById('generlD').removeEventListener('click', GenerlPage);
    document.getElementById('nohalD').removeEventListener('click', NohalPage);
    document.getElementById('careD').removeEventListener('click', CarePage);
    document.getElementById('searchD').removeEventListener('click', SearchPage);
    searchT = true;
    second = true;
    document.getElementById('p4').style.display = 'none';
    document.getElementById('s2').style.display = 'none';
    document.getElementById('s1').style.display = 'inline';
    document.getElementById('search').style.display = 'inline';
    document.getElementById('back').style.display = 'none';
    document.getElementById('next').style.display = 'inline';
    document.getElementById('next').addEventListener('click', Search2);
}
const Search2 = () => {
    document.getElementById('next').removeEventListener('click', Search2);
    document.getElementById('back').removeEventListener('click', Search2);
    document.getElementById('next').removeEventListener('click', Search4);
    document.getElementById('back').style.display = 'inline';
    document.getElementById('s1').style.display = 'none';
    document.getElementById('s3').style.display = 'none';
    document.getElementById('s2').style.display = 'inline';
    document.getElementById('back').addEventListener('click', SearchPage);
    document.getElementById('next').addEventListener('click', Search3);
}
const Search3 = () => {
    document.getElementById('back').removeEventListener('click', SearchPage);
    document.getElementById('next').removeEventListener('click', Search3);
    document.getElementById('back').removeEventListener('click', Search3);
    document.getElementById('next').removeEventListener('click', Search5);
    document.getElementById('s2').style.display = 'none';
    document.getElementById('s4').style.display = 'none';
    document.getElementById('s3').style.display = 'inline';
    document.getElementById('back').addEventListener('click', Search2);
    document.getElementById('next').addEventListener('click', Search4);
}
const Search4 = () => {
    document.getElementById('back').removeEventListener('click', Search2);
    document.getElementById('next').removeEventListener('click', Search4);
    document.getElementById('back').removeEventListener('click', Search4);
    document.getElementById('next').removeEventListener('click', Page4);
    document.getElementById('s3').style.display = 'none';
    document.getElementById('s5').style.display = 'none';
    document.getElementById('s4').style.display = 'inline';
    document.getElementById('back').addEventListener('click', Search3);
    document.getElementById('next').addEventListener('click', Search5);
}
const Search5 = () => {
    document.getElementById('back').removeEventListener('click', Search3);
    document.getElementById('next').removeEventListener('click', Search5);
    document.getElementById('s4').style.display = 'none';
    document.getElementById('s5').style.display = 'inline';
    document.getElementById('back').addEventListener('click', Search4);
    document.getElementById('next').addEventListener('click', Page4);
}
const test = () => {
    document.getElementById('back').removeEventListener('click', Page3);
    document.getElementById('generlD').removeEventListener('click', GenerlPage);
    document.getElementById('nohalD').removeEventListener('click', NohalPage);
    document.getElementById('careD').removeEventListener('click', CarePage);
    document.getElementById('searchD').removeEventListener('click', SearchPage);
    document.getElementById('back').style.display = 'inline';
    document.getElementById('p4').style.display = 'none';
    document.getElementById('infoTest').style.display = 'inline';
    let timer = setTimeout(() => {
        document.getElementById('hamsec').style.display = 'inline';
    }
        , 5000);
    second = false;
    document.getElementById('back').addEventListener('click', Page4);
    document.getElementById('hamsec').addEventListener('click', infos);
}
const infos = () => {
    document.getElementById('back').removeEventListener('click', Page4);
    document.getElementById('hamsec').removeEventListener('click', infos);
    document.getElementById('infoTest').style.display = 'none';
    document.getElementById('back').style.display = 'none';
    document.getElementById('theTest').style.display = 'inline';
    document.getElementById('infos').style.display = 'inline';
    document.getElementById('toTest').addEventListener('click', check);
}
const check = () => {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let place = document.getElementById("place").value;
    let job = document.getElementById("job").value;
    if (name === "" || phone === "" || place === "" || job === "") {
        alert('על כל השדות להיות מלאים!');
    } else if (phone.length !== 10) {
        alert('מספר הטלפון אינו תקין!');
    } else {
        document.getElementById('infos').style.display = 'none';
        document.getElementById('question1').style.display = 'inline';
        document.getElementById('haba').style.display = 'inline';
        document.getElementById('headTest').style.display = 'inline';
        document.getElementById('haba').addEventListener('click', question2);
    }
}
const question2 = () => {
    if (!document.getElementById('q1ans2').checked) {
        if (!wrongQ.includes('q1')){
            wrongQ.push('q1');
        }
    }
    document.getElementById('haba').removeEventListener('click', question2);
    document.getElementById('question1').style.display = 'none';
    document.getElementById('question2').style.display = 'inline';
    document.getElementById('haba').addEventListener('click', question3);
}
const question3 = () => {
    if (!document.getElementById('q2ans4').checked) {
        if (!wrongQ.includes('q2')){
            wrongQ.push('q2');
        }
    }
    document.getElementById('haba').removeEventListener('click', question3);
    document.getElementById('question2').style.display = 'none';
    document.getElementById('question3').style.display = 'inline';
    document.getElementById('haba').addEventListener('click', question4);
}
const question4 = () => {
    if (!document.getElementById('q3ans1').checked) {
        if (!wrongQ.includes('q3')){
            wrongQ.push('q3');
        }
    }
    document.getElementById('haba').removeEventListener('click', question4);
    document.getElementById('question3').style.display = 'none';
    document.getElementById('question4').style.display = 'inline';
    document.getElementById('haba').addEventListener('click', question5);
}
const question5 = () => {
    if (!document.getElementById('q4ans4').checked) {
        if (!wrongQ.includes('q4')){
            wrongQ.push('q4');
        }
    }
    document.getElementById('haba').removeEventListener('click', question5);
    document.getElementById('question4').style.display = 'none';
    document.getElementById('question5').style.display = 'inline';
    document.getElementById('haba').addEventListener('click', question6);
}
const question6 = () => {
    if (!document.getElementById('q5ans3').checked) {
        if (!wrongQ.includes('q5')){
            wrongQ.push('q5');
        }
    }
    document.getElementById('haba').removeEventListener('click', question6);
    document.getElementById('question5').style.display = 'none';
    document.getElementById('question6').style.display = 'inline';
    document.getElementById('haba').addEventListener('click', question7);
}
const question7 = () => {
    if (!document.getElementById('q6ans3').checked) {
        if (!wrongQ.includes('q6')){
            wrongQ.push('q6');
        }
    }
    document.getElementById('haba').removeEventListener('click', question7);
    document.getElementById('question6').style.display = 'none';
    document.getElementById('question7').style.display = 'inline';
    document.getElementById('haba').addEventListener('click', question8);
}
const question8 = () => {
    if (!document.getElementById('q7ans2').checked) {
        if (!wrongQ.includes('q7')){
            wrongQ.push('q7');
        }
    }
    document.getElementById('haba').removeEventListener('click', question8);
    document.getElementById('question7').style.display = 'none';
    document.getElementById('question8').style.display = 'inline';
    document.getElementById('haba').addEventListener('click', question9);
}
const question9 = () => {
    if (!document.getElementById('q8ans1').checked) {
        if (!wrongQ.includes('q8')){
            wrongQ.push('q8');
        }
    }
    document.getElementById('haba').removeEventListener('click', question9);
    document.getElementById('question8').style.display = 'none';
    document.getElementById('question9').style.display = 'inline';
    document.getElementById('haba').addEventListener('click', question10);
}
const question10 = () => {
    if (!document.getElementById('q9ans4').checked) {
        if (!wrongQ.includes('q9')){
            wrongQ.push('q9');
        }
    }
    document.getElementById('haba').removeEventListener('click', question10);
    document.getElementById('question9').style.display = 'none';
    document.getElementById('question10').style.display = 'inline';
    document.getElementById('haba').addEventListener('click', question11);
}
const question11 = () => {
    if (!document.getElementById('q10ans3').checked) {
        if (!wrongQ.includes('q10')){
            wrongQ.push('q10');
        }
    }
    document.getElementById('haba').removeEventListener('click', question11);
    document.getElementById('question10').style.display = 'none';
    document.getElementById('question11').style.display = 'inline';
    document.getElementById('haba').addEventListener('click', question12);
}
const question12 = () => {
    if (!document.getElementById('q11ans2').checked) {
        if (!wrongQ.includes('q11')){
            wrongQ.push('q11');
        }
    }
    document.getElementById('haba').removeEventListener('click', question12);
    document.getElementById('question11').style.display = 'none';
    document.getElementById('question12').style.display = 'inline';
    document.getElementById('haba').addEventListener('click', question13);
}
const question13 = () => {
    if (!document.getElementById('q12ans4').checked) {
        if (!wrongQ.includes('q12')){
            wrongQ.push('q12');
        }
    }
    document.getElementById('haba').removeEventListener('click', question13);
    document.getElementById('question12').style.display = 'none';
    document.getElementById('question13').style.display = 'inline';
    document.getElementById('haba').addEventListener('click', question14);
}
const question14 = () => {
    if (!document.getElementById('q13ans1').checked) {
        if (!wrongQ.includes('q13')){
            wrongQ.push('q13');
        }
    }
    document.getElementById('haba').removeEventListener('click', question14);
    document.getElementById('question13').style.display = 'none';
    document.getElementById('question14').style.display = 'inline';
    document.getElementById('haba').addEventListener('click', question15);
}
const question15 = () => {
    if (!document.getElementById('q14ans1').checked) {
        if (!wrongQ.includes('q14')){
            wrongQ.push('q14');
        }
    }
    document.getElementById('haba').removeEventListener('click', question15);
    document.getElementById('question14').style.display = 'none';
    document.getElementById('question15').style.display = 'inline';
    document.getElementById('haba').addEventListener('click', question16);
}
const question16 = () => {
    if (!document.getElementById('q15ans4').checked) {
        if (!wrongQ.includes('q15')){
            wrongQ.push('q15');
        }
    }
    document.getElementById('haba').removeEventListener('click', question16);
    document.getElementById('question15').style.display = 'none';
    document.getElementById('question16').style.display = 'inline';
    document.getElementById('haba').addEventListener('click', question17);
}
const question17 = () => {
    if (!document.getElementById('q16ans3').checked) {
        if (!wrongQ.includes('q16')){
            wrongQ.push('q16');
        }
    }
    document.getElementById('haba').removeEventListener('click', question17);
    document.getElementById('question16').style.display = 'none';
    document.getElementById('question17').style.display = 'inline';
    document.getElementById('haba').addEventListener('click', question18);
}
const question18 = () => {
    if (!document.getElementById('q17ans2').checked) {
        if (!wrongQ.includes('q17')){
            wrongQ.push('q17');
        }
    }
    document.getElementById('haba').removeEventListener('click', question18);
    document.getElementById('question17').style.display = 'none';
    document.getElementById('question18').style.display = 'inline';
    document.getElementById('haba').addEventListener('click', question19);
}
const question19 = () => {
    if (!document.getElementById('q18ans4').checked) {
        if (!wrongQ.includes('q18')){
            wrongQ.push('q18');
        }
    }
    document.getElementById('haba').removeEventListener('click', question19);
    document.getElementById('question18').style.display = 'none';
    document.getElementById('question19').style.display = 'inline';
    document.getElementById('haba').addEventListener('click', question20);
}
const question20 = () => {
    if (!document.getElementById('q19ans1').checked) {
        if (!wrongQ.includes('q19')){
            wrongQ.push('q19');
        }
    }
    document.getElementById('haba').removeEventListener('click', question20);
    document.getElementById('question19').style.display = 'none';
    document.getElementById('question20').style.display = 'inline';
    document.getElementById('haba').addEventListener('click', question21);
}
const question21 = () => {
    if (!document.getElementById('q20ans3').checked) {
        if (!wrongQ.includes('q20')){
            wrongQ.push('q20');
        }
    }
    document.getElementById('haba').removeEventListener('click', question21);
    document.getElementById('question20').style.display = 'none';
    document.getElementById('question21').style.display = 'inline';
    document.getElementById('haba').addEventListener('click', question22);
}
const question22 = () => {
    if (!document.getElementById('q21ans3').checked) {
        if (!wrongQ.includes('q21')){
            wrongQ.push('q21');
        }
    }
    document.getElementById('haba').removeEventListener('click', question22);
    document.getElementById('question21').style.display = 'none';
    document.getElementById('question22').style.display = 'inline';
    document.getElementById('haba').addEventListener('click', question23);
}
const question23 = () => {
    if (!document.getElementById('q22ans1').checked) {
        if (!wrongQ.includes('q22')){
            wrongQ.push('q22');
        }
    }
    document.getElementById('haba').removeEventListener('click', question23);
    document.getElementById('question22').style.display = 'none';
    document.getElementById('question23').style.display = 'inline';
    document.getElementById('haba').addEventListener('click', question24);
}
const question24 = () => {
    if (!document.getElementById('q23ans4').checked) {
        if (!wrongQ.includes('q23')){
            wrongQ.push('q23');
        }
    }
    document.getElementById('haba').removeEventListener('click', question24);
    document.getElementById('question23').style.display = 'none';
    document.getElementById('question24').style.display = 'inline';
    document.getElementById('haba').addEventListener('click', question25);
}
const question25 = () => {
    if (!document.getElementById('q24ans2').checked) {
        if (!wrongQ.includes('q24')){
            wrongQ.push('q24');
        }
    }
    document.getElementById('haba').removeEventListener('click', question25);
    document.getElementById('question24').style.display = 'none';
    document.getElementById('question25').style.display = 'inline';
    document.getElementById('haba').addEventListener('click', question26);
}
const question26 = () => {
    if (!document.getElementById('q25ans4').checked) {
        if (!wrongQ.includes('q25')){
            wrongQ.push('q25');
        }
    }
    document.getElementById('haba').removeEventListener('click', question26);
    document.getElementById('question25').style.display = 'none';
    document.getElementById('question26').style.display = 'inline';
    document.getElementById('haba').addEventListener('click', finish);
}
const finish = () =>{
    if (!document.getElementById('q26ans3').checked) {
        if (!wrongQ.includes('q26')){
            wrongQ.push('q26');
        }
    }
    document.getElementById('haba').removeEventListener('click', finish);
    document.getElementById('question26').style.display = 'none';
    document.getElementById('finish').style.display = 'inline';
    document.getElementById('haba').style.display = 'none';
    document.getElementById('headTest').style.display = 'none';
    if(wrongQ.length === 0){
        let nowDate = new Date();
        let currDate = nowDate.getUTCDate()+'/'+(nowDate.getUTCMonth()+1)+'/'+nowDate.getUTCFullYear();
        document.getElementById('date').innerText = currDate;
        document.getElementById('time').innerText = nowDate.toLocaleTimeString('it-IT').substring(0,5);
        document.getElementById('right').style.display = 'inline';
        document.getElementById('takePic').style.display = 'inline';
        document.getElementById('right').innerText = ' כל הכבוד ' + document.getElementById('name').value + ' עברת את הלומדה ';
    }else{
        document.getElementById('wrong').style.display = 'inline';
    }
}
