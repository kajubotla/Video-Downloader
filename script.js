let selectedPlatform = 'youtube';

function setPlatform(platform) {
    selectedPlatform = platform;
    alert(platform + " منتخب ہو گیا ہے۔ اب لنک پیسٹ کریں۔");
}

function showFormats() {
    const url = document.getElementById('urlInput').value;
    if (!url) {
        alert("براہ کرم پہلے لنک درج کریں!");
        return;
    }
    document.getElementById('formatArea').classList.remove('hidden');
}

function downloadFile() {
    const url = document.getElementById('urlInput').value;
    const format = document.getElementById('formatSelect').value;
    
    // یہ آپ کو ڈاؤن لوڈ پیج پر بھیج دے گا
    alert("آپ کی " + selectedPlatform + " ویڈیو ڈاؤن لوڈ ہو رہی ہے...");
    window.open(`https://snapsave.app/search?url=${encodeURIComponent(url)}`, '_blank');
}
