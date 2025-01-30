function playVideo(videoId, thumbId) {
    // Lista de vídeos do YouTube
    const videos = {
        "video1": "https://www.youtube.com/embed/btclrzirBYA?autoplay=1",
        "video2": "https://www.youtube.com/embed/uJ1v6-aFgbw?autoplay=1",
        "video3": "https://www.youtube.com/embed/0sDgOJxUXsc?autoplay=1",
        "video4": "https://www.youtube.com/embed/7Ml5uRstQSA?autoplay=1"
    };

    // Seleciona os elementos
    const video = document.getElementById(videoId);
    const thumb = document.getElementById(thumbId);

    // Troca a thumbnail pelo vídeo e inicia a reprodução
    if (video && thumb) {
        video.src = videos[videoId];
        video.style.display = "block";
        thumb.style.display = "none";
    }
}
