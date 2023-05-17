function send(){
    var chat=document.getElementById('chats').value;
    window.open("https://api.whatsapp.com/send?phone=+919074927638&text=" +chat);

}