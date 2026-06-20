let currentPlatform = 'youtube';

function setPlatform(btn, platform) {
    currentPlatform = platform;
    // بٹن کو ایکٹو کرنے کے لیے
    document.querySelectorAll('.p-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function processDownload() {
    const url = document.getElementById('urlInput').value.trim();
    
    if (!url) { 
        alert("براہ کرم پہلے لنک پیسٹ کریں!"); 
        return; 
    }

    // ہر پلیٹ فارم کے لیے بہترین اور تیز ترین یو آر ایل
    let targetUrl = "";
    
    if (currentPlatform === 'youtube') {
        targetUrl = `https://loader.to/api/button/?url=${encodeURIComponent(url)}`;
    } else if (currentPlatform === 'facebook') {
        targetUrl = `https://fdown.net/download.php?url=${encodeURIComponent(url)}`;
    } else if (currentPlatform === 'tiktok') {
        targetUrl = `https://ssstik.io/en?url=${encodeURIComponent(url)}`;
    }

    // یہ کمانڈ یوزر کو نئی ونڈو میں بھیج دے گی، کوئی ایرر نہیں آئے گا
    window.open(targetUrl, '_blank');
}
