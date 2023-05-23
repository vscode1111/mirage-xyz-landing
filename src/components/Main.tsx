import { IntroBlock } from './IntrolBlock/IntroBlock';
import { PartnerBlock } from './PartnerBlock/PartnerBlock';
import { FeatureBlock } from './FeatureBlock/FeatureBlock';
import { MosaicBlock } from './MosaicBlock/MosaicBlock';
import { SdkBlock } from './SdkBlock/SdkBlock';
import { TeamBlock } from './TeamBlock/TeamBlock';
import { SloganBlock } from './SloganBlock/SloganBlock';
import { ConclusionBlock } from './ConclusionBlock/ConclusionBlock';

export const Main = () => {
  return (
    <>
      <IntroBlock/>
      <PartnerBlock />
      <FeatureBlock />
      <MosaicBlock />
      <SdkBlock />
      <TeamBlock />
      <SloganBlock />
      <ConclusionBlock />
    </>
  );
};
