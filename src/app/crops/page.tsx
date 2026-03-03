/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { cropState } from "@/src/data";
import { Crop } from "@/src/data/interfaces";
import { useEffect, useRef, useState } from "react";
import CropModal from "./components/modals/CropModal";
import DeleteModal from "./components/modals/DeleteModal";

export type FormState = {
  id?: number | null;
  name: string;
  type: string;
  plantingDate: string;
  harvestDate?: string;
  area: number | null;
  status: string;
  yield?: number | null;
};

const Crops = () => {
  const bootstrapRef = useRef<typeof import("bootstrap") | null>(null);
  const tableBodyRef = useRef<HTMLTableSectionElement | null>(null);
  const cropModalRef = useRef<HTMLDivElement | null>(null);
  const deleteModalRef = useRef<HTMLDivElement | null>(null);
  const cropFormRef = useRef<HTMLFormElement | null>(null);
  const addCropBtnRef = useRef<HTMLButtonElement | null>(null);
  const searchCropRef = useRef<HTMLInputElement | null>(null);
  const cropFilterRef = useRef<HTMLSelectElement | null>(null);
  const [currentCropId, setCurrentCropId] = useState<number | null>(null);
  const [formState, setFormState] = useState<FormState>({
    id: null,
    name: "",
    type: "",
    plantingDate: "",
    harvestDate: "",
    area: null,
    status: "",
    yield: null,
  });
  const [cropData, setCropData] = useState(cropState);

  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString + "T00:00:00");
    return date.toLocaleDateString("uk-UA", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const statusName = (status: string): string => {
    if (status === "growing") {
      return "зростає";
    } else if (status === "harvested") {
      return "зібрано";
    } else {
      return "посаджено";
    }
  };

  const showCropModal = (crop?: Crop) => {
    if (cropModalRef.current && bootstrapRef.current) {
      const cropModal =
        bootstrapRef.current.Modal.getInstance(cropModalRef.current) ||
        new bootstrapRef.current.Modal(cropModalRef?.current);

      cropFormRef.current?.querySelectorAll("input, select").forEach((el) => {
        el.classList.remove("is-invalid");
      });

      const modalLabel = document.getElementById("cropModalLabel");

      if (crop) {
        if (modalLabel) {
          modalLabel.textContent = "Редагування посіву";
        }
        setFormState({
          id: crop.id,
          name: crop.name,
          type: crop.type,
          plantingDate: crop.plantingDate,
          harvestDate: crop.harvestDate || "",
          area: crop.area,
          status: crop.status,
          yield: crop.yield || 0,
        });
        setCurrentCropId(crop.id);
      } else {
        if (modalLabel) {
          modalLabel.textContent = "Створення нового посіву";
        }

        setCurrentCropId(null);

        setFormState({
          name: "",
          type: "",
          plantingDate: "",
          harvestDate: "",
          area: null,
          status: "planted",
          yield: null,
        });
      }
      cropModal.show();
    }
  };

  const showDeleteModal = (id: number) => {
    setCurrentCropId(id);

    if (deleteModalRef.current && bootstrapRef.current) {
      const deleteModal =
        bootstrapRef.current.Modal.getInstance(deleteModalRef.current) ||
        new bootstrapRef.current.Modal(deleteModalRef.current);
      deleteModal.show();
    }
  };

  const editCrop = (id: number) => {
    const crop = cropData.find((c) => {
      return c.id === id;
    });
    if (crop) showCropModal(crop);
  };

  const loadCropsTable = (filteredData?: Crop[]) => {
    const data = filteredData || cropData;
    if (tableBodyRef.current) {
      tableBodyRef.current.innerHTML = "";

      if (data.length === 0) {
        tableBodyRef.current.innerHTML =
          '<tr><td colspan="8" class="text-center text-muted py-5">' +
          '<i class="fas fa-seedling fa-3x text-muted mb-2 d-block"></i>' +
          'Посівів не знайдено. Натисніть на "Додати новий посів" для додавання.</td></tr>';
        return;
      }

      data.forEach((crop) => {
        const row = document.createElement("tr");
        row.classList.add("crop-row");

        let badgeClass = "bg-secondary";
        if (crop.status === "planted") badgeClass = "bg-primary";
        if (crop.status === "growing") badgeClass = "bg-success";
        if (crop.status === "harvested") badgeClass = "bg-warning text-dark";

        row.innerHTML =
          "<td>" +
          crop.name +
          "</td>" +
          "<td>" +
          crop.type +
          "</td>" +
          "<td>" +
          formatDate(crop.plantingDate) +
          "</td>" +
          "<td>" +
          (crop.harvestDate ? formatDate(crop.harvestDate) : "N/A") +
          "</td>" +
          "<td>" +
          crop.area +
          "</td>" +
          '<td><span class="badge ' +
          badgeClass +
          '">' +
          capitalize(statusName(crop.status)) +
          "</span></td>" +
          "<td>" +
          (crop.yield || "0") +
          "</td>" +
          "<td>" +
          '<button class="btn btn-sm btn-outline-primary me-1 edit-crop" data-id="' +
          crop.id +
          '"><i class="fas fa-edit"></i></button>' +
          '<button class="btn btn-sm btn-outline-danger delete-crop" data-id="' +
          crop.id +
          '"><i class="fas fa-trash"></i></button>' +
          "</td>";
        tableBodyRef.current?.appendChild(row);
      });

      tableBodyRef.current?.querySelectorAll(".edit-crop").forEach((btn) => {
        btn.addEventListener("click", () => {
          const id = btn.getAttribute("data-id");
          if (id) {
            editCrop(parseInt(id));
          }
        });
      });
      tableBodyRef.current.querySelectorAll(".delete-crop").forEach((btn) => {
        btn.addEventListener("click", () => {
          const id = btn.getAttribute("data-id");
          if (id) {
            showDeleteModal(parseInt(id));
          }
        });
      });
    }
  };

  const handleFormStateChange = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    const { name, value } = event.target;

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const deleteCrop = () => {
    setCropData(
      cropData.filter(function (c) {
        return c.id !== currentCropId;
      }),
    );

    if (deleteModalRef.current && bootstrapRef.current) {
      const modalInstance =
        bootstrapRef.current.Modal.getInstance(deleteModalRef.current) ||
        new bootstrapRef.current.Modal(deleteModalRef.current);

      modalInstance.hide();
    }

    alert("Посів видалено успішно!");
  };

  const saveCrop = () => {
    if (!cropFormRef.current?.checkValidity()) {
      cropFormRef.current
        ?.querySelectorAll<
          HTMLInputElement | HTMLSelectElement
        >("input, select")
        .forEach((input) => {
          if (!input.checkValidity()) input.classList.add("is-invalid");
        });
      return;
    }

    const cropsData = {
      id: currentCropId
        ? currentCropId
        : cropData.length > 0
          ? Math.max.apply(
              null,
              cropData.map(function (c) {
                return c.id;
              }),
            ) + 1
          : 1,
      name: formState.name,
      type: formState.type,
      plantingDate: formState.plantingDate,
      harvestDate: formState.harvestDate || null,
      area: parseFloat(String(formState?.area)),
      status: formState.status,
      yield: formState.yield ? parseFloat(String(formState.yield)) : 0,
    };

    if (currentCropId) {
      const index = cropData.findIndex(function (c) {
        return c.id === currentCropId;
      });
      if (index !== -1) {
        setCropData((prev) => {
          const updated = [...prev];
          updated[index] = cropsData;
          return updated;
        });
      }
    } else {
      setCropData((prev) => [...prev, cropsData]);
    }

    if (cropModalRef.current && bootstrapRef.current) {
      const cropModal =
        bootstrapRef.current.Modal.getInstance(cropModalRef.current) ||
        new bootstrapRef.current.Modal(cropModalRef?.current);
      cropModal.hide();
    }

    alert("Посів " + (currentCropId ? "оновлено" : "додано") + " успішно!");
  };

  const filterCrops = () => {
    const term = searchCropRef.current?.value.toLowerCase();
    const status = cropFilterRef.current?.value;
    const filtered = cropData.filter((crop) => {
      const matchText =
        crop.name.toLowerCase().includes(String(term)) ||
        crop.type.toLowerCase().includes(String(term));
      const matchStatus = status === "all" || crop.status === status;
      return matchText && matchStatus;
    });
    loadCropsTable(filtered);
  };

  useEffect(() => {
    import("bootstrap").then((mod) => {
      bootstrapRef.current = mod;
    });

    loadCropsTable();

    addCropBtnRef.current?.addEventListener("click", () => {
      showCropModal();
    });
  }, []);

  useEffect(() => {
    loadCropsTable();
  }, [cropData]);

  return (
    <>
      <div className="container-fluid p-4" id="pageContent">
        <div id="cropsPage" className="page-content">
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
            <h4 className="mb-0">Керування посівами</h4>
            <button
              ref={addCropBtnRef}
              className="btn btn-success"
              id="addCropBtn"
            >
              <i className="fas fa-plus me-1"></i> Додати новий посів
            </button>
          </div>

          <div className="row mb-4">
            <div className="col-md-8 mb-3 mb-md-0">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="searchCrop"
                  placeholder="Шукати посіви..."
                  onKeyUp={filterCrops}
                  ref={searchCropRef}
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
              <select
                ref={cropFilterRef}
                onChange={filterCrops}
                className="form-select"
                id="cropStatusFilter"
              >
                <option value="all">Всі статуси</option>
                <option value="planted">Засіяно</option>
                <option value="growing">Зростає</option>
                <option value="harvested">Зібрано</option>
              </select>
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0" id="cropsTable">
                  <thead className="table-light">
                    <tr>
                      <th>Посів</th>
                      <th>Культура</th>
                      <th>Дата посіву</th>
                      <th>Дата збору</th>
                      <th>Площа (гектар)</th>
                      <th>Статус</th>
                      <th>Зібрано (тон)</th>
                      <th>Дії</th>
                    </tr>
                  </thead>
                  <tbody ref={tableBodyRef} id="cropsTableBody"></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CropModal
        formState={formState}
        cropModalRef={cropModalRef}
        cropFormRef={cropFormRef}
        currentCropId={currentCropId}
        saveCrop={saveCrop}
        handleFormStateChange={handleFormStateChange}
      />
      <DeleteModal
        cropData={cropData}
        currentCropId={currentCropId}
        deleteModal={deleteCrop}
        deleteModalRef={deleteModalRef}
      />
    </>
  );
};

export default Crops;
