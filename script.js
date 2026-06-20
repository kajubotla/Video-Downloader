async function downloadFile() {
    const url = document.getElementById('urlInput').value;
    if (!url) { alert("پہلے لنک ڈالیں!"); return; }

    const status = document.getElementById('status');
    status.innerText = "فائل تیار ہو رہی ہے، انتظار کریں...";

    try {
        const response = await fetch("https://api.cobalt.tools/api/json", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify({ url: url, filenameStyle: "classic" })
        });

        const data = await response.json();
        if (data.url) {
            window.location.href = data.url; // یہ براؤزر کو خود بخود ڈاؤن لوڈ پر مجبور کر دے گا
        } else {
            alert("لنک کام نہیں کر رہا، براہ کرم دوسرا لنک آزمائیں");
        }
    } catch (e) {
        alert("کنکشن میں مسئلہ ہے!");
    }
}
