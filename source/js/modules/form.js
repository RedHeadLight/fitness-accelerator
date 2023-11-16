const form = document.querySelector ('[data-form]');
const nameInput = form.querySelector ('[data-username]');
const phoneInput = form.querySelector ('[data-phone-number]');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  // получить значение поля имя
  const username = nameInput.value;
  // проверить что поле заполнено
   // вывести ошибку если нет
  if (username.value.lenth === 0) {
    alert('Пожалуйста, заполните поле')
  };
  return;

  // проверить что поле заполнено кириллицей или латиницей
  // вывести ошибку если нет
  let validName = /^[A-ZА-ЯЁ]+$/i;
 if (username !== validName) {
   alert('Вы можете использовать только латиницу или кириллицу');
 }
 return;

  // получить значение поля телефон
  const userPhone = phoneInput.value;
  // проверить что поле телефона заполнено
  // вывести ошибку если нет
  if (userPhone.value.lenth === 0) {
    alert('Пожалуйста, заполните поле')
  }
  return;
  // проверить что не принимает буквы
  // вывести ошибку если они есть
  let validPhone = [/^[A-ZА-ЯЁ]+$/i];
  if (userPhone !== validPhone) {
    alert('Вы не можете использовать буквы для этого поля')
  }
  return;
  form.submit();
});
