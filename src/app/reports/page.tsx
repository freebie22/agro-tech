const ReportsPage = () => {
  return (
    <div className="container-fluid p-4" id="pageContent">
      <div id="reportsPage" className="page-content">
        <h4>Звіти та аналітика</h4>
        <p className="text-muted">
          Детальні звіти та ключові показники ефективності господарства
        </p>

        <div className="card shadow-sm">
          <div className="card-body">
            <div className="row">
              {/* Ліва колонка */}
              <div className="col-md-6 mb-4 mb-md-0">
                <h5>Місячний звіт</h5>
                <ul className="list-group mb-4">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Загальний врожай за місяць
                    <span className="badge bg-primary rounded-pill">
                      42.5 тонн
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Посіяно культур
                    <span className="badge bg-success rounded-pill">5</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Зібрано культур
                    <span className="badge bg-warning rounded-pill">3</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Нові фермери
                    <span className="badge bg-info rounded-pill">2</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Загальна площа обробітку
                    <span className="badge bg-secondary rounded-pill">
                      128 гектарів
                    </span>
                  </li>
                </ul>

                <h5>Фінансові показники на наступний місяць</h5>
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Орієнтовний дохід
                    <span className="badge bg-success rounded-pill">
                      $18,400
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Витрати на ресурси
                    <span className="badge bg-danger rounded-pill">$7,200</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Прогнозований прибуток
                    <span className="badge bg-primary rounded-pill">
                      $11,200
                    </span>
                  </li>
                </ul>
              </div>

              {/* Права колонка */}
              <div className="col-md-6">
                <h5>Показники ефективності</h5>

                <div className="progress mb-3" style={{ height: "20px" }}>
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    Виконання плану врожайності: 85%
                  </div>
                </div>

                <div className="progress mb-3" style={{ height: "20px" }}>
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "72%" }}
                    aria-valuenow={72}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    Ефективність посіву: 72%
                  </div>
                </div>

                <div className="progress mb-3" style={{ height: "20px" }}>
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "65%" }}
                    aria-valuenow={65}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    Використання ресурсів: 65%
                  </div>
                </div>

                <div className="progress mb-3" style={{ height: "20px" }}>
                  <div
                    className="progress-bar bg-secondary"
                    role="progressbar"
                    style={{ width: "58%" }}
                    aria-valuenow={58}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    Оновлення техніки: 58%
                  </div>
                </div>

                <hr className="my-4" />

                <h5>Прогноз на наступний місяць</h5>
                <p className="text-muted mb-1">
                  Очікується збільшення врожайності на 6–8% за рахунок
                  оптимізації ресурсів та сприятливих погодних умов.
                </p>
                <p className="text-muted">
                  Рекомендовано збільшити площу під зерновими культурами та
                  оптимізувати витрати на добрива.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
