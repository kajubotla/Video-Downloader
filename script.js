let currentTab = 'TikTok';

function selectTab(btn, tabName) {
    // تمام بٹنوں سے 'active' کلاس ہٹائیں
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    // موجودہ بٹن پر 'active' کلاس لگائیں
    btn.classList.add('active');
    currentTab = tabName;
}

function processDownload() {
    const url = document.getElementById('urlInput').value.trim();
    if (!url) { alert("پہلے لنک پیسٹ کریں!"); return; }

    // یہ ہر پلیٹ فارم کے لیے صحیح جگہ پر بھیجے گا
    let targetUrl = "";
    if (currentTab === 'YouTube') targetUrl = "https://loader.to/api/button/?url=" + encodeURIComponent(url);
    else if (currentTab === 'Facebook') targetUrl = "https://fdown.net/download.php?url=" + encodeURIComponent(url);
    else targetUrl = "https://ssstik.io/en?url=" + encodeURIComponent(url);

    window.open(targetUrl, '_blank');
}
