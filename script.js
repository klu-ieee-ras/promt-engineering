/* ✅ Animated Background */
particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        size: { value: 3 },
        move: { speed: 2 },
        line_linked: { enable: true }
    }
});

/* ✅ Google Script Web App URL */
const scriptURL =
    "https://script.google.com/macros/s/AKfycbz74qVqbT6egDJ077TmCYJ0-Zd3Qii7KLQOH_fd8ZsbcSuTJCh-gmPNkxnVdH_t6m_h/exec";

/* ✅ Form Submission */
document.getElementById("registerForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("msg").innerHTML = "Submitting...";

    let file = document.getElementById("screenshot").files[0];
    let reader = new FileReader();

    reader.onload = function () {
        let data = {
            name: document.getElementById("name").value,
            regno: document.getElementById("regno").value,
            college: document.getElementById("college").value,
            city: document.getElementById("city").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            department: document.getElementById("department").value,
            gender: document.getElementById("gender").value,
            year: document.getElementById("year").value,
            paymentid: document.getElementById("paymentid").value,
            screenshot: reader.result
        };


        fetch(scriptURL, {
            method: "POST",
            body: JSON.stringify(data)
        })
            .then((res) => res.text())
            .then(() => {
                msg.innerHTML = "✅ Registration Successful!";
                registerForm.reset();
            })
            .catch(() => {
                msg.innerHTML = "❌ Error. Try again.";
            });
    };

    reader.readAsDataURL(file);
});
