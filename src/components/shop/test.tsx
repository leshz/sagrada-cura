import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={1}
    width={8000}
    height={160}
    viewBox="0 0 3000 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="23" y="15" rx="0" ry="0" width="115" height="106" /> 
    <rect x="188" y="17" rx="0" ry="0" width="137" height="96" /> 
    <rect x="360" y="16" rx="0" ry="0" width="81" height="100" />
  </ContentLoader>
)

export default MyLoader