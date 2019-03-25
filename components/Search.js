Search = React.createClass({

    getInitialState() {
        return {
            searchingText: ''
        };
    },

    handleChange: function (event) {
        var searchingText = event.target.value;
        this.setState({ searchingText: searchingText });

        if (searchingText.length > 2) {
            this.props.onSearch(searchingText);
        } else {
            return;
        }
    },

    handleKeyUp: function (event) {
        if ((event.keyCode === 13) && (this.state.searchingText.length > 2)) {
            this.props.onSearch(this.state.searchingText);
        } else {
            return;
        }
    },

    render: function () {
        var styles = {
            fontSize: '0.7em',
            width: '90%',
            maxWidth: '500px'
        };

        return <input
            type='text'
            onChange={this.handleChange}
            onKeyUp={this.handleKeyUp}
            placeholder='Tutaj wpisz wyszukiwaną frazę'
            style={styles}
            value={this.state.searchTerm}
        />
    }
});