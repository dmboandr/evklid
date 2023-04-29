export default function Work() {
  return (
    <div>
      <section className="work">
        <div className="container work__container">
          <h2 className="work__heading site-heading">Как мы работаем</h2>
          <ul className="work__list list-reset">
            <li className="work__item">
              <button
                className="work__btn work__btn--default btn-reset"
                data-default="one"
                data-path="one"
              >
                1 шаг
              </button>
            </li>
            <li className="work__item">
              <button
                className="work__btn btn-reset"
                data-default="two"
                data-path="two"
              >
                2 шаг
              </button>
            </li>
            <li className="work__item">
              <button
                className="work__btn btn-reset"
                data-default="three"
                data-path="three"
              >
                3 шаг
              </button>
            </li>
            <li className="work__item">
              <button
                className="work__btn btn-reset"
                data-default="four"
                data-path="four"
              >
                4 шаг
              </button>
            </li>
          </ul>
          <div
            className="tab-content work__content tab-content--active"
            data-target="one"
          >
            <div className="work-left">
              <div className="work__inner">
                <h3 className="work-left__title">Проводим консультацию</h3>
                <p className="work-left__text">
                  Влечет за&nbsp;собой процесс внедрения и&nbsp;модернизации
                  приоритизации разума над эмоциями. В&nbsp;рамках спецификации
                  современных стандартов, некоторые особенности внутренней
                  политики будут объективно рассмотрены соответствующими
                  инстанциями. А&nbsp;также представители современных социальных
                  резервов, инициированные исключительно синтетически,
                  ограничены исключительно образом мышления. Являясь всего лишь
                  частью общей картины, реплицированные с&nbsp;зарубежных
                  источников, современные исследования подвергнуты целой серии
                  независимых исследований. Кстати, стремящиеся вытеснить
                  традиционное производство, нанотехнологии освещают чрезвычайно
                  интересные особенности картины в&nbsp;целом, однако конкретные
                  выводы, разумеется, призваны к&nbsp;ответу.
                </p>
              </div>
              <div className="work-left__btns">
                <button className="work-left__btn btn-reset site-btn">
                  Подробнее
                </button>
                <button className="work-left__btn work-left__btn--border btn-reset">
                  Договор
                </button>
              </div>
            </div>
            <div className="work-right">
              <picture>
                <source
                  srcSet="media-img/work-img-1-768.jpg"
                  media="(max-width: 900px)"
                />
                <source
                  srcSet="media-img/work-img-1-1024.jpg"
                  media="(max-width: 1120px)"
                />
                <img
                  className="work-right__img"
                  src="img/work-img-1.jpg"
                  alt="Проводим консультацию"
                />
              </picture>
            </div>
          </div>
          <div className="tab-content work__content" data-target="two">
            <div className="work-left">
              <div className="work__inner">
                <h3 className="work-left__title">Составляем смету</h3>
                <p className="work-left__text">
                  Внедрения и&nbsp;модернизации приоритизации разума над
                  эмоциями. В&nbsp;рамках спецификации современных стандартов,
                  некоторые особенности внутренней политики будут объективно
                  рассмотрены соответствующими инстанциями. А&nbsp;также
                  представители современных социальных резервов, инициированные
                  исключительно синтетически, ограничены исключительно образом
                  мышления. Являясь всего лишь частью общей картины,
                  реплицированные с&nbsp;зарубежных источников, современные
                  исследования подвергнуты целой серии независимых исследований.
                </p>
              </div>
              <div className="work-left__btns">
                <button className="work-left__btn btn-reset site-btn">
                  Подробнее
                </button>
                <button className="work-left__btn work-left__btn--border btn-reset">
                  Договор
                </button>
              </div>
            </div>
            <div className="work-right">
              <picture>
                <source
                  srcSet="media-img/work-img-1-768.jpg"
                  media="(max-width: 900px)"
                />
                <source
                  srcSet="media-img/work-img-1-1024.jpg"
                  media="(max-width: 1120px)"
                />
                <img
                  className="work-right__img"
                  src="img/work-img-2.jpg"
                  alt="Проводим консультацию"
                />
              </picture>
            </div>
          </div>
          <div className="tab-content work__content" data-target="three">
            <div className="work-left">
              <div className="work__inner">
                <h3 className="work-left__title">Привлекаем подрядчиков</h3>
                <p className="work-left__text">
                  Идейные соображения высшего порядка, а&nbsp;также новая модель
                  организационной деятельности требует анализа прогресса
                  профессионального сообщества. Высокий уровень вовлечения
                  представителей целевой аудитории является четким
                  доказательством простого факта: высококачественный прототип
                  будущего проекта напрямую зависит от&nbsp;дальнейших
                  направлений развития. Разнообразный и&nbsp;богатый опыт
                  говорит нам, что новая модель организационной деятельности
                  говорит о&nbsp;возможностях системы массового участия.
                  Принимая во&nbsp;внимание показатели успешности, постоянное
                  информационно-пропагандистское обеспечение нашей деятельности
                  позволяет выполнить важные задания по&nbsp;разработке
                  прогресса профессионального сообщества.
                </p>
              </div>
              <div className="work-left__btns">
                <button className="work-left__btn btn-reset site-btn">
                  Подробнее
                </button>
                <button className="work-left__btn work-left__btn--border btn-reset">
                  Договор
                </button>
              </div>
            </div>
            <div className="work-right">
              <picture>
                <source
                  srcSet="media-img/work-img-1-768.jpg"
                  media="(max-width: 900px)"
                />
                <source
                  srcSet="media-img/work-img-1-1024.jpg"
                  media="(max-width: 1120px)"
                />
                <img
                  className="work-right__img"
                  src="img/work-img-3.jpg"
                  alt="Проводим консультацию"
                />
              </picture>
            </div>
          </div>
          <div className="tab-content work__content" data-target="four">
            <div className="work-left">
              <div className="work__inner">
                <h3 className="work-left__title">
                  Инспектируем все этапы работ
                </h3>
                <p className="work-left__text">
                  Высокий уровень вовлечения представителей целевой аудитории
                  является четким доказательством простого факта:
                  высококачественный прототип будущего проекта напрямую зависит
                  от&nbsp;дальнейших направлений развития. Разнообразный
                  и&nbsp;богатый опыт говорит нам, что новая модель
                  организационной деятельности говорит о&nbsp;возможностях
                  системы массового участия. Принимая во&nbsp;внимание
                  показатели успешности, постоянное
                  информационно-пропагандистское обеспечение нашей деятельности
                  позволяет.
                </p>
              </div>
              <div className="work-left__btns">
                <button className="work-left__btn btn-reset site-btn">
                  Подробнее
                </button>
                <button className="work-left__btn work-left__btn--border btn-reset">
                  Договор
                </button>
              </div>
            </div>
            <div className="work-right">
              <picture>
                <source
                  srcSet="media-img/work-img-1-768.jpg"
                  media="(max-width: 900px)"
                />
                <source
                  srcSet="media-img/work-img-1-1024.jpg"
                  media="(max-width: 1120px)"
                />
                <img
                  className="work-right__img"
                  src="img/work-img-4.jpg"
                  alt="Проводим консультацию"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
