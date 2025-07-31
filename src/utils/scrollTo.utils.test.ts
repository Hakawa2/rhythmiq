import { beforeEach, describe, expect, it, vi } from "vitest";
import { scrollTo } from "./scrollTo.utils";

describe("scrollTo", () => {
  let scrollToMock: ReturnType<typeof vi.fn>;
  let rafMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    scrollToMock = vi.fn();
    rafMock = vi.fn((cb: FrameRequestCallback) => {
      cb(0);
      return 1;
    });

    global.window = Object.assign(global.window || {}, {
      scrollTo: scrollToMock,
    });
    global.requestAnimationFrame = rafMock;
  });

  it("should call window.scrollTo with default top value", () => {
    scrollTo();
    expect(rafMock).toHaveBeenCalled();
    expect(scrollToMock).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });

  it("should call window.scrollTo with provided top value", () => {
    scrollTo(100);
    expect(rafMock).toHaveBeenCalled();
    expect(scrollToMock).toHaveBeenCalledWith({
      top: 100,
      behavior: "smooth",
    });
  });
});
