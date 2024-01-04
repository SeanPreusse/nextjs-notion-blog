import Head from 'next/head';

interface MetaHeadProps {
  date: string;
  title: string;
  imageUrl: string;
  description: string;
  ogUrl: string;
}

export function MetaHead(props: MetaHeadProps) {
  const { date, title, imageUrl, description, ogUrl } = props;

  const titleName = title || 'Analytics Roundtable';

  return (
    <Head>
      <title>{titleName}</title>
      <meta name="robots" content="follow, index" />
      <meta content={description || titleName} name="description" />
      <meta property="og:site_name" content={titleName} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={titleName} />
      <meta property="og:image" content={imageUrl} />

      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={titleName} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="localhost:3000" />
      <meta property="twitter:url" content={ogUrl} />
      <meta name="twitter:title" content={titleName} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {date && <meta property="article:published_time" content={date} />}
    </Head>
  );
}
