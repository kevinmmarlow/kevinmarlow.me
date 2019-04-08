export function createPoller(pollSec) {
  let timerId = null;
  let poller = () => {};
  return async fetchFn => {
    window.clearTimeout(timerId);
    poller = () => {
      const keepPolling = fetchFn();
      if (keepPolling) {
        timerId = window.setTimeout(poller, pollSec * 1000);
      } else {
        console.log('Polling end.');
      }
    };
    // init polling
    timerId = window.setTimeout(poller, pollSec * 1000);
  };
}
