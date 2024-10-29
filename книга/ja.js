// Функция поиска книг
function searchBooks(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    const bookItems = document.querySelectorAll('.book-item');

    // Скрываем все книги по умолчанию
    bookItems.forEach(item => {
        item.style.display = 'none';
    });

    // Показываем только те книги, которые соответствуют запросу
    bookItems.forEach(item => {
        const title = item.querySelector('h3').innerText.toLowerCase();
        if (title.includes(searchQuery)) {
            item.style.display = 'block';
        }
    });
}

// Обработка клика на звездочки
document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function() {
        const bookTitle = this.parentElement.dataset.book;
        const ratingValue = this.dataset.value;

        // Устанавливаем оценку для выбранной книги
        alert(`Вы оценили "${bookTitle}" на ${ratingValue} звёзд!`);

        // Обновляем визуальное представление оценок
        const stars = this.parentElement.querySelectorAll('.star');
        stars.forEach(s => {
            s.classList.remove('rated');
        });

        for (let i = 0; i < ratingValue; i++) {
            stars[i].classList.add('rated');
        }
    });
});

 // Функция отправки комментария
 function submitComment() {
    const commentInput = document.getElementById('comment-input');
    const commentsList = document.getElementById('comments-list');

    if (commentInput.value.trim() === '') {
        alert('Пожалуйста, введите комментарий.'); // Проверка на пустой ввод
        return;
    }

    // Создаем новый элемент комментария
    const commentItem = document.createElement('div');
    commentItem.className = 'comment-item';

    // Создаем заголовок и текст комментария
    const commentHeader = document.createElement('h4');
    commentHeader.innerText = 'Аноним'; // Имя пользователя (можно изменить)
    const commentText = document.createElement('p');
    commentText.innerText = commentInput.value;

    // Добавляем заголовок и текст в элемент комментария
    commentItem.appendChild(commentHeader);
    commentItem.appendChild(commentText);

    // Добавляем новый комментарий в список
    commentsList.appendChild(commentItem);

    // Очищаем текстовое поле
    commentInput.value = '';
}

const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark');

    // Получаем все элементы и добавляем или убираем классы для темной темы
    const bookItems = document.querySelectorAll('.book-item, .recommended-item');
    bookItems.forEach(item => item.classList.toggle('dark'));

    const commentsSection = document.querySelector('.comments-section');
    commentsSection.classList.toggle('dark');

    const modalContent = document.querySelector('.modal-content');
    modalContent.classList.toggle('dark');

    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.classList.toggle('dark'));

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.classList.toggle('dark'));
    
    // Изменение стиля заголовков
    const headers = document.querySelectorAll('h1, h2');
    headers.forEach(header => header.classList.toggle('dark'));
});

