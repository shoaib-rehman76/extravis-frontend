import Svg from '../Svg';
const Icon = (props) => {
  return (
    <Svg {...props} width={props.width ?? "16"} height={props.height ?? "16"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3307 6.66732C13.3307 9.99598 9.63806 13.4627 8.39806 14.5333C8.28255 14.6202 8.14193 14.6672 7.9974 14.6672C7.85286 14.6672 7.71225 14.6202 7.59673 14.5333C6.35673 13.4627 2.66406 9.99598 2.66406 6.66732C2.66406 5.25283 3.22597 3.89628 4.22616 2.89608C5.22635 1.89589 6.58291 1.33398 7.9974 1.33398C9.41188 1.33398 10.7684 1.89589 11.7686 2.89608C12.7688 3.89628 13.3307 5.25283 13.3307 6.66732Z" stroke={props.fill ?? "#C27AFF"} stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M8 8.66602C9.10457 8.66602 10 7.77059 10 6.66602C10 5.56145 9.10457 4.66602 8 4.66602C6.89543 4.66602 6 5.56145 6 6.66602C6 7.77059 6.89543 8.66602 8 8.66602Z" stroke={props.fill ?? "#C27AFF"} stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  );
};

export default Icon;
