const $tabCont = document.querySelector('.tab-container');
const $tabEl = document.querySelectorAll('.tab');
const $viewEl = document.querySelectorAll('.view');

function TabClick(event: Event): any {
  const $eventTarget = event.target as HTMLDivElement;
  if ($eventTarget.matches('.tab')) {
    const $viewData = $eventTarget.dataset.view;
    $tabEl.forEach((tab) => {
      if (tab === $eventTarget) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
    $viewEl.forEach((view: any) => {
      if (view.dataset.view === $viewData) {
        view.classList.remove('hidden');
      } else {
        view.classList.add('hidden');
      }
    });
  }
}

if ($tabCont) {
  $tabCont.addEventListener('click', TabClick);
}

/* $tabCont?.addEventListener('click', (event: Event) => {
  const $eventTarget = event?.target as HTMLDivElement;
  if ($eventTarget.matches('.tab')) {
    $tabEl.forEach((tab) => {
      if (tab === $eventTarget) {
        tab.className = 'tab active';
      } else {
        tab.className = 'tab';
      }
    });
  }
  const $dataView = $eventTarget.getAttribute('data-view');
  const $viewed = document.querySelectorAll('.view');
  $viewed.forEach((view) => {
    if (view.getAttribute('.data-view') === $dataView) {
      view.classList.add('active');
    } else {
      view.classList.remove('active');
    }
  });
}); */
