import { describe, expect, it } from "vitest";
import { tambah, kurang, kali, bagi } from "./math";

describe("math utils", () => {
  it("tambah 2 + 3 hasilnya 5", () => {
    expect(tambah(2, 3)).toBe(5);
  });

  it("kurang 10 - 4 hasilnya 6", () => {
    expect(kurang(10, 4)).toBe(6);
  });

  it("kali 3 * 4 hasilnya 12", () => {
    expect(kali(3, 4)).toBe(12);
  });

  it("bagi 10 / 2 hasilnya 5", () => {
    expect(bagi(10, 2)).toBe(5);
  });

  it("bagi dengan nol harus error", () => {
    expect(() => bagi(10, 0)).toThrow("Tidak bisa membagi dengan nol");
  });
});
