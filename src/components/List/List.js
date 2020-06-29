import React, {PureComponent} from "react";
import {connect} from "react-redux";
import orderBy from "lodash/orderBy";
import {Spinner} from "components/Spinner/Spinner";
import {getItems} from "store/actions/items";
import Item from "components/Item/Item";

export class List extends PureComponent {
    componentDidMount() {
        this.props.getItems();
    }

    render() {
        const {items} = this.props;

        return <div className="list">
            <h1 className="title list__title">Все пиццы</h1>
            <div className="list__items">
                {
                    !items ?
                        <Spinner/> :
                        items.map(item => <Item item={item} key={`pizza-${item.id}`}/>)}
            </div>
        </div>;
    }
}

const sortBy = (items, sort) => orderBy(items, sort.title, sort.isReversed ? "asc" : "desc");

const mapStateToProps = state => ({
    items: sortBy(state.items.items, state.sort.sort),
});

export default connect(mapStateToProps, {getItems})(List);
