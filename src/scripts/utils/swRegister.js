import * as WorkboxWindow from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    return;
  }

  const wb = new WorkboxWindow.Workbox('./sw.bundle.js');

  try {
    await wb.register();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Failed to register service worker', error);
  }
};

export default swRegister;
