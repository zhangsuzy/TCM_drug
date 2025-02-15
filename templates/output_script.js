document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    document.getElementById("name").textContent = params.get("name") || "未知";
    document.getElementById("age").textContent = params.get("age") || "未知";
    document.getElementById("gender").textContent = params.get("gender") || "未知";
    document.getElementById("six-diagnosis").textContent = params.get("six-diagnosis") || "未知";
    document.getElementById("organ-diagnosis").textContent = params.get("organ-diagnosis") || "未知";
    document.getElementById("prescription-name").textContent = params.get("prescription-name") || "未知";
    document.getElementById("prescription").textContent = params.get("prescription") || "未知";
    document.getElementById("decoction-method").textContent = params.get("decoction-method") || "未知";
});
