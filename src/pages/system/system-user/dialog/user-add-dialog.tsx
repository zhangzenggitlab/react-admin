import { BaseModal } from '@/components'

export class UserAddDialog extends BaseModal {
  static defaultProps = {
    color: 'blue',
  }

  state = {
    age: 1,
  }
  // constructor(props,state) {
  //   super(props, state)
  //   this.state = state
  //   this.props = props
  // }

  render() {

    return (
      <button
        onClick={() => {
          console.log(this.state.age)
          this.setState({
            age: ++this.state.age,
          })
        }}
      >
        {this.state.age}
      </button>
    )
  }
}


export const userAddDialog = new UserAddDialog()
