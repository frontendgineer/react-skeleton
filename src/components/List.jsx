var React = require('react');
var Listitem = require('./Listitem.jsx');

var ingredients = [{"id":1,"text":"ham"}, {"id":2,"text":"eggs"}, {"id":3, "text": "potato"}];

var List = React.createClass({
    render: function() {
        var listItems = ingredients.map(function(item) {
            return <Listitem key={item.id} ingredient={item.text} />
        });

        return (
            <ul>
                {listItems}
            </ul>
        )

    }
});

module.exports = List;
