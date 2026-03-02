"use client";

import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  BarController,
  PieController,
  ArcElement,
  LineElement,
  LineController,
  PointElement,
} from "chart.js";
import { useEffect, useRef } from "react";

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  BarController,
  PieController,
  ArcElement,
  LineElement,
  LineController,
  PointElement,
);

const Charts = () => {
  const barRef = useRef<HTMLCanvasElement | null>(null);
  const pieRef = useRef<HTMLCanvasElement | null>(null);
  const lineRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const labels = ["Пшениця", "Рис", "Кукурудза", "Соя", "Овочі", "Фрукти"];
    const bg = [
      "rgba(54,162,235,0.7)",
      "rgba(75,192,192,0.7)",
      "rgba(255,206,86,0.7)",
      "rgba(153,102,255,0.7)",
      "rgba(255,99,132,0.7)",
      "rgba(50,205,50,0.7)",
    ];
    const bd = bg.map(function (c) {
      return c.replace("0.7", "1");
    });

    let barChart: Chart | null = null;
    let pieChart: Chart | null = null;
    let lineChart: Chart | null = null;

    if (barRef.current) {
      const ctx = barRef.current.getContext("2d");

      if (ctx) {
        barChart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: labels,
            datasets: [
              {
                label: "Зібрано (тон)",
                data: [45, 32, 38, 28, 15, 42],
                backgroundColor: bg,
                borderColor: bd,
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                title: { display: true, text: "Тон" },
              },
            },
          },
        });
      }
    }

    if (pieRef.current) {
      const ctx = pieRef.current.getContext("2d");

      if (ctx) {
        pieChart = new Chart(ctx, {
          type: "pie",
          data: {
            labels: labels,
            datasets: [
              {
                data: [25, 18, 22, 15, 8, 12],
                backgroundColor: bg,
                borderColor: bd,
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: "bottom" } },
          },
        });
      }
    }

    if (lineRef.current) {
      const ctx = lineRef.current.getContext("2d");

      if (ctx) {
        lineChart = new Chart(ctx, {
          type: "line",
          data: {
            labels: [
              "Січ",
              "Лют",
              "Берез",
              "Квіт",
              "Трав",
              "Черв",
              "Лип",
              "Серп",
              "Верес",
              "Жовт",
              "Листоп",
              "Груд",
            ],
            datasets: [
              {
                label: "Збір (тон)",
                data: [12, 15, 18, 22, 28, 32, 30, 35, 38, 40, 42, 45],
                backgroundColor: "rgba(46,125,50,0.2)",
                borderColor: "rgba(46,125,50,1)",
                borderWidth: 2,
                fill: true,
                tension: 0.4,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                title: { display: true, text: "Tон" },
              },
            },
          },
        });
      }
    }

    return () => {
      if (barChart) {
        barChart.destroy();
      }
      if (pieChart) {
        pieChart.destroy();
      }
      if (lineChart) {
        lineChart.destroy();
      }
    };
  }, []);

  return (
    <>
      <div className="row mb-4">
        <div className="col-lg-8 col-12 mb-4 mb-lg-0">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-white">
              <h5 className="mb-0">
                Статистика за типом культури (За останні 6 місяців)
              </h5>
            </div>
            <div className="card-body">
              <div className="chart-container">
                <canvas ref={barRef} id="barChart"></canvas>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-white">
              <h5 className="mb-0">Розподіл врожаю</h5>
            </div>
            <div className="card-body">
              <div className="chart-container">
                <canvas ref={pieRef} id="pieChart"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-header bg-white">
              <h5 className="mb-0">Статистика збору по місяцях (2025)</h5>
            </div>
            <div className="card-body">
              <div className="chart-container">
                <canvas ref={lineRef} id="lineChart"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Charts;
