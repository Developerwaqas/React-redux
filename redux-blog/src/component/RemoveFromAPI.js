import {Component} from "react"
class RemoveFromAPI extends Component {

    state = {
        users: []

    }

    componentDidMount() {
        axios.get(`https://reqres.in/api/users`)
            .then(result => {
                const users = result.data;
                this.setState({ users });
            })
    }

    deleteContact () {
        axios.delete(`https://reqres.in/api/users/${id}`);
        .then(result => {
            const users = result.data;
            this.setState({ users });
        })

    }

    render() {

        const {users} = this.state

        return (
            <div>
                <ul>
                    { this.state.users.map(user => <li>{user.name}</li>)}
                </ul>

                <button
                    onClick={deleteContact}
                   >
                    Remove
                </button>

            </div>
        );
    }
}

RemoveFromAPI.propTypes = {};

export default RemoveFromAPI;