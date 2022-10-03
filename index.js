document.addEventListener("DOMContentLoaded", function () {
  const sceneEl = document.querySelector("a-scene");

  const list = ["spiderman", "mask", "chicken", "pikachu"];
  let visible = 0;
  const setNextVisible = () =>
    visible < list.length - 1 ? visible++ : (visible = 0);

  sceneEl.addEventListener("targetFound", () => {
    [...Array(list.length).keys()].forEach((_, i) => {
      const entity = document.querySelector(`#${list[i]}-entity`);
      i === visible
        ? entity.setAttribute("visible", true)
        : entity.setAttribute("visible", false);
    });
  });

  sceneEl.addEventListener("targetLost", setNextVisible);
});
