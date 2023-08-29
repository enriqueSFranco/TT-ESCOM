interface IconProps {
  fill?: `#${string}`
}

export const IconBookMar: React.FC<IconProps> = ({ fill = '#9CA3AF' }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='22'
      height='22'
      fill='none'
      viewBox='0 0 24 24'
    >
      <path
        fill={fill}
        fillRule='evenodd'
        d='M9.788 3h4.424c.819 0 1.494 0 2.044.046.571.047 1.096.149 1.588.404a4 4 0 011.706 1.706c.255.492.357 1.017.404 1.588.046.55.046 1.225.046 2.044v8.835c0 .962 0 1.752-.053 2.353-.05.566-.16 1.233-.599 1.716a2.5 2.5 0 01-2.13.8c-.649-.074-1.17-.504-1.58-.897-.436-.417-.956-1.011-1.59-1.736l-.377-.431c-.435-.497-.719-.82-.954-1.046-.228-.219-.336-.271-.39-.29a1 1 0 00-.653 0c-.055.019-.163.071-.39.29-.236.226-.52.55-.955 1.046l-.377.431c-.634.725-1.154 1.32-1.59 1.736-.41.393-.931.823-1.58.897a2.5 2.5 0 01-2.13-.8c-.44-.483-.55-1.15-.6-1.716C4 19.376 4 18.586 4 17.623V8.788c0-.819 0-1.494.046-2.044.047-.571.149-1.096.404-1.588A4 4 0 016.156 3.45c.492-.255 1.017-.357 1.588-.404C8.294 3 8.969 3 9.788 3zM7.909 5.039c-.445.037-.672.104-.83.186a2 2 0 00-.854.853c-.082.159-.15.386-.186.831C6 7.367 6 7.96 6 8.83v8.743c0 1.025 0 1.726.045 2.228.036.413.094.543.1.558a.5.5 0 00.391.147c.014-.008.143-.067.443-.354.363-.35.826-.876 1.5-1.648l.373-.425c.399-.456.74-.846 1.046-1.14.32-.307.675-.583 1.123-.738a3 3 0 011.958 0c.448.155.802.43 1.123.738.306.294.647.684 1.046 1.14l.372.425c.675.772 1.138 1.299 1.501 1.648.3.287.429.346.443.354a.5.5 0 00.392-.147c.005-.015.063-.145.099-.558.044-.502.045-1.203.045-2.228V8.83c0-.871 0-1.463-.039-1.92-.037-.446-.104-.673-.186-.832a2 2 0 00-.853-.853c-.159-.082-.386-.15-.832-.186C15.633 5 15.041 5 14.17 5H9.83c-.871 0-1.463 0-1.92.039z'
        clipRule='evenodd'
      ></path>
    </svg>
  )
}

export function IconClose () {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='22'
      height='22'
      fill='none'
      viewBox='0 0 24 24'
    >
      <g>
        <g fill='#9CA3AF' fillRule='evenodd' clipRule='evenodd'>
          <path d='M6.22 6.215a.75.75 0 011.06 0L17.786 16.72a.75.75 0 01-1.06 1.06L6.22 7.275a.75.75 0 010-1.06z'></path>
          <path d='M17.785 6.215a.75.75 0 010 1.06L7.28 17.78a.75.75 0 11-1.06-1.06L16.725 6.214a.75.75 0 011.06 0z'></path>
        </g>
      </g>
    </svg>
  );
}

export function IconMenu () {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='22'
      height='22'
      fill='none'
      viewBox='0 0 24 24'
    >
      <path
        stroke='#9CA3AF'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M4 6h16M4 12h16M4 18h16'
      ></path>
    </svg>
  );
}

export function IconArrowLeft () {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      fill='none'
      viewBox='0 0 24 24'
    >
      <path
        stroke='#323232'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M13 9l-2.7 2.7v0a.425.425 0 000 .6v0L13 15'
      ></path>
    </svg>
  )
}

export function IconSearch () {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      fill='none'
      viewBox='0 0 24 24'
    >
      <path
        fill='#9CA3AF'
        fillRule='evenodd'
        d='M4 11a7 7 0 1114 0 7 7 0 01-14 0zm7-9a9 9 0 105.618 16.032l3.675 3.675a1 1 0 001.414-1.414l-3.675-3.675A9 9 0 0011 2z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
}

