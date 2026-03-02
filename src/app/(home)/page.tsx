import { Metadata } from "next";
import Charts from "./components/Charts";

export const metadata: Metadata = {
  title: "AgroTech - Головна",
};

export default function Home() {
  return (
    <div className="container-fluid p-4" id="pageContent">
      <main>
        <div id="dashboardPage" className="page-content">
          <div className="row mb-4">
            <div className="col-6 col-md-3 mb-3">
              <div className="card stat-card bg-primary text-white h-100 shadow-sm">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="card-subtitle mb-1 opacity-75">
                      Всього посівів
                    </h6>
                    <h2 className="card-title mb-0" id="totalCrops">
                      12
                    </h2>
                  </div>
                  <i className="fas fa-seedling fa-3x opacity-50"></i>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div className="card stat-card bg-success text-white h-100 shadow-sm">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="card-subtitle mb-1 opacity-75">
                      Всього полів
                    </h6>
                    <h2 className="card-title mb-0" id="totalFarms">
                      8
                    </h2>
                  </div>
                  <i className="fas fa-tractor fa-3x opacity-50"></i>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div className="card stat-card bg-warning text-dark h-100 shadow-sm">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="card-subtitle mb-1 opacity-75">
                      Всього прац.
                    </h6>
                    <h2 className="card-title mb-0" id="totalFarmers">
                      24
                    </h2>
                  </div>
                  <i className="fas fa-users fa-3x opacity-50"></i>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div className="card stat-card bg-info text-white h-100 shadow-sm">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="card-subtitle mb-1 opacity-75">
                      Загалом зібрано (тон)
                    </h6>
                    <h2 className="card-title mb-0" id="totalYield">
                      156.5
                    </h2>
                  </div>
                  <i className="fas fa-weight-hanging fa-3x opacity-50"></i>
                </div>
              </div>
            </div>
          </div>
          <Charts />
        </div>
      </main>
    </div>
  );
}
