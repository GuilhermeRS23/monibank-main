const btnIniciarCamera = document.querySelector('[data-video-botao]');
const campoCamera = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');
const btnTirarFoto = document.querySelector('[data-tirar-foto]');
const canvas = document.querySelector('[data-video-canvas]');
const mensagem = document.querySelector('[data-mensagem]');
const btnEnviarFoto = document.querySelector('[data-enviar]')
let imagemURL = '';

btnIniciarCamera.addEventListener('click', async function () {
    const iniciarVideo = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: false });

    btnIniciarCamera.style.display = 'none';
    campoCamera.style.display = 'block';
    video.srcObject = iniciarVideo;
})

btnTirarFoto.addEventListener('click', function () {
    canvas.getContext('2d').drawImagem(video, 0, 0, canvas.clientWidth, canvas.height);
    imagemURL = canvas.toDataURL('image/jpeg');

    campoCamera.style.display = 'nome';
    mensagem.style.display = 'block';
})

btnTirarFoto.addEventListener('click', () => {
    const receberDadosExistentes = localStorage.getItem('cadastro');
    const converterRetorno = JSON.parse(receberDadosExistentes);
    converterRetorno.imagem = imagemURL;

    localStorage.setItem('cadastro', JSON.stringify(converterRetorno));
    window.location.href = '../pages/abrir-conta-form-3.html'
})
