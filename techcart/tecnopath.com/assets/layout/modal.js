document.addEventListener('DOMContentLoaded', (event) => {
    let bucketbtn = document.querySelector('.bucket');
    let modals = document.querySelector('.cart-modal');
    let closed = document.querySelector('.closed');

    bucketbtn.addEventListener('click', () => {
        modals.style.display = 'block';
        document.body.classList.add('modal-open');
    });

    closed.addEventListener('click', () => {
        modals.style.display = 'none';
        document.body.classList.remove('modal-open');
    });

    window.addEventListener('click', (event) => {
        if (event.target === modals) {
            modals.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    });
});