export function IconLocation () {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      fill='none'
      viewBox='0 0 24 24'
    >
      <path
        stroke='#9CA3AF'
        strokeWidth='1.5'
        d='M12 13.43a3.12 3.12 0 100-6.24 3.12 3.12 0 000 6.24z'
      ></path>
      <path
        stroke='#9CA3AF'
        strokeWidth='1.5'
        d='M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 01-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05z'
      ></path>
    </svg>
  )
}

export function IconInstagram () {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='50'
      height='50'
      fill='none'
      viewBox='0 0 32 32'
    >
      <rect
        width='28'
        height='28'
        x='2'
        y='2'
        fill='url(#paint0_radial_87_7153)'
        rx='6'
      ></rect>
      <rect
        width='28'
        height='28'
        x='2'
        y='2'
        fill='url(#paint1_radial_87_7153)'
        rx='6'
      ></rect>
      <rect
        width='28'
        height='28'
        x='2'
        y='2'
        fill='url(#paint2_radial_87_7153)'
        rx='6'
      ></rect>
      <path fill='#fff' d='M23 10.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'></path>
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M16 21a5 5 0 100-10 5 5 0 000 10zm0-2a3 3 0 100-6 3 3 0 000 6z'
        clipRule='evenodd'
      ></path>
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M6 15.6c0-3.36 0-5.04.654-6.324a6 6 0 012.622-2.622C10.56 6 12.24 6 15.6 6h.8c3.36 0 5.04 0 6.324.654a6 6 0 012.622 2.622C26 10.56 26 12.24 26 15.6v.8c0 3.36 0 5.04-.654 6.324a6 6 0 01-2.622 2.622C21.44 26 19.76 26 16.4 26h-.8c-3.36 0-5.04 0-6.324-.654a6 6 0 01-2.622-2.622C6 21.44 6 19.76 6 16.4v-.8zM15.6 8h.8c1.713 0 2.878.002 3.778.075.877.072 1.325.202 1.638.361a4 4 0 011.748 1.748c.16.313.29.761.36 1.638.074.9.076 2.065.076 3.778v.8c0 1.713-.002 2.878-.075 3.778-.072.877-.202 1.325-.361 1.638a4 4 0 01-1.748 1.748c-.313.16-.761.29-1.638.36-.9.074-2.065.076-3.778.076h-.8c-1.713 0-2.878-.002-3.778-.075-.877-.072-1.325-.202-1.638-.361a4 4 0 01-1.748-1.748c-.16-.313-.29-.761-.36-1.638C8.001 19.278 8 18.113 8 16.4v-.8c0-1.713.002-2.878.075-3.778.072-.877.202-1.325.361-1.638a4 4 0 011.748-1.748c.313-.16.761-.29 1.638-.36.9-.074 2.065-.076 3.778-.076z'
        clipRule='evenodd'
      ></path>
      <defs>
        <radialGradient
          id='paint0_radial_87_7153'
          cx='0'
          cy='0'
          r='1'
          gradientTransform='rotate(-55.376 27.916 .066) scale(25.5196)'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#B13589'></stop>
          <stop offset='0.793' stopColor='#C62F94'></stop>
          <stop offset='1' stopColor='#8A3AC8'></stop>
        </radialGradient>
        <radialGradient
          id='paint1_radial_87_7153'
          cx='0'
          cy='0'
          r='1'
          gradientTransform='rotate(-65.136 29.766 6.89) scale(22.5942)'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#E0E8B7'></stop>
          <stop offset='0.445' stopColor='#FB8A2E'></stop>
          <stop offset='0.715' stopColor='#E2425C'></stop>
          <stop offset='1' stopColor='#E2425C' stopOpacity='0'></stop>
        </radialGradient>
        <radialGradient
          id='paint2_radial_87_7153'
          cx='0'
          cy='0'
          r='1'
          gradientTransform='matrix(38.50003 -5.5 1.1764 8.23476 .5 3)'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0.157' stopColor='#406ADC'></stop>
          <stop offset='0.468' stopColor='#6A45BE'></stop>
          <stop offset='1' stopColor='#6A45BE' stopOpacity='0'></stop>
        </radialGradient>
      </defs>
    </svg>
  );
}