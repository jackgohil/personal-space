import { Button, Image, Layout, Menu } from 'antd'
import { Header, Content, Footer } from 'antd/lib/layout/layout'
import Sider from 'antd/lib/layout/Sider'
import logo from '../../../assests/img/j.png'
import React from 'react'
import RegisterForm from '../../../modules/RegisterForm'
const PublicLayout = () => {
  return (
    <Layout hasSider={false} style={{ height:'100vh'}}>
     
       
          <Header style={{ color: 'ActiveBorder' , display:'flex' ,height:'10vh' , alignItems:'center', justifyContent:"space-between"}} >
 
<div >
    <Image width={200} height={100} src={"https://o.remove.bg/downloads/d7b1d276-59c6-4003-bccf-576daedcdf2d/jack-removebg-preview.png"} alt='user'></Image>
</div><Button loading={false}>Next</Button>
          </Header>
          <Content
            style={{
              margin: '10px 10px',
              padding: 30,
            display:'flex',
            justifyContent:"center",
            alignItems:"center",
          
              backgroundColor:"#400080",backgroundImage:`url(https://images.unsplash.com/photo-1549558549-415fe4c37b60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2019&q=80)`
            }}
          >
           <div style={{   width:'30%', height:"90%", padding: '50px',backgroundImage: "linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)" , borderRadius:"50px", boxShadow:"2px 5px 43px 1px white", borderInline:'18px groove black' }}>  <RegisterForm/></div>
          </Content>
          <Footer>Footer</Footer>
        </Layout>

  )
}

export default PublicLayout