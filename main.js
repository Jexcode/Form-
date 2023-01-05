function sendEmail(){
  Email.send({
    Host: "gmail.com",
    Username: "bialakayode@gmail.com",
    Password: "Donat123",
    To: 'bialajosepholukayode@gmail.com',
    From: document.getElementById("email").value,
    Subject: "New Contact Form Enquiry",
    Body: "Name" + document.getElementById('name').value
    + "<br> Email" + document.getElementById('email').value 
    + "<br> Phone No" + document.getElementById('phone').value
    + "<br> Message" + document.getElementById('message').value
 }).then(
    message => alert("Message sent successfully")
  );
}