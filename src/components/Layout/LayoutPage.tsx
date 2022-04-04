import { Layout, Menu } from "antd"
import Sider from "antd/lib/layout/Sider"
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Content, Footer, Header } from "antd/lib/layout/layout";
import RegisterForm from "../../modules/RegisterForm";

const LayoutPage = () => {
  return (
 <Layout hasSider={true} style={{ height:'100vh'}}>
      <Sider trigger={null} collapsible width={250} >
          <div style={{ margin:'10px', padding : '20px', backgroundColor:"red"}} ></div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout hasSider={false}>
          <Header >

          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              backgroundColor:"grey"
            }}
          >
        
          </Content>
          <Footer>Footer</Footer>
        </Layout>
 </Layout>
  )
}

export default LayoutPage