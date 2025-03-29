const urlParams = new URLSearchParams(window.location.search);
const returnUrl = urlParams.get("returnUrl");

function handleUpload() {
    const input = document.getElementById("fileInput");
    const status = document.getElementById("status");
    const files = input.files;

    if (files.length < 10) {
        status.innerText = "Please upload at least 10 images.";
        status.style.color = "red";
        return;
    }

    status.innerText = "Uploading...";
    status.style.color = "#9370DB";

    setTimeout(() => {
        status.innerText = "Upload complete! Redirecting...";
        status.style.color = "#9370DB";

        setTimeout(() => {
            window.location.href = returnUrl || document.referrer || window.location.origin;
        }, 2000);
    }, 3000);
}
