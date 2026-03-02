const Crops = () => {
  return (
    <div className="container-fluid p-4" id="pageContent">
      <div id="cropsPage" className="page-content">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
          <h4 className="mb-0">Crop Management</h4>
          <button className="btn btn-success" id="addCropBtn">
            <i className="fas fa-plus me-1"></i> Add New Crop
          </button>
        </div>

        <div className="row mb-4">
          <div className="col-md-8 mb-3 mb-md-0">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="searchCrop"
                placeholder="Search crops..."
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="searchBtn"
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <select className="form-select" id="cropStatusFilter">
              <option value="all">All Status</option>
              <option value="planted">Planted</option>
              <option value="growing">Growing</option>
              <option value="harvested">Harvested</option>
            </select>
          </div>
        </div>

        <div className="card shadow-sm">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover mb-0" id="cropsTable">
                <thead className="table-light">
                  <tr>
                    <th>Crop Name</th>
                    <th>Type</th>
                    <th>Planting Date</th>
                    <th>Harvest Date</th>
                    <th>Area (acres)</th>
                    <th>Status</th>
                    <th>Yield (tons)</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody id="cropsTableBody"></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crops;
