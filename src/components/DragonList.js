import React from 'react';
import DragonMember from './DragonMember';
import { connect } from 'react-redux';
import { addMember, updateNewMember } from '../actions/dragonListActions';

class DragonList extends React.Component {
  // state = {
  //   newMember: '',
  //   members: [
  //     { name: 'Jojo Zhang', dragonStatus: true },
  //     { name: 'Brandon Harris', dragonStatus: false }
  //   ]
  // };

  // handleChanges = e => {
  //   this.setState({ ...this.state, newMember: e.target.value });
  // };

  // handleClick = ()=> {
  //   this.setState({
  //     ...this.state,
  //     members: [...this.members, {name: newMember, dragonStatus: true}]
  //   })
  // }

  handleClick = () => {
    const newMember = { name: this.props.newMember, dragonStatus: true }
    this.props.addMember(newMember);
  }

  render() {
    return (
      <div>
        <div className="friends-list">
          {this.props.state.members.map((member, index) => (
            <DragonMember key={index} member={member}/>
          ))}
        </div>
        <input
          type="text"
          value={this.props.newMember}
          onChange={() => this.props.updateNewMember(e.target.value)}
          placeholder="Add new member"
        />
        <button onClick={this.handleClick}>Add member</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    members: state.dragonList.member,
    newMember: state.dragonList.newMember
  }
}

export default connect(mapStateToProps, {updateNewMember, addMember})(DragonList);
