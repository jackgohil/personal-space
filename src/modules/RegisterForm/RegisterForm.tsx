import React,{ useState} from 'react'
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';
const RegisterForm = () => {



  return (
    <Form
    labelCol={{ span: 4 }}
    wrapperCol={{ span: 14 }}
    layout="horizontal"
    initialValues={{   }}
   
    size={"small"}
  >

    <Form.Item label="Email" rules={[
     { type:'string',
     required:true, message:'Please Enter your Enter'
    }
    ]}>
      <Input type={'email'} placeholder='Enter Your Email' />
    </Form.Item>
   

    <Form.Item >
      <button type="submit" >
        Submit
      </button>
    </Form.Item>
  </Form>
  )
}

export default RegisterForm