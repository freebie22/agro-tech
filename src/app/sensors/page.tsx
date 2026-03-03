/* eslint-disable react-hooks/purity */
"use client";
import React, { useState, useEffect } from "react";

type SensorData = {
  temperature: number;
  humidity: number;
  soilMoisture: number;
  lightIntensity: number;
  waterLevel: number;
};

type Farm = {
  id: number;
  name: string;
  sensors: SensorData;
};

export default function FarmSensorsDashboard() {
  const initialFarms: Farm[] = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    name: `Ферма ${i + 1}`,
    sensors: {
      temperature: Math.floor(20 + Math.random() * 10),
      humidity: Math.floor(50 + Math.random() * 30),
      soilMoisture: Math.floor(30 + Math.random() * 40),
      lightIntensity: Math.floor(800 + Math.random() * 800),
      waterLevel: Math.floor(40 + Math.random() * 60),
    },
  }));

  const [farms, setFarms] = useState<Farm[]>(initialFarms);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFarms((prevFarms) =>
        prevFarms.map((farm) => ({
          ...farm,
          sensors: {
            temperature: +Math.floor(20 + Math.random() * 10),
            humidity: +Math.floor(50 + Math.random() * 30),
            soilMoisture: +Math.floor(30 + Math.random() * 40),
            lightIntensity: +Math.floor(800 + Math.random() * 800),
            waterLevel: +Math.floor(40 + Math.random() * 60),
          },
        })),
      );
    }, 5000);

    setMounted(true);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="container-fluid p-4" id="pageContent">
      <div id="sensorsPage" className="page-content">
        <h4>Показники сенсорів ферми</h4>
        <p className="text-muted">
          В реальному часі показники IoT сенсорів по 5 фермам
        </p>

        <div className="row">
          {farms.map((farm) => (
            <div key={farm.id} className="col-md-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{farm.name}</h5>

                  <div className="row text-center">
                    <div className="col-4 mb-3">
                      <p>🌡 Температура</p>
                      <p className="display-6">{farm.sensors.temperature} °C</p>
                    </div>
                    <div className="col-4 mb-3">
                      <p>💧 Вологість</p>
                      <p className="display-6">{farm.sensors.humidity} %</p>
                    </div>
                    <div className="col-4 mb-3">
                      <p>🌱 Вологість ґрунту</p>
                      <p className="display-6">{farm.sensors.soilMoisture} %</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6 mb-3">
                      <p>💡 Освітлення</p>
                      <p className="display-6">
                        {farm.sensors.lightIntensity} lux
                      </p>
                      <div className="progress" style={{ height: "15px" }}>
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{
                            width: `${Math.min((farm.sensors.lightIntensity / 2000) * 100, 100)}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <p>💦 Рівень води</p>
                      <p className="display-6">{farm.sensors.waterLevel} %</p>
                      <div className="progress" style={{ height: "15px" }}>
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: `${farm.sensors.waterLevel}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
