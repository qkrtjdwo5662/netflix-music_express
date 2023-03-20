const loginCheckBox = document.querySelector('.login-checkBox').querySelector('input');
const loginId = document.querySelector('.login-id');
const loginPw = document.querySelector('.login-pw');

window.onload = () => {
  // console.log(localStorage.getItem('autoLogin'));
  // console.log('window on load');
  // console.log(loginCheckBox.checked);
  if (localStorage.getItem('autoLogin') === 'true') {
    // console.log(document.cookie);
    loginCheckBox.checked = true;
    // console.log(document.cookie);
  } else {
    loginCheckBox.checked = false;
    loginId.value = '';
    loginPw.value = '';
  }
};

loginCheckBox.addEventListener('click', () => {
  console.log(loginCheckBox.checked);
  if (loginCheckBox.checked === true) {
    console.log('check됨');
    localStorage.setItem('autoLogin', true);
  } else {
    localStorage.setItem('autoLogin', false);
  }
});
