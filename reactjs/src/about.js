export default function About() {
  return (
    <div>
      <section className="about">
        <div className="container about__container">
          <h2 className="about__heading site-heading">О нас</h2>
          <p className="about__text">
            Также как перспективное планирование создаёт необходимость включения
            в производственный план целого ряда внеочередных мероприятий с
            учётом комплекса экспериментов, поражающих по своей масштабности и
            грандиозности. А также диаграммы связей могут быть описаны
            максимально подробно. Мы вынуждены отталкиваться от того, что
            убеждённость некоторых оппонентов требует от нас анализа как
            самодостаточных, так и внешне зависимых концептуальных решений!
            Следует отметить, что высококачественный прототип
            <span className="about__tooltip"></span> будущего проекта
            предопределяет высокую востребованность позиций, занимаемых
            участниками в отношении поставленных задач. Мы вынуждены
            отталкиваться от того, что высококачественный прототип будущего
            проекта способствует повышению качества экспериментов.
          </p>
          <div className="about-content">
            <div className="about-content__left">
              <div className="about-left__inner">
                <p className="about-left__text">
                  Принимая во внимание показатели успешности, перспективное
                  планирование способствует подготовке и реализации новых
                  принципов.
                </p>
                <button className="about-left__btn btn-reset">Подробнее</button>
              </div>
            </div>
            <div className="about-content__right">
              <div
                className="about-right__item"
                style={{
                  backgroundImage: `url(img/about-icon-2.svg`,
                }}
              >
                <h3 className="about-right__title">
                  Консультация с широким активом
                </h3>
                <p className="about-right__text">
                  А также свежий взгляд на привычные вещи - безусловно открывает
                  новые горизонты для как самодостаточных, так и внешне
                  зависимых концептуальных решений.
                </p>
              </div>
              <div className="about-right__item">
                <h3 className="about-right__title">
                  В своём стремлении повысить
                </h3>
                <p className="about-right__text">
                  Качество жизни, они забывают, что сплочённость команды
                  профессионалов представляет собой интересный эксперимент
                  проверки прогресса профессионального сообщества.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
