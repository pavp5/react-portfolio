import React from 'react';

class Toolbar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className='toolbar'>
                {this.props.filters.map((item) => (
                    <button
                        onClick={this.props.onSelectFilter}
                        className={item == this.props.selected ? 'active' : ''}
                    >
                        {item}
                    </button>
                ))}
            </div>
        );
    }

}

export default Toolbar;
