import Svg from '../Svg';
const Icon = (props) => {
  return (
    <Svg {...props} width={props.width ?? "40"} height={props.height ?? "40"} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 36.6663V6.66634C10 5.78229 10.3512 4.93444 10.9763 4.30932C11.6014 3.6842 12.4493 3.33301 13.3333 3.33301H26.6667C27.5507 3.33301 28.3986 3.6842 29.0237 4.30932C29.6488 4.93444 30 5.78229 30 6.66634V36.6663H10Z" stroke={props.fill ?? "#00D492"} stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M10.0026 20H6.66927C5.78522 20 4.93737 20.3512 4.31225 20.9763C3.68713 21.6014 3.33594 22.4493 3.33594 23.3333V33.3333C3.33594 34.2174 3.68713 35.0652 4.31225 35.6904C4.93737 36.3155 5.78522 36.6667 6.66927 36.6667H10.0026" stroke={props.fill ?? "#00D492"} stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M30 15H33.3333C34.2174 15 35.0652 15.3512 35.6904 15.9763C36.3155 16.6014 36.6667 17.4493 36.6667 18.3333V33.3333C36.6667 34.2174 36.3155 35.0652 35.6904 35.6904C35.0652 36.3155 34.2174 36.6667 33.3333 36.6667H30" stroke={props.fill ?? "#00D492"} stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M16.6641 10H23.3307" stroke={props.fill ?? "#00D492"} stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M16.6641 16.667H23.3307" stroke={props.fill ?? "#00D492"} stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M16.6641 23.333H23.3307" stroke={props.fill ?? "#00D492"} stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M16.6641 30H23.3307" stroke={props.fill ?? "#00D492"} stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  );
};

export default Icon;
