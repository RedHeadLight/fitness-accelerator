// найти элемент кнопки 6 месяцев по классу
// по клику на элемент навесить  класс с модификатором current
// по клику же показать список карточек для 6 месячного периода и скрыть для текущего
function showHalfYearList ()  {
  document.ul.classList.remove ('.subscriptions-card--current'),
  document.ul.classList.add ('.hidden'),
  halfYearList.classList.remove ('.hidden');
  halfYearList.classList.add ('.subscriptions-card--current'),
};

const renderHalfYearCard = () => {
  const halfYearBtn = document.querySelector ('.half-year-btn'),
  const halfYearList = vdocument.querySelector ('.half-year-cards'),
  halfYearBtn.addEventListener ('click', showHalfYearList),
};

// найти элемент кнопки 12 месяцев по классу
// по клику на элемент навесить  класс с модификатором current
// по клику же показать список карточек для 12 месячного периода и скрыть для текущего

function showFullYearList () {
  document.ul.classList.remove ('.subscriptions-card--current'),
  document.ul.classList.add ('.hidden'),
  fullYearListYearList.classList.remove ('.hidden');
  fullYearList.classList.add ('.subscriptions-card--current'),
};

const renderFullYearCard = () => {
  const fullYearBtn = document.querySelector ('.full-year-btn'),
  const fullYearList = document.querySelector ('.full-year-cards'),
  fullYearBtn.addEventListener ('click', showFullYearList),
};


// найти элемент кнопки 1 месяцa по классу
// по клику на элемент навесить  класс с модификатором current
// по клику же показать список карточек для 1 месячного периода и скрыть для текущего

function showOneMonthList () {
  document.ul.classList.remove ('.subscriptions-card--current'),
  document.ul.classList.add ('.hidden'),
  oneMonthListList.classList.remove ('.hidden');
  oneMonthListList.classList.add ('.subscriptions-card--current'),
};

const renderOneMonthCard = () => {
  const oneMonthBtn = document.querySelector ('.one-month-btn'),
  const oneMonthList = document.querySelector ('.one-month-cards'),
  oneMonthBtn.addEventListener ('click', showOneMonthList),
},

export {renderHalfYearCard, renderOneMonthCard, renderFullYearCard};
