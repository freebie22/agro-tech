export default function Settings() {
  return (
    <div className="container-fluid p-4" id="pageContent">
      <div id="settingsPage" className="page-content">
        <h4>Налаштування системи</h4>
        <p className="text-muted">Налаштування та параметри додатку</p>

        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 mb-4 mb-md-0">
                <h5>Загальні налаштування</h5>

                <div className="mb-3">
                  <label className="form-label" htmlFor="measurementUnits">
                    Одиниці виміру
                  </label>
                  <select
                    id="measurementUnits"
                    className="form-select"
                    defaultValue="metric"
                  >
                    <option value="metric">Метричні (кг, гектари)</option>
                    <option value="imperial">Імперські (lbs, acres)</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="dateFormat">
                    Формат дати
                  </label>
                  <select
                    id="dateFormat"
                    className="form-select"
                    defaultValue="DD/MM/YYYY"
                  >
                    <option value="DD/MM/YYYY">ДД/ММ/РРРР</option>
                    <option value="MM/DD/YYYY">ММ/ДД/РРРР</option>
                    <option value="YYYY-MM-DD">РРРР-ММ-ДД</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="language">
                    Мова інтерфейсу
                  </label>
                  <select
                    id="language"
                    className="form-select"
                    defaultValue="uk"
                  >
                    <option value="uk">Українська</option>
                    <option value="en">English</option>
                  </select>
                </div>
              </div>

              <div className="col-md-6">
                <h5>Налаштування сповіщень</h5>

                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="harvestAlerts"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="harvestAlerts">
                    Сповіщення про дати збору врожаю
                  </label>
                </div>

                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="weatherAlerts"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="weatherAlerts">
                    Сповіщення про погоду
                  </label>
                </div>

                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="systemAlerts"
                  />
                  <label className="form-check-label" htmlFor="systemAlerts">
                    Сповіщення про технічне обслуговування системи
                  </label>
                </div>

                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="marketingAlerts"
                  />
                  <label className="form-check-label" htmlFor="marketingAlerts">
                    Маркетингові сповіщення
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h5>Безпека та резервне копіювання</h5>

            <div className="mb-3">
              <label className="form-label" htmlFor="passwordUpdate">
                Зміна пароля
              </label>
              <input
                type="password"
                id="passwordUpdate"
                className="form-control"
                placeholder="Новий пароль"
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="backupFrequency">
                Частота резервного копіювання
              </label>
              <select
                id="backupFrequency"
                className="form-select"
                defaultValue="weekly"
              >
                <option value="daily">Щодня</option>
                <option value="weekly">Щотижня</option>
                <option value="monthly">Щомісяця</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="twoFactorAuth">
                Двофакторна автентифікація
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="twoFactorAuth"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="twoFactorAuth">
                  Увімкнено
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="card shadow-sm">
          <div className="card-body">
            <h5>Підписки та статистика</h5>
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Активні підписки
                <span className="badge bg-success rounded-pill">3</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Використано сповіщень за місяць
                <span className="badge bg-primary rounded-pill">72</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Максимально дозволено сповіщень
                <span className="badge bg-warning rounded-pill">100</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
