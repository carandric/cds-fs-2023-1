import { Menu } from "../Menu"
import { Topbar } from "../Topbar"
import { PageContainer, PageTitleContainer } from "./styles"

export const Page = (props) => {

  return(
    <PageContainer>
      <Topbar />
      {
        props.title && (
          <PageTitleContainer>
            <h1>{props.title}</h1>
          </PageTitleContainer>
        )
      }
      <div>
        {props.children}
      </div>
      <Menu />
    </PageContainer>
  )
}
