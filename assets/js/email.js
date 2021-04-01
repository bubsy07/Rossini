console.log("hello you again")

function sendMail(contactForm) {
    emailjs.send("gmail", "rossini", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "Thoughts": contactForm.Rossini.value
    })
    .then(
        function(response) {
        console.log("SUCCESS", response);
        $('#mail-ok').addClass('visible')
    },
    function(error) {
        console.log("FAILED", error);
        $('#mail-nok').addClass('visible')

        }
    );
    return false;
}