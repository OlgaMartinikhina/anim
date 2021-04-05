export default class Collapse {
  // eslint-disable-next-line class-methods-use-this
  init() {
    const btnCollapse = document.querySelector('.collapseButton');
    const elCOllapse = document.querySelector('.collapse');

    btnCollapse.addEventListener('click', () => {
      elCOllapse.classList.toggle('active');
    });
  }
}
