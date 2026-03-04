import { render, screen } from "@testing-library/react";
import FarmMapFullPage from "@/src/app/map/page";

describe("FieldsMapPage", () => {
  it("відображає поля", () => {
    render(<FarmMapFullPage />);

    expect(screen.getByText(/Ділянка 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Ділянка 2/i)).toBeInTheDocument();
  });
});
