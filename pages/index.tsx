import { Main } from 'components/Main'
import { PageLayout } from 'components/PageLayout/PageLayout';
import { t } from 'utils/intl';

const Index = () => {
  return (
    <PageLayout
      title={t('meta.title')}
      description={t('meta.description')}
      ogTitle={t('meta.og-title')}
      ogDescription={t('meta.og-description')}
      keywords={t('meta.keywords')}
    > 
      <Main />
    </PageLayout>
  )
}

export default Index;
