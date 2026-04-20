const tabButtons = Array.from(document.querySelectorAll('[role="tab"]'));
const panels = Array.from(document.querySelectorAll('[role="tabpanel"]'));

function activateTab(button, updateHash = true) {
  const selectedName = button.dataset.tab;

  tabButtons.forEach((tab) => {
    const isSelected = tab === button;
    tab.classList.toggle("is-active", isSelected);
    tab.setAttribute("aria-selected", String(isSelected));
    tab.tabIndex = isSelected ? 0 : -1;
  });

  panels.forEach((panel) => {
    panel.hidden = panel.dataset.panel !== selectedName;
  });

  if (updateHash) {
    history.replaceState(null, "", `#${selectedName}`);
  }
}

tabButtons.forEach((button, index) => {
  button.addEventListener("click", () => activateTab(button));

  button.addEventListener("keydown", (event) => {
    const keyMap = {
      ArrowLeft: index - 1,
      ArrowUp: index - 1,
      ArrowRight: index + 1,
      ArrowDown: index + 1,
      Home: 0,
      End: tabButtons.length - 1,
    };

    if (!(event.key in keyMap)) {
      return;
    }

    event.preventDefault();
    const nextIndex = (keyMap[event.key] + tabButtons.length) % tabButtons.length;
    tabButtons[nextIndex].focus();
    activateTab(tabButtons[nextIndex]);
  });
});

const initialTab = tabButtons.find((button) => `#${button.dataset.tab}` === window.location.hash);

if (initialTab) {
  activateTab(initialTab, false);
}
