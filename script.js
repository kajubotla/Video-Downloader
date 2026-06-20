async function downloadVideo() {
    const url = document.getElementById('urlInput').value.trim();
    const status = document.getElementById('status');
    if (!url) { alert("براہ کرم لنک پیسٹ کریں!"); return; }

    status.innerText = "ویڈیو تیار کی جا رہی ہے...";

    try {
        const response = await fetch("https://api.cobalt.tools/api/json", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify({ url: url, vQuality: "720" })
        });
        const data = await response.json();
        
        if (data.url) {
            // یہ ڈائریکٹ ڈاؤن لوڈ لنک ہے، براؤزر اسے خود بخود ڈاؤن لوڈ شروع کر دے گا
            window.location.href = data.url; 
            status.innerText = "ڈاؤن لوڈ شروع ہو رہا ہے!";
        } else {
            throw new Error("Link processing failed");
        }
    } catch (e) {
        // اگر اے پی آئی کام نہ کرے تو یوزر کو کسی اور ویب سائٹ پر بھیج دیں
        window.open(`https://cobalt.tools/?url=${encodeURIComponent(url)}`, '_blank');
    }
}
