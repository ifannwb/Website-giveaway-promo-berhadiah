function spinWheel(){

    document.getElementById("wheel")
    .style.transform="rotate(2160deg)";

    setTimeout(()=>{

        document.getElementById("winnerModal")
        .style.display="block";

    },4000);

}

function closeWinner(){

    document.getElementById("winnerModal")
    .style.display="none";

    document
    .getElementById("claimSection")
    .classList.remove("hidden");

}

function submitData() {

    let nama = document.getElementById("nama").value;
    let hp = document.getElementById("hp").value;
    let alamat = document.getElementById("alamat").value;
    let email = document.getElementById("email").value;

    document.getElementById("showNama").innerHTML =
        "Nama : " + nama;

    document.getElementById("showHP").innerHTML =
        "No HP : " + hp;

    document.getElementById("showAlamat").innerHTML =
        "Alamat : " + alamat;

    document.getElementById("showEmail").innerHTML =
        "Email : " + email;

    document.getElementById("claimSection")
        .classList.add("hidden");

    document.getElementById("educationSection")
        .classList.remove("hidden");

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });

}

let time = 300;

setInterval(() => {

    let minute = Math.floor(time / 60);
    let second = time % 60;

    document.getElementById("countdown").innerHTML =
        `${minute}:${second < 10 ? "0" : ""}${second}`;

    if(time > 0){
        time--;
    }

}, 1000);

const testimonials = [

"Rina dari Jakarta memenangkan iPhone 17 Pro Max",

"Budi dari Semarang memenangkan Yamaha NMAX",

"Siti dari Surabaya memenangkan Rp5.999.000",

"Agus dari Bandung memenangkan MacBook Air",

"Dodi dari Solo memenangkan Smart TV Samsung",

"Farhan dari Bekasi memenangkan iPhone 17 Pro Max",

"Yani dari Yogyakarta memenangkan Rp5.999.000",

"Reyhan dari Malang memenangkan Smart TV Samsung"

];

function generateMessage(){

    const randomText =
    testimonials[
        Math.floor(
            Math.random()*testimonials.length
        )
    ];

    const randomMinute =
    Math.floor(
        Math.random()*20
    ) + 1;

    return `🎉 ${randomText} • ${randomMinute} menit lalu`;

}

document.getElementById("runningText").innerHTML =

Array.from({length:3})
.map(() => generateMessage())
.join(" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ");

function updateRunningText(){

    document.getElementById("runningText").innerHTML =

    Array.from({length:4})
    .map(() => generateMessage())
    .join(" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ");

}

updateRunningText();

setInterval(updateRunningText,10000);


function showToast(){

    const container =
    document.getElementById("toastContainer");

    container.innerHTML = "";

    const toast =
    document.createElement("div");

    toast.classList.add("toast");

    toast.innerHTML =
    testimonials[
        Math.floor(
            Math.random()*testimonials.length
        )
    ];

    container.appendChild(toast);

}

showToast();

setInterval(showToast8000);

function showToast(){

    const container =
        document.getElementById("toastContainer");

    container.innerHTML = "";

    const toast =
        document.createElement("div");

    toast.classList.add("toast");

    toast.innerHTML =
        testimonials[
            Math.floor(
                Math.random()*testimonials.length
            )
        ];

    container.appendChild(toast);

}

setInterval(showToast,4000);