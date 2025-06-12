
declare global {
  interface Window {
    ldrs: {
      open: () => void;
    };
    LobbyDateRangeSelector: new (config: {
      apiBaseUrl: string;
      token: string;
      lang: string;
    }) => {
      open: () => void;
    };
  }
}

export {};
