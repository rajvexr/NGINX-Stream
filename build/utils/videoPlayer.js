let currentPlayer = null;

function redirectToPlayer(playerType) {
    const videoElement = document.getElementById('video');

    if (currentPlayer && playerType !== "hlsVod") {
        currentPlayer.reset();
    }
    if (playerType == "dashVod" || playerType == "dashLive") {
        currentPlayer = dashjs.MediaPlayer().create();
    } else if (playerType == "shakaVod" || playerType == "shakaLive") {
        currentPlayer = player = new shaka.Player(videoElement)
    } else if (playerType == "hlsVod") {
    currentPlayer = player = new Hls();
} else {
    throw new Error(`what the hell man`)
}



const videoContainer = document.getElementById('video-container');
videoContainer.classList.toggle('active');

switch (playerType) {
    case 'dashVod':
        currentPlayer.initialize(videoElement, '../referance/matrixDashVOD/dashStream.mpd', true);
        break;
    case 'dashLive':
        currentPlayer.initialize(videoElement, '../DASH_manifest/stream.mpd', true);
        break;
    case 'shakaVod':
        videoElement.autoplay = true;
        currentPlayer.load('../referance/matrix.mp4');
        break;
    case 'shakaLive':
        videoElement.autoplay = true;
        currentPlayer.load('../referance/matrix.mp4');
        break;
    case 'hlsVod':
        if (Hls.isSupported()) {
            console.log("HLS is supported - create new HLS session, load in m3u8 playlist and attach to video HTML element")
            currentPlayer.loadSource('../HLS_manifest/stream.m3u8');
            currentPlayer.attachMedia(videoElement);
        } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
            videoElement.src = '../HLS_manifest/stream.m3u8';
            break;
        }
    default:
        throw new Error('Could not locate player');
}
}