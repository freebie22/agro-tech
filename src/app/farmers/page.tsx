export default function Farmers() {
  return (
    <div className="container-fluid p-4" id="pageContent">
      <div id="farmersPage" className="page-content">
        <h4>Управління фермерами</h4>
        <p className="text-muted">
          Функціонал управління фермерами та ключові показники
        </p>

        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-md-4 mb-3 mb-md-0">
                <div className="card border-primary h-100">
                  <div className="card-body">
                    <h5 className="card-title">Активні фермери</h5>
                    <p className="card-text">24 фермери наразі активні</p>
                    <p className="text-muted mb-0">+2 нових цього місяця</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3 mb-md-0">
                <div className="card border-success h-100">
                  <div className="card-body">
                    <h5 className="card-title">Загальна кількість ферм</h5>
                    <p className="card-text">Зареєстровано 8 ферм</p>
                    <p className="text-muted mb-0">
                      Сумарна площа: 128 гектарів
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card border-warning h-100">
                  <div className="card-body">
                    <h5 className="card-title">
                      Середня врожайність на фермера
                    </h5>
                    <p className="card-text">6.52 тонн на фермера</p>
                    <p className="text-muted mb-0">
                      Прогноз на наступний місяць: +7%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card shadow-sm">
          <div className="card-body">
            <h5>Фінансові показники</h5>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Орієнтовний дохід
                <span className="badge bg-success rounded-pill">$18,400</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Витрати на ресурси
                <span className="badge bg-danger rounded-pill">$7,200</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Прогнозований прибуток
                <span className="badge bg-primary rounded-pill">$11,200</span>
              </li>
            </ul>

            <h5>Прогноз розвитку фермерів</h5>
            <p className="text-muted mb-1">
              Очікується збільшення активних фермерів на 5–10% наступного місяця
              за рахунок підтримки та навчання.
            </p>
            <p className="text-muted">
              Рекомендовано оптимізувати використання ресурсів та площ для
              підвищення врожайності.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
