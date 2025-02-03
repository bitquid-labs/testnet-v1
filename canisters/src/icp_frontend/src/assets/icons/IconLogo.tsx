import React from "react";

import { IIcon } from "types/common";

const IconLogo: React.FC<IIcon> = ({ className }) => {
  return (
    <svg
      className={className || ""}
      width="132"
      height="33"
      viewBox="0 0 132 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M42.1035 25.6706V8.59535H49.3003C50.3698 8.59535 51.2944 8.7865 52.0736 9.16835C52.8529 9.53506 53.4488 10.07 53.8614 10.7727C54.2739 11.4603 54.4802 12.2776 54.4802 13.2252C54.4802 14.0503 54.2661 14.8066 53.8384 15.4942C53.4259 16.1667 52.7763 16.7012 51.8903 17.0986V15.9526C52.6695 16.2584 53.3035 16.648 53.7926 17.1215C54.2817 17.5799 54.6328 18.0993 54.8469 18.6801C55.0761 19.2608 55.1907 19.8719 55.1907 20.5136C55.1907 22.118 54.6636 23.3786 53.6092 24.2954C52.5701 25.2122 51.1417 25.6706 49.3232 25.6706H42.1035ZM44.808 23.264H49.5295C50.4312 23.264 51.149 23.0197 51.684 22.5306C52.2189 22.0263 52.4862 21.3617 52.4862 20.5366C52.4862 19.6963 52.2189 19.0316 51.684 18.5425C51.149 18.0383 50.4312 17.7862 49.5295 17.7862H44.808V23.264ZM44.808 15.4025H49.3691C50.1025 15.4025 50.6906 15.1963 51.1339 14.7837C51.5772 14.356 51.7986 13.7981 51.7986 13.1106C51.7986 12.423 51.5772 11.888 51.1339 11.5062C50.6906 11.1243 50.1025 10.9332 49.3691 10.9332H44.808V15.4025ZM66.2697 25.9456C65.032 25.9456 63.8782 25.7242 62.8088 25.281C61.7545 24.8377 60.8226 24.2189 60.0126 23.4245C59.2182 22.6301 58.5916 21.6977 58.1332 20.6282C57.6899 19.5588 57.4685 18.3899 57.4685 17.1215C57.4685 15.8531 57.6899 14.6842 58.1332 13.6148C58.5916 12.5298 59.2182 11.5978 60.0126 10.8186C60.807 10.0242 61.7394 9.41268 62.8088 8.98499C63.8782 8.54172 65.032 8.32031 66.2697 8.32031C67.5225 8.32031 68.6763 8.54172 69.7306 8.98499C70.8 9.41268 71.7324 10.0242 72.5268 10.8186C73.3368 11.613 73.9629 12.5453 74.4062 13.6148C74.8495 14.6842 75.0709 15.8531 75.0709 17.1215C75.0709 18.3899 74.8417 19.5588 74.3833 20.6282C73.94 21.6977 73.3212 22.6301 72.5268 23.4245C71.7324 24.2189 70.8 24.8377 69.7306 25.281C68.6611 25.7242 67.5073 25.9456 66.2697 25.9456ZM66.2697 23.4703C67.1558 23.4703 67.9657 23.3099 68.6992 22.989C69.4477 22.6681 70.0973 22.2248 70.6474 21.6596C71.1974 21.0788 71.6251 20.4068 71.9309 19.6427C72.2366 18.8634 72.3893 18.0232 72.3893 17.1215C72.3893 16.2199 72.2366 15.3874 71.9309 14.6233C71.6251 13.8591 71.1974 13.1871 70.6474 12.6063C70.0973 12.0255 69.4477 11.5749 68.6992 11.254C67.9657 10.9332 67.1558 10.7727 66.2697 10.7727C65.3836 10.7727 64.5658 10.9332 63.8173 11.254C63.0838 11.5749 62.4421 12.0255 61.892 12.6063C61.3419 13.1871 60.9142 13.8591 60.6085 14.6233C60.3183 15.3874 60.173 16.2199 60.173 17.1215C60.173 18.0232 60.3183 18.8634 60.6085 19.6427C60.9142 20.4068 61.3419 21.0788 61.892 21.6596C62.4421 22.2248 63.0916 22.6681 63.8402 22.989C64.5887 23.3099 65.3987 23.4703 66.2697 23.4703ZM70.5557 27.7334L64.9632 18.8405H67.8511L73.4665 27.7334H70.5557ZM82.1013 25.6706V8.59535H84.8058V23.264H92.186V25.6706H82.1013ZM97.9173 25.9456C97.0771 25.9456 96.3359 25.8003 95.6941 25.5102C95.0675 25.2044 94.5788 24.7919 94.2272 24.2725C93.8756 23.7375 93.7001 23.1114 93.7001 22.3931C93.7001 21.7206 93.8454 21.1173 94.1356 20.5824C94.4413 20.0475 94.907 19.5969 95.5337 19.2301C96.1603 18.8634 96.9469 18.6035 97.8944 18.4509L102.203 17.7403V19.7802L98.3986 20.4449C97.711 20.5673 97.2068 20.7887 96.8859 21.1096C96.5651 21.4153 96.4046 21.8123 96.4046 22.3014C96.4046 22.7749 96.5802 23.1646 96.9318 23.4703C97.2985 23.7605 97.7647 23.9058 98.3299 23.9058C99.0326 23.9058 99.6441 23.7531 100.163 23.4474C100.698 23.1416 101.111 22.7369 101.401 22.2326C101.691 21.7133 101.837 21.1403 101.837 20.5136V17.3278C101.837 16.7168 101.607 16.2199 101.149 15.838C100.706 15.4406 100.11 15.2421 99.3613 15.2421C98.6737 15.2421 98.07 15.4254 97.5506 15.7922C97.0464 16.1438 96.6719 16.6021 96.4275 17.1674L94.2731 16.0901C94.5023 15.4791 94.8768 14.9441 95.3962 14.4857C95.9155 14.0122 96.5192 13.6455 97.2068 13.3856C97.9095 13.1257 98.6508 12.996 99.43 12.996C100.408 12.996 101.271 13.1793 102.02 13.546C102.784 13.9127 103.372 14.4248 103.785 15.0817C104.212 15.7234 104.427 16.472 104.427 17.3278V25.6706H101.951V23.4245L102.478 23.4932C102.188 23.9975 101.814 24.4329 101.355 24.7996C100.912 25.1664 100.4 25.4492 99.8197 25.6477C99.2545 25.8462 98.62 25.9456 97.9173 25.9456ZM114.079 25.9456C113.116 25.9456 112.238 25.7471 111.443 25.3497C110.663 24.9523 110.06 24.3793 109.632 23.6307L109.93 23.1494V25.6706H107.455V8.32031H110.045V15.838L109.632 15.2421C110.09 14.5394 110.702 13.9893 111.466 13.5919C112.23 13.1944 113.101 12.996 114.079 12.996C115.255 12.996 116.31 13.2788 117.241 13.844C118.189 14.4092 118.93 15.1811 119.465 16.1589C120.015 17.1366 120.29 18.2368 120.29 19.4593C120.29 20.6819 120.015 21.782 119.465 22.7598C118.93 23.7375 118.197 24.5168 117.264 25.0976C116.332 25.6628 115.27 25.9456 114.079 25.9456ZM113.826 23.5391C114.56 23.5391 115.209 23.3635 115.775 23.0119C116.34 22.6603 116.783 22.179 117.104 21.5679C117.44 20.9413 117.608 20.2386 117.608 19.4593C117.608 18.6801 117.44 17.9847 117.104 17.3736C116.783 16.7626 116.34 16.2813 115.775 15.9297C115.209 15.5781 114.56 15.4025 113.826 15.4025C113.109 15.4025 112.459 15.5781 111.878 15.9297C111.313 16.2813 110.862 16.7626 110.526 17.3736C110.205 17.9847 110.045 18.6801 110.045 19.4593C110.045 20.2386 110.205 20.9413 110.526 21.5679C110.862 22.179 111.313 22.6603 111.878 23.0119C112.459 23.3635 113.109 23.5391 113.826 23.5391ZM127.393 25.9456C126.125 25.9456 125.009 25.6325 124.047 25.0059C123.1 24.3793 122.435 23.539 122.053 22.4847L124.047 21.545C124.383 22.2478 124.842 22.8056 125.422 23.2182C126.018 23.6307 126.675 23.837 127.393 23.837C128.005 23.837 128.501 23.6995 128.883 23.4245C129.265 23.1494 129.456 22.7749 129.456 22.3014C129.456 21.9956 129.372 21.7513 129.204 21.5679C129.036 21.3695 128.822 21.209 128.562 21.0866C128.318 20.9642 128.066 20.8726 127.806 20.8116L125.857 20.2615C124.788 19.9558 123.986 19.4974 123.451 18.8863C122.932 18.2597 122.672 17.5341 122.672 16.709C122.672 15.9604 122.863 15.3108 123.245 14.7608C123.627 14.1956 124.154 13.7601 124.826 13.4544C125.499 13.1486 126.255 12.996 127.095 12.996C128.226 12.996 129.234 13.2788 130.121 13.844C131.007 14.3941 131.633 15.1655 132 16.1589L130.006 17.0986C129.762 16.5027 129.372 16.0292 128.837 15.6776C128.318 15.326 127.73 15.1504 127.072 15.1504C126.507 15.1504 126.056 15.2879 125.72 15.563C125.384 15.8229 125.216 16.1667 125.216 16.5944C125.216 16.8845 125.292 17.1293 125.445 17.3278C125.598 17.5112 125.796 17.6638 126.041 17.7862C126.286 17.893 126.538 17.9847 126.797 18.0612L128.814 18.6571C129.838 18.9473 130.625 19.4057 131.175 20.0323C131.725 20.6434 132 21.3768 132 22.2326C132 22.9661 131.801 23.6156 131.404 24.1808C131.022 24.7309 130.487 25.1664 129.8 25.4872C129.112 25.793 128.31 25.9456 127.393 25.9456Z"
        fill="white"
      />
      <path
        d="M15.3496 0.00390625C15.3496 0.00390625 15.5642 0.139593 15.9295 0.396294C18.343 2.09007 27.3628 9.03201 25.1355 16.7606C24.5001 18.9696 23.2134 21.1314 21.6393 23.1327C20.5616 24.5029 19.3514 25.7965 18.1179 26.9787C16.7785 28.2691 15.4129 29.4297 14.1743 30.4107C13.6412 30.8324 13.1328 31.2211 12.6598 31.5732C10.8441 32.9259 8.32931 32.8622 6.5874 31.4191C6.5874 31.4191 25.2157 16.6148 15.3496 0.00390625Z"
        fill="url(#paint0_linear_1002_19240)"
      />
      <path
        d="M3.02246 28.1194C4.81846 29.4955 7.33642 29.462 9.09895 28.0442C9.67195 27.5821 10.3004 27.0596 10.9587 26.4843C14.8087 23.1316 19.6984 18.0122 20.9911 12.7695C22.2604 7.62495 18.6638 3.00937 15.3551 9.11353e-09C15.3551 9.11353e-09 17.3822 17.2916 3.02246 28.1194Z"
        fill="url(#paint1_linear_1002_19240)"
      />
      <path
        d="M0 24.8855C1.79599 26.2612 4.31396 26.2305 6.07649 24.8103C6.88923 24.1576 7.80694 23.3843 8.76773 22.5143C12.4619 19.1721 16.7695 14.4057 17.9687 9.53523C18.8424 5.99275 17.4103 2.69872 15.3517 0.00976563C15.3517 0.00976563 10.5761 16.7022 0 24.8855Z"
        fill="url(#paint2_linear_1002_19240)"
      />
      <path
        d="M24.1145 31.4191C22.3726 32.8622 19.8578 32.9259 18.0421 31.5732C17.569 31.2207 17.0607 30.8319 16.5276 30.4107C15.2894 29.4302 13.9234 28.2695 12.584 26.9787C11.3505 25.7965 10.1403 24.5029 9.0626 23.1327C7.48801 21.1309 6.20221 18.9696 5.56641 16.7606C3.33907 9.03247 12.3589 2.09053 14.7724 0.396294C15.1377 0.139593 15.3522 0.00390625 15.3522 0.00390625C5.4862 16.6148 24.1145 31.4191 24.1145 31.4191Z"
        fill="url(#paint3_linear_1002_19240)"
      />
      <path
        d="M15.3478 0C12.0391 3.00983 8.44253 7.62495 9.71183 12.7695C11.004 18.0122 15.8938 23.132 19.7443 26.4843C20.4025 27.0596 21.031 27.5821 21.604 28.0442C23.3665 29.462 25.884 29.4955 27.6805 28.1194C13.3203 17.2921 15.3478 0 15.3478 0Z"
        fill="url(#paint4_linear_1002_19240)"
      />
      <path
        d="M15.3516 0.0078125C13.293 2.69676 11.8605 5.99079 12.7342 9.53328C13.9338 14.4037 18.2414 19.1701 21.9356 22.5123C22.8964 23.3823 23.8141 24.1561 24.6268 24.8084C26.3893 26.2285 28.9069 26.2592 30.7033 24.8836C20.1267 16.7007 15.3516 0.0078125 15.3516 0.0078125Z"
        fill="url(#paint5_linear_1002_19240)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1002_19240"
          x1="25.405"
          y1="16.7702"
          x2="7.18836"
          y2="16.0656"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.00537635" stop-color="#007ADF" />
          <stop offset="1" stop-color="#00ECBC" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1002_19240"
          x1="21.2519"
          y1="14.5651"
          x2="3.02246"
          y2="14.5651"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.00537635" stop-color="#007ADF" />
          <stop offset="1" stop-color="#00ECBC" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1002_19240"
          x1="18.2295"
          y1="12.953"
          x2="0"
          y2="12.953"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.00537635" stop-color="#007ADF" />
          <stop offset="1" stop-color="#00ECBC" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_1002_19240"
          x1="5.30696"
          y1="16.7633"
          x2="23.5236"
          y2="16.0588"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.00537635" stop-color="#007ADF" />
          <stop offset="1" stop-color="#00ECBC" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_1002_19240"
          x1="9.45054"
          y1="14.5655"
          x2="27.6805"
          y2="14.5655"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.00537635" stop-color="#007ADF" />
          <stop offset="1" stop-color="#00ECBC" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_1002_19240"
          x1="12.4734"
          y1="12.9515"
          x2="30.7028"
          y2="12.9515"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.00537635" stop-color="#007ADF" />
          <stop offset="1" stop-color="#00ECBC" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default IconLogo;
