import styled from "styled-components"

const PageLoading = styled.section`
  width:100%;
  height:100%;
  position:fixed;
  display: flex;
  justify-content:center;
  align-items:center;
`;

const CustomLoader = styled.div`
  width:50px;
  height:50px;
  border-radius:50%;
  border:8px solid;
  border-color:#766DF4 #0000;
  animation:s1 1s infinite;

  @keyframes s1 {to{transform: rotate(.5turn)}}
`;
export const LazyLoading = () => {
  return (
    <PageLoading>
      <CustomLoader />
    </PageLoading>
  )

}
