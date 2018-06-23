'use strict';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'All',
            project: this.props.projects
        }
    }

    getProject(filter) {
        const copyProjects = this.props.projects.slice();
        let filterProject = copyProjects.filter(el => el.category === filter);
        if (!filterProject.length) {
            filterProject = copyProjects;
        }
        return filterProject;
    }

    handle(filter) {
        this.setState({
            active: filter,
            project: this.getProject(filter)
        })
    }

    render() {
        return (
            <div>
                <Toolbar
                    filters={this.props.filters}
                    selected={this.state.active}
                    onSelectFilter={(filter) => this.handle(filter)}/>
                <Portfolio projects={this.state.project}/>
            </div>
        );
    }
}
