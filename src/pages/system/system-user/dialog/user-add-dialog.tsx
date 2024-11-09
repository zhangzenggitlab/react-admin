import { BaseModal, ConfigProvider, Modal } from '@/components'
import React from 'react'
import { usePopup } from '@/lib/hooks'

// export class UserAddDialog extends BaseModal {
//
//   constructor(props) {
//     super(props)
//   }
//
//   redDom(){
//
//     return <>111</>
//   }
//
//   render() {
//     // const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form
//     console.log( this.props)
//     return (
//       <Form onClick={() => {
//       }}>
//         <Form.Item name={'age'} label={'年龄'}>
//           <Input />
//         </Form.Item>
//
//       </Form>
//     )
//   }
// }
//
//
// export const userAddDialog = new UserAddDialog()

export class UserAddDialog extends BaseModal {
  form: any = null

  constructor() {
    super({})

    this.state = {
      age: 1,
    }
  }

  init() {
    // this.form = Form.useForm()
  }

  open() {
    let self = this
    usePopup().open({
      children:
        <ConfigProvider> <Modal open={true} onOk={() => {
        }}>{this.render()}</Modal></ConfigProvider>,
    })
  }

  render() {

    return <button onClick={() => {

      this.setState({
        age: 3,
      })
    }}>{this.state.age}</button>
  }
}

export const userAddDialog = new UserAddDialog()