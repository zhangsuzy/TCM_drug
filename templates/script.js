document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("query-form");
    const resultContainer = document.getElementById("result");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const queryParams = new URLSearchParams(formData).toString();

        try {
            const response = await fetch(`/query?${queryParams}`);
            if (!response.ok) {
                throw new Error("查询失败，请稍后再试");
            }
            const data = await response.json();
            displayResult(data);
        } catch (error) {
            resultContainer.innerHTML = `<p class='error'>${error.message}</p>`;
        }
    });

    function displayResult(data) {
        if (!data || Object.keys(data).length === 0) {
            resultContainer.innerHTML = "<p class='error'>未找到相关信息</p>";
            return;
        }

        let outputHTML = "<div class='result-card'>";
        outputHTML += `<h3>姓名：${data.name}</h3>`;
        outputHTML += `<p><strong>年龄：</strong>${data.age}</p>`;
        outputHTML += `<p><strong>性别：</strong>${data.gender}</p>`;
        outputHTML += `<p><strong>主要症状：</strong>${data.symptoms}</p>`;
        outputHTML += `<p><strong>脉象：</strong>${data.pulse}</p>`;
        outputHTML += `<p><strong>舌象：</strong>${data.tongue}</p>`;
        outputHTML += "</div>";

        resultContainer.innerHTML = outputHTML;
    }
});
