document.getElementById('myform').addEventListener('submit', function(event) {
    event.preventDefault();
    var password = this.elements['password'].value;
    var confirmation = this.elements['confirmation'].value;

    if (password === confirmation) {
      this.submit();
    } else {
      alert("Passwords do not match, please try again.")
    }
});