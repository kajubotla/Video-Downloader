let currentPlatform = 'youtube';

function setPlatform(platform) {
    currentPlatform = platform;
    document.querySelectorAll('.p-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

function processDownload() {
    const url = document.getElementById('urlInput').value;
    if (!url) { alert("پہلے لنک پیسٹ کریں!"); return; }

    let baseUrl = "";
    if (currentPlatform === 'youtube') baseUrl = "https://loader.to/api/button/?url=";
    else if (currentPlatform === 'facebook') baseUrl = "https://fdown.net/download.php?url=";
    else if (currentPlatform === 'tiktok') baseUrl = "https://ssstik.io/en?url=";

    window.open(baseUrl + encodeURIComponent(url), '_blank');
}
