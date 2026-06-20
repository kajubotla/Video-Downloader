let selectedPlatform = 'youtube';

// پلیٹ فارم منتخب کرنے کا فنکشن
function selectPlatform(btn, platform) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedPlatform = platform;
}

// ڈاؤن لوڈ کا فنکشن
async function downloadFile() {
    const url = document.getElementById('urlInput').value;
    const status = document.getElementById('status');
    
    if (!url) { alert("براہ کرم لنک درج کریں!"); return; }

    status.innerText = "ویڈیو تیار ہو رہی ہے، براہ کرم انتظار کریں...";

    try {
        const response = await fetch("https://api.cobalt.tools/api/json", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify({ url: url })
        });

        const data = await response.json();
        if (data.url) {
            window.location.href = data.url;
            status.innerText = "ڈاؤن لوڈ شروع ہو رہا ہے!";
        } else {
            status.innerText = "معذرت، لنک کام نہیں کر رہا۔";
        }
    } catch (e) {
        status.innerText = "ایرر: براہ کرم دوبارہ کوشش کریں۔";
    }
}
