import { listMock } from "@/tests/mocks/list";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { List } from "./List";

describe("List", () => {
  it("renders the list title", () => {
    render(<List title="My List" showNumbers={false} data={listMock} />);

    expect(screen.getByText("My List")).toBeInTheDocument();
  });

  it("renders all list items", () => {
    render(<List title="My List" showNumbers={false} data={listMock} />);

    listMock.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.subtitle)).toBeInTheDocument();
    });
  });

  it("shows numbers when showNumbers is true", () => {
    render(<List title="Numbered List" showNumbers={true} data={listMock} />);

    listMock.forEach((item, idx) => {
      expect(
        screen.getByText(new RegExp(`^${idx + 1}\\. ${item.title}$`))
      ).toBeInTheDocument();
    });
  });

  it("does not show numbers when showNumbers is false", () => {
    render(
      <List title="Unnumbered List" showNumbers={false} data={listMock} />
    );

    listMock.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });

    expect(screen.queryByText(/^1\. /)).not.toBeInTheDocument();
  });

  it("renders empty list without crashing", () => {
    render(<List title="Empty List" showNumbers={true} data={[]} />);

    expect(screen.getByText("Empty List")).toBeInTheDocument();
    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });
});
