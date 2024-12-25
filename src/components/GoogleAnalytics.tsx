import { dotEnvService } from "@/shared/services/dotEnvService";
import Script from "next/script";

export const GoogleAnalytics = () => {
  return (
    <>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        id="google-analytics"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${dotEnvService.getGA4StreamKey()}`}
      ></Script>
      <Script id="google-analytics-config">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', '${dotEnvService.getGA4StreamKey()}');
    `}
      </Script>
    </>
  );
};
