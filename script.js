/* ==========================
   ELEMENTS
========================== */

const loginPage = document.getElementById("loginPage");
const signupPage = document.getElementById("signupPage");

const showSignupBtn = document.getElementById("showSignup");
const showLoginBtn = document.getElementById("showLogin");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const portalOverlay = document.querySelector(".portal-overlay");

/* ==========================
   PAGE SWITCHING
========================== */

function showLogin() {
    signupPage.classList.remove("active");

    setTimeout(() => {
        loginPage.classList.add("active");
    }, 150);
}

function showSignup() {
    loginPage.classList.remove("active");

    setTimeout(() => {
        signupPage.classList.add("active");
    }, 150);
}

showSignupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showSignup();
});

showLoginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showLogin();
});

/* ==========================
   LOGIN VALIDATION
========================== */

loginForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const username =
        document.getElementById("loginUser").value.trim();

    const password =
        document.getElementById("loginPassword").value.trim();

    if (!username || !password) {

        alert("The Archive requires all fields.");
        return;
    }

    enterArchive();
});

/* ==========================
   SIGNUP VALIDATION
========================== */

signupForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const inputs =
        signupForm.querySelectorAll("input");

    const username = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const password = inputs[2].value.trim();
    const confirm = inputs[3].value.trim();

    if (
        !username ||
        !email ||
        !password ||
        !confirm
    ) {
        alert("Every Archive record must be completed.");
        return;
    }

    if (password !== confirm) {
        alert("Passwords do not match.");
        return;
    }

    alert("Welcome, Seeker.");
    showLogin();
});

/* ==========================
   ARCHIVE ENTRY ANIMATION
========================== */

function enterArchive() {

    document.body.classList.add("archive-active");

    brightenStars();

    portalOverlay.classList.add("active");

    setTimeout(() => {

        document.body.style.transition =
            "opacity 1.2s ease";

        document.body.style.opacity = "0";

    }, 1200);

    setTimeout(() => {

        window.location.href = "home.html";

    }, 2600);
}

/* ==========================
   STAR BRIGHTENING
========================== */

function brightenStars() {

    const stars =
        document.querySelectorAll(
            ".stars, .stars2, .stars3"
        );

    stars.forEach(layer => {

        layer.style.transition =
            "all 1.2s ease";

        layer.style.opacity = "1";

        layer.style.filter =
            "drop-shadow(0 0 8px #fff6d5)";
    });
}

/* ==========================
   CONSTELLATION SYSTEM
========================== */

const canvas =
    document.getElementById(
        "constellationCanvas"
    );

const ctx = canvas.getContext("2d");

let stars = [];

function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    createStars();
}

function createStars() {

    stars = [];

    const count = 40;

    for (let i = 0; i < count; i++) {

        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.2,
            vy: (Math.random() - 0.5) * 0.2
        });
    }
}

function drawConstellations() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    stars.forEach(star => {

        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0)
            star.x = canvas.width;

        if (star.x > canvas.width)
            star.x = 0;

        if (star.y < 0)
            star.y = canvas.height;

        if (star.y > canvas.height)
            star.y = 0;

        ctx.beginPath();

        ctx.arc(
            star.x,
            star.y,
            1.5,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            "rgba(255,241,194,0.8)";

        ctx.fill();
    });

    for (let i = 0; i < stars.length; i++) {

        for (
            let j = i + 1;
            j < stars.length;
            j++
        ) {

            const dx =
                stars[i].x - stars[j].x;

            const dy =
                stars[i].y - stars[j].y;

            const distance =
                Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {

                ctx.beginPath();

                ctx.moveTo(
                    stars[i].x,
                    stars[i].y
                );

                ctx.lineTo(
                    stars[j].x,
                    stars[j].y
                );

                ctx.strokeStyle =
                    `rgba(216,182,106,${
                        0.15 -
                        distance / 900
                    })`;

                ctx.lineWidth = 1;

                ctx.stroke();
            }
        }
    }

    requestAnimationFrame(
        drawConstellations
    );
}

/* ==========================
   START
========================== */

resizeCanvas();

drawConstellations();

window.addEventListener(
    "resize",
    resizeCanvas
);
