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
export function uninstallApp(id) {
    const installed = getInstalledApps();
    const updated = installed.filter((a) => a.id !== id);
    localStorage.setItem(KEY, JSON.stringify(updated));
}
export function isInstalled(id) {
    return getInstalledApps().some((a) => a.id === id);
}
