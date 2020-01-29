import phonebook from 'ic:canisters/phonebook';

phonebook.greet(window.prompt("Enter your name:")).then(greeting => {
  window.alert(greeting);
});
