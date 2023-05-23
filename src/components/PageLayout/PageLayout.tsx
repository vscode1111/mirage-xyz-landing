import classNames from 'classnames';
import Head from 'next/head';
import VideoDesktopWEBM from './assets/video-desktop.webm';
import VideoDesktopJPG from './assets/video-desktop.jpg';
import VideoMobileWEBM from './assets/video-mobile.webm';
import VideoMobileJPG from './assets/video-mobile.jpg';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { usePageLayoutStyles } from './usePageLayoutStyles';
import { Header } from './Header';
import { BASE_DOMAIN } from 'consts/links';
import { Footer } from './Footer';
import { useIsSMDown } from 'hooks/useTheme';
import { useInitEffect } from 'hooks/useInitEffect';
import { Crop } from './Crop';

interface PageLayoutProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  keywords?: string;
  className?: string;
  meta?: React.ReactNode;
}

export const PageLayout = ({
  children,
  className,
  title = '',
  description = '',
  keywords,
  ogTitle = '',
  ogDescription = '',
  meta = null,
}: PageLayoutProps) => {
  const { classes } = usePageLayoutStyles();
  const router = useRouter();
  const url = useMemo(() => `${BASE_DOMAIN}${router.pathname}`, [router]);
  const isSMDown = useIsSMDown();
  const [ready, setReady] = useState(false);
  useInitEffect(() => setReady(true))

  return (
    <div className={classNames(classes.root, className)}>
      <Head>
        <title>{title}</title>
        <meta name="Description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={ogTitle} />
        <meta property="twitter:description" content={ogDescription} />
        {meta}
      </Head>
      <Header />
      {ready && <>
          {isSMDown &&
            <>
              <Crop
                className={classes.topVideo}
                imageWidth={680}
                imageHeight={1080}
                height={700}
                Component={(style) =>                 
                  <video 
                    className={style} 
                    muted
                    loop
                    autoPlay
                    playsInline
                    poster={VideoMobileJPG}
                  >
                    <source src={VideoMobileWEBM} type="video/mp4" />
                  </video>
                }
              />
              <Crop
                className={classes.bottomVideo}
                imageWidth={680} 
                imageHeight={1080} 
                height={700}
                Component={(style) =>                 
                  <video 
                    className={style} 
                    muted
                    loop
                    autoPlay
                    playsInline
                    poster={VideoMobileJPG}
                  >
                    <source src={VideoMobileWEBM} type="video/mp4" />
                  </video>
                }
              />
              <div className={classes.bottomVideoOver} />
            </>
          } 
          {!isSMDown &&
            <>
              <Crop
                className={classes.topVideo}
                imageWidth={1920} 
                imageHeight={1080} 
                height={'120vh'}
                Component={(style) =>                 
                  <video
                    className={style}
                    muted
                    loop
                    autoPlay
                    playsInline
                    poster={VideoDesktopJPG}
                  >
                    <source src={VideoDesktopWEBM} type="video/mp4" />
                  </video>
                }
              />
              <Crop
                className={classes.bottomVideo}
                imageWidth={1920} 
                imageHeight={1080}
                height={700}
                Component={(style) =>                 
                  <video 
                    className={style} 
                    muted
                    loop
                    autoPlay
                    playsInline
                    poster={VideoDesktopJPG}
                  >
                    <source src={VideoDesktopWEBM} type="video/mp4" />
                  </video>
                }
              />
              <div className={classes.bottomVideoOver} />
            </>
          }
        </>
      }
      <main className={classes.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
};
