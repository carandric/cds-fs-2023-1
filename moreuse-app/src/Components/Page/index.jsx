import { Menu } from "../Menu"
import { Topbar } from "../Topbar"
import { PageContainer } from "./styles"

export const Page = (props) => {

  return(
    <PageContainer>
      <Topbar />
      <div>
        {props.children}
      </div>
      <Menu />
    </PageContainer>
  )
}
