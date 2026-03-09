import type { NextConfig } from "next";

const path = require("path");

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    additionalData: (content, filepath) => {
      // убираем глобальный файл из импорта
      if (filepath.includes("globals.scss")) {
        return content;
      }
      // Для всех остальных SCSS-файлов добавляем импорты переменных, миксинов, функций
      return (
        `
       @use "src/styles/variables.scss" as *;\n
       @use "src/styles/mixins.scss" as *;\n
       @use "src/styles/functions.scss" as *;\n
      ` + content
      );
    },
  },
};

export default nextConfig;
