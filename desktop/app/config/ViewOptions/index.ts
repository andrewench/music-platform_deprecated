export type ViewOptionsType = Electron.BrowserViewConstructorOptions;

export const ViewOptions: ViewOptionsType = {
  webPreferences: {
    sandbox: true,
    contextIsolation: true,
  },
};
