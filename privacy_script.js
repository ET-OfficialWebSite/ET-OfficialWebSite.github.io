// terms_script.js

document.addEventListener('DOMContentLoaded', () => {

    // ナビゲーションのアクティブ状態をハイライトする関数
    function highlightCurrentPage() {
        const currentPath = window.location.pathname.split('/').pop();
        const navLinks = document.querySelectorAll('.main-nav a');

        navLinks.forEach(link => {
            const linkPath = link.href.split('/').pop();
            // currentPathが空の場合（ルートディレクトリのindex.htmlなど）も考慮
            if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    highlightCurrentPage(); // ページ読み込み時に実行
});