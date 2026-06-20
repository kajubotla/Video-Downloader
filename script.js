let currentPlatform = 'YouTube';

function selectTab(btn, platform) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentPlatform = platform;
}

async function processDownload() {
    const url = document.getElementById('urlInput').value.trim();
    if (!url) { alert("پہلے لنک پیسٹ کریں!"); return; }

    try {
        // Cobalt API جو ڈائریکٹ ڈاؤن لوڈ لنک دیتا ہے
        const response = await fetch("https://api.cobalt.tools/api/json", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify({ url: url })
        });
        const data = await response.json();

        if (data.url) {
            // یہ یوزر کو آپ کی سائٹ پر رہتے ہوئے فائل ڈاؤن لوڈ کرنے پر مجبور کرے گا
            window.location.href = data.url;
        } else {
            alert("اس ویڈیو کو ڈاؤن لوڈ نہیں کیا جا سکا۔ براہ کرم لنک چیک کریں۔");
        }
    } catch (e) {
        // بیک اپ: اگر API نہ چلے تو وہ ونڈو کھول دے گا
        window.open(`https://cobalt.tools/?url=${encodeURIComponent(url)}`, '_blank');
    }
}
