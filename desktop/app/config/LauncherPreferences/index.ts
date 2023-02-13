interface ILauncherPreferences {
  instance: {
    width: number;
    minWidth: number;
    height: number;
    minHeight: number;
  };
  titleBar: {
    height: number;
  };
}

export const LauncherPreferences: ILauncherPreferences = {
  instance: {
    width: 1024,
    minWidth: 1024,
    height: 640,
    minHeight: 640,
  },
  titleBar: {
    height: 38,
  },
};
