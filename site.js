document.addEventListener('DOMContentLoaded', function () {

  const form = document.forms.loginForm;

  if (!form) {
    console.warn('Форма loginForm не найдена на странице');
    return;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

    console.log('Данные формы:', data);

    const errors = [];

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(data.email || '')) {
      errors.push('Введите корректный email.');
    }

    if (!data.password || data.password.length < 6) {
      errors.push('Пароль должен быть не короче 6 символов.');
    }

    Swal.fire({
      icon: 'success',
      title: 'Вы вошли',
      html: `Спасибо за вход на нашу платформу`,
      confirmButtonText: 'Отлично'
    });
  });
});