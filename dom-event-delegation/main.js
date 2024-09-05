'use strict';
const $taskListClick = document.querySelector('.task-list');
if (!$taskListClick) throw new Error('$taskListClick does not exist');
$taskListClick?.addEventListener('click', (event) => {
  const eventTarget = event.target;
  console.log('event.target:', eventTarget);
  console.log('event.target.tagName:', eventTarget.tagName);
  if (eventTarget.tagName === 'BUTTON') {
    const $taskButton = eventTarget.closest('.task-list-item');
    if ($taskButton) {
      console.log('list item:', $taskButton);
      $taskButton.remove();
    }
  }
});
