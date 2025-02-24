import './App.css';
import { Form, Input, Select, DatePicker, Checkbox, Button } from 'antd'

function App() {
  
  
  return (
    <div className="App">
       <header className="App-header">
       <h1 style={{
        textAlign: 'center'
       }
      }
       >Simple Registration Form </h1>
          <Form 
          autoComplete="off"
          labelCol={{ span: 7}} 
          wrapperCol={{ span: 14 }}>
            <Form.Item name="fullname" label="Full Name" rules={[
              {
                required: true,
                message: 'Please enter your name',
              },
              {
                whitespace: true,
                message: 'This field should not be empty',
              },
              {
                min: 3,
                message: 'Name should be more than 3 Characters',
              },
            ]}
            hasFeedback
            >
              <Input placeholder="Enter Name"></Input>
            </Form.Item>

            <Form.Item 
            name="email" 
            label="Email" 
            rules={[
              {
                required: true,
                message: 'Please enter your email',
              },
              {
                type: "email",
                message: "Please enter a valid email",
              },
            ]}
            hasFeedback>
              <Input placeholder="Enter Email"></Input>
            </Form.Item>

            <Form.Item 
            name="password" 
            label="Password"
            rules={[
              {
                required: true,
                message: "Please Enter Your Password"
              },
            ]}
            hasFeedback>
              <Input.Password placeholder="Enter Password" />
            </Form.Item>

            <Form.Item 
            name="confirmPassword" 
            label="Confirm Password"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Please Confirm Your Password"
              },
              ({getFieldValue}) => ({
                validator(_,value){
                  if(!value || getFieldValue('password') === value){
                    return Promise.resolve()
                  }
                  return Promise.reject(
                    'Passwords Dont Match'
                  );
                },
              }),
            ]}
            >
              <Input.Password placeholder="Confirm Password" />
            </Form.Item>

            <Form.Item name="gender" label="Gender" requiredMark="optional">
              <Select placeholder="Select Gender">
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="female">Female</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item name="dob" label="Date of Birth">
              <DatePicker picker="date" placeholder="Choose Date of Birth" />
            </Form.Item>

            <Form.Item name="website" label="Portfolio">
              <Input placeholder="Enter Portfolio URL" />
            </Form.Item>

            <Form.Item name="agreement" wrapperCol={{span: 24}}>
              <Checkbox> 
                {" "}
                Agree to our <a href="#">Terms and Conditions</a>
                </Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{span: 24}}>
              <Button type="primary" htmlType="submit" block> Register</Button>
            </Form.Item>

          </Form>
       </header>
    </div>
  );
}

export default App;
