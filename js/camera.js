const botaoIniciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");

//função que qdo clique no botão video ele inicialise a camera
botaoIniciarCamera.addEventListener("click", async function(){ //escutador de evento qdo clica no rostinho
    const iniciarVideo = await navigator.mediaDevices // pede pro navegador aceitar a camera
    .getUserMedia({video: true, audio: false}) // somente video sem audio

    botaoIniciarCamera.style.display = "none"; //pro botao desaparecer depois de clicado
    campoCamera.style.display = "block";

    video.srcObjetct = iniciarVideo;
})