import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Prose, AuthorDisclaimer } from "@/components/blog/chrome";
import { ArticleContent } from "@/components/blog/render";
import { articles, getArticle, formatDate } from "@/lib/blog";
import { brand } from "@/lib/content";
import { siteUrl } from "@/lib/seo";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = getArticle(params.slug);
  if (!a) return {};
  const url = `${siteUrl}/blog/${a.slug}`;
  return {
    title: a.metaTitle,
    description: a.description,
    keywords: [a.keyword],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: a.title,
      description: a.description,
      publishedTime: a.date,
    },
    twitter: { card: "summary_large_image", title: a.title, description: a.description },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const a = getArticle(params.slug);
  if (!a) notFound();

  const url = `${siteUrl}/blog/${a.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    datePublished: a.date,
    dateModified: a.date,
    author: { "@type": "Organization", name: `The ${brand.name} Team` },
    publisher: {
      "@type": "Organization",
      name: brand.name,
      logo: { "@type": "ImageObject", url: `${siteUrl}/icon.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: `${siteUrl}/opengraph-image`,
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: a.title, item: url },
    ],
  };

  return (
    <main>
      <Navbar />
      <article className="mx-auto max-w-2xl px-5 py-14 sm:py-20">
        <nav className="mb-8 text-sm text-neutral-500">
          <Link href="/blog" className="transition hover:text-white">← All articles</Link>
        </nav>

        <p className="text-xs font-medium text-neutral-500">{formatDate(a.date)} · {a.readingTime}</p>
        <h1 className="mt-3 text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
          {a.title}
        </h1>

        <Prose>
          {a.content ? <ArticleContent content={a.content} /> : a.Body ? <a.Body /> : null}
        </Prose>

        <AuthorDisclaimer date={formatDate(a.date)} />
      </article>
      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {a.content?.faq && a.content.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: a.content.faq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      )}
    </main>
  );
}
