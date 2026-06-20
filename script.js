let selectedPlatform = 'youtube';

function selectPlatform(btn, platform) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedPlatform = platform;
}

function downloadFile() {
    const url = document.getElementById('urlInput').value.trim();
    if (!url) { alert("پہلے لنک یہاں پیسٹ کریں!"); return; }

    let targetUrl = "";

    // ہر پلیٹ فارم کے لیے ایک مخصوص اور بہترین ڈاؤنلوڈر سروس
    if (selectedPlatform === 'youtube') {
        targetUrl = `https://loader.to/api/button/?url=${encodeURIComponent(url)}&f=mp4`;
    } else if (selectedPlatform === 'facebook') {
        targetUrl = `https://fdown.net/download.php?url=${encodeURIComponent(url)}`;
    } else if (selectedPlatform === 'tiktok') {
        targetUrl = `https://ssstik.io/en?url=${encodeURIComponent(url)}`;
    }

    // اب یہ ویب سائٹ کو ایک نئی ونڈو میں کھولے گا جہاں سے ڈاؤن لوڈ یقینی ہے
    window.open(targetUrl, '_blank');
}
