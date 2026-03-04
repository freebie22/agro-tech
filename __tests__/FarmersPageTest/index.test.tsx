import { render, screen } from "@testing-library/react";
import Farmers from "@/src/app/farmers/page";

describe("FarmersPage", () => {
  it("коректно рендериться заголовок", () => {
    render(<Farmers />);

    expect(screen.getByText(/Управління фермерами/i)).toBeInTheDocument();
  });

  it("відображає статистичні картки", () => {
    render(<Farmers />);

    expect(screen.getByText(/Активні фермери/i)).toBeInTheDocument();
    expect(screen.getByText(/Загальна кількість ферм/i)).toBeInTheDocument();
    expect(screen.getByText(/Середня врожайність/i)).toBeInTheDocument();
  });
});
