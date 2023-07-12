import * as am5 from '@amcharts/amcharts5';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5themes_Dark from '@amcharts/amcharts5/themes/Dark';
import { useLayoutEffect, useRef  } from 'react';

export function setChartTheme(
  root: am5.Root,
  isDarkMode: boolean,
  cb?: () => void
) {
  root.setThemes(
    isDarkMode
      ? [am5themes_Animated.new(root), am5themes_Dark.new(root)]
      : [am5themes_Animated.new(root)]
  );
  if (cb) {
    return cb();
  }
}


type ChartThemeProps = {
  rootRef: React.MutableRefObject<am5.Root | null>;
  darkMode: boolean;
  setGridColor?: () => void;
};
export const useChartTheme = ({ rootRef, darkMode, setGridColor }: ChartThemeProps) => {
  useLayoutEffect(() => {
    if (rootRef.current) {
      const root = rootRef.current;
      setChartTheme(root, darkMode, setGridColor);
    }
  }, [darkMode, rootRef, setGridColor]);
};

export const useAmchartsRoot = (chartId: string) => {
  const rootRef = useRef<am5.Root | null>(null);

  useLayoutEffect(() => {
    if (!rootRef.current) {
      rootRef.current = am5.Root.new(chartId);
      const root = rootRef.current;
      root?._logo?.dispose();
    }

    return () => {
      if (rootRef.current) {
        rootRef.current.dispose();
        rootRef.current = null;
      }
    };
  }, [chartId]);

  return rootRef;
};

