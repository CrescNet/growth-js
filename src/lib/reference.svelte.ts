import { m } from '$lib/paraglide/messages';
import { rawFromReference, sdsFromReference } from './references';
import type { ReferenceData, ReferenceDeclaration, SexReferenceData } from './types';

const references = import.meta.glob('$lib/references/*.json', { eager: true });

export const reference = $state({
  declaration: undefined as ReferenceDeclaration | undefined,
  data: undefined as ReferenceData | undefined,
});

$effect.root(() => {
  $effect(() => {
    if (reference.declaration) {
      const referenceId = reference.declaration.value;
      const path = `/src/lib/references/${referenceId}.json`;
      const module = references[path];
      reference.data = module ? (module as { default: ReferenceData }).default : undefined;
    } else {
      reference.data = undefined;
    }
  });
});

export const availableReferences = $state([
  {
    value: 'normal_german',
    label: m.normal_german(),
    authors: 'Kromeyer-Hauschild et al. 2001',
    url: 'https://doi.org/10.1007/s001120170107',
    disease: false
  },
  {
    value: 'normal_china',
    label: m.normal_china(),
    authors: 'Zong et al. 2013',
    url: 'https://doi.org/10.1371/journal.pone.0059569',
    disease: false
  },
  {
    value: 'normal_who',
    label: m.normal_who(),
    authors: 'WHO',
    url: 'https://doi.org/10.2471/blt.07.043497',
    disease: false
  },
  {
    value: 'normal_turkish_germany',
    label: m.normal_turkish_germany(),
    authors: 'Redlefsen 2008',
    url: 'https://d-nb.info/990166104/34',
    disease: false
  },
  {
    value: 'achondroplasia_sweden',
    label: m.achondroplasia(),
    authors: 'Merker et al. 2019',
    url: 'https://doi.org/10.1002/ajmg.a.38853',
    disease: true
  },
  {
    value: 'hypochondroplasia',
    label: m.hypochondroplasia(),
    authors: 'Cheung et al. 2024',
    url: 'https://doi.org/10.1002/ajmg.a.63431',
    disease: true
  },
  {
    value: 'noonan_japan',
    label: m.noonan_japan(),
    authors: 'Isojima et al. 2016',
    url: 'https://doi.org/10.1038/pr.2015.254',
    disease: true
  },
  {
    value: 'trisomy21_america',
    label: m.trisomy21_america(),
    authors: 'Zemel et al. 2015',
    url: 'https://doi.org/10.1542/peds.2015-1652',
    disease: true
  }
]);

export function getTargetHeightSds(fatherHeight?: number, motherHeight?: number, coefficient = 0.72): number | undefined {
  if (reference.declaration?.disease || !reference.data?.height || fatherHeight === undefined || motherHeight === undefined)
    return undefined
  const fatherHeightSds = sdsFromReference(reference.data.height.male || [], 18, fatherHeight);
  const motherHeightSds = sdsFromReference(reference.data.height.female || [], 18, motherHeight);

  if (fatherHeightSds === undefined || motherHeightSds === undefined) return undefined;
  return (fatherHeightSds + motherHeightSds) / 2 * coefficient;
}

export function getTargetHeight(sex?: string, fatherHeight?: number, motherHeight?: number, coefficient = 0.72): number | undefined {
  if (!reference.data?.height || fatherHeight === undefined || motherHeight === undefined)
    return undefined;
  const data = reference.data.height[sex as keyof SexReferenceData];
  if (!data) return undefined;
  const targetHeightSds = getTargetHeightSds(fatherHeight, motherHeight, coefficient);
  return rawFromReference(data, 18, targetHeightSds);
}
