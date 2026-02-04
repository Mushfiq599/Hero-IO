const KEY = "installedApps";

export function getInstalledApps() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function installApp(app) {
  const installed = getInstalledApps();
  if (!installed.find((a) => a.id === app.id)) {
    localStorage.setItem(KEY, JSON.stringify([...installed, app]));
  }
}

export function isInstalled(id) {
  return getInstalledApps().some((a) => a.id === id);
}
