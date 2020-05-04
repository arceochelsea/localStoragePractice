document.getElementById('header').innerText = 'Security Questions';
document.getElementById('warningMessage').innerText = 'if answers do not match user will be locked out of account!';

function submitSecurityAnswers() {
    
    localStorage.setItem('question1', document.getElementById('firstPet').value);
    localStorage.getItem('question1');

    localStorage.setItem('question2', document.getElementById('firstCar').value);
    localStorage.getItem('question2');

    localStorage.setItem('question3', document.getElementById('phoneNum').value);
    localStorage.getItem('question3');

}
localStorage.getItem('question1');
localStorage.getItem('question2');
localStorage.getItem('question3');
