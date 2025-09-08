document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const navMenu = document.getElementById('nav-menu');

    hamburgerIcon.addEventListener('click', () => {
        // ハンバーガーアイコンにactiveクラスを追加・削除
        hamburgerIcon.classList.toggle('active');
        // ナビゲーションメニューにactiveクラスを追加・削除
        navMenu.classList.toggle('active');
    });
});
