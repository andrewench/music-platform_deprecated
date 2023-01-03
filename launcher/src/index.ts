import {
  InstanceOptions,
  InstanceOptionsType,
  LauncherPreferences,
  ViewOptions,
  ViewOptionsType,
} from '@config';
import { BrowserView, BrowserWindow, app } from 'electron';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;

if (require('electron-squirrel-startup')) {
  app.quit();
}

interface ILauncherOptions {
  instanceOptions: InstanceOptionsType;
  viewOptions: ViewOptionsType;
}

class Launcher {
  public instance: BrowserWindow = {} as BrowserWindow;
  public view: BrowserView = {} as BrowserView;

  constructor({ instanceOptions, viewOptions }: ILauncherOptions) {
    this.instance = new BrowserWindow({
      ...instanceOptions,
    });

    this.view = new BrowserView({
      ...viewOptions,
    });
  }

  static init() {
    const { instance, view } = new Launcher({
      instanceOptions: InstanceOptions,
      viewOptions: ViewOptions,
    });

    const { titleBar } = LauncherPreferences;

    const { width, height } = instance.getContentBounds();

    view.setBounds({
      x: 0,
      y: titleBar.height,
      width,
      height: height - titleBar.height,
    });

    view.setAutoResize({
      width: true,
      height: true,
    });

    instance.removeMenu();
    instance.setBrowserView(view);

    instance.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
    view.webContents.loadURL(process.env.HOST);
  }
}

app.on('ready', () => {
  Launcher.init();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (!BrowserWindow.getAllWindows().length) {
    Launcher.init();
  }
});
