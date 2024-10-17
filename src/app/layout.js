import { config } from "@/helpers/config";
import "@/styles/index.scss";


export const metadata = {
  title: {
    template: `%s | ${config.project.name}`,
    default: `${config.project.name} - ${config.project.slogan}`,
  },
  description: config.project.description
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
