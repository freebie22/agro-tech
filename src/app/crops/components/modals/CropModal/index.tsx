"use client";

import { FormState } from "../../../page";

const CropModal = ({
  cropModalRef,
  cropFormRef,
  formState,
  currentCropId,
  saveCrop,
  handleFormStateChange,
}: {
  cropModalRef: React.RefObject<HTMLDivElement | null>;
  cropFormRef: React.RefObject<HTMLFormElement | null>;
  formState: FormState | null;
  currentCropId: number | null;
  saveCrop: () => void;
  handleFormStateChange: (
    value: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
}) => {
  return (
    <div
      className="modal fade"
      id="cropModal"
      tabIndex={-1}
      aria-labelledby="cropModalLabel"
      aria-hidden="true"
      ref={cropModalRef}
    >
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="cropModalLabel">
              Add New Crop
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form ref={cropFormRef} id="cropForm" noValidate>
              {currentCropId !== null && (
                <input
                  value={formState?.id ?? ""}
                  type="hidden"
                  id="cropId"
                  disabled
                />
              )}

              <div className="mb-3">
                <label htmlFor="cropName" className="form-label">
                  Назва посіву *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cropName"
                  required
                  value={formState?.name}
                  name="name"
                  onChange={handleFormStateChange}
                />
                <div className="invalid-feedback">
                  Please enter a crop name.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="cropType" className="form-label">
                  Тип культури *
                </label>
                <select
                  value={formState?.type}
                  className="form-select"
                  id="cropType"
                  name="type"
                  onChange={handleFormStateChange}
                  required
                >
                  <option value="">Оберіть тип</option>
                  <option value="Wheat">Пшениця</option>
                  <option value="Rice">Рис</option>
                  <option value="Corn">Кукурудза</option>
                  <option value="Soybean">Соя</option>
                  <option value="Vegetables">Овочі</option>
                  <option value="Fruits">Фрукти</option>
                </select>
                <div className="invalid-feedback">
                  Оберіть, будь-ласка, тип культури.
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="plantingDate" className="form-label">
                    Дата посадки *
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="plantingDate"
                    required
                    name="plantingDate"
                    onChange={handleFormStateChange}
                    value={formState?.plantingDate}
                  />
                  <div className="invalid-feedback">
                    Оберіть, будь-ласка, дату посадки.
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="harvestDate" className="form-label">
                    Дата збору
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="harvestDate"
                    name="harvestDate"
                    value={formState?.harvestDate}
                    onChange={handleFormStateChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="area" className="form-label">
                    Площа (гектар) *
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="area"
                    min="0.1"
                    step="0.1"
                    required
                    value={formState?.area ?? ""}
                    name="area"
                    onChange={handleFormStateChange}
                  />
                  <div className="invalid-feedback">
                    Введіть, будь-ласка, коректну площу
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="expectedYield" className="form-label">
                    Очікуваний збір (тон)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="expectedYield"
                    min="0"
                    step="0.1"
                    value={formState?.yield ?? ""}
                    name="yield"
                    onChange={handleFormStateChange}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="status" className="form-label">
                  Статус *
                </label>
                <select
                  value={formState?.status}
                  className="form-select"
                  id="status"
                  required
                  name="status"
                  onChange={handleFormStateChange}
                >
                  <option value="planted">Посаджено</option>
                  <option value="growing">Зростає</option>
                  <option value="harvested">Зібрано</option>
                </select>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Відміна
            </button>
            <button
              onClick={saveCrop}
              type="button"
              className="btn btn-success"
              id="saveCropBtn"
            >
              Зберегти
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropModal;
