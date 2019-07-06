let email = prompt('Please enter your email address', '');

const minLengthEmail = 6;
const minLengthPassword = 5;

if (email === null || email === '') {
  alert('Canceled');
} else if (email.length < minLengthEmail) {
  alert('I don\'t know any emails having name length less than 6 symbols');
} else if (email !== 'user@gmail.com' && email !== 'admin@gmail.com') {
  alert('I don\'t know you');
} else {
  let password = prompt('Enter your password', '');

  if (password === '' || password === null) {
    alert('Canceled');
  } else if (
    email === 'user@gmail.com' && password !== 'UserPass' ||
    email === 'admin@gmail.com' && password !== 'AdminPass'
  ) {
    alert('Wrong Password')
  } else {
    let isWantToChangePassword = confirm('Do you want to change your password?');

    if (!isWantToChangePassword) {
      alert('You have failed the change');
    } else {
      let oldPassword = prompt('Please enter the old password', '');

      if (password !== oldPassword) {
        alert('Wrong password');
      } else {
        let newPassword = prompt('Enter your new password', '');

        if (newPassword === null || newPassword.length < minLengthPassword) {
          alert('It\'s too short password. Sorry.');
        } else {
          let reNewPassword = prompt('Enter you new password again', '');

          if (newPassword === reNewPassword) {
            alert('You have successfully changed your password.');
          } else {
            alert('You wrote the wrong password.');
          }
        }
      }
    }
  }
}