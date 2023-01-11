interface Card {
  icon: JSX.Element;
  label: string;
  value: string;
}

const icons = {
  engine: (
    <svg
      width="29"
      height="20"
      viewBox="0 0 29 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.54455 0.736522V1.47275H7.8943H9.24405V2.00447V2.53619L7.50965 2.55244L5.76713 2.57709L5.74247 3.53437L5.71781 4.49976H4.25348H2.78102V6.91296V9.32615H2.12688H1.47246V7.64918V5.97222H0.736229H0V10.0218V14.0713H0.736229H1.47246L1.4887 12.4106L1.51336 10.758L2.15154 10.7333L2.7816 10.7087V13.1303V15.5435H4.45044H6.12741L7.42002 17.3188L8.72075 19.1022L14.8316 19.1269L20.9344 19.1431L21.0652 18.7176C21.1305 18.4803 21.3434 17.7113 21.5398 17.0159L21.8998 15.748H22.3007H22.7016L23.4134 17.5068L24.1169 19.2655H26.2765H28.4281V11.7393V4.21316L26.2931 4.1885L24.1496 4.17226L23.7079 5.25223C23.4624 5.84951 23.1352 6.66755 22.9797 7.06003L22.7016 7.78001L22.3007 7.75535L21.8998 7.7307L21.4989 6.34004C21.2862 5.57104 21.0652 4.81015 21.0162 4.63842L20.9344 4.33557H19.8791H18.8156V3.43574V2.5359H17.0977H15.3799V2.00418V1.47246H16.7296H18.0794V0.736232V1.67383e-06H12.312H6.54455V0.736522ZM17.4087 4.92502L17.4334 5.80861H18.6361H19.8387L20.3214 7.52648L20.8035 9.24435H22.2516H23.7079L24.4278 7.44468L25.1559 5.63659L26.0558 5.66125L26.9556 5.68591L26.9803 11.7562L26.9965 17.8346H26.072H25.1475L24.4194 16.0349L23.6997 14.2346H22.2516H20.812L20.3211 15.9525L19.8384 17.6704L14.6436 17.6541L9.45698 17.6295L8.15625 15.846L6.86364 14.0707H5.55479H4.25406V10.0218V5.97222H5.72652H7.19897V4.99058V4.00894L12.2954 4.02519L17.3838 4.04984L17.4087 4.92502Z"
        fill="#0169FE"
      />
    </svg>
  ),
  power: (
    <svg
      width="21"
      height="23"
      viewBox="0 0 21 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6107 0.052368C10.5933 0.08728 9.31219 2.5216 7.76314 5.46827L4.94433 10.8318H6.83706C8.3512 10.8318 8.7239 10.8492 8.70644 10.9075C8.68898 10.9773 3.5177 21.0347 3.08674 21.8381L2.88293 22.2167L3.08674 22.0129C3.19737 21.9023 6.21975 18.612 9.79551 14.7043L16.3005 7.59971L13.8487 7.57069L11.3969 7.54168L13.802 3.931C15.1298 1.9451 16.2594 0.250507 16.3118 0.157333L16.4166 8.97795e-07H13.534C11.7871 8.97795e-07 10.6339 0.0233503 10.6107 0.052368Z"
        fill="#0169FE"
      />
      <path
        d="M8.51417 1.02489C4.75206 1.70046 1.6891 4.35604 0.506853 7.97238C-0.389978 10.7093 -0.0871049 13.7143 1.33953 16.2184C1.85777 17.1268 2.67321 18.1402 3.38369 18.7634L3.7913 19.1127L4.15811 18.3732L4.5308 17.6394L4.001 17.0744C2.86545 15.8806 2.13752 14.4712 1.78227 12.8116C1.60749 11.9963 1.59593 10.4414 1.75326 9.60872C2.08515 7.90823 2.848 6.41744 4.02435 5.19439C5.18914 3.98901 6.49358 3.20848 8.0542 2.78931L8.52596 2.66689L8.95692 1.84578C9.19564 1.39147 9.39944 1.00132 9.40534 0.977966C9.43435 0.908369 9.03831 0.931719 8.51417 1.02489Z"
        fill="#0169FE"
      />
      <path
        d="M15.1472 3.05729C14.8967 3.42409 14.7104 3.73286 14.7222 3.74442C15.7355 4.39664 16.8652 5.47393 17.4009 6.28937C18.0649 7.29683 18.4958 8.32175 18.7402 9.49221C18.9091 10.29 18.9266 11.8041 18.7751 12.6252C18.1111 16.2241 15.3102 19.0193 11.717 19.66C10.9308 19.7999 9.59147 19.7999 8.80527 19.66C8.28703 19.5668 7.3902 19.3047 6.87763 19.0951C6.69718 19.0252 6.69128 19.0252 6.3476 19.3977C6.15536 19.6015 5.89919 19.881 5.77699 20.0209L5.5614 20.2655L6.05062 20.4986C7.93156 21.3779 10.226 21.6284 12.3575 21.1916C15.0305 20.6325 17.4938 18.9205 18.9556 16.5968C19.2816 16.0786 19.8001 14.9836 19.9921 14.413C20.9939 11.3906 20.557 8.09437 18.7983 5.46214C18.3208 4.75165 17.6861 4.01215 17.127 3.51704C16.7543 3.18515 15.9273 2.56194 15.6945 2.43975C15.6072 2.39351 15.5256 2.48668 15.1472 3.05729Z"
        fill="#0169FE"
      />
    </svg>
  ),
  speed: (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.06123 3.06129C4.01513 2.10739 5.1263 1.35826 6.36398 0.834786C7.64615 0.292532 9.00725 0.0175161 10.4095 0.0175162C11.8118 0.0175163 13.1729 0.292532 14.455 0.834822C15.6927 1.3583 16.8039 2.10743 17.7578 3.06133C18.7117 4.01523 19.4608 5.12644 19.9843 6.36408C20.5266 7.64621 20.8016 9.00731 20.8016 10.4096C20.8016 11.8118 20.5266 13.1729 19.9843 14.4551C19.4608 15.6928 18.7117 16.804 17.7578 17.7579C16.8039 18.7118 15.6927 19.4609 14.455 19.9844C13.1729 20.5267 11.8118 20.8016 10.4095 20.8016C9.00725 20.8016 7.64615 20.5267 6.36398 19.9844C5.1263 19.4609 4.0151 18.7118 3.06123 17.7579C2.10729 16.804 1.3582 15.6928 0.834722 14.4551C0.292433 13.1729 0.0174521 11.8118 0.0174522 10.4096C0.0174523 9.00731 0.292433 7.64621 0.834723 6.36404C1.3582 5.12643 2.10733 4.01519 3.06123 3.06129ZM10.4095 19.3008C15.32 19.3008 19.3007 15.3201 19.3007 10.4096C19.3007 5.49909 15.32 1.51837 10.4095 1.51837C5.49903 1.51837 1.5183 5.49912 1.5183 10.4096C1.5183 15.3201 5.49903 19.3008 10.4095 19.3008Z"
        fill="#0169FE"
      />
      <path
        d="M10.4095 20.8192C11.8142 20.8192 13.1776 20.5437 14.4618 20.0005C15.7016 19.4762 16.8146 18.7258 17.7702 17.7703C18.7257 16.8148 19.4761 15.7017 20.0004 14.4619C20.5437 13.1776 20.8191 11.8142 20.8191 10.4096C20.8191 9.00496 20.5437 7.64155 20.0004 6.35724C19.4761 5.11757 18.7257 4.00448 17.7702 3.04893C16.8147 2.09341 15.7016 1.34306 14.4618 0.818671C13.1775 0.275436 11.8141 -7.87245e-07 10.4095 -9.10034e-07C9.00497 -1.03282e-06 7.64156 0.275435 6.35718 0.81867C5.11744 1.34299 4.00438 2.09334 3.04883 3.04893C2.09328 4.00447 1.34293 5.11757 0.818574 6.35724C0.275374 7.64158 -6.22175e-05 9.00496 -6.23403e-05 10.4096C-6.24631e-05 11.8142 0.275374 13.1776 0.818574 14.4619C1.34293 15.7017 2.09328 16.8147 3.04883 17.7703C4.00434 18.7258 5.11744 19.4762 6.35718 20.0005C7.64142 20.5437 9.0048 20.8192 10.4095 20.8192ZM10.4095 0.035033C11.8094 0.0350331 13.1682 0.309523 14.4482 0.850937C15.6838 1.37354 16.7931 2.12137 17.7454 3.0737C18.6978 4.02606 19.4456 5.13537 19.9682 6.37087C20.5096 7.65087 20.7841 9.00966 20.7841 10.4096C20.7841 11.8095 20.5096 13.1683 19.9682 14.4483C19.4456 15.6839 18.6977 16.7932 17.7454 17.7455C16.7931 18.6978 15.6838 19.4457 14.4482 19.9682C13.1683 20.5096 11.8095 20.7841 10.4095 20.7841C9.00953 20.7841 7.65074 20.5096 6.37081 19.9682C5.13527 19.4457 4.02596 18.6978 3.07363 17.7455C2.12127 16.7932 1.37347 15.6838 0.850909 14.4483C0.309496 13.1683 0.0350056 11.8095 0.0350057 10.4096C0.0350059 9.00969 0.309496 7.65087 0.85091 6.37087C1.37344 5.13537 2.12131 4.02602 3.07363 3.07366C4.02599 2.1213 5.13531 1.37347 6.37081 0.850901C7.65088 0.309523 9.0097 0.0350328 10.4095 0.035033ZM10.4095 19.3183C12.7891 19.3183 15.0263 18.3917 16.709 16.709C18.3916 15.0264 19.3182 12.7892 19.3182 10.4096C19.3182 8.02997 18.3916 5.79278 16.709 4.11014C15.0263 2.4275 12.7891 1.50085 10.4095 1.50085C8.02991 1.50085 5.79275 2.42753 4.11008 4.11017C2.42743 5.79281 1.50079 8.02997 1.50079 10.4096C1.50079 12.7892 2.42743 15.0264 4.11007 16.709C5.79272 18.3917 8.02991 19.3183 10.4095 19.3183ZM10.4095 1.53588C12.7798 1.53588 15.0082 2.45892 16.6842 4.13494C18.3602 5.81096 19.2832 8.03936 19.2832 10.4096C19.2832 12.7799 18.3602 15.0083 16.6842 16.6843C15.0082 18.3603 12.7798 19.2833 10.4095 19.2833C8.03923 19.2833 5.81086 18.3603 4.13484 16.6843C2.45882 15.0083 1.53579 12.7799 1.53579 10.4096C1.53579 8.03936 2.45882 5.811 4.13484 4.13498C5.81087 2.45892 8.03926 1.53588 10.4095 1.53588Z"
        fill="#0169FE"
      />
      <path
        d="M9.65913 13.278L9.65913 8.59454C9.65913 8.18009 9.99511 7.84412 10.4096 7.84412C10.824 7.84412 11.16 8.18009 11.16 8.59454L11.16 13.278C12.0866 13.5916 12.7555 14.4695 12.7555 15.5008C12.7555 16.7944 11.7031 17.8467 10.4096 17.8467C9.11604 17.8467 8.06369 16.7944 8.06369 15.5008C8.06365 14.4695 8.73248 13.5916 9.65913 13.278ZM10.4096 16.3458C10.8755 16.3458 11.2546 15.9668 11.2546 15.5008C11.2546 15.0348 10.8755 14.6557 10.4096 14.6557C9.94357 14.6557 9.5645 15.0348 9.5645 15.5008C9.5645 15.9668 9.94357 16.3458 10.4096 16.3458Z"
        fill="#0169FE"
      />
      <path
        d="M10.4095 17.8642C11.7127 17.8642 12.7729 16.8039 12.7729 15.5007C12.7729 14.491 12.1323 13.5942 11.1774 13.2654L11.1774 8.59451C11.1774 8.17106 10.8329 7.82657 10.4095 7.82657C9.98604 7.82657 9.64155 8.17106 9.64155 8.59451L9.64155 13.2654C8.68674 13.5943 8.04607 14.4909 8.04607 15.5008C8.04611 16.8039 9.10634 17.8642 10.4095 17.8642ZM10.4095 7.8616C10.8136 7.8616 11.1424 8.1904 11.1424 8.59451L11.1424 13.2905L11.1543 13.2945C12.1016 13.6151 12.7379 14.5018 12.7379 15.5008C12.7379 16.7846 11.6935 17.8292 10.4096 17.8292C9.12571 17.8292 8.08118 16.7847 8.08118 15.5008C8.08118 14.5018 8.71757 13.6152 9.66474 13.2945L9.67666 13.2905L9.67666 8.59451C9.67662 8.19039 10.0054 7.8616 10.4095 7.8616ZM10.4095 16.3633C10.8851 16.3633 11.2721 15.9764 11.2721 15.5007C11.2721 15.0251 10.8852 14.6382 10.4095 14.6382C9.93387 14.6382 9.54696 15.0251 9.54696 15.5007C9.54696 15.9764 9.93391 16.3633 10.4095 16.3633ZM10.4095 14.6732C10.8658 14.6732 11.2371 15.0445 11.2371 15.5007C11.2371 15.957 10.8658 16.3283 10.4095 16.3283C9.95325 16.3283 9.58199 15.957 9.58199 15.5007C9.58199 15.0445 9.95325 14.6732 10.4095 14.6732Z"
        fill="#0169FE"
      />
      <path
        d="M16.0174 7.7855C15.5875 7.7855 15.2389 7.43694 15.2389 7.00698C15.2389 6.57701 15.5875 6.22845 16.0174 6.22845C16.4474 6.22845 16.796 6.57701 16.796 7.00698C16.796 7.43694 16.4474 7.7855 16.0174 7.7855Z"
        fill="#0169FE"
      />
      <path
        d="M16.0174 7.80305C16.4564 7.80305 16.8135 7.44595 16.8135 7.00701C16.8135 6.56807 16.4564 6.21097 16.0174 6.21097C15.5785 6.21097 15.2214 6.56807 15.2214 7.00701C15.2214 7.44595 15.5785 7.80305 16.0174 7.80305ZM16.0174 6.24604C16.4371 6.24604 16.7784 6.58741 16.7784 7.00704C16.7784 7.42668 16.4371 7.76805 16.0174 7.76805C15.5978 7.76805 15.2564 7.42668 15.2564 7.00704C15.2564 6.58741 15.5978 6.24604 16.0174 6.24604Z"
        fill="#0169FE"
      />
      <path
        d="M4.80156 7.7855C4.37159 7.7855 4.02303 7.43694 4.02303 7.00698C4.02303 6.57701 4.37159 6.22845 4.80156 6.22845C5.23152 6.22845 5.58008 6.57701 5.58008 7.00698C5.58008 7.43694 5.23152 7.7855 4.80156 7.7855Z"
        fill="#0169FE"
      />
      <path
        d="M4.80156 7.80305C5.24046 7.80305 5.5976 7.44595 5.5976 7.00701C5.5976 6.56807 5.2405 6.21097 4.80156 6.21097C4.36262 6.21097 4.00552 6.56807 4.00552 7.00701C4.00552 7.44595 4.36265 7.80305 4.80156 7.80305ZM4.80156 6.24604C5.22119 6.24604 5.56256 6.58741 5.56256 7.00704C5.56256 7.42668 5.22119 7.76805 4.80156 7.76805C4.38192 7.76805 4.04055 7.42668 4.04055 7.00704C4.04055 6.58741 4.38192 6.24604 4.80156 6.24604Z"
        fill="#0169FE"
      />
      <path
        d="M7.25508 5.58841C6.82513 5.58841 6.47659 5.23987 6.47659 4.80992C6.47659 4.37997 6.82513 4.03143 7.25508 4.03143C7.68503 4.03143 8.03357 4.37997 8.03357 4.80992C8.03357 5.23987 7.68503 5.58841 7.25508 5.58841Z"
        fill="#0169FE"
      />
      <path
        d="M7.25505 5.60596C7.69395 5.60596 8.05109 5.24886 8.05109 4.80995C8.05109 4.37105 7.69399 4.01395 7.25505 4.01395C6.81611 4.01395 6.45904 4.37105 6.45904 4.80995C6.45904 5.24886 6.81614 5.60596 7.25505 5.60596ZM7.25505 4.04898C7.67468 4.04898 8.01605 4.39035 8.01605 4.80995C8.01605 5.22955 7.67468 5.57092 7.25505 5.57092C6.83545 5.57092 6.49408 5.22955 6.49408 4.80995C6.49408 4.39035 6.83545 4.04898 7.25505 4.04898Z"
        fill="#0169FE"
      />
      <path
        d="M13.564 5.58841C13.134 5.58841 12.7855 5.23987 12.7855 4.80992C12.7855 4.37997 13.134 4.03143 13.564 4.03143C13.9939 4.03143 14.3425 4.37997 14.3425 4.80992C14.3425 5.23987 13.9939 5.58841 13.564 5.58841Z"
        fill="#0169FE"
      />
      <path
        d="M13.564 5.60596C14.0029 5.60596 14.36 5.24886 14.36 4.80995C14.36 4.37105 14.0029 4.01395 13.564 4.01395C13.125 4.01395 12.768 4.37105 12.768 4.80995C12.768 5.24886 13.1251 5.60596 13.564 5.60596ZM13.564 4.04898C13.9836 4.04898 14.325 4.39035 14.325 4.80995C14.325 5.22955 13.9836 5.57092 13.564 5.57092C13.1444 5.57092 12.803 5.22955 12.803 4.80995C12.803 4.39035 13.1444 4.04898 13.564 4.04898Z"
        fill="#0169FE"
      />
      <path
        d="M10.3932 4.66349C9.96326 4.66349 9.61471 4.31493 9.61471 3.88497C9.61471 3.455 9.96326 3.10645 10.3932 3.10645C10.8232 3.10645 11.1718 3.455 11.1718 3.88497C11.1718 4.31493 10.8232 4.66349 10.3932 4.66349Z"
        fill="#0169FE"
      />
      <path
        d="M10.3932 4.68098C10.8322 4.68098 11.1893 4.32388 11.1893 3.88494C11.1893 3.446 10.8322 3.0889 10.3932 3.0889C9.95429 3.0889 9.59719 3.446 9.59719 3.88494C9.59719 4.32388 9.95429 4.68098 10.3932 4.68098ZM10.3932 3.12393C10.8129 3.12393 11.1542 3.4653 11.1542 3.88494C11.1542 4.30457 10.8129 4.64594 10.3932 4.64594C9.9736 4.64594 9.63222 4.30457 9.63222 3.88494C9.63223 3.4653 9.9736 3.12393 10.3932 3.12393Z"
        fill="#0169FE"
      />
    </svg>
  ),
  seats: (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.59948 9.97113L3.97108 13.5996L4.55903 14.1875L0 18.7465L3.95932 22.7058L8.51836 18.1467L9.10631 18.7347L12.7347 15.1063L7.59948 9.97113ZM3.95937 20.6667L2.03913 18.7465L5.57862 15.207L7.49886 17.1272L3.95937 20.6667ZM6.01021 13.5996L7.59948 12.0103L10.6956 15.1064L9.10627 16.6956L6.01021 13.5996Z"
        fill="#0169FE"
      />
      <path
        d="M22.7058 3.95932L18.7465 0L14.1875 4.55903L13.5995 3.97112L9.97108 7.59953L10.755 8.38345L9.45062 9.68784L13.0179 13.2552L14.3224 11.9508L15.1063 12.7347L18.7346 9.10627L18.1467 8.51831L22.7058 3.95932ZM13.0179 11.2161L11.4897 9.68784L11.7746 9.403L13.3028 10.9312L13.0179 11.2161ZM15.1063 10.6956L12.0102 7.59948L13.5995 6.01021L15.1475 7.55824L16.6956 9.10631L15.1063 10.6956ZM16.1671 6.53874L15.207 5.57862L18.7465 2.03909L20.6667 3.95932L17.1272 7.49881L16.1671 6.53874Z"
        fill="#0169FE"
      />
    </svg>
  ),
  zeroToOneHundred: (
    <svg
      width="21"
      height="23"
      viewBox="0 0 21 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9712 2.59463V1.79114H11.6177C12.1123 1.79114 12.5133 1.39015 12.5133 0.895593C12.5133 0.401032 12.1123 0 11.6177 0H8.53366C8.03905 0 7.63811 0.400988 7.63811 0.895549C7.63811 1.39011 8.0391 1.7911 8.53366 1.7911H9.18015V2.59458C4.04239 3.04932 0 7.37615 0 12.6301C0 18.1858 4.51996 22.7058 10.0757 22.7058C15.6315 22.7058 20.1515 18.1858 20.1515 12.6301C20.1514 7.37615 16.109 3.04932 10.9712 2.59463ZM10.9712 20.8661V19.9737C10.9712 19.4791 10.5703 19.0781 10.0757 19.0781C9.58109 19.0781 9.18015 19.4791 9.18015 19.9737V20.8661C5.32593 20.4499 2.2559 17.3798 1.8397 13.5257H2.73215C3.22675 13.5257 3.6277 13.1247 3.6277 12.6301C3.6277 12.1355 3.22671 11.7346 2.73215 11.7346H1.83966C2.25586 7.88033 5.32597 4.8103 9.18011 4.39406V5.28651C9.18011 5.78111 9.58109 6.18205 10.0757 6.18205C10.5703 6.18205 10.9712 5.78107 10.9712 5.28651V4.39397C14.8254 4.81017 17.8955 7.88029 18.3117 11.7345H17.4192C16.9246 11.7345 16.5237 12.1355 16.5237 12.63C16.5237 13.1246 16.9246 13.5256 17.4192 13.5256H18.3117C17.8955 17.3798 14.8255 20.4499 10.9712 20.8661Z"
        fill="#0169FE"
      />
      <path
        d="M12.792 8.64728L10.2119 11.2274C10.167 11.2231 10.1217 11.2207 10.0757 11.2207C9.29731 11.2207 8.66638 11.8517 8.66638 12.63C8.66638 13.4084 9.29736 14.0393 10.0757 14.0393C10.854 14.0393 11.485 13.4083 11.485 12.63C11.485 12.584 11.4826 12.5387 11.4783 12.4939L14.0583 9.91375C14.4081 9.56407 14.4081 8.997 14.0583 8.64724C13.7088 8.29751 13.1417 8.29751 12.792 8.64728Z"
        fill="#0169FE"
      />
    </svg>
  ),
};

const cards: Card[] = [
  {
    icon: icons.engine,
    label: 'Engine',
    value: '2.9',
  },
  {
    icon: icons.power,
    label: 'Power',
    value: '450',
  },
  {
    icon: icons.speed,
    label: 'Max speed',
    value: '290',
  },
  {
    icon: icons.seats,
    label: 'Seats',
    value: '5',
  },
  {
    icon: icons.zeroToOneHundred,
    label: '0-100 km/h',
    value: '3.9',
  },
];

export { cards };
