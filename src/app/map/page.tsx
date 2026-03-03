"use client";

import React, { useState } from "react";

type Field = {
  id: number;
  name: string;
  crop: string;
  yieldPercent: number;
  color: string;
};

export default function FarmMapFullPage() {
  const initialFields: Field[] = [
    {
      id: 1,
      name: "Ділянка 1",
      crop: "Пшениця",
      yieldPercent: 85,
      color: "#FFC107",
    },
    {
      id: 2,
      name: "Ділянка 2",
      crop: "Кукурудза",
      yieldPercent: 65,
      color: "#28A745",
    },
    {
      id: 3,
      name: "Ділянка 3",
      crop: "Соя",
      yieldPercent: 50,
      color: "#17A2B8",
    },
    {
      id: 4,
      name: "Ділянка 4",
      crop: "Овочі",
      yieldPercent: 90,
      color: "#DC3545",
    },
    {
      id: 5,
      name: "Ділянка 5",
      crop: "Рис",
      yieldPercent: 70,
      color: "#6F42C1",
    },
  ];

  const [fields, setFields] = useState<Field[]>(initialFields);
  const [selectedField, setSelectedField] = useState<Field | null>(null);

  const refreshYields = () => {
    setFields((prev) =>
      prev.map((f) => ({
        ...f,
        yieldPercent: Math.min(
          Math.max(f.yieldPercent + (Math.random() * 20 - 10), 0),
          100,
        ),
      })),
    );
  };

  return (
    <div
      className="container-fluid p-4"
      id="pageContent"
      style={{ height: "100vh" }}
    >
      <h4>Мапа полів (повна сторінка)</h4>
      <p className="text-muted">
        Кожен квадрат — велика ділянка ферми, мокові дані
      </p>

      <button className="btn btn-primary mb-3" onClick={refreshYields}>
        Оновити врожайність
      </button>

      <div
        className="d-grid gap-3"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gridAutoRows: "200px",
        }}
      >
        {fields.map((field) => (
          <div
            key={field.id}
            className="d-flex justify-content-center align-items-center text-white fw-bold"
            style={{
              backgroundColor: field.color,
              opacity: field.yieldPercent / 100,
              cursor: "pointer",
              borderRadius: "10px",
              fontSize: "1.5rem",
              transition: "opacity 0.3s",
            }}
            onClick={() => setSelectedField(field)}
            title={`${field.name} — ${field.crop} — Врожайність: ${field.yieldPercent.toFixed(1)}%`}
          >
            {field.name}
          </div>
        ))}
      </div>

      {selectedField && (
        <div className="card mt-4">
          <div className="card-body">
            <h5 className="card-title">{selectedField.name}</h5>
            <p>Культура: {selectedField.crop}</p>
            <p>Врожайність: {selectedField.yieldPercent.toFixed(1)}%</p>
            <button
              className="btn btn-secondary"
              onClick={() => setSelectedField(null)}
            >
              Закрити
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
