import { LauncherPreferences } from '@config';

const { width, height } = LauncherPreferences.instance;

export type InstanceOptionsType = Electron.BrowserWindowConstructorOptions;

export const InstanceOptions: InstanceOptionsType = {
  minWidth: width,
  minHeight: height,
  width,
  height,
  center: true,
  webPreferences: {
    nodeIntegration: true,
    contextIsolation: false,
  },
};
