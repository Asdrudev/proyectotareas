const html = document.querySelector('body');

(() => {
  const notification = document.createElement('div');
  notification.classList.add('fixed', 'top-24','right-8', 'p-4', 'rounded-md', 'text-white', 'hidden');
  notification.innerHTML = '<p></p>';
  notification.id = 'notification';
  html.append(notification);
})();

export const showNotification = (text, isError, notification) => {
    notification.children[0].innerHTML = text;
    notification.classList.add(`${isError ? 'bg-red-500' : 'bg-green-500'}`);
    notification.classList.remove('hidden');
    setTimeout(() => {
      notification.classList.add('hidden');
    }, 5000);
};