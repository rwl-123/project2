// scripts.js
document.querySelector('.read-more').addEventListener('click', function (e) {
        e.preventDefault(); // 防止默认的链接跳转行为
        const textLine = document.querySelector('.text-line');
        const readMoreButton = document.querySelector('.read-more');

        // 切换文本显示状态
        textLine.classList.toggle('full-text');

        // 根据是否展开，修改按钮文本
        if (textLine.classList.contains('full-text')) {
            readMoreButton.textContent = 'Read Less'; // 显示 "Read Less"
        } else {
            readMoreButton.textContent = 'Read More'; // 显示 "Read More"
        }
    });