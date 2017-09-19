myApp = {
  /**
   * check if the the provided email is already registered
   * @param  {string} email new email address
   * @return {boolean}       states of the uniqueness check.
   */
  checkDuplicateEmail: function(email) {
    if(typeof(Storage)!=="undefined")
    {
      const item = localStorage.getItem(email);
      if (item) {
        alert("Email already Exist");
        return false;
      } else {
        return true;
      }
    } else {
      alert('No storage available');
      return false;
    }
  },
  /**
   * To register a user to the system. save the user details in browser localStorage
   * with email as key
   * @return {[type]} [description]
   */
  register: function() {
    const name = document.getElementById("reg-name").value;
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;
    const cpassword = document.getElementById("reg-cpassword").value;
    if (password != cpassword) {
      alert('Password is not matching');
    } else {
      if (this.checkDuplicateEmail(email)) {
        const data = {
          name: name,
          password: password,
        };
        localStorage.setItem(email, JSON.stringify(data));
        window.location.href = 'login.html';
      }
    }
  }
}
