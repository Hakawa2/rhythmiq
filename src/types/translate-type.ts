type TranslationKeys = "subtitle" | "description" | "optionalInformation";

export type TranslatableFields = {
  [K in TranslationKeys]: TranslateScruture;
};

export type TranslateScruture = {
  key: string;
  option?: Record<string, unknown>;
};
