import type { DetailsHeaderProps } from "@/components/DetailsHeader/DetailsHeader";

export const detailsHeaderMock: DetailsHeaderProps = {
  image: "mock-image",
  title: "mock-title",
  subtitle: {
    key: "mock-subtitle",
    option: { term: "mock-subtitle-term" },
  },
  description: {
    key: "mock-description",
    option: { term: "mock-description-term" },
  },
  optionalInformation: {
    key: "mock-optionalInformation",
    option: { term: "mock-optionalInformation-term" },
  },
};
