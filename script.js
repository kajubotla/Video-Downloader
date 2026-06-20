let currentPlatform = 'youtube';
function setPlatform(btn, platform) {
    currentPlatform = platform;
    document.querySelectorAll('.p-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

async function downloadVideo() {
    const url = document.getElementById('urlInput').value.trim();
    if (!url) { alert("لنک درج کریں!"); return; }

    // کوبالٹ کی سب سے زیادہ سٹیبل سروس
    const apiUrl = "https://cobalt.tools/api/json";
    
    try {
        // یہ ریکویسٹ کوبالٹ کو بھیجے گی
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ url: url, vQuality: "720" })
        });
        
        const data = await response.json();
        if (data.url) {
            window.location.href = data.url; // اگر ڈائریکٹ لنک ملا تو یہیں سے ڈاؤن لوڈ ہوگا
        } else {
            // اگر API فوری کام نہ کرے تو یوزر کو صرف ایک کلک پر وہاں بھیج دیں
            window.open(`https://cobalt.tools/?url=${encodeURIComponent(url)}`, '_blank');
        }
    } catch (e) {
        window.open(`https://cobalt.tools/?url=${encodeURIComponent(url)}`, '_blank');
    }
}
