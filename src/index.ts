import * as utils from "./utils";

const appendMenu = (menuEl: HTMLElement, text: string, onClick: () => void) => {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", onClick);
  menuEl.appendChild(button);
};

window.onload = async () => {
  const canvas = utils.getCanvas("app");
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  utils.autoResizeCanvas(canvas);

  const ctx = canvas.getContext("webgpu") as GPUCanvasContext | null;

  if (!ctx) {
    const div = document.createElement("div");
    div.textContent = "WebGPU is not enabled in your browser.";
    canvas.replaceWith(div);
    return;
  }

  let dispose: (() => void) | undefined;

  const menuEl = document.getElementById("menu")!;
  const menus: [
    string,
    () => Promise<{ init: (gl: GPUCanvasContext) => Promise<() => void> }>
  ][] = [["triangle", () => import("./pages/triangle")]];
  menus.forEach(([name, data]) => {
    appendMenu(menuEl, name, async () => {
      dispose?.();
      dispose = await (await data()).init(ctx);
    });
  });
  (menuEl.children[menuEl.children.length - 1] as HTMLElement).click();
};
