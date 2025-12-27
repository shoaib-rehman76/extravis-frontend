import Svg from '../Svg';
const Icon = (props) => {
  return (
    <Svg {...props} width={props.width ?? "24"} height={props.height ?? "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 7.09766L13.009 12.8247C12.7039 13.0019 12.3573 13.0952 12.0045 13.0952C11.6517 13.0952 11.3051 13.0019 11 12.8247L2 7.09766" stroke={props.fill ?? "#C27AFF"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M20 4.09766H4C2.89543 4.09766 2 4.99309 2 6.09766V18.0977C2 19.2022 2.89543 20.0977 4 20.0977H20C21.1046 20.0977 22 19.2022 22 18.0977V6.09766C22 4.99309 21.1046 4.09766 20 4.09766Z" stroke={props.fill ?? "#C27AFF"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </Svg >


  );
};

export default Icon;
