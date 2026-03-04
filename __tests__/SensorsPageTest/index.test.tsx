import { render, screen } from "@testing-library/react";
import FarmSensorsDashboard from "@/src/app/sensors/page";

describe("SensorsPage", () => {
  it("відображає всі 5 ферм", () => {
    render(<FarmSensorsDashboard />);

    expect(screen.getByText(/Ферма 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Ферма 5/i)).toBeInTheDocument();
  });

  it("показує температуру та вологість", () => {
    render(<FarmSensorsDashboard />);

    expect(screen.getAllByText(/°C/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/%/i).length).toBeGreaterThan(0);
  });
});
