import React from 'react';


class ProjectList extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      this.props.projects.map((item) => (
        <div>
          <img src={item.img} alt='' />
        </div>
      ))
    );
  }
}

export default ProjectList;
