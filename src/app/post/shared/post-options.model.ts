export interface PostOptions {
  publisherKey?: string;
  locale?: string;
  theme?: string;
  sticky?: boolean;
  requestConfig?: boolean;
  clean?: boolean;
  copypaste?: boolean;
  copypasteOptions?: {
    minWords?: number;
    readMoreText?: boolean | string;
    readMoreUrl?: string;
    imageSize?: [number, number]
  };
  shareQuote?: boolean;
  shareQuoteOptions?: {
    buttons?: string[];
    morePopupExclude?: string[];
    trigger?: 'copy' | 'select';
  };
  onload?: Function;
  track?: boolean | string;
  trackAddressBar?: boolean;
  googleAnalytics?: boolean;
  googleAnalyticsOptions?: {
    gaTrackingId?: string | string[],
    trackEvents?: boolean;
    trackSocialInteractions?: boolean;
    trackOptions?: {
      nonInteraction?: false;
      pagePath?: string;
    }
  };
  defaults?: {
    url?: string;
    image?:	string;
    title?:	string;
    layout?: 'horizontal' | 'vertical';
    radius?: 'square' | 'rounded' |'circle' | number;
    size?: 24 |	32 | 48	| 64;
    counter?:	boolean | 'vertical' | 'horizontal'
    label?: boolean;
    padding?: boolean | true | number;
    view?: 'auto' |	'full';
    buttonColor?: string;
    buttonBackground?: string;
    hover?: boolean;
    transformations?: {
      tracking?: boolean;
      shorten?:	boolean;
    };
    afterShareOptions?: {
      tracking?: boolean;
      shorten?:	boolean;
    }
    handlers?: {
      onshare?: Function;
      onshowaftershare?: Function;
      onhideaftershare?: Function;
      onbuttonclick?: Function;
    };
    shareNewWindow?: boolean;
    stickyPopup?: boolean;
    services?: {
      twitter?: {
        via?: string;
      }
    };
    popup?: {
      click?: boolean;
      services?: {
        display?: string[];
        exclude?: string[];
      };
      openDelay?: number;
      hideDelay?: number;
    };
    jumbo?: boolean;
    jumboPosition?: 'first' | 'last';
  };
}
