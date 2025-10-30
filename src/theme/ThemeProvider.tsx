import { theme } from "./themeConfig";
import { ConfigProvider } from "antd";
import type { Locale } from "antd/es/locale";
import locale from "antd/lib/date-picker/locale/en_GB";
import type { ReactNode } from "react";

export function AntThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ConfigProvider theme={theme} locale={locale as unknown as Locale}>
      {children}
    </ConfigProvider>
  );
}
