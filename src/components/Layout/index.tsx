import { Box } from "@chakra-ui/react";
import { FooterComponent } from "../Footer";
import { NavbarComponent } from "../Navbar";
import { HeadComponent } from "../Head";
import { SITE } from "@/data/site";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  canonicalPath?: string;
  image?: string;
  ogType?: "website" | "article";
  breadcrumbs?: Array<{ name: string; url: string }>;
  noIndex?: boolean;
}

export const Layout = ({
  children,
  title,
  description,
  canonicalPath,
  image,
  ogType,
  breadcrumbs,
  noIndex,
}: LayoutProps) => {
  // Breadcrumb default: Beranda → halaman saat ini (jika ada title)
  const defaultBreadcrumbs = title
    ? [
        { name: "Beranda", url: SITE.url },
        { name: title, url: `${SITE.url}${canonicalPath ?? ""}` },
      ]
    : undefined;

  return (
    <Box display="flex" flexDirection="column" minH="100vh">
      <HeadComponent
        title={title}
        description={description}
        canonicalPath={canonicalPath}
        image={image}
        ogType={ogType}
        breadcrumbs={breadcrumbs ?? defaultBreadcrumbs}
        noIndex={noIndex}
      />
      <NavbarComponent />
      <Box as="main" flex="1">
        {children}
      </Box>
      <FooterComponent />
    </Box>
  );
};
