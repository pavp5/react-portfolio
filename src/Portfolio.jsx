import React from 'react'
import Toolbar from './Toolbar'
import ProjectList from './ProjectList'

class Portfolio extends React.Component {

    filters = ['All', 'Websites', 'Flayers', 'Business Cards'];
    selected = 'All';

    constructor(props) {
        super(props);
        this.state = {
            projects: this.props.projectList,
        };
    }

    onSelectedfilter = (e) => {
        const buttons = document.querySelectorAll('button');
        buttons.forEach((item) => item.classList.remove('active'));

        e.target.classList.add('active');

        this.selected = e.target.textContent;

        if (this.selected == 'All') {
            this.setState({ projects: this.props.projectList });
        } else {
            this.setState({ projects: this.props.projectList.filter(item => item.category == this.selected) });
        }
    }

    render() {
        return (
            <div className='container'>
                <Toolbar
                    filters={this.filters}
                    selected={this.selected}
                    onSelectFilter={this.onSelectedfilter}
                />

                <div className='gallery'>
                    <ProjectList
                        projects={this.state.projects}
                    />
                </div>
            </div>
        );
    }


}

export default Portfolio;
